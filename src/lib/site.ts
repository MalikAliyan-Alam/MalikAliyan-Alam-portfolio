export const SITE = {
  name: "Malik Aliyan Alam",
  role: "AI Automation Engineer & Full-Stack Web Developer",
  location: "Karachi, Pakistan",
  email: "malikaliyan.contact@gmail.com",
  // WhatsApp number in international format (no +, spaces or dashes)
  whatsapp: "923250905467",
  socials: {
    linkedin: "https://www.linkedin.com/in/malik-aliyan-alam-674b46324",
    github: "https://github.com/MalikAliyan-Alam",
  },
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi Malik, I'd like to discuss a project."
)}`;

export const MAILTO_LINK = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Project Inquiry"
)}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "What I Do", to: "/what-i-do" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Projects", to: "/projects" },
  { label: "Certifications", to: "/certifications" },
  { label: "Process", to: "/process" },
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
];
