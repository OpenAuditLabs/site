"use client";

import React from "react";
import { z } from "zod";
import { useFormValidation } from "@/hooks";
import {
  Input,
  Textarea,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui";
import { Mail, User, MessageSquare, Send } from "lucide-react";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialValues: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    setValue,
    setTouched,
    handleSubmit,
    reset,
  } = useFormValidation({
    schema: contactFormSchema,
    initialValues,
    onSubmit: async (data) => {
      // Simulate API call
      console.log("Form submitted:", data);

      // Here you would typically make an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message (you can implement this with a toast or state)
      alert("Thank you for your message! We will get back to you soon.");

      // Reset form after successful submission
      reset();
    },
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div>
            <Input
              label="Name"
              type="text"
              placeholder="Enter your full name"
              value={values.name}
              onChange={(e) => setValue("name", e.target.value)}
              onBlur={() => setTouched("name")}
              error={touched.name ? errors.name : undefined}
              required
              className="w-full"
              disabled={isSubmitting}
            />
          </div>

          {/* Email Field */}
          <div>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email address"
              value={values.email}
              onChange={(e) => setValue("email", e.target.value)}
              onBlur={() => setTouched("email")}
              error={touched.email ? errors.email : undefined}
              required
              className="w-full"
              disabled={isSubmitting}
            />
          </div>

          {/* Message Field */}
          <div>
            <Textarea
              label="Message"
              placeholder="Tell us about your audit needs or ask us any questions..."
              value={values.message}
              onChange={(e) => setValue("message", e.target.value)}
              onBlur={() => setTouched("message")}
              error={touched.message ? errors.message : undefined}
              required
              rows={6}
              className="w-full resize-none"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full sm:w-auto min-w-[140px]"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>

          {/* Form Info */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              All fields marked with <span className="text-red-500">*</span> are
              required.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
