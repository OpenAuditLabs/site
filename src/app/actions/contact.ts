"use server";

import { z } from "zod";


export type ContactActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<
    "firstName" | "lastName" | "email" | "phone" | "message",
    string
  >>;
};

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => v === undefined || v === "" || v.length >= 7, {
      message: "Please enter a valid phone number",
    }),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export async function sendContactForm(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const payload = {
    firstName: formData.get("firstName")?.toString() ?? "",
    lastName: formData.get("lastName")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
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
        phone: flat.fieldErrors.phone?.[0],
        message: flat.fieldErrors.message?.[0],
      },
    };
  }

  await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `New contact form submission:\n\`\`\`\n${JSON.stringify(parsed.data, null, 2)}\n\`\`\``,
    }),
  });

  return {
    ok: true,
    message: "Thanks for reaching out — we\'ll get back to you soon.",
  };
}