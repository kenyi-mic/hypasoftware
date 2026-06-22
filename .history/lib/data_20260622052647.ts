import { TeamMember } from "@/types/about";
import { SupportTopic } from "@/types/contact";
import { Stat, Testimonial } from "@/types/home";
import { NavItem } from "@/types/navigation";

export const navigationItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
    label: "About",
    dropdown: [
      { id: "who-we-are", label: "Who We Are", href: "/about/who-we-are" },
      { id: "our-team", label: "Our Team", href: "/about/our-team" },
    ],
  },
  { id: "projects", label: "Our Projects", href: "/project" },
  {
    id: "news",
    label: "News",
    dropdown: [
      { id: "blog", label: "Blog", href: "/news/blog" },
      { id: "innovation", label: "New Innovations", href: "/news/innovations" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    dropdown: [
      { id: "support", label: "Support", href: "/contact/support" },
      { id: "contact", label: "Contact Us", href: "/contact/contact" },
    ],
  },
  { id: "faq", label: "FAQ", href: "/faq" },
];

export const knowledgeBase = {
  greetings: {
    patterns: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "howdy",
    ],
    responses: [
      "Hello! Welcome to Hypasoftware support. How can I help you today?",
      "Hi there! I'm here to assist you with anything about our educational solutions.",
      "Hey! Great to see you. What can I help you with today?",
    ],
  },
  pricing: {
    patterns: [
      "price",
      "cost",
      "how much",
      "pricing",
      "fee",
      "subscription",
      "plan",
      "currency",
      "dollar",
      "usd",
    ],
    responses: [
      "Our pricing starts at $50/month for small schools and scales based on student count and features. We offer custom quotes for larger institutions.",
      "We have flexible pricing plans based on your school's size and needs. Basic plans start from $50/month, while enterprise solutions are customized.",
      "Pricing varies by the number of students and features needed. We accept multiple currencies including USD, EUR, and local African currencies where available.",
    ],
    quickReplies: [
      { text: "See pricing plans", payload: "show_pricing" },
      { text: "Get a custom quote", payload: "custom_quote" },
      { text: "Compare features", payload: "compare_features" },
    ],
  },
  location: {
    patterns: [
      "where",
      "location",
      "address",
      "office",
      "juba",
      "south sudan",
      "africa",
      "visit",
    ],
    responses: [
      "Our main office is in Tongping, Juba, South Sudan, near the American Residence. We serve schools across Africa.",
      "We're based in Juba, South Sudan, but our cloud-based solutions work anywhere in Africa and beyond.",
      "Headquarters: Tongping area, Juba, South Sudan. We have partners across East Africa.",
    ],
  },
  education: {
    patterns: [
      "education",
      "learning",
      "teaching",
      "school",
      "student",
      "teacher",
      "classroom",
      "curriculum",
    ],
    responses: [
      "We specialize in educational technology solutions for African schools - from school management to digital learning platforms.",
      "Our tools help schools manage administration, engage students, and connect with parents across Africa.",
      "We provide comprehensive EdTech solutions tailored for African educational contexts.",
    ],
    quickReplies: [
      { text: "School Management", payload: "school_management" },
      { text: "Learning Platform", payload: "learning_platform" },
      { text: "Teacher Tools", payload: "teacher_tools" },
    ],
  },
  products: {
    patterns: [
      "product",
      "software",
      "solution",
      "platform",
      "system",
      "app",
      "application",
    ],
    responses: [
      "We offer: School Manager Pro, LearnAfrica Platform, ParentConnect, and EduAnalytics. Which interests you?",
      "Our main products include school management systems, learning platforms, and parent engagement tools.",
      "We have solutions for school administration, digital learning, and parent communication.",
    ],
  },
  technical: {
    patterns: [
      "technical",
      "support",
      "help",
      "issue",
      "problem",
      "error",
      "bug",
      "not working",
    ],
    responses: [
      "I can help with technical issues. Please describe the problem, or I can connect you with our technical team.",
      "For technical support, please provide details about the issue you're experiencing.",
      "Let me help troubleshoot. What specific problem are you facing?",
    ],
  },
  setup: {
    patterns: [
      "setup",
      "install",
      "configure",
      "get started",
      "implementation",
    ],
    responses: [
      "Setup typically takes 1-2 weeks. We provide full implementation support and training.",
      "Our team will guide you through setup, data migration, and staff training.",
      "We offer complete implementation services including data setup and user training.",
    ],
  },
  features: {
    patterns: ["feature", "what can", "capability", "function", "tool"],
    responses: [
      "Key features: attendance tracking, grade management, parent communication, online learning, and analytics.",
      "We offer comprehensive features for administration, teaching, and parent engagement.",
      "Our platform includes management tools, learning resources, and communication features.",
    ],
  },
  agent: {
    patterns: [
      "human",
      "agent",
      "person",
      "representative",
      "talk to someone",
      "real person",
      "support agent",
    ],
    responses: [
      "I can connect you with a human agent. Would you like me to transfer you to our support team?",
      "I understand you'd like to speak with a person. Shall I connect you with one of our support agents?",
      "Happy to connect you with our human support team. Should I initiate the transfer?",
    ],
  },
  payment: {
    patterns: [
      "payment",
      "pay",
      "bill",
      "invoice",
      "billing",
      "credit card",
      "bank transfer",
      "mobile money",
    ],
    responses: [
      "We accept bank transfers, credit cards, and mobile money payments in supported regions.",
      "Payment options include bank transfer, credit card, and mobile money where available.",
      "We offer flexible payment methods including electronic transfers and mobile payments.",
    ],
  },
  default: {
    responses: [
      "I understand you're asking about: {input}. Could you provide more details so I can help better?",
      "Thanks for your question about {input}. Let me connect you with the right information.",
      "I want to make sure I help you properly with {input}. Could you elaborate a bit more?",
    ],
    quickReplies: [
      { text: "Get pricing info", payload: "pricing" },
      { text: "Technical support", payload: "technical" },
      { text: "Product features", payload: "features" },
      { text: "Talk to human agent", payload: "human_agent" },
    ],
  },
};

