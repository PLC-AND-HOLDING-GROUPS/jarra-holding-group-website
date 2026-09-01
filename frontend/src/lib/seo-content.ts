/** Static SEO copy keyed by public path (without locale prefix). */
export const PAGE_SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Jarra Holding Group",
    description:
      "Official website of Jarra Holding Group. Explore our businesses, services, and investment opportunities.",
  },
  "/about": {
    title: "About Us",
    description:
      "Learn about Jarra Holding Group, our leadership, mission, vision, and role in driving sustainable growth.",
  },
  "/services": {
    title: "Our Services",
    description:
      "Comprehensive services and solutions provided by Jarra Holding Group.",
  },
  "/products": {
    title: "Our Products",
    description:
      "Explore the diverse range of high-quality products offered by Jarra Holding Group.",
  },
  "/facilities": {
    title: "Our Facilities",
    description:
      "State-of-the-art facilities and operational centers of Jarra Holding Group.",
  },
  "/careers": {
    title: "Careers",
    description:
      "Join the team at Jarra Holding Group. Explore current job vacancies and career opportunities.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Contact Jarra Holding Group. Find our address, email, phone, and inquiry options.",
  },
  "/businesses": {
    title: "Our Businesses",
    description:
      "Discover the various sectors and businesses operating under Jarra Holding Group.",
  },
  "/businesses/overview": {
    title: "Businesses Overview",
    description:
      "An overview of Jarra Holding Group's industrial sectors and operational divisions.",
  },
  "/businesses/import-export": {
    title: "Import & Export",
    description:
      "Import and export operations, logistics, and global trade solutions by Jarra Holding Group.",
  },
  "/businesses/trading": {
    title: "Trading",
    description:
      "Strategic trading and commodity exchange divisions within Jarra Holding Group.",
  },
  "/businesses/warehousing": {
    title: "Warehousing",
    description:
      "Secure and scalable warehousing solutions provided by Jarra Holding Group.",
  },
};

export function getPageSeo(path: string) {
  return PAGE_SEO[path] ?? null;
}
