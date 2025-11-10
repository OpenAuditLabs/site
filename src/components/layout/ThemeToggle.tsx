"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  isScrolled: boolean;
  mounted: boolean;
}

export default function ThemeToggle({ isScrolled, mounted }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const themeDropdownRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const [focusedItemIndex, setFocusedItemIndex] = useState(-1);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setShowThemeOptions(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowThemeOptions(false);
    };

    if (showThemeOptions) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [showThemeOptions]);

  useEffect(() => {
    if (showThemeOptions) {
      setFocusedItemIndex(0);
      itemRefs.current[0]?.focus();
    } else {
      themeDropdownRef.current?.querySelector('button')?.focus();
      setFocusedItemIndex(-1);
    }
  }, [showThemeOptions]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const items = itemRefs.current.filter(Boolean) as HTMLButtonElement[];
    if (!items.length) return;

    let newIndex = focusedItemIndex;

    switch (event.key) {
      case 'ArrowDown':
        newIndex = (focusedItemIndex + 1) % items.length;
        break;
      case 'ArrowUp':
        newIndex = (focusedItemIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = items.length - 1;
        break;
      case 'Enter':
      case ' ': // Space key
        if (focusedItemIndex !== -1) {
          items[focusedItemIndex]?.click();
        }
        return;
      case 'Escape':
        setShowThemeOptions(false);
        return;
      default:
        return;
    }

    setFocusedItemIndex(newIndex);
    items[newIndex]?.focus();
    event.preventDefault();
  };

  return (
    <div className="relative" ref={themeDropdownRef}>
      <Button
        variant="ghost"
        size={isScrolled ? "sm" : "icon"}
        aria-label="Toggle theme"
        title="Toggle theme"
        aria-haspopup="menu"
        aria-expanded={showThemeOptions}
        aria-controls="theme-options"
        className={`transition-all duration-300 ${
          isScrolled ? 'p-1.5' : 'p-2'
        }`}
        type="button"
        onClick={() => setShowThemeOptions((prev) => !prev)}
        disabled={!mounted}
        aria-disabled={!mounted}
      >
        {mounted ? (
          resolvedTheme === "dark" ? (
            <Moon className={`transition-all duration-300 ${
              isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
            }`} />
          ) : resolvedTheme === "light" ? (
            <Sun className={`transition-all duration-300 ${
              isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
            }`} />
          ) : (
            <Laptop className={`transition-all duration-300 ${
              isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
            }`} />
          )
        ) : (
          <Sun className={`opacity-0 transition-all duration-300 ${
            isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
          }`} />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      {showThemeOptions && (
        <div
          id="theme-options"
          role="menu"
          aria-label="Theme options"
          className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isScrolled ? 'text-xs' : 'text-sm'
          } z-50`}
          onKeyDown={handleKeyDown}
        >
          <div className="py-1">
            <Button
              role="menuitem"
              variant="ghost"
              className="w-full justify-start"
              ref={(el) => { itemRefs.current[0] = el; }}
              tabIndex={focusedItemIndex === 0 ? 0 : -1}
              onClick={() => {
                setTheme("light");
                setShowThemeOptions(false);
              }}
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </Button>
            <Button
              role="menuitem"
              variant="ghost"
              className="w-full justify-start"
              ref={(el) => { itemRefs.current[1] = el; }}
              tabIndex={focusedItemIndex === 1 ? 0 : -1}
              onClick={() => {
                setTheme("dark");
                setShowThemeOptions(false);
              }}
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </Button>
            <Button
              role="menuitem"
              variant="ghost"
              className="w-full justify-start"
              ref={(el) => { itemRefs.current[2] = el; }}
              tabIndex={focusedItemIndex === 2 ? 0 : -1}
              onClick={() => {
                setTheme("system");
                setShowThemeOptions(false);
              }}
            >
              <Laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