export type NavigationItem = {
  name: string; // This property is required
  href: string;
  icon?: React.ComponentType;
  children?: NavigationItem[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "michael",
    name: "Michael Henry",
    role: "Founder & CEO",
    bio: "Passionate educator and technologist with 10+ years experience in African educational systems. Founded Hypasoftware to bridge the technology gap in African education.",
    image: "/team/michael.jpg",
    social: {
      linkedin: "https://linkedin.com/in/cmichael-kenyi",
      twitter: "https://twitter.com/michael_kenyi",
      email: "michael@hypasoftware.com",
    },
    expertise: [
      "Educational Technology",
      "Strategic Leadership",
      "African EdTech",
    ],
  },
  {
    id: "zacharia",
    name: "Zacharia Moses",
    role: "Chief Technology Officer",
    bio: "Software engineer with expertise in building scalable solutions for emerging markets. Leads our technical vision and product development.",
    image: "/team/zacharia.jpg",
    social: {
      linkedin: "https://linkedin.com/in/zacharia-moses",
      twitter: "https://twitter.com/zacharia_moses",
      email: "zacharia@hypasoftware.com",
    },
    expertise: [
      "Software Architecture",
      "Cloud Infrastructure",
      "Mobile Development",
    ],
  },
  {
    id: "garang",
    name: "Luka Garang",
    role: "Chief Financial Officer",
    bio: "Experienced finance professional with a background in managing financial operations for startups in Africa. Oversees our financial strategy and sustainability.",
    image: "/team/luka-garang.jpg",
    social: {
      linkedin: "https://linkedin.com/in/luka-garang",
      email: "luka@hypasoftware.com",
    },
    expertise: [
      "Managing the finance flow of the company",
      "Business strategy",
      "Business Administration",
    ],
  },
  {
    id: "lugala",
    name: "Isaac Lugala",
    role: "Product Manager",
    bio: "User experience expert focused on creating intuitive educational tools that work seamlessly in African contexts.",
    image: "/team/isaac-lugala.jpg",
    social: {
      linkedin: "https://linkedin.com/in/isaac-lugala",
      twitter: "https://twitter.com/isaac_lugala",
      email: "isaac@hypasoftware.com",
    },
    expertise: ["Product Strategy", "User Research", "UX Design"],
  },
  {
    id: "david",
    name: "David Okafor",
    role: "Lead Developer",
    bio: "Full-stack developer passionate about creating robust, offline-first applications for schools with limited internet access.",
    image: "/team/david-okafor.jpg",
    social: {
      linkedin: "https://linkedin.com/in/david-okafor",
      email: "david@hypasoftware.com",
    },
    expertise: ["React/Next.js", "Node.js", "Offline-First Design"],
  },
  {
    id: "danny",
    name: "Suzan Danny",
    role: "Community Manager",
    bio: "Builds and nurtures relationships with schools, teachers, and parents across our African markets.",
    image: "/team/suzan-danny.jpg",
    social: {
      linkedin: "https://linkedin.com/in/suzan-danny",
      email: "suzan@hypasoftware.com",
    },
    expertise: [
      "Community Engagement",
      "Customer Success",
      "Partnership Development",
    ],
  },
];

