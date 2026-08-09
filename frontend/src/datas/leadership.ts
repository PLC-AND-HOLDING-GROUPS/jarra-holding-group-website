export const leadershipTree = {
  id: "ceo-demo",
  level: 0,
  name: "John Doe",
  title: "Chief Executive Officer",
  image: "/businessman.png",
  shortDescription:
    "Senior executive with extensive leadership experience in holding groups.",
  fullDescription:
    "John Doe is the CEO of Jarra Holding Group. He is a seasoned executive with extensive experience in corporate strategy, investment management, and sustainable development. Under his leadership, the organization aims to transform its various sectors into globally competitive entities that contribute significantly to economic growth.",
  children: [
    {
      id: "director-a",
      level: 1,
      name: "Jane Smith",
      title: "Director General – Operations",
      image: "/businesswoman.png",
      fullDescription: "Jane Smith serves as the Director General of Operations. She is a distinguished leader with comprehensive expertise in optimizing supply chains, overseeing daily operations, and ensuring regulatory compliance. She manages the core operational activities that support the group's varied business sectors.",
    },
    {
      id: "director-b",
      level: 1,
      name: "Michael Johnson",
      title: "Director General – Finance",
      image: "/businessman.png",
      fullDescription: "Michael Johnson is the Director General of Finance. He is responsible for managing financial risks, corporate reporting, and investment planning across the holding group. With a strong background in corporate finance, he ensures fiscal responsibility and strategic capital allocation.",
    },
  ],
};
