import React from 'react'
import { BarChart3, PieChart, TrendingUp, Download, MapPin, Database, Filter, ChevronRight, Package, Truck, Building2 } from 'lucide-react';

const businessData = [
    {
        title: "Business Overview & Operations",
        heading: "Comprehensive view of Jarra Holdings's integrated commercial operations.",
        description: "Explore our diversified network of business activities. Our overview provides insights into our warehousing infrastructure, distribution networks, import/export operations, and overall growth trends across multiple locations.",
        features: [
            "Supply chain connectivity",
            "Multi-location warehousing",
            "Cross-border trading",
            "Logistics management",
            "Commercial partnerships"
        ]
    },
]

const businessCategories = [
    {
        icon: <Package className="w-5 h-5" />,
        title: "Import & Export",
        growth: "Growing",
        description: "Cross-border trade and sourcing",
        topFocus: ["International Markets", "Supplier Networks", "Trade Agreements"]
    },
    {
        icon: <Building2 className="w-5 h-5" />,
        title: "Warehousing",
        growth: "Expanding",
        description: "Strategic storage facilities",
        topFocus: ["Inventory Management", "Secure Storage", "Strategic Locations"]
    },
    {
        icon: <Truck className="w-5 h-5" />,
        title: "Distribution & Logistics",
        growth: "Scaling",
        description: "Reliable movement of goods",
        topFocus: ["Supply Networks", "Regional Delivery", "Transport Efficiency"]
    }
]

const keyMetrics = [
    {
        title: "Business Areas",
        value: "Multiple",
        change: "Diversified",
        period: "Integrated Operations",
        icon: <Database className="w-5 h-5" />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Commercial Reach",
        value: "Regional",
        change: "Expanding",
        period: "Market Operations",
        icon: <TrendingUp className="w-5 h-5" />,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Warehousing",
        value: "Strategic",
        change: "Locations",
        period: "Infrastructure",
        icon: <Building2 className="w-5 h-5" />,
        color: "from-amber-500 to-orange-500"
    },
    {
        title: "Partnerships",
        value: "Growing",
        change: "Network",
        period: "Commercial Relations",
        icon: <Filter className="w-5 h-5" />,
        color: "from-purple-500 to-pink-500"
    }
]

const operationsData = [
    { area: "Import Operations", focus: "Sourcing & Trade", infrastructure: "Integrated", status: "Active" },
    { area: "Export Operations", focus: "Market Access", infrastructure: "Integrated", status: "Active" },
    { area: "Warehousing", focus: "Storage & Inventory", infrastructure: "Multi-location", status: "Active" },
    { area: "Logistics", focus: "Movement of Goods", infrastructure: "Regional", status: "Active" },
    { area: "Distribution", focus: "Supply Networks", infrastructure: "Growing", status: "Active" }
]

