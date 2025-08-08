import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "border-input",
        error:
          "border-destructive ring-destructive/20 dark:ring-destructive/40 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        success:
          "border-green-500 ring-green-500/20 dark:ring-green-500/40 focus-visible:ring-green-500/20 dark:focus-visible:ring-green-500/40",
        warning:
          "border-orange-500 ring-orange-500/20 dark:ring-orange-500/40 focus-visible:ring-orange-500/20 dark:focus-visible:ring-orange-500/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends Omit<React.ComponentProps<"textarea">, "size">,
    VariantProps<typeof textareaVariants> {
  /**
   * Error message to display below the textarea
   */
  error?: string;
  /**
   * Success message to display below the textarea
   */
  success?: string;
  /**
   * Warning message to display below the textarea
   */
  warning?: string;
  /**
   * Helper text to display below the textarea
   */
  helperText?: string;
  /**
   * Label for the textarea
   */
  label?: string;
  /**
   * Whether the textarea is required
   */
  required?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      error,
      success,
      warning,
      helperText,
      label,
      required,
      ...props
    },
    ref
  ) => {
    // Determine the current variant based on validation state and props
    const currentVariant = React.useMemo(() => {
      if (error) return "error";
      if (success) return "success";
      if (warning) return "warning";
      return variant || "default";
    }, [error, success, warning, variant]);

    // Get the current message to display
    const currentMessage = React.useMemo(() => {
      if (error) return error;
      if (success) return success;
      if (warning) return warning;
      return helperText;
    }, [error, success, warning, helperText]);

    const textareaId = React.useId();

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          data-slot="textarea"
          className={cn(
            textareaVariants({ variant: currentVariant, className })
          )}
          ref={ref}
          aria-invalid={currentVariant === "error"}
          aria-describedby={
            currentMessage ? `${textareaId}-message` : undefined
          }
          {...props}
        />
        {currentMessage && (
          <p
            id={`${textareaId}-message`}
            className={cn("text-xs", {
              "text-destructive": currentVariant === "error",
              "text-green-600 dark:text-green-400":
                currentVariant === "success",
              "text-orange-600 dark:text-orange-400":
                currentVariant === "warning",
              "text-muted-foreground": currentVariant === "default",
            })}
          >
            {currentMessage}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
