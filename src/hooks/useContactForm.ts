import { useState } from "react";
import { z } from "zod";

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Zod schema for validation
  const schema = z.object({
    name: z.string().min(1, "Please enter your name."),
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Please enter a valid email address."),
    message: z.string().min(10, "Message must be at least 10 characters long."),
  });

  const validateField = (name: string, value: string) => {
    try {
      if (name === "name") {
        schema.pick({ name: true }).parse({ name: value });
      } else if (name === "email") {
        schema.pick({ email: true }).parse({ email: value });
      } else if (name === "message") {
        schema.pick({ message: true }).parse({ message: value });
      }
      return "";
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.issues[0]?.message || "Invalid value";
      }
      return "Invalid value";
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    try {
      schema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        // Mark all fields as touched to show errors
        setTouched({ name: true, email: true, message: true });
      }
      return false;
    }
  };

  const isFormValid = () => {
    try {
      schema.parse(formData);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Log the form data as an object when validation passes
    // console.log({ ...formData });

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTouched({});
      setIsSuccess(true);

      // Remove the alert since we'll show UI feedback instead
      // alert("Thank you for your message! We will get back to you soon.");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    isFormValid: isFormValid(),
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
