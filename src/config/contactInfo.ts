export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@openauditlabs.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (555) 123-4567",
  address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "123 Main St, Anytown, USA 12345",
  googleMapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2100000000004!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a4e4d7b7%3A0x5b8d4e4e4e4e4e4e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus",
  googleMapsPlaceId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID || "ChIJIQBpAG2ahxQRE_fel8B_hMs", // Placeholder for San Francisco
};
