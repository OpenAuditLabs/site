export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2
            id="contact-heading"
            className="mx-auto font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl text-center"
            style={{ color: "var(--foreground)" }}
          >
            Ready to Secure Your Smart Contracts?
          </h2>

          <p className="mt-4 mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground font-medium text-center leading-snug">
            Join the revolution in blockchain security. Start auditing with AI
            today.
          </p>
        </div>

        {/* Contact form will be added here  */}
        <div className="mt-12">
          {/* TODO: Contact form component will be implemented here */}
        </div>
      </div>
    </section>
  );
}
