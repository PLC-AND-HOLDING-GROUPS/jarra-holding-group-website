/** Static SEO copy keyed by public path (without locale prefix). */
export const PAGE_SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Jarra Holdings",
    description:
      "Official website of Jarra Holdings. Explore our businesses, services, and investment opportunities.",
  },
  "/about": {
    title: "About Us",
    description:
      "Learn about Jarra Holdings, our leadership, mission, vision, and role in driving sustainable growth.",
  },
  "/services": {
    title: "Our Services",
    description:
      "Comprehensive services and solutions provided by Jarra Holdings.",
  },
  "/products": {
    title: "Our Products",
    description:
      "Explore the diverse range of high-quality products offered by Jarra Holdings.",
  },
  "/facilities": {
    title: "Our Facilities",
    description:
      "State-of-the-art facilities and operational centers of Jarra Holdings.",
  },
  "/careers": {
    title: "Careers",
    description:
      "Join the team at Jarra Holdings. Explore current job vacancies and career opportunities.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Contact Jarra Holdings. Find our address, email, phone, and inquiry options.",
  },
  "/businesses": {
    title: "Our Businesses",
    description:
      "Discover the various sectors and businesses operating under Jarra Holdings.",
  },
  "/businesses/overview": {
    title: "Businesses Overview",
    description:
      "An overview of Jarra Holdings's industrial sectors and operational divisions.",
  },
  "/businesses/import-export": {
    title: "Import & Export",
    description:
      "Import and export operations, logistics, and global trade solutions by Jarra Holdings.",
  },
  "/businesses/trading": {
    title: "Trading",
    description:
      "Strategic trading and commodity exchange divisions within Jarra Holdings.",
  },
  "/businesses/warehousing": {
    title: "Warehousing",
    description:
      "Secure and scalable warehousing solutions provided by Jarra Holdings.",
  },
  "/news": {
    title: "News & Updates",
    description:
      "Stay updated with the latest news, announcements, and events from Jarra Holdings.",
  },
};

export function getPageSeo(path: string) {
  return PAGE_SEO[path] ?? null;
}
