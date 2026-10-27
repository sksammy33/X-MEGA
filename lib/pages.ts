import {
  Award,
  Blocks,
  BrainCircuit,
  Briefcase,
  ClipboardList,
  Code2,
  Compass,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Layers,
  Lightbulb,
  MapPin,
  Megaphone,
  MessagesSquare,
  Package,
  PenTool,
  Presentation,
  School,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  TabletSmartphone,
  Users,
  Utensils,
  Wallet,
  Wifi,
} from "lucide-react";
import type { Faq, Step } from "./content";
import type { Field } from "@/components/EnquiryForm";

/* ======================= Internships ======================= */

export const internshipTracks = [
  {
    name: "Web Development",
    icon: Code2,
    skills: ["HTML, CSS & JavaScript", "React / Next.js", "APIs & databases"],
    outcome: "Build and deploy a responsive, full-stack web application.",
  },
  {
    name: "Android Development",
    icon: Smartphone,
    skills: ["Kotlin / Java", "Android Studio", "Material Design"],
    outcome: "Ship a working Android app with real data.",
  },
  {
    name: "iOS Development",
    icon: TabletSmartphone,
    skills: ["Swift & SwiftUI", "Xcode", "App architecture"],
    outcome: "Create a polished iOS app from design to build.",
  },
  {
    name: "UI/UX Design",
    icon: PenTool,
    skills: ["User research", "Wireframes & prototypes", "Figma design systems"],
    outcome: "Design a complete, tested product interface.",
  },
  {
    name: "AI / Machine Learning",
    icon: BrainCircuit,
    skills: ["Python & data handling", "ML models", "Model evaluation"],
    outcome: "Train and present a data-driven ML solution.",
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    skills: ["SEO fundamentals", "Social media strategy", "Campaign analytics"],
    outcome: "Plan and measure a real marketing campaign.",
  },
  {
    name: "Software Testing / QA",
    icon: ShieldCheck,
    skills: ["Test cases & bug reports", "Manual & automated testing", "QA workflows"],
    outcome: "Test an application end to end and report findings.",
  },
];

// From the supplied content — duration is a proposal; confirm before publishing.
export const programStructure = [
  { label: "Duration", value: "4–12 weeks", icon: Award },
  { label: "Mode", value: "Online", icon: Laptop },
  { label: "Deliverables", value: "Practice tasks + capstone project", icon: ClipboardList },
  { label: "Support", value: "Mentor guidance & completion certificate", icon: HeartHandshake },
];

export const eligibility = [
  "Engineering students",
  "BCA / MCA",
  "BSc / MSc IT",
  "Diploma students",
  "Fresh graduates",
];

export const internshipSteps: Step[] = [
  { title: "Apply", description: "Choose a track and submit your application." },
  { title: "Onboarding", description: "Get your program plan, tools and mentor introduction." },
  { title: "Learn & Build", description: "Complete practical tasks and build your capstone." },
  { title: "Evaluation", description: "Present your project for review and feedback." },
  { title: "Completion", description: "Receive your completion certificate." },
];

export const internshipFaqs: Faq[] = [
  {
    q: "Who is eligible to apply?",
    a: "Engineering, BCA/MCA, BSc/MSc IT and diploma students, as well as fresh graduates who want practical, project-based experience.",
  },
  { q: "How long does an internship last?", a: "Programs are planned for 4 to 12 weeks, depending on the track and the scope of your capstone project." },
  {
    q: "Is there a fee?",
    a: "Program details, including any fees, are shared during the application process. We'll confirm everything with you before you begin.",
  },
  { q: "What is the schedule like?", a: "Programs run online, so you can work from anywhere. Your mentor will agree check-ins and deadlines with you during onboarding." },
  { q: "Will I receive a certificate?", a: "Yes. Interns who complete their tasks and capstone project receive a completion certificate." },
  { q: "How do I apply?", a: "Fill in the application form on this page. We'll review it and get back to you with the next steps." },
];

