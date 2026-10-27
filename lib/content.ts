import {
  Bug,
  Building2,
  Code2,
  Cpu,
  Database,
  Flag,
  Globe,
  GraduationCap,
  LifeBuoy,
  Lock,
  MessageCircle,
  Palette,
  PenTool,
  Receipt,
  Rocket,
  ShoppingBag,
  Smartphone,
  Store,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/components/ui";

export const capabilities = ["Web", "Mobile", "Design", "AI", "Commerce", "Growth"];

/* ---------- Landing ---------- */

export type Service = {
  name: string;
  scope: string;
  description: string;
  image: string;
  tags: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    name: "Web Development",
    scope: "Responsive websites & web platforms",
    description:
      "Build a digital home for your business. From responsive websites to custom web applications, we create clear, intuitive experiences designed around your goals.",
    image: "/images/svc-web.jpg",
    tags: ["Websites", "Web apps", "CMS", "Hosting"],
    icon: Code2,
  },
  {
    name: "Mobile App Development",
    scope: "Mobile experiences for iOS & Android",
    description:
      "Intuitive mobile experiences designed for performance and usability — from first prototype to store-ready apps on iOS and Android.",
    image: "/images/svc-mobile.jpg",
    tags: ["Android", "iOS", "Cross-platform"],
    icon: Smartphone,
  },
  {
    name: "UI/UX & Branding",
    scope: "Interfaces, identities & design systems",
    description:
      "Thoughtful interfaces and memorable visual identities that make your product easy to use and your brand easy to recognise.",
    image: "/images/svc-design.jpg",
    tags: ["UI/UX", "Logo design", "Design systems"],
    icon: PenTool,
  },
  {
    name: "AI & Custom Software",
    scope: "Intelligent tools & tailored workflows",
    description:
      "Intelligent tools and tailored software that automate repetitive work and turn your data into useful answers.",
    image: "/images/svc-ai.jpg",
    tags: ["AI assistants", "Automation", "Custom CRM"],
    icon: Cpu,
  },
  {
    name: "E-commerce Solutions",
    scope: "Online stores & seamless checkout",
    description:
      "High-performing online stores with intuitive discovery, product management and a simple, secure checkout journey.",
    image: "/images/svc-commerce.jpg",
    tags: ["Storefronts", "Payments", "Catalogs"],
    icon: ShoppingBag,
  },
  {
    name: "Digital Marketing & SEO",
    scope: "Search visibility & digital growth",
    description:
      "Build your online presence, reach the right customers and grow with search, content and campaigns that are measured end to end.",
    image: "/images/svc-marketing.jpg",
    tags: ["SEO", "Social media", "Campaigns"],
    icon: TrendingUp,
  },
];

export const audiences = [
  { name: "Startups & Businesses", description: "Build, launch and scale digital products.", icon: Rocket },
  { name: "Local Businesses", description: "Websites, bookings and business tools.", icon: Store },
  { name: "Students", description: "Internships and guided academic projects.", icon: GraduationCap },
  { name: "Freelancers & Creators", description: "Portfolios, branding and digital solutions.", icon: Palette },
];

// Concept projects from the Figma Projects page — replace with verified work before launch.
export const projects: Project[] = [
  {
    name: "E-commerce Platform",
    category: "Web · E-commerce",
    filters: ["Web & E-commerce"],
    description: "Product discovery, online payments and inventory management.",
    image: "/images/p-commerce.png",
  },
  {
    name: "Clinic Booking App",
    category: "Mobile · Healthcare",
    filters: ["Mobile Apps"],
    description: "Appointment scheduling, reminders and payment workflows.",
    image: "/images/p-clinic.png",
  },
  {
    name: "Real Estate Platform",
    category: "Web · Real Estate",
    filters: ["Web & E-commerce"],
    description: "Property discovery, map-based browsing and lead management.",
    image: "/images/p-realestate.png",
  },
  {
    name: "AI Enquiry Assistant",
    category: "AI · Student Project",
    filters: ["Software & AI", "Student Projects"],
    description: "A conversational interface for answering common college enquiries.",
    image: "/images/p-ai.png",
  },
];

export const projectFilters = [
  "All Projects",
  "Web & E-commerce",
  "Mobile Apps",
  "Software & AI",
  "Student Projects",
  "Freelance",
];

export type Step = { title: string; description: string };

export const steps: Step[] = [
  { title: "Discover", description: "Understand your business, objectives and requirements." },
  { title: "Plan & Design", description: "Define the solution, user experience and technical approach." },
  { title: "Build & Test", description: "Develop, integrate and validate the solution." },
  { title: "Launch & Support", description: "Deploy the product and provide agreed support." },
];

// Placeholder figures carried over from the Figma file — replace with verified numbers before launch.
export const stats = [
  { value: "10M+", label: "Client value created" },
  { value: "60+", label: "Engagements delivered" },
  { value: "94%", label: "Client retention rate" },
  { value: "4+", label: "Years of experience" },
];