export const advisoryBoard = [
  {
    id: "prof-adebayo",
    name: "Prof. Adebayo Johnson",
    role: "Educational Advisor",
    affiliation: "University of Lagos",
    bio: "Renowned education specialist with 30+ years experience in African educational policy and reform.",
  },
  {
    id: "dr-kamau",
    name: "Dr. Wanjiku Kamau",
    role: "Technology Advisor",
    affiliation: "African Tech Innovation Hub",
    bio: "Pioneer in African technology innovation and digital transformation across the continent.",
  },
  {
    id: "ms-bello",
    name: "Ms. Fatima Bello",
    role: "Business Advisor",
    affiliation: "Pan-African Ventures",
    bio: "Seasoned entrepreneur and investor focused on sustainable business models in emerging markets.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "principal-daniel",
    quote:
      "Hypasoftware has revolutionized how our school operates. The management system saved us 20+ hours weekly in administrative tasks, allowing our staff to focus on what matters most - student success.",
    author: "David H",
    role: "Principal, Royal International School",
    avatar: "/avatars/principal-david.jpg",
  },
  {
    id: "teacher-johnson",
    quote:
      "The teacher tools have transformed my classroom. I can easily track student progress, create engaging lessons, and communicate with parents seamlessly. It's like having a teaching assistant!",
    author: "Michael Johnson",
    role: "Science Teacher, Riverside Academy",
    avatar: "/avatars/teacher-johnson.jpg",
  },
  {
    id: "parent-davis",
    quote:
      "As a working parent, staying connected with my child's education was challenging. The parent portal gives me real-time updates and peace of mind. It's incredibly user-friendly!",
    author: "Jennifer Davis",
    role: "Parent, Maplewood Elementary",
    avatar: "/avatars/parent-davis.jpg",
  },
];

export const stats: Stat[] = [
  {
    id: "schools",
    number: "200",
    suffix: "+",
    label: "Schools Empowered",
  },
  {
    id: "teachers",
    number: "25",
    suffix: "K+",
    label: "Teachers Supported",
  },
  {
    id: "students",
    number: "1",
    suffix: "M+",
    label: "Students Impacted",
  },
  {
    id: "countries",
    number: "3",
    suffix: "+",
    label: "Countries Served",
  },
];

export const supportTopics: SupportTopic[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Setup guides and initial configuration for new users",
    icon: "🚀",
    questions: [
      "How do I create my school account?",
      "What are the system requirements?",
      "How to import student data?",
      "Setting up teacher accounts",
      "Configuring school calendar",
    ],
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "Troubleshooting and technical assistance",
    icon: "🔧",
    questions: [
      "Login issues and password reset",
      "System performance optimization",
      "Browser compatibility",
      "Mobile app installation",
      "Data backup and recovery",
    ],
  },
  {
    id: "billing-pricing",
    title: "Billing & Pricing",
    description: "Payment, subscription, and pricing questions",
    icon: "💰",
    questions: [
      "Understanding pricing plans",
      "Upgrading or downgrading subscription",
      "Payment method issues",
      "Invoice and receipt requests",
      "Cancellation and refund policy",
    ],
  },
  {
    id: "features-guides",
    title: "Features & Guides",
    description: "Learn how to use specific features and tools",
    icon: "📚",
    questions: [
      "Using the gradebook system",
      "Parent communication tools",
      "Attendance tracking features",
      "Report generation and analytics",
      "Customizing the platform",
    ],
  },
  {
    id: "integration",
    title: "Integration & API",
    description: "Connecting with other systems and custom development",
    icon: "🔗",
    questions: [
      "API documentation access",
      "Third-party integrations",
      "Data export options",
      "Single Sign-On (SSO) setup",
      "Custom development services",
    ],
  },
  {
    id: "offline-features",
    title: "Offline Features",
    description: "Using Hypasoftware without internet connectivity",
    icon: "📱",
    questions: [
      "Setting up offline mode",
      "Data synchronization process",
      "Offline grade entry",
      "Mobile app offline capabilities",
      "Troubleshooting sync issues",
    ],
  },
];
