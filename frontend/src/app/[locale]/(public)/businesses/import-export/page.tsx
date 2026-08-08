import React from 'react'
import Image from "next/image";
import { FileText, Upload, Clock, Shield, CheckCircle, ArrowRight, Package, Plane, Ship } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const operationsData = [
    {
        title: "Import & Export Operations",
        heading: "Connecting global suppliers and regional markets through efficient cross-border trade.",
        description: "Jarra Holding Group manages a robust import and export network. Our operations ensure seamless movement of goods across borders, reducing transit times, and providing reliable supply chain continuity. From sourcing critical materials to exporting regional products, our team handles end-to-end commercial trade logistics.",
        image: "/factory.jpg",
        benefits: [
            "End-to-end supply chain management",
            "Reliable cross-border transit times",
            "Comprehensive customs clearance",
            "Secure product handling and storage",
            "Extensive global supplier network"
        ]
    },
]

const serviceTypes = [
    {
        icon: <Ship className="w-5 h-5" />,
        title: "Import Operations",
        processingTime: "Continuous",
        fee: "Commercial Goods",
        steps: ["Supplier Sourcing", "Logistics Planning", "Customs Clearance", "Warehouse Delivery"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <Plane className="w-5 h-5" />,
        title: "Export Operations",
        processingTime: "Continuous",
        fee: "Regional Products",
        steps: ["Product Aggregation", "Quality Assurance", "Export Compliance", "Market Delivery"],
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: <Package className="w-5 h-5" />,
        title: "Supply Chain Solutions",
        processingTime: "Integrated",
        fee: "End-to-End",
        steps: ["Needs Assessment", "Network Optimization", "Transit Tracking", "Final Distribution"],
        color: "from-amber-500 to-orange-500"
    }
]

const ImportExportPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
            {/* Hero Header */}
            <div className='bg-secondary text-white'>
                <div className='w-7xl mx-auto px-6 py-16'>
                    <div className='max-w-4xl'>
                        <h1 className='text-5xl font-bold mb-6'>
                            Import & Export Operations
                        </h1>
                        <p className='text-xl text-blue-100 mb-8'>
                            Connecting international markets and regional distribution through reliable cross-border trade.
                        </p>
                        <Link
                            href="/contact"
                            className='inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary/10 transition-colors shadow-lg'
                        >
                            Partner With Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='w-7xl mx-auto px-6 py-12'>
                {/* Portal Overview */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
                    <div>
                        <div className='mb-8'>
                            <h2 className='text-3xl font-bold text-heading mb-4'>
                                Global Reach, Local Reliability
                            </h2>
                            <p className='text-lg text-muted'>
                                Jarra Holding Group is committed to optimizing the movement of commercial goods. Our import and export divisions provide partners with a seamless, integrated approach to international trade, ensuring efficiency and transparency throughout the supply chain.
                            </p>
                        </div>

                        <div className='space-y-6'>
                            {operationsData[0].benefits.map((benefit, index) => (
                                <div key={index} className='flex items-start gap-3'>
                                    <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0 mt-1' />
                                    <div>
                                        <p className='font-medium text-heading'>{benefit}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='relative h-96 rounded-2xl overflow-hidden shadow-2xl'>
                        <Image
                            src={operationsData[0].image}
                            alt="Import Export Operations"
                            fill
                            className='object-cover'
                            priority
                        />
                        <div className='absolute inset-0 bg-gradient-to-tr from-blue-900/70 to-transparent' />
                        <div className='absolute bottom-8 left-8'>
                            <div className='inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full'>
                                <Clock className='w-5 h-5 text-secondary' />
                                <span className='font-semibold text-heading'>Optimized Transit and Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Types */}
                <div className='mb-16'>
                    <h3 className='text-3xl font-bold text-heading mb-10 text-center'>
                        Key Trade Operations
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {serviceTypes.map((type, index) => (
                            <div
                                key={index}
                                className='group bg-white rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
                            >
                                <div className={`h-2 bg-gradient-to-r ${type.color}`} />
                                <div className='p-6'>
                                    <div className='flex items-center gap-3 mb-4'>
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${type.color} text-white`}>
                                            {type.icon}
                                        </div>
                                        <h4 className='text-xl font-bold text-heading'>{type.title}</h4>
                                    </div>

                                    <div className='space-y-4 mb-6'>
                                        <div className='flex items-center justify-between p-3 bg-background-secondary rounded-lg'>
                                            <span className='text-muted'>Operation Type</span>
                                            <span className='font-semibold text-heading'>{type.processingTime}</span>
                                        </div>
                                        <div className='flex items-center justify-between p-3 bg-background-secondary rounded-lg'>
                                            <span className='text-muted'>Focus</span>
                                            <span className='font-semibold text-heading'>{type.fee}</span>
                                        </div>
                                    </div>

                                    <div className='space-y-2'>
                                        <p className='text-sm font-medium text-muted mb-2'>Key Steps:</p>
                                        {type.steps.map((step, idx) => (
                                            <div key={idx} className='flex items-center gap-2'>
                                                <div className='w-6 h-6 rounded-full bg-blue-100 text-secondary flex items-center justify-center text-xs font-bold'>
                                                    {idx + 1}
                                                </div>
                                                <span className='text-muted'>{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportExportPage