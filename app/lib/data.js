import {
  Brain,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Workflow,
  GitBranch,
  Lightbulb,
  LineChart,
  PenTool,
  Cpu,
  Rocket,
  ShieldCheck,
  Users,
  Sparkles,
  Bot,
  LayoutDashboard,
  ShoppingCart,
  Factory,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const heroCards = [
  { title: "AI Solutions",          subtitle: "Intelligent products",  icon: Brain,     accent: "from-brand-500 to-brand-700" },
  { title: "Software Development",  subtitle: "Scalable & robust",     icon: Code2,     accent: "from-accent-500 to-accent-700" },
  { title: "Cloud Engineering",     subtitle: "Secure & reliable",     icon: Cloud,     accent: "from-brand-400 to-accent-500" },
  { title: "UI/UX Design",          subtitle: "Designs that connect",  icon: PenTool,   accent: "from-accent-400 to-brand-500" },
  { title: "Data Analytics",        subtitle: "Data-driven growth",    icon: LineChart, accent: "from-brand-600 to-accent-600" },
];

export const technologies = [
  "OpenAI", "AWS", "Azure", "React", "Next.js",
  "Python", "Docker", "TypeScript", "Kubernetes", "PostgreSQL",
];

export const services = [
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    description:
      "Custom LLM integrations, predictive models, and intelligent automation that turn your data into a competitive edge.",
    icon: Brain,
    features: ["LLM & GenAI apps", "Predictive analytics", "Computer vision", "Model deployment"],
    accent: "from-brand-500 to-accent-500",
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Tailor-made platforms engineered for scale, security, and performance — built to fit your exact workflow.",
    icon: Code2,
    features: ["SaaS platforms", "API development", "System integration", "Legacy modernization"],
    accent: "from-accent-500 to-brand-500",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Fast, responsive, SEO-friendly web applications that represent your brand and convert visitors into customers.",
    icon: Globe,
    features: ["Next.js & React", "Headless CMS", "E-commerce", "Progressive web apps"],
    accent: "from-brand-400 to-brand-600",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps with smooth UX, offline support, and store-ready polish.",
    icon: Smartphone,
    features: ["iOS & Android", "React Native", "Flutter", "App store launch"],
    accent: "from-accent-400 to-accent-600",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Secure, scalable cloud architecture on AWS and Azure — designed for reliability and cost efficiency.",
    icon: Cloud,
    features: ["AWS & Azure", "Serverless", "Migration", "Cost optimization"],
    accent: "from-brand-500 to-accent-400",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    description:
      "Robust data pipelines, warehouses, and real-time streaming that make analytics fast and trustworthy.",
    icon: Database,
    features: ["ETL pipelines", "Data warehouses", "Real-time streaming", "Dashboards"],
    accent: "from-accent-500 to-brand-400",
  },
  {
    slug: "automation-solutions",
    title: "Automation Solutions",
    description:
      "Eliminate repetitive work with intelligent workflow automation and AI agents that run 24/7.",
    icon: Workflow,
    features: ["Workflow automation", "RPA", "AI agents", "Process mining"],
    accent: "from-brand-600 to-accent-500",
  },
  {
    slug: "devops-services",
    title: "DevOps Services",
    description:
      "CI/CD pipelines, infrastructure as code, and observability that ship faster with fewer incidents.",
    icon: GitBranch,
    features: ["CI/CD", "Kubernetes & Docker", "IaC (Terraform)", "Monitoring"],
    accent: "from-accent-400 to-brand-500",
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    description:
      "Strategic technology guidance — architecture reviews, digital transformation roadmaps, and team enablement.",
    icon: Lightbulb,
    features: ["Tech strategy", "Architecture audit", "Digital transformation", "Team training"],
    accent: "from-brand-500 to-accent-600",
  },
];

// TODO: replace with real numbers once we have them. Setting an empty array
// hides the Stats section everywhere it is used.
export const stats = [];

// TODO: add real client testimonials with permission (name, role, company, quote).
// Empty array hides the Testimonials section everywhere it is used.
export const testimonials = [];

export const faqs = [
  {
    question: "What kind of companies does Selinyx work with?",
    answer:
      "We partner with startups building their first product and with established businesses modernizing their tech. Whether you need an MVP or enterprise-scale software, we tailor our approach to your stage and goals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most MVPs ship in 6–12 weeks, while larger platforms run 3–6 months. After a short discovery phase we give you a clear timeline, milestones, and fixed checkpoints so there are no surprises.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every engagement includes a post-launch support window, and we offer flexible retainer plans for maintenance, monitoring, new features, and scaling as you grow.",
  },
  {
    question: "Can you integrate AI into our existing product?",
    answer:
      "Absolutely. We specialize in adding LLM-powered features, intelligent automation, and analytics to existing products — without forcing a rebuild.",
  },
  {
    question: "How do you handle security and data privacy?",
    answer:
      "Security is built in from day one. We follow industry best practices, encrypt data in transit and at rest, and can align delivery with SOC 2, GDPR, and HIPAA requirements when needed.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "We offer fixed-scope projects, monthly retainers, and dedicated team models. After understanding your needs, we recommend the most cost-effective structure and share transparent pricing upfront.",
  },
];

