"use server";

import { col } from "motion/react-client";
import { z } from "zod";


export type ContactActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<
  "firstName" | "lastName" | "email" | "company" | "projectDetails",
    string
  >>;
};

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z
    .string()
    .trim()
    .optional()
    .refine((v) => v === undefined || v === "" || v.length >= 2, {
      message: "Company name must be at least 2 characters",
    }),
  projectDetails: z
    .string()
    .trim()
    .min(10, "Project details must be at least 10 characters"),
});

export async function sendContactForm(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const payload = {
    firstName: formData.get("firstName")?.toString() ?? "",
    lastName: formData.get("lastName")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
  company: formData.get("company")?.toString() ?? "",
  projectDetails: formData.get("projectDetails")?.toString() ?? "",
  };

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      ok: false,
      message:
        flat.formErrors.join(" ") || "Please fix the errors and try again.",
      fieldErrors: {
        firstName: flat.fieldErrors.firstName?.[0],
        lastName: flat.fieldErrors.lastName?.[0],
        email: flat.fieldErrors.email?.[0],
  company: flat.fieldErrors.company?.[0],
  projectDetails: flat.fieldErrors.projectDetails?.[0],
      },
    };
  }

  const name = `${parsed.data.firstName} ${parsed.data.lastName}`.trim();
  const email = parsed.data.email;
  const company = parsed.data.company?.trim() || "—";
  const projectDetails = parsed.data.projectDetails.trim();

  const truncate = (s: string, max: number) =>
    s.length > max ? `${s.slice(0, max - 1)}…` : s;

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not set in environment");
    return {
      ok: false,
      message: "We couldn't send your message right now. Please try again later.",
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  let discordError: string | undefined;
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: "New Contact Form Submission",
            color: 0x4f46e5, // Indigo-600
            timestamp: (() => {
              const now = new Date();
              // Get UTC time, then add 6 hours
              const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
              const plus6 = new Date(utcMs + 6 * 60 * 60 * 1000);
              return plus6.toISOString();
            })(),
            fields: [
              { name: "Name", value: name || "—", inline: true },
              { name: "Email", value: email || "—", inline: true },
              { name: "Company Name", value: company, inline: false },
              { name: "Project Details", value: truncate(projectDetails, 1024), inline: false },
            ],
          },
        ],
        allowed_mentions: { parse: [] },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) {
      let bodyText = "";
      try {
        bodyText = await res.text();
      } catch {}
      discordError = `Discord webhook failed: status ${res.status} ${res.statusText}. Body: ${bodyText}`;
    }
  } catch (err: any) {
    clearTimeout(timeout);
    if (err.name === "AbortError") {
      discordError = "Discord webhook request timed out (5s).";
    } else {
      discordError = `Discord webhook error: ${err?.message || String(err)}`;
    }
  }
  if (discordError) {
    return {
      ok: false,
      message: `Your message was received, but notification failed: ${discordError}`,
    };
  }

  return {
    ok: true,
    message: "Thanks for reaching out — we\'ll get back to you soon.",
  };
}