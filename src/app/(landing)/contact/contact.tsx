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

        {/* Contact Content */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Contact Info */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Email:</span> support@openauditlabs.com
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span> +1 (555) 123-4567
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2100000000004!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a4e4d7b7%3A0x5b8d4e4e4e4e4e4e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Social Proof Badges */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Trusted By</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg text-center text-muted-foreground">
                  <p className="font-semibold">5-star Rating</p>
                  <p>on AuditPlatform</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center text-muted-foreground">
                  <p className="font-semibold">100+ Audits</p>
                  <p>Completed</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center text-muted-foreground">
                  <p className="font-semibold">Secure Score</p>
                  <p>99.9%</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center text-muted-foreground">
                  <p className="font-semibold">Certified Experts</p>
                  <p>Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
