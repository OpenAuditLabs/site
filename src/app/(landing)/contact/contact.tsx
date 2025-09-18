import ContactForm from "@/components/landing/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-hero-heading"
      className="scroll-mt-24 relative overflow-hidden py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1
            id="contact-hero-heading"
            className="mx-auto font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl text-center text-foreground"
          >
            Ready to Secure Your Smart Contracts?
          </h1>

          <p className="mt-4 mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground font-medium text-center leading-snug">
            Join the revolution in blockchain security. Start auditing with AI
            today.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 lg:mt-20">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
