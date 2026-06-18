// Images are served statically from /public/projects.
const foodStore = "/projects/food-store.webp";
const crasCars = "/projects/cras-cars.webp";
const modernBrowse = "/projects/modern-browse.webp";
const creativeUiDesigner = "/projects/creative-ui-designer.webp";
const olxClone = "/projects/olx-clone.webp";
const exclusiveEcommerce = "/projects/exclusive-ecommerce.webp";
const watchesEcom = "/projects/watches-ecom.webp";
const megaMart = "/projects/mega-mart.webp";
const netflixClone = "/projects/netflix-clone.webp";
const restaurantReston = "/projects/restaurant-reston.webp";
const khaadiClone = "/projects/khaadi-clone.webp";
const digitalArtPortfolio = "/projects/digital-art-portfolio.webp";
const akDevelopers = "/projects/ak-developers.webp";
const positivus = "/projects/positivus.webp";
const tereApp = "/projects/tere-app.webp";
const noonClone = "/projects/noon-clone.webp";
const nexcent = "/projects/nexcent.webp";
const saylaniWelfareClone = "/projects/saylani-welfare-clone.webp";
const bloktopiaClone = "/projects/bloktopia-clone.webp";
const appleClone = "/projects/apple-clone.webp";

export type ProjectCategory =
  | "Web Apps"
  | "E-commerce"
  | "Landing Pages"
  | "Clones"
  | "Portfolios";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  live: string;
  code: string;
  featured?: boolean;
};

const GH = "https://github.com/MalikAliyan-Alam";

// Ordered filter tabs for the Projects section.
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Web Apps",
  "E-commerce",
  "Landing Pages",
  "Clones",
  "Portfolios",
];

