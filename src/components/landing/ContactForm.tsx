"use client";

import React, { useActionState, useEffect, useRef, useState, ChangeEvent } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import Form from 'next/form';
import { sendContactForm, type ContactActionState } from "@/app/actions/contact";

export default function ContactForm(): React.JSX.Element {
  const initialState: ContactActionState = { ok: false, message: "", fieldErrors: {} };
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  company: "",
  projectDetails: "",
  });

  function onInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (state?.ok) {
      // Reset the form inputs on success
      formRef.current?.reset();
  setFormValues({ firstName: "", lastName: "", email: "", company: "", projectDetails: "" });
      setShowSuccess(true);
      const t = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(t);
    }
  }, [state?.ok]);

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
          </div>

          <div className="absolute inset-0 bg-accent/80"></div>

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
                  <span>demo@openaudit.com</span>
                </a>
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

            {/* Contact Form - Server Action + Zod validation on the server */}
            <Form
              className="w-full"
              action={formAction}
              aria-label="Contact form"
              noValidate
              ref={formRef}
            >
              {showSuccess && (
                <div className="mb-4 rounded-md border border-green-600/30 bg-green-600/10 px-3 py-2 text-sm text-green-700 dark:text-green-300">
                  {state?.message || "Message sent successfully."}
                </div>
              )}
              {!state?.ok && state?.message && (
                <div className="mb-4 rounded-md border border-red-600/30 bg-red-600/10 px-3 py-2 text-sm text-red-700 dark:text-red-300">
                  {state.message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder=" "
                    aria-labelledby="label-firstName"
                    autoComplete="given-name"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    value={formValues.firstName}
                    onChange={onInputChange}
                  />
                  <label
                    id="label-firstName"
                    htmlFor="firstName"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    First Name
                  </label>
                  {state?.fieldErrors?.firstName && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {state.fieldErrors.firstName}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder=" "
                    aria-labelledby="label-lastName"
                    autoComplete="family-name"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    value={formValues.lastName}
                    onChange={onInputChange}
                  />
                  <label
                    id="label-lastName"
                    htmlFor="lastName"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Last Name
                  </label>
                  {state?.fieldErrors?.lastName && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {state.fieldErrors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="relative">
                  <input
                    id="email2"
                    name="email"
                    type="email"
                    placeholder=" "
                    aria-labelledby="label-email2"
                    autoComplete="email"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    value={formValues.email}
                    onChange={onInputChange}
                  />
                  <label
                    id="label-email2"
                    htmlFor="email2"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Email
                  </label>
                  {state?.fieldErrors?.email && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {state.fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="company2"
                    name="company"
                    type="text"
                    placeholder=" "
                    aria-labelledby="label-company2"
                    autoComplete="organization"
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    value={formValues.company}
                    onChange={onInputChange}
                  />
                  <label
                    id="label-company2"
                    htmlFor="company2"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Company Name (optional)
                  </label>
                  {state?.fieldErrors?.company && (
                    <p className="mt-1 text-xs text-red-500" role="alert">
                      {state.fieldErrors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 relative">
                <textarea
                  id="projectDetails2"
                  name="projectDetails"
                  rows={4}
                  placeholder=" "
                  aria-labelledby="label-projectDetails2"
                  aria-describedby="projectDetails-help"
                  className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  value={formValues.projectDetails}
                  onChange={onInputChange}
                />
                <label
                  id="label-projectDetails2"
                  htmlFor="projectDetails2"
                  className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                >
                  Project Details
                </label>
                <p
                  id="projectDetails-help"
                  className="mt-2 text-xs text-muted-foreground"
                >
                  Describe your project goals, scope, and timeline.
                </p>
                {state?.fieldErrors?.projectDetails && (
                  <p className="mt-1 text-xs text-red-500" role="alert">
                    {state.fieldErrors.projectDetails}
                  </p>
                )}
              </div>

              <div className="mt-8 flex items-center">
                <div className="flex-1" />
                <button
                  type="submit"
                  className="inline-flex text-white items-center justify-center px-3 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-lg bg-primary text-primary-foreground shadow-lg hover:shadow-xl motion-safe:transform motion-safe:transition duration-200 motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 shrink-0 whitespace-nowrap"
                  disabled={isPending}
                >
                  {isPending ? "Sending…" : "Send Message"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
