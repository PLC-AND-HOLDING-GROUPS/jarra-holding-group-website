export interface ProductCategory {
    id: string;
    name: string;
    slug: string;
    description?: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    shortDescription: string;
    fullDescription: string;
    status: 'Available' | 'Available on Request' | 'Inquiry Required' | 'Currently Unavailable';
    image: string;
    images?: string[];
    specifications?: Record<string, string>;
    applications?: string[];
}

export const mockCategories: ProductCategory[] = [
    { id: 'c1', name: 'Chemicals', slug: 'chemicals', description: 'Agricultural, industrial, and crop protection chemicals.' },
    { id: 'c2', name: 'Grains', slug: 'grains', description: 'High-quality grains sourced for trading and supply.' },
    { id: 'c3', name: 'Agricultural Products', slug: 'agricultural-products', description: 'Raw agricultural commodities like sesame and pulses.' },
    { id: 'c4', name: 'Farm Products', slug: 'farm-products', description: 'Livestock feed and essential agricultural inputs.' },
    { id: 'c5', name: 'Manufactured Products', slug: 'manufactured-products', description: 'Processed and packaged agricultural and industrial goods.' }
];

export const mockProducts: Product[] = [
    {
        id: 'p1',
        name: 'Urea 46% Agricultural Fertilizer',
        slug: 'urea-46-fertilizer',
        categoryId: 'c1',
        shortDescription: 'High-nitrogen fertilizer suitable for various crops and soil types.',
        fullDescription: 'Urea 46% is a highly concentrated solid nitrogen fertilizer. It is highly soluble in water and can be applied as a solid or in solution to the soil, or as a foliar spray. Ideal for improving crop yield and quality across broadacre farming and horticulture.',
        status: 'Available on Request',
        image: '/home-4.jpg',
        images: ['/home-4.jpg', '/home-2.jpg', '/factory2.jpg'],
        specifications: {
            'Nitrogen Content': '46% Min',
            'Moisture': '0.5% Max',
            'Biuret': '1.0% Max',
            'Form': 'Prilled or Granular'
        },
        applications: ['Broadacre crops', 'Horticulture', 'Pasture']
    },
    {
        id: 'p2',
        name: 'Premium White Wheat',
        slug: 'premium-white-wheat',
        categoryId: 'c2',
        shortDescription: 'High-quality milling wheat suitable for flour production.',
        fullDescription: 'Our premium white wheat is sourced from top agricultural regions, offering excellent milling qualities. It is carefully handled and stored to maintain optimum moisture content and prevent degradation, ensuring high yield and quality flour for bakeries and food manufacturers.',
        status: 'Available',
        image: '/home-1.jpg',
        images: ['/home-1.jpg', '/home-3.jpg', '/home-5.jpg'],
        specifications: {
            'Protein': '11.5% Min',
            'Moisture': '12.5% Max',
            'Test Weight': '78 kg/hl Min',
            'Foreign Matter': '1% Max'
        },
        applications: ['Flour milling', 'Baking industry', 'Food processing']
    },
    {
        id: 'p3',
        name: 'Humera Type Sesame Seeds',
        slug: 'humera-sesame-seeds',
        categoryId: 'c3',
        shortDescription: 'World-renowned Ethiopian sesame seeds known for their flavor and oil content.',
        fullDescription: 'Humera sesame seeds are globally recognized for their sweet taste, white color, and high oil content. Ideal for bakery products, tahini production, and premium oil extraction. Our sesame is meticulously cleaned and sorted to meet international export standards.',
        status: 'Inquiry Required',
        image: '/home-5.jpg',
        images: ['/home-5.jpg', '/home-1.jpg', '/import export.webp'],
        specifications: {
            'Purity': '99% Min',
            'Oil Content': '50% Min',
            'Moisture': '6% Max',
            'FFA': '1.5% Max'
        },
        applications: ['Tahini', 'Confectionery', 'Oil extraction', 'Bakery']
    },
    {
        id: 'p4',
        name: 'Commercial Poultry Feed',
        slug: 'commercial-poultry-feed',
        categoryId: 'c4',
        shortDescription: 'Nutritionally balanced feed for broilers and layers.',
        fullDescription: 'Formulated with high-quality grains, proteins, and essential vitamins, our commercial poultry feed ensures optimal growth and egg production. Manufactured under strict quality control to guarantee safety and nutritional consistency.',
        status: 'Available',
        image: '/factory3.jpg',
        images: ['/factory3.jpg', '/factory1.jpg', '/factory2.jpg'],
        specifications: {
            'Protein': '18-20%',
            'Metabolizable Energy': '2900 kcal/kg',
            'Calcium': '3.5%',
            'Form': 'Pellet/Mash'
        },
        applications: ['Commercial poultry farms', 'Broiler production', 'Layer farms']
    },
    {
        id: 'p5',
        name: 'Processed Soya Meal',
        slug: 'processed-soya-meal',
        categoryId: 'c5',
        shortDescription: 'High-protein soya meal for animal feed manufacturing.',
        fullDescription: 'Our processed soya meal is a premium source of protein, obtained through efficient extraction processes. It is highly digestible and forms the cornerstone of high-performance animal feed formulations across various livestock sectors.',
        status: 'Available on Request',
        image: '/home-3.jpg',
        images: ['/home-3.jpg', '/home-4.jpg', '/home-1.jpg'],
        specifications: {
            'Protein': '46% Min',
            'Moisture': '11% Max',
            'Fiber': '6% Max',
            'Fat': '1.5% Max'
        },
        applications: ['Poultry feed', 'Aqua feed', 'Swine feed', 'Dairy feed']
    },
    {
        id: 'p6',
        name: 'Yellow Maize',
        slug: 'yellow-maize',
        categoryId: 'c2',
        shortDescription: 'Bulk yellow maize for feed and industrial use.',
        fullDescription: 'Clean, high-quality yellow maize suitable for animal feed production and various industrial applications. We source and supply in bulk quantities with strict adherence to quality and moisture standards to prevent spoilage.',
        status: 'Available',
        image: '/home-2.jpg',
        images: ['/home-2.jpg', '/home-1.jpg', '/import export.webp'],
        specifications: {
            'Moisture': '14% Max',
            'Broken Kernels': '3% Max',
            'Foreign Matter': '1.5% Max',
            'Aflatoxin': '< 20 ppb'
        },
        applications: ['Animal feed', 'Ethanol production', 'Starch manufacturing']
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return mockProducts.find(p => p.slug === slug);
}

export function getCategoryById(id: string): ProductCategory | undefined {
    return mockCategories.find(c => c.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
    if (categoryId === 'all') return mockProducts;
    return mockProducts.filter(p => p.categoryId === categoryId);
}
