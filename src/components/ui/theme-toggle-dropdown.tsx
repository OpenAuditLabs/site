import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggleDropdown() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const options = [
    { label: "Light", value: "light", icon: Sun },
    { label: "Dark", value: "dark", icon: Moon },
    { label: "System", value: "system", icon: Laptop },
  ];

  const current =
    options.find(
      (opt) => (theme === "system" ? resolvedTheme : theme) === opt.value
    ) || options[2];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        onClick={() => setOpen((v) => !v)}
      >
        {current.icon === Sun && <Sun className="h-5 w-5" />}
        {current.icon === Moon && <Moon className="h-5 w-5" />}
        {current.icon === Laptop && <Laptop className="h-5 w-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-popover border border-border z-50">
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`flex items-center w-full px-3 py-2 text-sm gap-2 hover:bg-accent/30 transition-colors ${
                theme === opt.value ? "font-bold" : ""
              }`}
              onClick={() => {
                setTheme(opt.value);
                setOpen(false);
              }}
            >
              <opt.icon className="h-4 w-4" /> {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