export const internshipFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" },
  { name: "track", label: "Preferred track", type: "select", required: true, options: internshipTracks.map((t) => t.name) },
  { name: "college", label: "College / University", required: true },
  {
    name: "course",
    label: "Course & year",
    placeholder: "e.g. B.Tech CSE, 3rd year",
    required: true,
  },
  { name: "portfolio", label: "Portfolio / GitHub / LinkedIn", type: "url", placeholder: "https://", full: true },
  { name: "message", label: "Why do you want to join this track?", type: "textarea" },
];

/* ======================= Student projects ======================= */

export const projectCategories = [
  { name: "Minor Projects", description: "Focused projects with a defined scope.", icon: Layers },
  { name: "Major Projects", description: "More comprehensive final-year projects.", icon: GraduationCap },
  { name: "AI / ML Projects", description: "Data-driven applications and intelligent systems.", icon: BrainCircuit },
  { name: "Web & Mobile Apps", description: "Applications, portals and management systems.", icon: Globe },
  { name: "IoT Projects", description: "Connected devices and automation concepts.", icon: Wifi },
  { name: "Emerging Tech", description: "Blockchain, AR/VR and related concepts.", icon: Blocks },
];

export const helpWith = [
  { name: "Topic Selection", icon: Lightbulb },
  { name: "Technical Planning", icon: Compass },
  { name: "Implementation Guidance", icon: Code2 },
  { name: "Documentation", icon: FileText },
  { name: "Presentations", icon: Presentation },
  { name: "Viva Preparation", icon: MessagesSquare },
];

export const projectIdeas = [
  { name: "AI Resume Screening", tag: "AI / ML" },
  { name: "Crop Disease Detection", tag: "AI / ML" },
  { name: "Smart Attendance System", tag: "Web / IoT" },
  { name: "Online Examination Portal", tag: "Web" },
  { name: "Personal Expense Tracker", tag: "Mobile" },
  { name: "Smart Parking System", tag: "IoT" },
];

export const projectSteps: Step[] = [
  { title: "Requirement Discussion", description: "Understand your course, interests and institution guidelines." },
  { title: "Topic Finalization", description: "Choose a topic you can build and confidently explain." },
  { title: "Scope & Plan", description: "Agree modules, technologies and milestones." },
  { title: "Development Support", description: "Guided implementation, reviews and problem-solving." },
  { title: "Testing & Demo Prep", description: "Test the project and prepare for your demonstration." },
];

// No prices yet — packages describe scope only until pricing is confirmed.
export const projectPackages = [
  {
    name: "Minor Project Package",
    description: "For focused, semester-level projects with a clear scope.",
    points: ["Topic guidance", "Implementation support", "Basic documentation", "Demo preparation"],
    featured: false,
  },
  {
    name: "Major Project Package",
    description: "For comprehensive final-year projects.",
    points: ["Topic & feasibility planning", "Full development guidance", "Complete documentation", "Presentation & viva prep"],
    featured: true,
  },
  {
    name: "Custom Scope",
    description: "For research-based, interdisciplinary or unusual requirements.",
    points: ["Requirement workshop", "Tailored plan", "Flexible milestones", "Support as agreed"],
    featured: false,
  },
];

export const studentProjectFaqs: Faq[] = [
  { q: "Which technologies can I use?", a: "We support common stacks for web, mobile, AI/ML, IoT and emerging tech. We'll recommend what fits your topic and your institution's requirements." },
  { q: "How long does a project take?", a: "Timelines depend on the scope and your submission dates. We plan milestones together during the scope discussion." },
  { q: "What deliverables do I receive?", a: "Deliverables are agreed per package — typically guidance through implementation, documentation support and demo preparation." },
  { q: "How is pricing decided?", a: "Pricing depends on scope and package. We share it after understanding your requirements — no hidden costs." },
  { q: "Will I be able to explain my project?", a: "That's the goal. We guide you so you understand how your project works and can present and defend it independently." },
];

