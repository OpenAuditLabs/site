import * as React from "react"

import { cn } from "@/lib/utils"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

function Input({ className, type, error, helperText, ...props }: InputProps) {
  const id = React.useId();
  const errorId = helperText && error ? `${id}-error` : undefined;

  return (
    <div className="grid gap-1">
      <input
        type={type}
        data-slot="input"
        aria-invalid={error}
        aria-describedby={errorId}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {error && helperText && (
        <p id={errorId} className="text-sm font-medium text-destructive">
          {helperText}
        </p>
      )}
    </div>
  );
}

export { Input };
