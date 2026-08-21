"use client";
import { useGetStrategiesQuery } from "@/redux/api/strategyApi";
import { getImageUrl } from "@/utils/fileUrl";
import SplitTitle from "@/components/common/SplitTitle";

const Column = ({ item, isLast = false }: { item: any; isLast?: boolean }) => {
    return (
        <div className={`flex flex-col items-center text-center p-8 ${!isLast ? 'md:border-r border-gray-200' : ''}`}>
            {/* Main Icon */}
            <div className="mb-8 relative flex items-center justify-center">
                {item.icon}
                {/* Subtle highlight behind icon */}
                {item.icon && <div className="absolute inset-0 bg-[#00B4D8]/10 rounded-full blur-xl -z-10"></div>}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold tracking-tight mb-5 uppercase">
                <span className="text-[#003B5C]">OUR</span> <span className="text-[#00B4D8]">{item.title2}</span>
            </h3>

            <div className="flex items-center justify-center w-full mb-6 opacity-60">
                <div className="h-px bg-gray-300 w-12"></div>
                <div className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full mx-2"></div>
                <div className="h-px bg-gray-300 w-12"></div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                {item.description}
            </p>
        </div>
    );
};

export default function VisionMissionValues() {
    const { data: strategiesData, isLoading } = useGetStrategiesQuery();
    
    if (isLoading) {
        return (
            <div className="py-16 bg-white w-full flex justify-center items-center">
                <div className="animate-pulse bg-gray-200 h-64 w-full max-w-7xl mx-4 rounded-xl" />
            </div>
        );
    }

    if (!strategiesData || strategiesData.length === 0) {
        return null;
    }

    const strategy = strategiesData[0];
    
    const sectionTitle = strategy.title || "Organizational Strategy";
    const sectionDescription = strategy.description || "";

    const displayData = {
        mission: { title2: "MISSION", icon: null as any, description: "" },
        vision: { title2: "VISION", icon: null as any, description: "" },
        values: { title2: "VALUES", icon: null as any, description: "" },
    };

    strategy.sections?.forEach((sec: any) => {
        const imageUrl = sec.attachment ? getImageUrl(sec.attachment) : null;
        const customIcon = imageUrl ? <img src={imageUrl} alt={sec.type} className="w-28 h-28 object-contain z-10" /> : null;

        if (sec.type === "mission") {
            if (sec.content) displayData.mission.description = sec.content;
            if (customIcon) displayData.mission.icon = customIcon;
        } else if (sec.type === "vision") {
            if (sec.content) displayData.vision.description = sec.content;
            if (customIcon) displayData.vision.icon = customIcon;
        } else if (sec.type === "core_values") {
            if (sec.core_values && sec.core_values.length > 0) {
                displayData.values.description = (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full max-w-xs mx-auto">
                        {sec.core_values.map((v: any, i: number) => (
                            <div key={i} className="flex items-center gap-2 justify-start text-left text-sm">
                                <div className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full shrink-0" />
                                <span className="font-semibold text-gray-700">{v.title}</span>
                            </div>
                        ))}
                    </div>
                ) as any;
            } else if (sec.content) {
                displayData.values.description = sec.content;
            }
            if (customIcon) displayData.values.icon = customIcon;
        }
    });

    return (
        <div className="py-16 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <SplitTitle title={sectionTitle} />
                    </h2>
                    {sectionDescription && (
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            {sectionDescription}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-4">
                    <Column item={displayData.mission} />
                    <Column item={displayData.vision} />
                    <Column item={displayData.values} isLast={true} />
                </div>
            </div>
        </div>
    );
}