// "Solutions we build" — generalized capability examples used until we can
// publish real case studies with client permission and verified metrics.
export const projects = [
  {
    slug: "ai-chatbot-platform",
    title: "AI Chatbot Platforms",
    category: "AI & Machine Learning",
    description:
      "Multi-tenant conversational AI with retrieval-augmented generation, so support teams can deploy branded assistants trained on their own knowledge base.",
    tags: ["OpenAI", "Next.js", "Vector DB", "Python"],
    icon: Bot,
    accent: "from-brand-500 to-accent-500",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboards",
    category: "Data Engineering",
    description:
      "Real-time analytics suites that unify data from many sources into a single, lightning-fast dashboard with predictive insights and alerting.",
    tags: ["React", "ClickHouse", "AWS", "D3"],
    icon: LayoutDashboard,
    accent: "from-accent-500 to-brand-500",
  },
  {
    slug: "saas-product",
    title: "SaaS Products",
    category: "Custom Software",
    description:
      "End-to-end SaaS platforms with subscription billing, role-based access, and a polished onboarding flow — built from idea to launch.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
    icon: Rocket,
    accent: "from-brand-400 to-brand-600",
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platforms",
    category: "Web Development",
    description:
      "Headless commerce experiences with strong performance, personalized recommendations, and a seamless mobile checkout.",
    tags: ["Next.js", "Shopify", "Algolia", "Vercel"],
    icon: ShoppingCart,
    accent: "from-accent-400 to-accent-600",
  },
  {
    slug: "enterprise-automation",
    title: "Enterprise Automation",
    category: "Automation",
    description:
      "Intelligent workflow engines that automate document processing, approvals, and cross-system orchestration across departments.",
    tags: ["Python", "Azure", "RPA", "Kubernetes"],
    icon: Factory,
    accent: "from-brand-600 to-accent-500",
  },
];

export const coreValues = [
  {
    title: "Innovation First",
    description: "We stay on the edge of technology so your product never falls behind.",
    icon: Sparkles,
  },
  {
    title: "Client Obsession",
    description: "Your goals are our roadmap. We measure success by your outcomes, not our output.",
    icon: Users,
  },
  {
    title: "Engineering Excellence",
    description: "Clean, tested, scalable code is non-negotiable on every project we ship.",
    icon: Cpu,
  },
  {
    title: "Radical Transparency",
    description: "Clear timelines, honest updates, and no surprises — from kickoff to launch.",
    icon: ShieldCheck,
  },
];

export const whyChoose = [
  {
    title: "End-to-end expertise",
    description: "Strategy, design, engineering, and growth under one roof — no handoffs, no gaps.",
    icon: Workflow,
  },
  {
    title: "AI-native by default",
    description: "We embed intelligence into every product, not as an afterthought but as a foundation.",
    icon: Brain,
  },
  {
    title: "Built to scale",
    description: "Architecture that handles your first user and your millionth with equal grace.",
    icon: Rocket,
  },
  {
    title: "Senior talent only",
    description: "You work directly with seasoned engineers and designers — never juniors learning on your dime.",
    icon: ShieldCheck,
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$4k",
    cadence: "/ project",
    description: "Perfect for validating an idea with a focused MVP.",
    features: [
      "Discovery & scoping workshop",
      "Single-platform MVP",
      "UI/UX design included",
      "2 weeks post-launch support",
      "Email support",
    ],
    highlighted: false,
    cta: "Start small",
  },
  {
    name: "Growth",
    price: "$12k",
    cadence: "/ month",
    description: "A dedicated pod for fast-moving teams shipping continuously.",
    features: [
      "Dedicated cross-functional team",
      "AI & cloud engineering",
      "Unlimited revisions",
      "CI/CD & monitoring setup",
      "Priority support & weekly syncs",
    ],
    highlighted: true,
    cta: "Scale faster",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "Tailored engagements for complex, mission-critical systems.",
    features: [
      "Custom team & SLAs",
      "Security & compliance (SOC 2, HIPAA)",
      "Dedicated architect",
      "24/7 support & monitoring",
      "Quarterly strategy reviews",
    ],
    highlighted: false,
    cta: "Talk to sales",
  },
];

export const company = {
  name: "Selinyx",
  tagline: "We Build Digital Solutions That Drive Real Growth",
  email: "selinyxtech@gmail.com",
  phone: "+91 97156 65066",
  whatsapp: "919715665066",
  address: "Remote-first · Serving clients worldwide",
  social: {
    linkedin: "https://www.linkedin.com/in/selinyxtech/",
    twitter: "https://x.com/SELINYX_",
    github: "https://github.com/SelinyxTech",
    instagram: "https://www.instagram.com/selinyx_tech/",
  },
};

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "AI & Machine Learning", href: "/services#ai-machine-learning" },
      { label: "Software Development", href: "/services#custom-software-development" },
      { label: "Cloud Solutions", href: "/services#cloud-solutions" },
      { label: "Data Engineering", href: "/services#data-engineering" },
      { label: "DevOps Services", href: "/services#devops-services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "FAQ", href: "/#faq" },
      { label: "Support", href: "/contact" },
    ],
  },
];
