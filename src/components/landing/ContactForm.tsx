"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export default function ContactForm(): React.JSX.Element {
  return (
    <section aria-labelledby="contact-heading" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 min-h-[500px] lg:min-h-[600px]">
        {/* Left Column - Contact Information with Image Background */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl lg:rounded-r-none">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/image/contactDesign.png"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            {/* Clean gradient overlay */}
            <div className="absolute inset-0 bg-primary/85"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-start p-6 sm:p-8 lg:p-10 text-primary-foreground min-h-[500px]">
            {/* Header Section */}
            <div className="mb-8 lg:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-primary-foreground/90 text-sm lg:text-base">
                Say something to start a live chat!
              </p>
            </div>

            {/* Contact Details (semantic) */}
            <address className="not-italic space-y-6 mb-8 lg:mb-12">
              <div>
                <a
                  href="tel:+10123456789"
                  className="flex items-center gap-4 text-sm lg:text-base underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label="Call +1012 3456 789"
                >
                  <Phone className="w-4 h-4 text-primary-foreground" />
                  <span>+1012 3456 789</span>
                </a>
              </div>

              <div>
                <a
                  href="mailto:demo@gmail.com"
                  className="flex items-center gap-4 text-sm lg:text-base underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label="Email demo@gmail.com"
                >
                  <Mail className="w-4 h-4 text-primary-foreground" />
                  <span>demo@gmail.com</span>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 text-primary-foreground mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm lg:text-base">
                  <p>132 Dartmouth Street Boston,</p>
                  <p>Massachusetts 02156 United States</p>
                </div>
              </div>
            </address>

            {/* Social Links */}
            <div className="mt-auto">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form Placeholder */}
        <div className="lg:col-span-3 bg-background border border-border lg:border-l-0 rounded-2xl lg:rounded-l-none p-6 sm:p-8 lg:p-12 flex items-center">
          <div className="w-full max-w-xl mx-auto space-y-8">
            {/* Form Header */}
            <div className="space-y-3 text-center lg:text-left">
              <h2
                id="contact-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground"
              >
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-sm lg:text-base">
                Ready to start your project? Send us a message and we&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Form - styled visual only (no validation/submit) */}
            <form
              className="w-full"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    aria-label="First Name"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    First Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    aria-label="Last Name"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="relative">
                  <input
                    id="email2"
                    name="email"
                    type="email"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    aria-label="Email"
                  />
                  <label
                    htmlFor="email2"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="phone2"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    aria-label="Phone Number"
                  />
                  <label
                    htmlFor="phone2"
                    className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="mt-6 relative">
                <textarea
                  id="message2"
                  name="message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-border px-0 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  aria-label="Message"
                />
                <label
                  htmlFor="message2"
                  className="absolute left-0 -top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs transition-all"
                >
                  Message
                </label>
                <p className="mt-2 text-xs text-muted-foreground">
                  Write your message..
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <div className="flex-1" />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <span className="sr-only">Send message</span>
                  <span className="inline-block transform transition-transform duration-200 ease-out">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
