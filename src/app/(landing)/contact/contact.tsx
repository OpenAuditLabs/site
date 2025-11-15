import ContactForm from "@/components/landing/ContactForm";
import { CONTACT_INFO } from "@/config/contactInfo";
import { SOCIAL_PROOF_METRICS } from "@/config/socialProof";

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
                <span className="font-semibold text-foreground">Email:</span> {CONTACT_INFO.email}
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span> {CONTACT_INFO.phone}
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <div className="w-full">
                <iframe
                  src={CONTACT_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Our Location"
                  className="rounded-lg"
                ></iframe>
                <p className="mt-2 text-muted-foreground text-center">{CONTACT_INFO.address}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
