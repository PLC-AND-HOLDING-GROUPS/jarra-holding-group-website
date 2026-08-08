"use client";
import { Target, Lightbulb, HeartHandshake, Star } from "lucide-react";

const data = {
    mission: {
        title2: "MISSION",
        icon: <Target className="w-16 h-16 text-[#003B5C]" strokeWidth={1.5} />,
        smallIcon: <Target className="w-5 h-5 text-[#003B5C]" strokeWidth={1.5} />,
        description:
            "To generate, manage, and deliver geosciences data for society and business in a sustainable and responsible manner that supports the development of mineral resources in Ethiopia.",
    },
    vision: {
        title2: "VISION",
        icon: <Lightbulb className="w-16 h-16 text-[#00B4D8]" strokeWidth={1.5} />,
        smallIcon: <Lightbulb className="w-5 h-5 text-[#00B4D8]" strokeWidth={1.5} />,
        description:
            "To foresee the well developed Mineral Resources Contribution to the Foreign Currency Earnings increase by 10 fold, and be the backbone of the industry.",
    },
    values: {
        title2: "VALUES",
        icon: <HeartHandshake className="w-16 h-16 text-[#003B5C]" strokeWidth={1.5} />,
        smallIcon: <Star className="w-5 h-5 text-[#003B5C]" strokeWidth={1.5} />,
        description:
            "Teamwork, Innovation, Endurance, and Ethics underpin all our activities, ensuring transparency, accountability, fairness, and integrity in decision-making and sustainable development.",
    }
};

const Column = ({ item, isLast = false }: { item: any; isLast?: boolean }) => {
    return (
        <div className={`flex flex-col items-center text-center p-8 ${!isLast ? 'md:border-r border-gray-200' : ''}`}>
            {/* Main Icon */}
            <div className="mb-8 relative flex items-center justify-center">
                {item.icon}
                {/* Subtle highlight behind icon */}
                <div className="absolute inset-0 bg-[#00B4D8]/10 rounded-full blur-xl -z-10"></div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold tracking-tight mb-5 uppercase">
                <span className="text-[#003B5C]">OUR</span> <span className="text-[#00B4D8]">{item.title2}</span>
            </h3>

            {/* Divider with dot */}
            <div className="flex items-center justify-center w-full mb-6 opacity-60">
                <div className="h-px bg-gray-300 w-12"></div>
                <div className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full mx-2"></div>
                <div className="h-px bg-gray-300 w-12"></div>
            </div>

            {/* Small icon */}
            <div className="mb-6 opacity-80">
                {item.smallIcon}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                {item.description}
            </p>
        </div>
    );
};

export default function VisionMissionValues() {
    return (
        <div className="py-16 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-4">
                    <Column item={data.mission} />
                    <Column item={data.vision} />
                    <Column item={data.values} isLast={true} />
                </div>
            </div>
        </div>
    );
}
