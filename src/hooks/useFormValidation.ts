import { useState, useCallback } from "react";
import { z, ZodObject, ZodRawShape, ZodTypeAny } from "zod";

type FormErrors<T> = Partial<Record<keyof T, string>>;
type TouchedFields<T> = Partial<Record<keyof T, boolean>>;

export interface UseFormValidationOptions<S extends ZodObject<ZodRawShape>> {
  schema: S;
  initialValues: z.infer<S>;
  onSubmit?: (data: z.infer<S>) => void | Promise<void>;
}

export function useFormValidation<S extends ZodObject<ZodRawShape>>({
  schema,
  initialValues,
  onSubmit,
}: UseFormValidationOptions<S>) {
  type T = z.infer<S>;
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<TouchedFields<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = useCallback(
    (field: keyof T, value: unknown): string | undefined => {
      try {
        const fieldName = field as string;
        const fieldSchema = (schema.shape as Record<string, ZodTypeAny>)[fieldName];
        if (!fieldSchema) return undefined; // Unknown field
        fieldSchema.parse(value);
        return undefined;
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.issues[0]?.message || "Invalid value";
        }
        return "Invalid value";
      }
    },
    [schema]
  );

  // Validate all fields
  const validateForm = useCallback((): boolean => {
    try {
      schema.parse(values);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors<T> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as keyof T] = issue.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  }, [schema, values]);

  // Check if form is valid
  const isValid = useCallback((): boolean => {
    try {
      schema.parse(values);
      return true;
    } catch {
      return false;
    }
  }, [schema, values]);

  // Handle field change
  const setValue = useCallback(
    (field: keyof T, value: unknown) => {
      setValues((prev) => ({ ...prev, [field]: value }));

      // Validate field if it has been touched
      if (touched[field]) {
        const error = validateField(field, value);
        setErrors((prev) => ({ ...prev, [field]: error }));
      }
    },
    [touched, validateField]
  );

  // Handle field blur
  const markTouched = useCallback(
    (field: keyof T) => {
      if (!touched[field]) {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const error = validateField(field, values[field]);
        setErrors((prev) => ({ ...prev, [field]: error }));
      }
    },
    [touched, validateField, values]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();

      // Mark all fields as touched
      const allTouched: TouchedFields<T> = {};
      Object.keys(initialValues).forEach((key) => {
        allTouched[key as keyof T] = true;
      });
      setTouched(allTouched);

      // Validate form
      if (!validateForm()) {
        return;
      }

      if (onSubmit) {
        setIsSubmitting(true);
        try {
          await onSubmit(values);
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [initialValues, validateForm, onSubmit, values]
  );

  // Reset form
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
  isValid: isValid(),
  setValue,
  setTouched: markTouched,
    handleSubmit,
    reset,
  };
}