export const studentProjectFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" },
  { name: "college", label: "College / University", required: true },
  { name: "type", label: "Project type", type: "select", required: true, options: ["Minor Project", "Major Project", "Custom Scope"] },
  { name: "area", label: "Area of interest", type: "select", options: projectCategories.slice(2).map((c) => c.name) },
  { name: "deadline", label: "Submission deadline", placeholder: "e.g. April 2027" },
  { name: "technology", label: "Preferred technology (if any)" },
  { name: "message", label: "Tell us about your idea or institution requirements", type: "textarea" },
];

/* ======================= Local business ======================= */

export const businessTypes = [
  { name: "Retail Shops", description: "Websites, catalogs and inventory tools.", icon: ShoppingCart, image: "/images/lb-retail.jpg" },
  { name: "Restaurants & Cafés", description: "Digital menus, ordering and booking.", icon: Utensils, image: "/images/lb-restaurant.jpg" },
  { name: "Clinics & Salons", description: "Appointment systems and websites.", icon: Stethoscope, image: "/images/lb-clinic.jpg" },
  { name: "Schools & Colleges", description: "Attendance, fees and notices.", icon: School, image: "/images/lb-school.jpg" },
];

export const localServices = [
  { name: "Business websites & landing pages", icon: Globe },
  { name: "Google Business Profile & local SEO", icon: MapPin },
  { name: "WhatsApp catalogs & ordering setup", icon: MessagesSquare },
  { name: "Billing & inventory software", icon: Package },
  { name: "Booking & appointment systems", icon: ClipboardList },
  { name: "Social media setup & digital menus", icon: Megaphone },
];

export const localSteps: Step[] = [
  { title: "Understand the Business", description: "How you work today, your customers and your goals." },
  { title: "Identify the Solution", description: "Recommend what will actually make a difference." },
  { title: "Agree Scope & Budget", description: "A clear plan and cost before work begins." },
  { title: "Implement", description: "Build, set up and test everything." },
  { title: "Agreed Support", description: "Handover and support on agreed terms." },
];

export const localWhy = [
  { title: "Practical Scope", description: "Solutions sized for how your business really runs.", icon: Compass },
  { title: "Budget-Conscious", description: "Options that match what you want to spend.", icon: Wallet },
  { title: "Staff Handover", description: "We show your team how to use what we build.", icon: Users },
  { title: "Agreed Support", description: "Clear support terms after launch.", icon: HeartHandshake },
];

export const localFaqs: Faq[] = [
  { q: "I don't have a website yet. Where do I start?", a: "Start with a consultation. We'll look at your business and recommend the simplest setup that gets customers finding you — often a website and Google Business Profile." },
  { q: "Can you improve my existing website?", a: "Yes. We can redesign, speed up, fix or extend an existing website." },
  { q: "How much does it cost?", a: "It depends on what you need. We agree scope and budget with you before any work begins." },
  { q: "Will my staff be able to use it?", a: "Yes — handover and training for your team is part of how we work." },
  { q: "Do you provide support after setup?", a: "Support is agreed upfront, so you know exactly what's covered after launch." },
];

