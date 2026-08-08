"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { Search, Sparkles, MapPin, Filter, ChevronDown, Package, TrendingUp, Building2 } from 'lucide-react';

const tradingData = [
    {
        id: 1,
        name: "Agricultural Commodities",
        category: "Export",
        type: "Commodities",
        market: "Global",
        scale: "High Volume",
        location: "Multiple Regions",
        description: "Sourcing and exporting high-quality agricultural products to international markets. Our network connects local producers with global demand.",
        image: "/factory.jpg",
        tags: ["agriculture", "export", "commodities", "global"],
        value: "Strategic",
        established: 2010
    },
    {
        id: 2,
        name: "Industrial Materials",
        category: "Import",
        type: "Raw Materials",
        market: "Domestic",
        scale: "Large Scale",
        location: "Central Hubs",
        description: "Importing essential raw materials and industrial inputs to support local manufacturing and infrastructure development projects.",
        image: "/factory2.jpg",
        tags: ["industrial", "import", "materials", "manufacturing"],
        value: "Strategic",
        established: 2012
    },
    {
        id: 3,
        name: "Consumer Goods",
        category: "Import & Distribution",
        type: "Finished Products",
        market: "Regional",
        scale: "High Volume",
        location: "Nationwide",
        description: "Distribution of high-quality consumer goods across our extensive network, ensuring market availability and supply continuity.",
        image: "/home-1.jpg",
        tags: ["consumer", "distribution", "import", "retail"],
        value: "Core",
        established: 2015
    },
    {
        id: 4,
        name: "Machinery & Equipment",
        category: "Import",
        type: "Capital Goods",
        market: "Commercial",
        scale: "Specialized",
        location: "Major Hubs",
        description: "Sourcing heavy machinery and specialized equipment for construction, agriculture, and industrial applications.",
        image: "/factory3.jpg",
        tags: ["machinery", "equipment", "import", "industrial"],
        value: "Specialized",
        established: 2018
    }
];

const categories = ["All", "Export", "Import", "Import & Distribution"];
const markets = ["All", "Global", "Domestic", "Regional", "Commercial"];

const TradingPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedMarket, setSelectedMarket] = useState("All");

    const filteredTrading = tradingData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesMarket = selectedMarket === "All" || item.market === selectedMarket;

        return matchesSearch && matchesCategory && matchesMarket;
    });

    const stats = {
        total: tradingData.length,
        export: tradingData.filter(i => i.category === "Export").length,
        import: tradingData.filter(i => i.category.includes("Import")).length,
    };

    return (
        <div className='w-7xl mx-auto'>
            {/* Hero Header */}
            <div className='bg-gradient-to-r from-golden-dark via-golden-light to-golden-dark rounded-2xl p-8 mb-10 text-white overflow-hidden relative'>
                <div className='relative z-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8'>
                        <div>
                            <h1 className='text-4xl font-bold mb-4 flex items-center gap-3'>
                                <TrendingUp className="w-10 h-10" />
                                Trading & Commercial Operations
                            </h1>
                            <p className='text-xl text-white max-w-2xl'>
                                Product sourcing, distribution, and commercial goods operations
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='text-right'>
                                <p className='text-sm text-golden-light'>Trade Sectors</p>
                                <p className='text-3xl font-bold'>{stats.total}</p>
                            </div>
                            <div className='h-12 w-px bg-golden-light'></div>
                            <div className='text-right'>
                                <p className='text-sm text-golden-light'>Import/Export</p>
                                <p className='text-3xl font-bold'>{stats.export + stats.import}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-y-32 translate-x-32'></div>
            </div>

            {/* Search and Filter Section */}
            <div className='mb-10'>
                <div className='bg-white rounded-xl p-6 border border-border shadow-lg'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                        <div className='lg:col-span-5'>
                            <div className='relative'>
                                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-footer' />
                                <input
                                    type="text"
                                    placeholder="Search trade sectors or products..."
                                    className='w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='lg:col-span-3'>
                            <div className='relative'>
                                <Filter className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-footer' />
                                <select
                                    className='w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none'
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            Operation: {category}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-footer pointer-events-none' />
                            </div>
                        </div>

                        <div className='lg:col-span-3'>
                            <div className='relative'>
                                <Package className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-footer' />
                                <select
                                    className='w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none'
                                    value={selectedMarket}
                                    onChange={(e) => setSelectedMarket(e.target.value)}
                                >
                                    {markets.map(market => (
                                        <option key={market} value={market}>
                                            Market: {market}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-footer pointer-events-none' />
                            </div>
                        </div>

                        <div className='lg:col-span-1'>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("All");
                                    setSelectedMarket("All");
                                }}
                                className='w-full py-3 border border-border text-muted rounded-lg hover:bg-background-secondary transition-colors font-medium'
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-6'>
                    {filteredTrading.map(item => (
                        <div
                            key={item.id}
                            className='bg-white rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-2 border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group'
                        >
                            <div className='relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden'>
                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                ) : (
                                    <div className='w-full h-full flex flex-col items-center justify-center p-4 text-center'>
                                        <Building2 className='w-16 h-16 text-footer mb-3' />
                                        <p className='text-muted font-medium'>{item.name}</p>
                                    </div>
                                )}
                            </div>

                            <div className='p-6 col-span-2'>
                                <div className='flex justify-between items-start mb-3'>
                                    <div>
                                        <h3 className='text-xl font-bold text-heading mb-1'>{item.name}</h3>
                                        <div className='flex items-center gap-2 text-muted'>
                                            <MapPin className='w-4 h-4' />
                                            <span className='text-sm'>{item.location}</span>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <div className={`px-2 py-1 rounded text-xs font-bold bg-blue-100 text-secondary`}>
                                            {item.value} Area
                                        </div>
                                    </div>
                                </div>

                                <p className='text-muted text-sm mb-4 line-clamp-2'>
                                    {item.description}
                                </p>

                                <div className='grid grid-cols-2 gap-3 mb-4'>
                                    <div className='p-2 bg-background-secondary rounded'>
                                        <p className='text-xs text-muted'>Type</p>
                                        <p className='font-medium text-heading'>{item.type}</p>
                                    </div>
                                    <div className='p-2 bg-background-secondary rounded'>
                                        <p className='text-xs text-muted'>Scale</p>
                                        <p className='font-medium text-heading'>{item.scale}</p>
                                    </div>
                                </div>

                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className='px-2 py-1 bg-blue-50 text-primary text-xs rounded-full'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTrading.length === 0 && (
                    <div className='text-center py-16 bg-white rounded-xl border border-border'>
                        <Package className='w-16 h-16 text-footer mx-auto mb-4' />
                        <h3 className='text-xl font-bold text-heading mb-2'>No trade sectors found</h3>
                        <p className='text-muted max-w-md mx-auto'>
                            Adjust your filters to see active trading sectors.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TradingPage