import { ContactForm } from "@/components/ContactForm";
import { SocialMediaLinks } from "@/components/ui";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background ">
      <div className="container mx-auto px-4 py-8  bg-background   ">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold  text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg  text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your smart contracts? Get in touch with our expert
            audit team for comprehensive security assessments and consultation.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Social Media Links Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Follow us on social media for the latest updates on smart contract
            security, industry insights, and company news.
          </p>

          <SocialMediaLinks className="justify-center" />
        </div>
      </div>
    </div>
  );
}
