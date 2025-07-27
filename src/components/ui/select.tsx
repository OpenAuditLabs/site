import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "../../lib/utils";

export interface SelectProps extends RadixSelect.SelectProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ options, placeholder = "Select an option", className, ...props }, ref) => (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        ref={ref}
        className={cn(
          "inline-flex items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="ml-2">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className="z-50 min-w-[var(--radix-select-trigger-width)] rounded-md border border-gray-200 bg-white p-1 shadow-lg animate-in fade-in-80"
        >
          <RadixSelect.Viewport>
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className="relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10 data-[state=checked]:bg-primary/20"
              >
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
);
Select.displayName = "Select";