export const pathways = [
  {
    eyebrow: "Experience through doing",
    title: "Virtual Internships",
    description: "Gain practical experience through projects, guidance and industry-focused learning.",
    cta: "Explore Internships",
    href: "/internships",
    image: "/images/internships.jpg",
    points: ["Real project briefs", "Mentor guidance", "Portfolio-ready outcomes"],
  },
  {
    eyebrow: "Support from plan to presentation",
    title: "Minor & Major Project Guidance",
    description: "Get support with project planning, development, documentation and presentations.",
    cta: "Explore Student Projects",
    href: "/student-projects",
    image: "/images/student.jpg",
    points: ["Topic & scope planning", "Development support", "Documentation & viva prep"],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What can I build with XMEGA?",
    a: "Explore websites, mobile apps, UI/UX and branding, AI and custom software, e-commerce solutions, and digital marketing & SEO. We start by understanding what your project needs.",
  },
  {
    q: "Where does a new project begin?",
    a: "With a conversation. Share your idea or challenge, and we'll help shape the scope, the approach and the right next step.",
  },
  {
    q: "Can I discuss an existing website or app?",
    a: "Yes. We can review, improve, maintain or extend existing products — from bug fixes to redesigns.",
  },
  {
    q: "What does the design and development process look like?",
    a: "Four clear stages: discover, plan & design, build & test, then launch & support — with regular updates along the way.",
  },
  {
    q: "How can students explore virtual internships?",
    a: "Reach out through the For Students section. We'll share current pathways, expectations and how projects are structured.",
  },
  {
    q: "What support is available for minor and major projects?",
    a: "Guidance across planning, development, documentation and presentation — shaped around your academic requirements.",
  },
  {
    q: "How are project scope and timelines decided?",
    a: "Together. We agree scope, milestones and cost before work begins, so there are no surprises.",
  },
];

/* ---------- Services page ---------- */

export const serviceCategories = ["Web & Commerce", "Mobile & Design", "AI & Software", "Marketing & Growth"];

export const serviceDirectory = [
  {
    name: "Web & E-commerce Development",
    description: "High-performing websites and online platforms built for your goals.",
    items: ["Website Development", "E-commerce", "CMS", "Hosting & Domains"],
    icon: Globe,
    image: "/images/svc-web.jpg",
  },
  {
    name: "Mobile App Development",
    description: "Intuitive mobile experiences designed for performance and usability.",
    items: ["Android Apps", "iOS Apps", "Mobile Testing & QA"],
    icon: Smartphone,
    image: "/images/svc-mobile.jpg",
  },
  {
    name: "UI/UX & Brand Design",
    description: "Thoughtful experiences and memorable visual identities for digital brands.",
    items: ["UI/UX Design", "Logo Design", "Brand Identity", "Prototyping"],
    icon: PenTool,
    image: "/images/svc-design.jpg",
  },
  {
    name: "AI & Emerging Technologies",
    description: "Intelligent systems and emerging technologies for modern challenges.",
    items: ["AI Software", "Machine Learning", "IoT", "AR/VR", "Blockchain", "Game Development"],
    icon: Cpu,
    image: "/images/svc-ai.jpg",
  },
  {
    name: "Custom Software & Enterprise Solutions",
    description: "Scalable systems that streamline operations and connect workflows.",
    items: ["Custom Software", "CRM", "Databases", "Analytics & BI", "Integrations", "Cybersecurity"],
    icon: Database,
    image: "/images/svc-software.jpg",
  },
  {
    name: "Digital Marketing & Growth",
    description: "Build your online presence, reach customers and grow your business.",
    items: ["SEO", "Digital Marketing", "Social Media Management", "IT Consulting & Strategy"],
    icon: TrendingUp,
    image: "/images/svc-marketing.jpg",
  },
];

// Adapted from the Figma "Why choose XMEGA?" block (its source copy was recruitment-themed).
export const pillars = [
  {
    title: "Confidential, always.",
    description: "Every project is handled under strict confidentiality, protecting your ideas, data and users.",
    icon: Lock,
  },
  {
    title: "Enterprise ready.",
    description: "From scaling startups to growing enterprises, our process adapts without slowing down your growth.",
    icon: Building2,
  },
  {
    title: "Outcome driven.",
    description: "No vanity metrics. We measure success by what your product achieves for your business.",
    icon: Target,
  },
];

export const engagementOptions = [
  {
    name: "Full Project Development",
    description: "End-to-end execution from initial planning to final launch.",
    points: ["Discovery & strategy", "Design & development", "Testing & launch", "Ongoing support options"],
    cta: "Start a Project",
    href: "/contact",
    featured: true,
  },
  {
    name: "Freelance Services",
    description: "Focused support for smaller projects, improvements and individual tasks.",
    points: ["Clear, fixed scope", "Milestone-based delivery", "Quick turnaround", "Post-delivery support"],
    cta: "Explore Freelancing",
    href: "/freelancing",
    featured: false,
  },
];

