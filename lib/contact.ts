/**
 * Inbound address for the home page contact form (mailto).
 * Override at build time with NEXT_PUBLIC_CONTACT_EMAIL or edit the fallback.
 */
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@example.com";
