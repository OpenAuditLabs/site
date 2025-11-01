import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely joins class names, filtering out falsy values.
 * @param classes - A list of class names, which can include strings, false, null, or undefined.
 * @returns A single string of space-separated class names.
 */
export function safeJoin(...classes: (string|false|null|undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generates a URL-friendly slug from a given string.
 * @param text - The input string to slugify.
 * @returns A slugified string.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')   // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')    // Trim - from start of text
    .replace(/-+$/, '');   // Trim - from end of text
}