import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8  bg-background   ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  text-foreground mb-4">Contact Us</h1>
        <p className="text-lg  text-muted-foreground max-w-2xl mx-auto">
          Ready to secure your smart contracts? Get in touch with our expert
          audit team for comprehensive security assessments and consultation.
        </p>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
