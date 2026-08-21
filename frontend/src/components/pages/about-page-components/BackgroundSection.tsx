"use client";
import React from "react";
import * as Icons from "lucide-react";
import RotatingGlobe from "./RotatingGlobe";
import { useGetBackgroundsQuery } from "@/redux/api/backgroundApi";
import SplitTitle from "@/components/common/SplitTitle";

const BackgroundPage = () => {
    const { data: backgrounds = [] } = useGetBackgroundsQuery();

    const title = backgrounds[0]?.title || "Company Background & Import/Export";
    const description = backgrounds[0]?.description || "Established to regulate and develop Ethiopia's mineral and petroleum resources for sustainable economic growth, national development, and global import/export operations.";
    const iconName = backgrounds[0]?.icon || "Building2";
    const IconComponent = (Icons as any)[iconName] || Icons.Building2;

    return (
        <div className="h-auto  py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-2xl">
                            <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            <SplitTitle title={title} />
                        </h1>
                    </div>
                    <p className="text-muted text-lg max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
                </div>

                <div className="flex items-center justify-center">
                    <RotatingGlobe /></div>
            </div>
        </div>
    );
};

export default BackgroundPage;