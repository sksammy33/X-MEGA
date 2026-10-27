// Contact details and form delivery live here so they can be confirmed in one place.
// Everything marked `confirmed: false` is a placeholder and must be replaced before launch.

export const site = {
  email: { value: "hello@xmega.example", confirmed: false },
  phone: { value: "+91 00000 00000", confirmed: false },
  whatsapp: { value: "910000000000", confirmed: false }, // digits only, used for wa.me links
  address: { value: "", confirmed: false }, // leave empty if XMEGA works remotely
  hours: { value: "", confirmed: false },
  // Optional: a Formspree-style endpoint (POST JSON). When empty, forms open a pre-filled email instead.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string; description: string }[] };

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Freelancing", href: "/freelancing" },
  {
    label: "Students",
    children: [
      { label: "Internships", href: "/internships", description: "Virtual, project-based programs" },
      { label: "Student Projects", href: "/student-projects", description: "Minor & major project guidance" },
    ],
  },
  { label: "Local Business", href: "/local-business" },
  { label: "Careers", href: "/careers" },
];

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Services", href: "/services" },
      { label: "Our Work", href: "/projects" },
      { label: "Freelancing", href: "/freelancing" },
      { label: "For Local Business", href: "/local-business" },
    ],
  },
  {
    title: "Students",
    links: [
      { label: "Virtual Internships", href: "/internships" },
      { label: "Student Projects", href: "/student-projects" },
    ],
  },
];