const OverviewPage = () => {
    return (
        <div className='w-7xl mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                {/* Left Column - Main Content */}
                <div className='lg:col-span-8 space-y-8'>
                    {/* Key Metrics Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {keyMetrics.map((metric, index) => (
                            <div
                                key={index}
                                className='bg-white rounded-xl border border-border p-6 shadow-lg hover:shadow-xl transition-shadow'
                            >
                                <div className='flex items-start justify-between mb-4'>
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${metric.color} text-white`}>
                                        {metric.icon}
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700`}>
                                        {metric.change}
                                    </span>
                                </div>
                                <h3 className='text-2xl font-bold text-heading mb-2'>{metric.value}</h3>
                                <p className='text-heading font-medium mb-1'>{metric.title}</p>
                                <p className='text-sm text-muted'>{metric.period}</p>
                            </div>
                        ))}
                    </div>

                    {/* Featured Dashboard */}
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-border'>
                        <div className='p-6'>
                            <div className='flex justify-between items-start mb-6'>
                                <div>
                                    <h2 className='text-2xl font-bold text-heading mb-2'>
                                        {businessData[0].title}
                                    </h2>
                                    <p className='text-muted'>
                                        {businessData[0].heading}
                                    </p>
                                </div>
                                <div className='flex items-center gap-2 text-secondary font-medium'>
                                    <Filter className='w-5 h-5' />
                                    <span>Integrated Ecosystem</span>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <div className='h-64 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex flex-col items-center justify-center p-8 text-center'>
                                    <p className='text-muted mb-4'>{businessData[0].description}</p>
                                    <BarChart3 className='w-16 h-16 text-footer mx-auto' />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {businessData[0].features.map((feature, index) => (
                                    <div key={index} className='flex items-center gap-3 p-3 bg-background-secondary rounded-lg'>
                                        <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
                                            <Database className='w-4 h-4 text-secondary' />
                                        </div>
                                        <span className='text-muted'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Operations Table */}
                    <div className='bg-white rounded-xl border border-border shadow-lg overflow-hidden'>
                        <div className='p-6 border-b border-border'>
                            <h3 className='text-2xl font-bold text-heading flex items-center gap-2'>
                                <MapPin className='w-6 h-6 text-secondary' />
                                Business Operations
                            </h3>
                            <p className='text-muted mt-2'>
                                Overview of key business areas and infrastructure
                            </p>
                        </div>
                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                <thead className='bg-background-secondary'>
                                    <tr>
                                        <th className='py-3 px-6 text-left text-sm font-semibold text-heading'>Business Area</th>
                                        <th className='py-3 px-6 text-left text-sm font-semibold text-heading'>Strategic Focus</th>
                                        <th className='py-3 px-6 text-left text-sm font-semibold text-heading'>Infrastructure</th>
                                        <th className='py-3 px-6 text-left text-sm font-semibold text-heading'>Status</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200'>
                                    {operationsData.map((data, index) => (
                                        <tr key={index} className='hover:bg-background-secondary transition-colors'>
                                            <td className='py-4 px-6'>
                                                <div className='font-medium text-heading'>{data.area}</div>
                                            </td>
                                            <td className='py-4 px-6'>
                                                <span className='font-semibold text-heading'>{data.focus}</span>
                                            </td>
                                            <td className='py-4 px-6'>
                                                <div className='font-semibold text-heading'>{data.infrastructure}</div>
                                            </td>
                                            <td className='py-4 px-6'>
                                                <div className='flex items-center gap-1 text-green-600'>
                                                    <TrendingUp className='w-4 h-4' />
                                                    <span className='font-medium'>{data.status}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar Content */}
                <div className='lg:col-span-4 space-y-8'>
                    {/* Business Categories */}
                    <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100'>
                        <h3 className='text-2xl font-bold text-heading mb-6 flex items-center gap-2'>
                            <PieChart className='w-6 h-6' />
                            Key Verticals
                        </h3>
                        <div className='space-y-4'>
                            {businessCategories.map((category, index) => (
                                <div
                                    key={index}
                                    className='bg-white p-4 rounded-lg border border-blue-100 hover:border-blue-300 transition-colors'
                                >
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='flex items-center gap-2'>
                                            <div className='p-2 bg-blue-100 rounded-lg'>
                                                {category.icon}
                                            </div>
                                            <h4 className='font-bold text-heading'>{category.title}</h4>
                                        </div>
                                        <span className='px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium'>
                                            {category.growth}
                                        </span>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='text-sm text-muted mb-2'>{category.description}</p>
                                    </div>
                                    <div className='pt-3 border-t border-gray-100'>
                                        <p className='text-sm font-medium text-muted mb-2'>Focus Areas:</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {category.topFocus.map((focus, idx) => (
                                                <span key={idx} className='px-2 py-1 bg-background-secondary text-muted text-xs rounded'>
                                                    {focus}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Data Tools / Quick Links */}
                    <div className='bg-white rounded-xl border border-border p-6 shadow-sm'>
                        <h3 className='text-2xl font-bold text-heading mb-6'>
                            Network Operations
                        </h3>
                        <div className='space-y-4'>
                            {[
                                {
                                    title: "Supply Chain",
                                    description: "Connecting suppliers and markets",
                                    icon: <Package className="w-5 h-5" />
                                },
                                {
                                    title: "Distribution",
                                    description: "Reliable movement of goods",
                                    icon: <Truck className="w-5 h-5" />
                                },
                                {
                                    title: "Warehousing",
                                    description: "Strategic storage facilities",
                                    icon: <Building2 className="w-5 h-5" />
                                },
                                {
                                    title: "Commercial Trade",
                                    description: "Business partnerships & sourcing",
                                    icon: <TrendingUp className="w-5 h-5" />
                                }
                            ].map((tool, index) => (
                                <div
                                    key={index}
                                    className='flex items-center justify-between p-3 bg-background-secondary rounded-lg hover:bg-secondary/10 transition-colors group cursor-default'
                                >
                                    <div className='flex items-center gap-3'>
                                        <div className='p-2 bg-blue-100 rounded-lg text-secondary'>
                                            {tool.icon}
                                        </div>
                                        <div>
                                            <p className='font-medium text-heading group-hover:text-secondary'>{tool.title}</p>
                                            <p className='text-sm text-muted'>{tool.description}</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-footer group-hover:text-secondary" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats Footer */}
            <div className='mt-12 pt-8 border-t border-border'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div>
                        <p className='text-sm text-muted mb-2'>Operations</p>
                        <p className='font-medium text-heading'>Jarra Holdings</p>
                    </div>
                    <div className='flex items-center gap-6'>
                        <div className='text-center'>
                            <p className='text-2xl font-bold text-heading'>Reliable</p>
                            <p className='text-sm text-muted'>Partnerships</p>
                        </div>
                        <div className='h-8 w-px bg-gray-300'></div>
                        <div className='text-center'>
                            <p className='text-2xl font-bold text-heading'>Integrated</p>
                            <p className='text-sm text-muted'>Supply Chain</p>
                        </div>
                        <div className='h-8 w-px bg-gray-300'></div>
                        <div className='text-center'>
                            <p className='text-2xl font-bold text-heading'>Growing</p>
                            <p className='text-sm text-muted'>Network</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage