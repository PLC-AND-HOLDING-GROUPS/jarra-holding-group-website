import React from 'react'
import Image from "next/image";
const businessData = [
    {
        title: "Our Businesses",
        heading: "Built around connected business operations",
        description: "From sourcing and import to warehousing, distribution and export, Jarra Holding Group connects different stages of the commercial supply chain.",
        image: "/factory2.jpg",
    },
]

const BusinessesPage = () => {
    return (
        <div className='w-7xl mx-auto grid grid-cols-1 md:grid-cols-7 gap-8'>
            <div className="col-span-2 prose max-w-none flex flex-col gap-4 text-muted">
                <p className='text-heading'>
                    Jarra Holding Group operates across a diversified network of commercial activities, connecting sourcing, import, export, warehousing, distribution, logistics, and business operations across multiple locations.
                </p>
                <p className='text-muted'>
                    We are building a robust and interconnected business ecosystem. By managing critical supply chain infrastructure and facilitating regional trade, Jarra ensures reliable delivery of value for partners and markets.
                </p>
            </div>
            <div className="col-span-3 flex flex-col gap-4">
                <Image
                    src={businessData[0].image}
                    alt={businessData[0].title}
                    width={1200}
                    height={1200}
                    className="object-cover w-full"
                    priority={true}
                />
                <p className='text-heading'>
                    {businessData[0].heading}
                </p>
            </div>
            {/* Business Principles */}
            <div className="col-span-2 prose max-w-none flex flex-col gap-2 text-muted">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-primary">Our Business Principles</h2>
                    <h3 className="text-lg font-bold text-secondary mt-2">• Reliability</h3>
                    <p>Delivering dependable commercial and logistics operations.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-secondary">• Efficiency</h3>
                    <p>Connecting sourcing, storage and distribution efficiently.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-secondary">• Partnership</h3>
                    <p>Building long-term relationships with suppliers, customers and partners.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-secondary">• Growth</h3>
                    <p>Expanding business capabilities and market opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessesPage