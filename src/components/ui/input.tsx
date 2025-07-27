import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex h-9 w-full rounded-md border bg-background px-3 py-2 text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "border-input shadow-xs",
        error: "border-destructive ring-destructive/20 dark:ring-destructive/40 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        success: "border-green-500 ring-green-500/20 dark:ring-green-500/40 focus-visible:ring-green-500/20 dark:focus-visible:ring-green-500/40",
        warning: "border-orange-500 ring-orange-500/20 dark:ring-orange-500/40 focus-visible:ring-orange-500/20 dark:focus-visible:ring-orange-500/40",
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-8 px-2.5 py-1.5 text-xs",
        lg: "h-10 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  /**
   * Error message to display below the input
   */
  error?: string
  /**
   * Success message to display below the input
   */
  success?: string
  /**
   * Warning message to display below the input
   */
  warning?: string
  /**
   * Helper text to display below the input
   */
  helperText?: string
  /**
   * Label for the input
   */
  label?: string
  /**
   * Whether the input is required
   */
  required?: boolean
  /**
   * Custom validation function
   */
  validate?: (value: string) => boolean | string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant,
      size,
      error,
      success,
      warning,
      helperText,
      label,
      required,
      validate,
      onChange,
      ...props
    },
    ref
  ) => {
    const [validationMessage, setValidationMessage] = React.useState<string>("")
    const [validationState, setValidationState] = React.useState<"default" | "error" | "success" | "warning">("default")

    // Determine the current variant based on validation state and props
    const currentVariant = React.useMemo(() => {
      if (error) return "error"
      if (success) return "success"
      if (warning) return "warning"
      if (validationState !== "default") return validationState
      return variant || "default"
    }, [error, success, warning, validationState, variant])

    // Get the current message to display
    const currentMessage = React.useMemo(() => {
      if (error) return error
      if (success) return success
      if (warning) return warning
      if (validationMessage) return validationMessage
      return helperText
    }, [error, success, warning, validationMessage, helperText])

    // Handle input change with validation
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        // Run custom validation if provided
        if (validate) {
          const result = validate(value)
          if (typeof result === "string") {
            setValidationMessage(result)
            setValidationState("error")
          } else if (result === false) {
            setValidationMessage("Invalid input")
            setValidationState("error")
          } else {
            setValidationMessage("")
            setValidationState("success")
          }
        } else {
          // Clear validation state if no custom validation
          setValidationMessage("")
          setValidationState("default")
        }

        onChange?.(event)
      },
      [validate, onChange]
    )

    const inputId = React.useId()

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(inputVariants({ variant: currentVariant, size, className }))}
          ref={ref}
          onChange={handleChange}
          aria-invalid={currentVariant === "error"}
          aria-describedby={currentMessage ? `${inputId}-message` : undefined}
          {...props}
        />
        {currentMessage && (
          <p
            id={`${inputId}-message`}
            className={cn(
              "text-xs",
              {
                "text-destructive": currentVariant === "error",
                "text-green-600 dark:text-green-400": currentVariant === "success",
                "text-orange-600 dark:text-orange-400": currentVariant === "warning",
                "text-muted-foreground": currentVariant === "default",
              }
            )}
          >
            {currentMessage}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
