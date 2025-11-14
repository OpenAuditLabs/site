export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS,
  googleMapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL,
  googleMapsPlaceId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID,
};

function validateContactInfo(info: typeof CONTACT_INFO) {
  const isProduction = process.env.NODE_ENV === "production";
  const errors: string[] = [];

  if (!info.email) {
    errors.push("Contact email is a placeholder or missing.");
  }
  if (!info.phone || info.phone.includes("555") || info.phone === "+1 (555) 123-4567") {
    errors.push("Contact phone number is a placeholder or missing.");
  }
  if (!info.address || info.address.includes("Anytown") || info.address === "123 Main St, Anytown, USA 12345") {
    errors.push("Office address is a placeholder or missing.");
  }
  if (!info.googleMapsEmbedUrl || info.googleMapsEmbedUrl.includes("google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2100000000004!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a4e4d7b7%3A0x5b8d4e4e4e4e4e4e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus")) {
    errors.push("Google Maps Embed URL is a placeholder or missing.");
  }
  if (!info.googleMapsPlaceId || info.googleMapsPlaceId === "ChIJIQBpAG2ahxQRE_fel8B_hMs") {
    errors.push("Google Maps Place ID is a placeholder or missing.");
  }

  if (errors.length > 0) {
    const errorMessage = "Placeholder contact information detected:\n" + errors.join("\n");
    if (isProduction) {
      console.error(errorMessage);
      process.exit(1); // Exit in production
    } else {
      console.warn(errorMessage); // Warn in development
    }
  }
}

validateContactInfo(CONTACT_INFO);
