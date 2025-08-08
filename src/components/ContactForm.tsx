"use client";

import { useContactForm } from "@/hooks";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";

export function ContactForm() {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    isFormValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get in Touch</CardTitle>
        <p className="text-muted-foreground text-center mt-2">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              className={
                errors.name && touched.name
                  ? "border-red-500 focus-visible:ring-red-500/20"
                  : ""
              }
              disabled={isSubmitting}
              required
            />
            {errors.name && touched.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              className={
                errors.email && touched.email
                  ? "border-red-500 focus-visible:ring-red-500/20"
                  : ""
              }
              disabled={isSubmitting}
              required
            />
            {errors.email && touched.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your audit needs or ask us any questions..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              className={`min-h-[120px] resize-none ${
                errors.message && touched.message
                  ? "border-red-500 focus-visible:ring-red-500/20"
                  : ""
              }`}
              disabled={isSubmitting}
              required
            />
            {errors.message && touched.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full sm:w-auto min-w-[140px]"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>

          
        </form>
      </CardContent>
    </Card>
  );
}
