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
      { id: "contact-us", label: "Contact Us", href: "/contact/contact-us" },
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
