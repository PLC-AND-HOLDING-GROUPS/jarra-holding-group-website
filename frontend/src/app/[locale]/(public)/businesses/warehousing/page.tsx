import React from 'react'
import Image from "next/image";
import { CheckCircle, FileText, Shield, Map, Package, Truck, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';

const warehousingData = [
    {
        title: "Warehousing Infrastructure",
        heading: "Strategic storage facilities supporting regional trade and distribution.",
        description: "Jarra Holding Group operates a network of modern warehousing facilities strategically located to support our import, export, and distribution operations. Our infrastructure is designed to handle high-volume commercial goods, ensuring safe storage, efficient inventory management, and rapid deployment to regional markets.",
        image: "/factory.jpg",
        features: [
            "Multi-location storage network",
            "Advanced inventory management",
            "Secure handling of commercial goods",
            "Strategic regional positioning",
            "Integrated logistics support"
        ]
    },
]

const facilityTypes = [
    {
        icon: <Database className="w-6 h-6" />,
        title: "Central Hubs",
        duration: "High Capacity",
        description: "Primary distribution centers for major import and export consolidation.",
        requirements: ["Large-scale storage", "Heavy machinery access", "24/7 operations"]
    },
    {
        icon: <Map className="w-6 h-6" />,
        title: "Regional Depots",
        duration: "Medium Capacity",
        description: "Strategic storage facilities positioned near key regional markets.",
        requirements: ["Quick dispatch", "Market proximity", "Flexible storage"]
    },
    {
        icon: <Truck className="w-6 h-6" />,
        title: "Transit Facilities",
        duration: "High Turnover",
        description: "Cross-docking and temporary storage for active supply chains.",
        requirements: ["Rapid loading/unloading", "Transport connectivity", "Efficient throughput"]
    }
]

const capabilities = [
    {
        title: "Inventory Management",
        year: "Active",
        description: "Precise tracking and control of commercial goods across all facilities."
    },
    {
        title: "Secure Storage",
        year: "Active",
        description: "Comprehensive security protocols to protect valuable inventory."
    },
    {
        title: "Distribution Integration",
        year: "Active",
        description: "Seamless connection between storage and regional delivery networks."
    }
]

const WarehousingPage = () => {
    return (
        <div className='w-7xl mx-auto'>
            {/* Header Section */}
            <div className='mb-10 text-center'>
                <h1 className='text-4xl font-bold text-heading mb-4'>
                    Warehousing & Infrastructure
                </h1>
                <p className='text-xl text-muted max-w-3xl mx-auto'>
                    Strategic storage and inventory management supporting Jarra's commercial network
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                {/* Left Column - Main Content */}
                <div className='lg:col-span-7 space-y-8'>
                    {/* Featured Content Card */}
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-border'>
                        <div className='relative h-64 w-full'>
                            <Image
                                src={warehousingData[0].image}
                                alt={warehousingData[0].title}
                                fill
                                className='object-cover'
                                priority={true}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                            <div className='absolute bottom-6 left-6'>
                                <h2 className='text-2xl font-bold text-white'>
                                    {warehousingData[0].title}
                                </h2>
                            </div>
                        </div>
                        <div className='p-6'>
                            <p className='text-lg text-muted mb-6'>
                                {warehousingData[0].heading}
                            </p>
                            <p className='text-muted mb-6'>
                                {warehousingData[0].description}
                            </p>
                            <div className='space-y-3'>
                                {warehousingData[0].features.map((feature, index) => (
                                    <div key={index} className='flex items-center gap-3'>
                                        <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' />
                                        <span className='text-muted'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Facility Types Grid */}
                    <div>
                        <h3 className='text-2xl font-bold text-heading mb-6'>
                            Facility Network
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {facilityTypes.map((facility, index) => (
                                <div
                                    key={index}
                                    className='bg-white p-5 shadow-xl rounded-xl border border-border hover:border-blue-500 transition-colors shadow-sm'
                                >
                                    <div className='mb-2 flex space-x-2 text-blue-600'>
                                        {facility.icon}
                                        <h4 className='font-bold text-lg text-heading'>
                                            {facility.title}
                                        </h4>
                                    </div>

                                    <div className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3'>
                                        Scale: {facility.duration}
                                    </div>
                                    <p className='text-muted mb-4'>
                                        {facility.description}
                                    </p>
                                    <div className='space-y-2'>
                                        <p className='text-sm font-medium text-muted'>
                                            Key Capabilities:
                                        </p>
                                        {facility.requirements.map((req, idx) => (
                                            <div key={idx} className='flex items-center gap-2'>
                                                <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                                                <span className='text-sm text-muted'>{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar Content */}
                <div className='lg:col-span-5 space-y-8'>
                    {/* Capabilities Panel */}
                    <div className='shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100'>
                        <h3 className='text-2xl font-bold text-heading mb-6 flex items-center gap-2'>
                            <Shield className='w-6 h-6 text-blue-600' />
                            Core Capabilities
                        </h3>
                        <div className='space-y-4'>
                            {capabilities.map((cap, index) => (
                                <div
                                    key={index}
                                    className='bg-white p-4 rounded-lg border border-blue-100 hover:border-blue-300 transition-colors'
                                >
                                    <div className='flex justify-between items-start mb-2'>
                                        <h4 className='font-semibold text-heading'>
                                            {cap.title}
                                        </h4>
                                        <span className='px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>
                                            {cap.year}
                                        </span>
                                    </div>
                                    <p className='text-muted text-sm'>
                                        {cap.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operational Standards */}
                    <div className='shadow-xl bg-white rounded-xl border border-border p-6 shadow-sm'>
                        <h3 className='text-2xl font-bold text-heading mb-6'>
                            Operational Standards
                        </h3>
                        <div className='space-y-4'>
                            {[
                                {
                                    title: "Reliability",
                                    desc: "Consistent service and continuous supply chain support"
                                },
                                {
                                    title: "Security",
                                    desc: "Protected facilities ensuring safety of all commercial goods"
                                },
                                {
                                    title: "Efficiency",
                                    desc: "Optimized handling, loading, and dispatch procedures"
                                },
                                {
                                    title: "Scale",
                                    desc: "Capacity to handle high-volume import and distribution needs"
                                }
                            ].map((standard, index) => (
                                <div key={index} className='pb-4 border-b border-gray-100 last:border-0 last:pb-0'>
                                    <div className='flex items-center gap-3 mb-2'>
                                        <div className='w-3 h-3 bg-blue-600 rounded-full'></div>
                                        <h4 className='font-semibold text-heading'>{standard.title}</h4>
                                    </div>
                                    <p className='text-muted text-sm ml-6'>{standard.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='shadow-xl bg-background-secondary rounded-xl p-6 border border-border'>
                        <h3 className='text-xl font-bold text-heading mb-4'>
                            Related Operations
                        </h3>
                        <div className='space-y-3'>
                            {[
                                { label: "Distribution Network", type: "link", href: "/businesses/trading" },
                                { label: "Import Operations", type: "link", href: "/businesses/import-export" },
                                { label: "Logistics Support", type: "link", href: "/businesses/overview" }
                            ].map((resource, index) => (
                                <a
                                    key={index}
                                    href={resource.href}
                                    className='flex items-center justify-between p-3 bg-white rounded-lg border border-border hover:border-blue-500 hover:shadow transition-all group'
                                >
                                    <span className='text-muted group-hover:text-blue-600'>
                                        {resource.label}
                                    </span>
                                    <span className='px-2 py-1 bg-background-secondary text-muted text-xs rounded group-hover:bg-blue-100 group-hover:text-blue-600'>
                                        View →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WarehousingPage