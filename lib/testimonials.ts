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
      "Duncan was a huge help here. With his SEO and marketing knowledge, he's been a wealth of information in guiding how we go about being found online. GMB, local seo, and just more general marketing advise as well, he's been able to allow us to blot out the noise that you get overwhelmed with and just focus on the things that move the needle for a local business in the digital marketing realm. Super happy and a fan!",
    author: "Noah Barba",
    role: "Owner",
    company: "Pant To Life",
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
