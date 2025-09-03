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
              alt="Contact Design Background"
              fill
              className="object-cover"
              priority
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

            {/* Contact Details */}
            <div className="space-y-6 mb-8 lg:mb-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-5 h-5 text-primary-foreground">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm lg:text-base">+1012 3456 789</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-5 h-5 text-primary-foreground">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm lg:text-base">demo@gmail.com</span>
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
            </div>

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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base">
                Ready to start your project? Send us a message and we&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            {/* Form Placeholder */}
            <div className="space-y-6">
              <div className="text-center text-muted-foreground">
                {/* Form will be implemented here */}
                <div className="bg-muted/30 rounded-xl p-8 lg:p-10 border border-dashed border-muted-foreground/30">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-base lg:text-lg font-semibold text-foreground">
                      Form Section
                    </p>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Contact form will be implemented here with proper
                      validation and styling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