export const localBusinessFields: Field[] = [
  { name: "name", label: "Your name", required: true },
  { name: "business", label: "Business name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
  { name: "type", label: "Business type", type: "select", required: true, options: [...businessTypes.map((b) => b.name), "Other"] },
  { name: "service", label: "Required service", type: "select", options: [...localServices.map((s) => s.name), "Not sure yet"] },
  { name: "website", label: "Existing website (if any)", type: "url", placeholder: "https://" },
  { name: "budget", label: "Budget range", type: "select", options: ["Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹2,00,000", "Above ₹2,00,000", "Not sure yet"] },
  { name: "message", label: "What would you like to improve?", type: "textarea" },
];

/* ======================= Careers ======================= */

// Keep claims verifiable — edit these to match the real XMEGA culture before launch.
export const careerWhy = [
  { title: "Real Projects", description: "Work on products for startups, local businesses and students.", icon: Briefcase },
  { title: "Learning Culture", description: "Grow your skills across design, development and AI.", icon: Lightbulb },
  { title: "Flexible Work", description: "Work arrangements discussed openly during hiring.", icon: Laptop },
  { title: "Growth Support", description: "Feedback and opportunities to take on more.", icon: Award },
];

export const careerTeams = [
  { name: "Development", icon: Code2 },
  { name: "UI/UX Design", icon: PenTool },
  { name: "AI / ML", icon: Cpu },
  { name: "Quality Assurance", icon: ShieldCheck },
  { name: "Marketing", icon: Megaphone },
];

export type Position = {
  role: string;
  team: string;
  experience: string;
  mode: string;
  responsibilities: string[];
  skills: string[];
};

// Add only roles that are genuinely open. An empty list shows the "no openings" state.
export const openPositions: Position[] = [];

export const hiringSteps: Step[] = [
  { title: "Application", description: "Send your details, resume and portfolio." },
  { title: "Screening", description: "We review your experience against the role." },
  { title: "Interview / Assessment", description: "A conversation and, where relevant, a practical task." },
  { title: "Decision", description: "We share the outcome and next steps." },
];

export const careerFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  {
    name: "role",
    label: "Role / team of interest",
    type: "select",
    required: true,
    options: [...openPositions.map((p) => p.role), ...careerTeams.map((t) => `${t.name} — future opening`)],
  },
  { name: "experience", label: "Experience", type: "select", options: ["Fresher", "1–2 years", "3–5 years", "5+ years"] },
  { name: "resume", label: "Resume link", type: "url", placeholder: "Google Drive / Dropbox link", required: true },
  { name: "portfolio", label: "Portfolio / GitHub / LinkedIn", type: "url", placeholder: "https://", full: true },
  { name: "message", label: "Why XMEGA?", type: "textarea" },
];

/* ======================= Contact ======================= */

export const contactSteps: Step[] = [
  { title: "We Review", description: "Your enquiry is read by the team." },
  { title: "We Reach Out", description: "We contact you through your preferred method." },
  { title: "We Discuss", description: "A conversation about your goals, scope and options." },
  { title: "Next Steps", description: "A clear proposal or recommendation." },
];

export const contactFaqs: Faq[] = [
  { q: "What kind of projects do you take on?", a: "Websites, mobile apps, UI/UX and branding, AI and custom software, e-commerce and digital marketing — plus internships and student project guidance." },
  { q: "How is pricing decided?", a: "Based on scope. We agree the scope, timeline and cost with you before any work begins." },
  { q: "Can I start with a small project?", a: "Yes. Our freelance engagement is designed for smaller projects and individual tasks." },
  { q: "Do you offer support after delivery?", a: "Yes — support and maintenance are agreed upfront so you know exactly what's covered." },
  { q: "Is the first consultation free?", a: "Share your requirements and we'll confirm consultation details when we get in touch." },
];

export const contactFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" },
  {
    name: "category",
    label: "Service category",
    type: "select",
    required: true,
    options: [
      "Web Development",
      "Mobile App Development",
      "UI/UX & Branding",
      "AI & Custom Software",
      "E-commerce",
      "Digital Marketing & SEO",
      "Local Business Solutions",
      "Internships",
      "Student Projects",
      "Other",
    ],
  },
  { name: "budget", label: "Budget range", type: "select", options: ["Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹2,00,000", "Above ₹2,00,000", "Not sure yet"] },
  { name: "method", label: "Preferred contact method", type: "select", options: ["Email", "Phone call", "WhatsApp"] },
  { name: "message", label: "Project details", type: "textarea", required: true, placeholder: "What are you planning, and what challenge are you facing?" },
];