export const PROJECTS: Project[] = [
  {
    id: "food-store",
    title: "FoodStore: Online Food Delivery Marketplace",
    category: "Web Apps",
    description:
      "A multi-page food delivery marketplace concept with separate user and vendor roles. A landing page with hero stats (500+ restaurants, 10K+ users, 50K+ orders), a 'Why Choose FoodStore' feature grid, a 3-step 'How It Works' flow, popular food categories, a vendor onboarding section with dashboard preview, plus Login and Register pages.",
    tech: ["HTML5", "CSS3", "JavaScript", "Multi-page"],
    image: foodStore,
    imageAlt: "FoodStore online food delivery marketplace landing page",
    live: "https://food-store-ebon.vercel.app/",
    code: `${GH}/food-store`,
    featured: true,
  },
  {
    id: "cras-cars",
    title: "Cras: Car Repair & Auto Services",
    category: "Landing Pages",
    description:
      "A dark, modern landing page for a car-repair and auto-services business, with hero, services, pricing, blog and contact sections plus social links.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: crasCars,
    imageAlt: "Cras car repair and auto services landing page",
    live: "https://malikaliyan-alam.github.io/Cras-Cars-Website/",
    code: `${GH}/Cras-Cars-Website`,
  },
  {
    id: "modern-browse",
    title: "Modern Browse (ALI-STACK)",
    category: "Landing Pages",
    description:
      "A clean, minimal product/SaaS landing page ('Browse everything') with a dashboard mockup and benefits, specifications and how-to sections.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: modernBrowse,
    imageAlt: "Modern Browse SaaS product landing page",
    live: "https://malikaliyan-alam.github.io/Modern-Browse/",
    code: `${GH}/Modern-Browse`,
  },
  {
    id: "creative-ui-designer",
    title: "Creative UI Designer Portfolio (SaulDesign)",
    category: "Portfolios",
    description:
      "A creative designer portfolio landing page with an illustrated hero and Hire Me / Download CV calls to action.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: creativeUiDesigner,
    imageAlt: "Creative UI designer portfolio landing page",
    live: "https://malikaliyan-alam.github.io/Creative-Ui-designer-Portfolio/",
    code: `${GH}/Creative-Ui-designer-Portfolio`,
  },
  {
    id: "olx-clone",
    title: "OLX Pakistan Clone",
    category: "Clones",
    description:
      "A front-end clone of the OLX Pakistan marketplace homepage, with a category grid, search bar and promotional banner. (Recreation, not affiliated with OLX.)",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: olxClone,
    imageAlt: "OLX Pakistan marketplace homepage clone",
    live: "https://malikaliyan-alam.github.io/Olx.com-clone/",
    code: `${GH}/Olx.com-clone`,
  },
  {
    id: "exclusive-ecommerce",
    title: "Exclusive: E-Commerce Storefront",
    category: "E-commerce",
    description:
      "An e-commerce storefront ('Exclusive') with a category sidebar, a hero promo carousel and a Flash Sales section.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: exclusiveEcommerce,
    imageAlt: "Exclusive e-commerce storefront landing page",
    live: "https://malikaliyan-alam.github.io/E-COMMERCE-Website-main/",
    code: `${GH}/E-COMMERCE-Website-main`,
  },
  {
    id: "watches-ecom",
    title: "Watches: E-Commerce Store",
    category: "E-commerce",
    description:
      "A watch e-commerce store ('Where Time Becomes Treasure') with a product hero, featured products, testimonials, a cart and a light/dark toggle.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: watchesEcom,
    imageAlt: "Watches e-commerce store landing page",
    live: "https://malikaliyan-alam.github.io/Watches-E-com-Web/",
    code: `${GH}/Watches-E-com-Web`,
  },
  {
    id: "mega-mart",
    title: "MegaMart: E-Commerce Marketplace",
    category: "E-commerce",
    description:
      "A multi-category e-commerce marketplace landing page with deal banners, category navigation and product deal carousels.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: megaMart,
    imageAlt: "MegaMart e-commerce marketplace landing page",
    live: "https://malikaliyan-alam.github.io/Mega-Mart-main/",
    code: `${GH}/Mega-Mart-main`,
  },
  {
    id: "netflix-clone",
    title: "Netflix Landing Page Clone",
    category: "Clones",
    description:
      "A clone of the Netflix landing page, with the show collage hero and email sign-up capture. (Recreation, not affiliated with Netflix.)",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: netflixClone,
    imageAlt: "Netflix landing page clone",
    live: "https://malikaliyan-alam.github.io/netflix-slogan/",
    code: `${GH}/netflix-slogan`,
  },
  {
    id: "restaurant-reston",
    title: "Reston: Vegan Asian Restaurant",
    category: "Landing Pages",
    description:
      "An elegant dark restaurant website ('Vegan Asian Experience') with a three-panel hero, menus, a team section and a Book Your Table flow.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: restaurantReston,
    imageAlt: "Reston vegan Asian restaurant website",
    live: "https://malikaliyan-alam.github.io/Restaurant-project/",
    code: `${GH}/Restaurant-project`,
  },
  {
    id: "khaadi-clone",
    title: "Khaadi Clone",
    category: "Clones",
    description:
      "A front-end clone of the Pakistani fashion brand Khaadi, with a lawn-collection layout and product showcase. (Recreation, not affiliated with Khaadi.)",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: khaadiClone,
    imageAlt: "Khaadi fashion brand website clone",
    live: "https://malikaliyan-alam.github.io/khaddi-website-master/",
    code: `${GH}/khaddi-website-master`,
  },
  {
    id: "digital-art-portfolio",
    title: "Digital Art: Designer Portfolio",
    category: "Portfolios",
    description:
      "A bold, typography-driven designer portfolio landing page (Bent Lindberg style) with a strong editorial hero.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: digitalArtPortfolio,
    imageAlt: "Digital art designer portfolio landing page",
    live: "https://malikaliyan-alam.github.io/digital-art-landing-page-main/",
    code: `${GH}/digital-art-landing-page-main`,
  },
  {
    id: "ak-developers",
    title: "AK Developers: Dev Agency",
    category: "Landing Pages",
    description:
      "A software-agency landing page ('Great Products are Built by Great Teams') with About, Case Studies, Services and Hire sections.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: akDevelopers,
    imageAlt: "AK Developers software agency landing page",
    live: "https://malikaliyan-alam.github.io/AK-Developers-Website/",
    code: `${GH}/AK-Developers-Website`,
  },
  {
    id: "positivus",
    title: "Positivus: Digital Marketing Agency",
    category: "Landing Pages",
    description:
      "A recreation of the popular Positivus digital-marketing agency design, with services, use cases, pricing and a bold green/black brand look.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: positivus,
    imageAlt: "Positivus digital marketing agency landing page recreation",
    live: "https://malikaliyan-alam.github.io/postivious/",
    code: `${GH}/postivious`,
  },
  {
    id: "tere-app",
    title: "Tere: Eco Ride-Sharing App",
    category: "Landing Pages",
    description:
      "A ride-sharing app landing page built from a Figma design, with app-download CTAs, a world-map illustration and an eco / carbon-footprint theme.",
    tech: ["HTML5", "CSS3", "JavaScript", "Figma-to-Code"],
    image: tereApp,
    imageAlt: "Tere eco ride-sharing app landing page",
    live: "https://malikaliyan-alam.github.io/Tere-figma/",
    code: `${GH}/Tere-figma`,
  },
  {
    id: "noon-clone",
    title: "noon.com Clone",
    category: "Clones",
    description:
      "A front-end clone of the noon.com e-commerce marketplace, with promo banners, category circles and deal sections. (Recreation, not affiliated with noon.)",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: noonClone,
    imageAlt: "noon.com e-commerce marketplace clone",
    live: "https://malikaliyan-alam.github.io/noon.com/",
    code: `${GH}/noon.com`,
  },
  {
    id: "nexcent",
    title: "Nexcent: Business Landing Page",
    category: "Landing Pages",
    description:
      "A clean business/SaaS landing page ('Lessons and insights') with features, community and pricing sections.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: nexcent,
    imageAlt: "Nexcent business landing page",
    live: "https://malikaliyan-alam.github.io/Nexcent/",
    code: `${GH}/Nexcent`,
  },
  {
    id: "saylani-welfare-clone",
    title: "Saylani Welfare Clone",
    category: "Clones",
    description:
      "A front-end clone of the Saylani Welfare NGO website, with hero, services, donate/sponsor calls to action and a photo collage. (Recreation, not affiliated with Saylani Welfare.)",
    tech: ["HTML5", "CSS3"],
    image: saylaniWelfareClone,
    imageAlt: "Saylani Welfare NGO website clone",
    live: "https://malikaliyan-alam.github.io/Saylani-Welfare-clone/",
    code: `${GH}/Saylani-Welfare-clone`,
  },
  {
    id: "bloktopia-clone",
    title: "Bloktopia Clone",
    category: "Clones",
    description:
      "A clone of the Bloktopia crypto/metaverse landing page, with a neon-on-black theme, an 'Enter the Metaverse' hero and feature navigation. (Recreation, not affiliated with Bloktopia.)",
    tech: ["HTML5", "CSS3"],
    image: bloktopiaClone,
    imageAlt: "Bloktopia crypto metaverse landing page clone",
    live: "https://malikaliyan-alam.github.io/bloktopia/",
    code: `${GH}/bloktopia`,
  },
  {
    id: "apple-clone",
    title: "Apple Website Clone",
    category: "Clones",
    description:
      "A clone of the Apple homepage, with the iPhone hero, top navigation and a clean product layout. (Recreation, not affiliated with Apple.)",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: appleClone,
    imageAlt: "Apple homepage website clone",
    live: "https://malikaliyan-alam.github.io/apple/",
    code: `${GH}/apple`,
  },
];

export const FEATURED_PROJECT = PROJECTS.find((p) => p.featured)!;
export const GRID_PROJECTS = PROJECTS.filter((p) => !p.featured);
