import {
  Code2,
  Workflow,
  Bot,
  ClipboardCheck,
  Database,
  type LucideIcon,
} from "lucide-react";
// Case-study images are served statically from /public/case-studies.
const drugstoreChatbot = "/case-studies/drugstore-hasselt-chatbot.png";
const barhamDental = "/case-studies/barham-dental.png";
const cityDentalCare = "/case-studies/city-dental-care.png";
const helplystack = "/case-studies/helplystack.png";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications built with a modern React frontend and a robust Node.js backend. Fast, scalable, and a pleasure to use.",
    points: [
      "React + TypeScript SPAs with Redux Toolkit state management",
      "Node.js / Express REST APIs and database integration",
      "Responsive, accessible UI with clean component architecture",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation & Agent Workflows",
    description:
      "Hands-off business automations that connect your tools and let AI agents handle the repetitive work, 24/7.",
    points: [
      "n8n automation workflows across 100+ apps and APIs",
      "Autonomous AI agents for lead-gen, outreach & ops",
      "Webhook, CRM and email pipeline integrations",
    ],
  },
  {
    icon: Bot,
    title: "Chatbot & Voicebot Development",
    description:
      "Conversational assistants that answer questions, qualify leads, and book appointments through chat or voice.",
    points: [
      "Website & WhatsApp chatbots with rich context",
      "Voicebots for inbound/outbound call handling",
      "Knowledge-grounded answers from your own content",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "AI Evaluation & Review",
    description:
      "Make sure your AI features are accurate, safe, and consistent before they reach your customers.",
    points: [
      "Output quality scoring and prompt evaluation",
      "Hallucination, bias & edge-case review",
      "Iterative prompt and pipeline refinement",
    ],
  },
  {
    icon: Database,
    title: "RAG Systems with Python",
    description:
      "Retrieval-Augmented Generation pipelines that let AI answer questions grounded in your private knowledge base.",
    points: [
      "Document ingestion, chunking & vector embeddings",
      "Semantic search over your docs with Python",
      "Grounded, citation-backed AI responses",
    ],
  },
];

