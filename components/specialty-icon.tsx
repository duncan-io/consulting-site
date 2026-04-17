import type { Specialty } from "@/lib/specialties";

const iconClass = "h-6 w-6 text-on-secondary-container";

export function SpecialtyIcon({ id }: { id: Specialty["id"] }) {
  switch (id) {
    case "website-strategy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M8 8h8M8 12h5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cro":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 19V5M4 19h16M8 15l3-4 3 2 4-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "seo":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M20 20l-3-3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "reputation-management":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ppc-strategy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 20v-6M8 12l4-8 4 8M6 18h12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email-strategy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6h16v12H4V6z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M4 7l8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
  }
}
