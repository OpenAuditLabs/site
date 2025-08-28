"use client";

import React from "react";

export default function ContactForm(): React.JSX.Element {
  return (
    <section aria-labelledby="contact-heading" className="max-w-md mx-auto">
      <h3 id="contact-heading" className="text-base font-medium mb-2">
        Contact
      </h3>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Contact form"
      >
        <input
          name="name"
          placeholder="Name"
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground"
        />
        <input
          name="email"
          placeholder="Email"
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground"
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          className="w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm placeholder:text-muted-foreground"
          rows={2}
        />
        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