export const PROCESS_MINI = [
  "Discover",
  "Design",
  "Build",
  "Automate",
  "Deliver",
];

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  accent: string; // tailwind gradient classes for the thumbnail
  metric?: { value: string; label: string };
  url?: string;
  image?: string; // optional real screenshot used as thumbnail / modal header
  imageAlt?: string;
  problem: string;
  solution: string;
  tools: string[];
  result: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "drugstore-hasselt-chatbot",
    title: "RAG-Powered Support Chatbot for Drugstore Hasselt",
    category: "AI Engineering",
    summary:
      "An AI chatbot for Drugstore Hasselt's website that answers customer questions accurately using Retrieval-Augmented Generation (RAG), grounded in the store's own content instead of generic, hallucinated answers, available 24/7.",
    tags: ["AI Engineering", "RAG", "Python", "NLP"],
    accent: "from-fuchsia-500/30 to-purple-600/30",
    metric: { value: "24/7", label: "Grounded AI answers" },
    image: drugstoreChatbot,
    imageAlt: "RAG chatbot built for Drugstore Hasselt",
    problem:
      "Drugstore Hasselt's website received recurring customer questions about products, usage, availability, and store information. Repetitive queries consumed staff time, visitors outside business hours got no immediate help, and off-the-shelf chatbots tend to hallucinate and can't answer store-specific questions.",
    solution:
      "I built a RAG-based chatbot in Python that grounds every answer in the store's own knowledge base. It ingests and chunks the store's content (product info, FAQs, store details), generates embeddings stored in a vector database for semantic search, retrieves the most relevant chunks for each question (top-k retrieval), and passes that context to an LLM to generate an accurate, on-brand answer. The assistant is integrated into the website as a chat widget.",
    tools: [
      "Python",
      "RAG architecture",
      "Text embeddings",
      "Vector database",
      "LLM",
    ],
    result:
      "Customers get instant, store-specific answers 24/7, repetitive questions reaching staff dropped, and grounding responses in real content means far fewer hallucinations than a generic chatbot.",
  },
  {
    id: "helplystack",
    title: "Helplystack: Community Support Platform",
    category: "Full-Stack Product",
    summary:
      "A complete community support ecosystem connecting learners, developers, and mentors in real time, combining Q&A, live 1-on-1 mentorship, and a 24/7 AI assistant in one platform. Built end to end.",
    tags: ["React", "Firebase", "Tailwind CSS", "Full-Stack"],
    accent: "from-sky-500/30 to-indigo-600/30",
    metric: { value: "3-in-1", label: "Q&A, mentorship & AI" },
    image: helplystack,
    imageAlt: "Helplystack community support platform landing page",
    problem:
      "Learners and developers often get stuck waiting on slow forum replies, can't find a mentor exactly when they need one, and bounce between separate tools for Q&A, mentorship, and AI help.",
    solution:
      "I built Helplystack end to end: role-based onboarding (Need Help / Can Help / Both), a rich Q&A feed with screenshots, code files and urgency levels, voice notes in comment threads, live 1-on-1 mentorship booking, a 24/7 AI assistant for debugging and code generation, a trust-score system, and gamification with streaks, badges and leaderboards. Built with React + Vite and Firebase, containerized with Docker and deployed to Google Cloud Run.",
    tools: ["React + Vite", "Firebase", "Tailwind CSS", "Docker", "Google Cloud Run"],
    result:
      "A single platform where learners get help fast, mentors can offer time and build trust, and an AI assistant fills the gaps 24/7, all wrapped in a gamified experience that keeps the community coming back.",
  },
  {
    id: "barham-dental",
    title: "Barham Medical & Dental Care",
    category: "SEO & Web Development",
    summary:
      "Built the clinic's website, then ran a data-driven Local SEO and Google Business Profile strategy for this DHA Phase 2, Karachi dental clinic, growing its local visibility month over month.",
    tags: ["SEO", "Local SEO", "Google Business Profile", "Web Development"],
    accent: "from-cyan-500/30 to-blue-600/30",
    metric: { value: "+120.7%", label: "Local visibility YoY" },
    url: "https://barhamdental.com",
    image: barhamDental,
    imageAlt: "Barham Medical & Dental Care clinic website",
    problem:
      "The clinic needed a credible online presence and a steady stream of new-patient inquiries in a competitive DHA Phase 2 market, with no single owner of the website and local marketing.",
    solution:
      "I developed the clinic's website, then layered on on-page and technical SEO with schema markup, optimized the Google Business Profile with keyword-rich services and review engineering, and linked Google Ads with GA4 so every inquiry could be tracked and improved.",
    tools: [
      "Web Development",
      "On-page & Technical SEO",
      "Schema Markup",
      "Google Business Profile",
      "Google Ads",
      "GA4",
    ],
    result:
      "A +120.7% increase in local visibility year over year, 1,011+ Google Business Profile interactions, and consistent month-on-month growth that peaked in March 2026.",
  },
  {
    id: "city-dental-care",
    title: "City Dental Care: Appointment Booking Website",
    category: "Frontend / Web Development",
    summary:
      "A clean, fully responsive appointment-booking website for a dental clinic with a smooth, modern UI and scroll animations, so patients can request visits in just a few clicks.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS"],
    accent: "from-teal-500/30 to-emerald-600/30",
    metric: { value: "24/7", label: "Online booking" },
    image: cityDentalCare,
    imageAlt: "City Dental Care appointment booking website",
    problem:
      "Patients could only book by calling during office hours, which created friction, long phone queues, and missed appointment opportunities after hours.",
    solution:
      "I designed and built a fully responsive website with an appointment-booking flow, clear service sections, and a smooth, modern UI enhanced with AOS (Animate On Scroll) for polished entrance animations.",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS"],
    result:
      "Patients can request appointments 24/7 from any device, cutting down phone load and capturing bookings around the clock.",
  },
  {
    id: "support-chatbot",
    title: "AI Chatbot for Customer Support",
    category: "AI / Chatbot",
    summary:
      "A knowledge-grounded support assistant that answers customer questions instantly, deflects repetitive tickets, and hands off to a human only when needed.",
    tags: ["AI Agent", "RAG", "Python", "Chatbot"],
    accent: "from-indigo-500/30 to-violet-600/30",
    metric: { value: "~68%", label: "Tickets deflected" },
    problem:
      "A growing support inbox meant slow first-response times (often 6+ hours) and a small team buried under repetitive, easily-answered questions.",
    solution:
      "I built a RAG-powered chatbot trained on the company's help docs, FAQs and policies, with intent detection, conversation memory, and smart escalation to a human agent for complex or sensitive cases.",
    tools: ["Python", "RAG pipeline", "Vector DB", "LLM API", "Webhooks"],
    result:
      "Around 68% of common questions resolved instantly, first-response time cut from hours to seconds, and the support team freed to focus on high-value conversations.",
  },
  {
    id: "lead-gen-automation",
    title: "n8n Automation for Lead Generation",
    category: "Automation",
    summary:
      "An end-to-end n8n automation that captures, enriches, scores and routes inbound leads into the CRM with personalized follow-ups, with zero manual data entry.",
    tags: ["n8n", "Automation", "CRM", "AI Agent"],
    accent: "from-amber-500/30 to-orange-600/30",
    metric: { value: "5x", label: "Faster follow-up" },
    problem:
      "Leads from forms, email and ads were tracked manually in spreadsheets, causing slow follow-ups, dropped opportunities, and no single source of truth.",
    solution:
      "I designed an n8n workflow that captures leads from every channel, enriches them with company and contact data, scores them with an AI agent, pushes them into the CRM, and triggers tailored follow-up emails, with Slack alerts for hot leads.",
    tools: ["n8n", "AI Agent", "CRM API", "Webhooks", "Slack"],
    result:
      "Around 5x faster lead follow-up, zero manual data entry, and a consistent, personalized first touch for every new lead.",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Initial Consultation",
    description:
      "We start with a friendly call to understand your goals, challenges, and what success looks like for you.",
  },
  {
    title: "Requirement Analysis",
    description:
      "I map out the scope, features, and technical approach, turning your ideas into a clear, actionable plan.",
  },
  {
    title: "Proposal & Timeline",
    description:
      "You get a transparent proposal with deliverables, milestones, and a realistic timeline. No surprises.",
  },
  {
    title: "Development & Regular Updates",
    description:
      "I build in focused sprints and keep you in the loop with regular progress updates and previews.",
  },
  {
    title: "Testing & Launch",
    description:
      "Everything is thoroughly tested across devices before we go live with a smooth, confident launch.",
  },
  {
    title: "Post-Launch Support & Automation Maintenance",
    description:
      "I stick around, monitoring, refining, and maintaining your automations so everything keeps running smoothly.",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A focused landing page or automation can take 1 to 2 weeks, while a full web app or AI system usually runs 4 to 8 weeks. You'll always get a clear timeline upfront in the proposal.",
  },
  {
    q: "How do you approach pricing?",
    a: "I price per project based on scope and value, not vague hourly guesses. After our consultation you receive a fixed, transparent quote so you know exactly what you're investing in.",
  },
  {
    q: "How will we communicate during the project?",
    a: "We agree on a channel that suits you, whether WhatsApp, email, or calls, and I send regular progress updates with previews so you're never left wondering where things stand.",
  },
  {
    q: "Do you offer revisions?",
    a: "Absolutely. Each milestone includes review rounds so we can refine the work together until it's exactly right before moving forward.",
  },
  {
    q: "What happens after launch?",
    a: "I offer post-launch support and automation maintenance to keep everything running smoothly, fix anything that comes up, and help you scale as your needs grow.",
  },
];