export const servicesFaqs: Faq[] = [
  {
    q: "What types of projects does XMEGA handle?",
    a: "XMEGA offers web, mobile, AI, design, digital marketing and custom software services for different project scopes.",
  },
  {
    q: "Can I hire XMEGA for a small project?",
    a: "Yes. Our freelance engagement is designed for smaller projects, improvements and individual tasks.",
  },
  {
    q: "Do you provide custom software solutions?",
    a: "Yes — from CRMs and databases to analytics, integrations and AI-powered tools tailored to your workflows.",
  },
  {
    q: "Do you provide support after project completion?",
    a: "Yes. Support and maintenance are agreed before launch so you know exactly what's covered.",
  },
];

/* ---------- Projects page ---------- */

export const caseFramework = [
  { title: "The Challenge", description: "What problem needed solving?" },
  { title: "Our Approach", description: "Which design or technical decisions mattered?" },
  { title: "The Solution", description: "What did the team actually build?" },
  { title: "The Outcome", description: "What measurable result was achieved, if known?" },
];

/* ---------- Freelancing page ---------- */

export const freelanceServices = [
  { name: "Website Design & Development", description: "Business websites, portfolios, landing pages and blogs.", icon: Globe },
  { name: "Mobile App Development", description: "Android, iOS and cross-platform applications.", icon: Smartphone },
  { name: "Logo & Brand Identity", description: "Logos, visual identity and brand assets.", icon: PenTool },
  { name: "E-commerce Setup", description: "Online stores, product catalogs and payment setup.", icon: ShoppingBag },
  { name: "SEO & Digital Marketing", description: "SEO audits, online presence and growth campaigns.", icon: TrendingUp },
  { name: "Maintenance & Bug Fixes", description: "Troubleshooting, updates and improvements for existing products.", icon: Bug },
];

export const freelanceAudiences = [
  { name: "Startups", description: "Launch an MVP or digital product.", icon: Rocket },
  { name: "Small Businesses", description: "Build a professional online presence.", icon: Store },
  { name: "Freelancers & Creators", description: "Create a portfolio or personal brand.", icon: Palette },
  { name: "Established Businesses", description: "Improve, maintain or extend existing products.", icon: Building2 },
];

export const principles = [
  { title: "Transparent Pricing", description: "Agree on scope and cost before work begins.", icon: Receipt },
  { title: "Milestone-Based Delivery", description: "Break larger projects into manageable stages.", icon: Flag },
  { title: "Regular Updates", description: "Stay informed throughout the project.", icon: MessageCircle },
  { title: "Post-Delivery Support", description: "Discuss maintenance and support after launch.", icon: LifeBuoy },
];

export const freelanceSteps: Step[] = [
  { title: "Tell Us Your Idea", description: "Share your requirements and goals." },
  { title: "Get a Proposal", description: "Review the scope, timeline and pricing." },
  { title: "Build Together", description: "Track progress through agreed milestones." },
  { title: "Launch & Handover", description: "Receive the agreed deliverables and support details." },
];

/* ---------- About page ---------- */

export const aboutCapabilities = [
  { name: "Web & Mobile", description: "Websites, e-commerce stores and Android/iOS applications.", icon: Smartphone },
  { name: "UI/UX & Branding", description: "User interfaces, user experiences and brand identity.", icon: PenTool },
  { name: "AI & Emerging Tech", description: "AI software, machine learning, IoT and AR/VR.", icon: Cpu },
  { name: "Custom Software", description: "Business systems, CRM, databases and integrations.", icon: Database },
  { name: "Digital Growth", description: "SEO, digital marketing and social media management.", icon: TrendingUp },
  { name: "Learning & Projects", description: "Virtual internships and minor/major student project services.", icon: GraduationCap },
];

export const aboutAudiences = [
  { name: "Startups", description: "Build and develop digital products.", icon: Rocket },
  { name: "Local Businesses", description: "Establish an online presence and streamline operations.", icon: Store },
  { name: "Students", description: "Explore internships and project support.", icon: GraduationCap },
  { name: "Freelancers", description: "Access digital services for individual needs.", icon: Palette },
];

// Figures from the supplied company document — confirm they are current before going live.
export const aboutStats = [
  { value: "55+", label: "Happy Clients" },
  { value: "57+", label: "Projects Completed" },
];

export const aboutSteps: Step[] = [
  { title: "Understand", description: "Identify the problem, audience and requirements." },
  { title: "Plan & Design", description: "Define the solution and its experience." },
  { title: "Develop & Test", description: "Build and validate the product." },
  { title: "Deliver & Support", description: "Launch and agree on next steps for maintenance." },
];
