export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "one",
    quote:
      "Placeholder testimonial—replace with a real quote about outcomes, collaboration, or clarity. Specifics beat superlatives.",
    author: "Name",
    role: "Role",
    company: "Company",
  },
  {
    id: "two",
    quote:
      "Second placeholder. A strong testimonial names the problem, what you did together, and a concrete result if possible.",
    author: "Name",
    role: "Role",
    company: "Company",
  },
];