export type SolutionOption = {
  id: string;
  label: string;
  pitch: string;
  approach: string[];
};

export const SOLUTION_OPTIONS: SolutionOption[] = [
  {
    id: "website",
    label: "I need a website",
    pitch:
      "A fast, modern, mobile-first website that represents your brand beautifully and turns visitors into customers.",
    approach: [
      "Discovery session to define goals, audience & content",
      "Custom, responsive design built with React & Tailwind",
      "SEO basics, analytics, and a smooth, confident launch",
    ],
  },
  {
    id: "chatbot",
    label: "I need an AI chatbot / voicebot",
    pitch:
      "A conversational assistant that answers questions, qualifies leads, and books appointments around the clock.",
    approach: [
      "Define use cases and connect your knowledge base",
      "Build a chat or voice assistant grounded in your content",
      "Test, refine, and deploy to your site or WhatsApp",
    ],
  },
  {
    id: "automation",
    label: "I need automation with n8n",
    pitch:
      "Hands-off workflows that connect your tools and eliminate repetitive manual work so your team can focus on what matters.",
    approach: [
      "Map your current process and spot automation wins",
      "Build resilient n8n workflows across your apps & APIs",
      "Monitor, document, and maintain everything long-term",
    ],
  },
  {
    id: "agent",
    label: "I need a custom AI agent / RAG system",
    pitch:
      "An intelligent agent that reasons over your private data and takes action. Grounded, accurate, and tailored to you.",
    approach: [
      "Ingest and structure your documents into a vector store",
      "Build a RAG pipeline with Python for grounded answers",
      "Add agent actions, evaluation, and guardrails",
    ],
  },
];

export const STATS = [
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
  { value: "24/7", label: "Automations Running" },
  { value: "100%", label: "Client Focused" },
];

export const HERO_SKILLS = [
  "RAG Pipelines",
  "Chatbots & Voicebots",
  "n8n Automation",
  "Agentic AI",
  "Generative AI",
  "React",
  "Node.js",
  "Python",
  "SEO",
];

// Broader tool list for the home-page tech-stack ticker (distinct from the
// curated specialty pills in the hero).
export const TECH_STACK = [
  "React",
  "TypeScript",
  "Redux Toolkit",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Bootstrap",
  "n8n",
  "RAG Pipelines",
  "Vector Databases",
  "Firebase",
  "Docker",
  "Google Cloud Run",
  "Generative AI",
  "Gemini API",
  "Git & GitHub",
  "HTML5",
  "CSS3",
  "JavaScript",
];
