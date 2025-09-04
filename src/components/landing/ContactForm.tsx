"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Keep console.log to show what user has given input
    // console.log("Contact form submitted:", data);
    // Here you could call an API or show a success state. We'll reset the form for now.
    reset();
  };

  return (
    <section aria-labelledby="contact-heading" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 min-h-[500px] lg:min-h-[600px]">
        {/* Left Column - Contact Information with Image Background */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl lg:rounded-r-none">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/image/contactDesign.png"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            {/* Clean gradient overlay */}
            <div className="absolute inset-0 bg-primary/85"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-start p-6 sm:p-8 lg:p-10 text-primary-foreground min-h-[500px]">
            {/* Header Section */}
            <div className="mb-8 lg:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-primary-foreground/90 text-sm lg:text-base">
                Say something to start a live chat!
              </p>
            </div>

            {/* Contact Details (semantic) */}
            <address className="not-italic space-y-6 mb-8 lg:mb-12">
              <div>
                <a
                  href="tel:+10123456789"
                  className="flex items-center gap-4 text-sm lg:text-base underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <Phone className="w-4 h-4 text-primary-foreground" />
                  <span>+1012 3456 789</span>
                </a>
              </div>

              <div>
                <a
                  href="mailto:demo@gmail.com"
                  className="flex items-center gap-4 text-sm lg:text-base underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <Mail className="w-4 h-4 text-primary-foreground" />
                  <span>demo@gmail.com</span>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 text-primary-foreground mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm lg:text-base">
                  <p>132 Dartmouth Street Boston,</p>
                  <p>Massachusetts 02156 United States</p>
                </div>
              </div>
            </address>

            {/* Social Links */}
            <div className="mt-auto">
              <div className="flex gap-3">
                <button
                  type="button"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter aria-hidden="true" className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin aria-hidden="true" className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github aria-hidden="true" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form Placeholder */}
        <div className="lg:col-span-3 bg-background border border-border lg:border-l-0 rounded-2xl lg:rounded-l-none p-6 sm:p-8 lg:p-12 flex items-center">
          <div className="w-full max-w-xl mx-auto space-y-8">
            {/* Form Header */}
            <div className="space-y-3 text-center lg:text-left">
              <h2
                id="contact-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground"
              >
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-sm lg:text-base">
                Ready to start your project? Send us a message and we&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Form - with Zod validation and react-hook-form */}
            <form
              className="w-full"
              onSubmit={handleSubmit(onSubmit)}
              aria-label="Contact form"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    id="firstName"
                    {...register("firstName")}
                    type="text"
                    placeholder=" "
                    aria-labelledby="label-firstName"
                    autoComplete="given-name"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <label
                    id="label-firstName"
                    htmlFor="firstName"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    First Name
                  </label>
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="lastName"
                    {...register("lastName")}
                    type="text"
                    placeholder=" "
                    aria-labelledby="label-lastName"
                    autoComplete="family-name"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <label
                    id="label-lastName"
                    htmlFor="lastName"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Last Name
                  </label>
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="relative">
                  <input
                    id="email2"
                    {...register("email")}
                    type="email"
                    placeholder=" "
                    aria-labelledby="label-email2"
                    autoComplete="email"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <label
                    id="label-email2"
                    htmlFor="email2"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Email
                  </label>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="phone2"
                    {...register("phone")}
                    type="tel"
                    placeholder=" "
                    aria-labelledby="label-phone2"
                    autoComplete="tel"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <label
                    id="label-phone2"
                    htmlFor="phone2"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Phone Number
                  </label>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 relative">
                <textarea
                  id="message2"
                  {...register("message")}
                  rows={4}
                  placeholder=" "
                  aria-labelledby="label-message2"
                  aria-describedby="message-help"
                  className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <label
                  id="label-message2"
                  htmlFor="message2"
                  className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                >
                  Message
                </label>
                <p
                  id="message-help"
                  className="mt-2 text-xs text-muted-foreground"
                >
                  Write your message..
                </p>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="mt-8 flex items-center">
                <div className="flex-1" />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-3 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-lg bg-primary text-primary-foreground shadow-lg hover:shadow-xl motion-safe:transform motion-safe:transition duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 shrink-0 whitespace-nowrap"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
