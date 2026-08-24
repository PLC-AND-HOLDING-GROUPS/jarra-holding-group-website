"use client";

import InteractiveGrid from '../../ui/interactive-grid';
import { useGetPageHeaderByIdentifierQuery } from "@/redux/api/pageHeaderApi";
import * as LucideIcons from "lucide-react";
import React from 'react';
import { getFileUrl } from '@/utils/fileUrl';

const PageHeader = ({ title, icon, description, pageIdentifier }: { title?: string, icon?: React.ReactNode, description?: string, pageIdentifier?: string }) => {
    const { data: pageHeaderData } = useGetPageHeaderByIdentifierQuery(
        pageIdentifier || "",
        { skip: !pageIdentifier }
    );

    const displayTitle = pageHeaderData?.title || title || "";
    const displayDescription = pageHeaderData?.description || description || "";
    
    let DisplayIcon = icon;
    if (pageHeaderData?.icon && (LucideIcons as any)[pageHeaderData.icon]) {
        const IconComponent = (LucideIcons as any)[pageHeaderData.icon] as any;
        DisplayIcon = <IconComponent className="w-8 h-8" />;
    }

    const bgImage = pageHeaderData?.backgroundAttachment?.file_path;

    return (
        <div className="relative w-full overflow-hidden bg-slate-950">
            {bgImage && (
                <div 
                    className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
                    style={{
                        backgroundImage: `url('${getFileUrl(bgImage)}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}
            <div className="relative z-10 w-full h-full">
                <InteractiveGrid>
                    <div className="flex mt-10 mb-10 flex-col items-center justify-center gap-4 px-4 relative z-20">
                        {/* Icon */}
                        {DisplayIcon && (
                            <span className="font-bold border rounded-xl border-gray-500 bg-gray-500/40 text-golden-dark w-[72px] h-[72px] flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
                                {DisplayIcon}
                            </span>
                        )}

                        {/* Title */}
                        <h1 className="text-2xl md:3xl lg:text-5xl font-bold text-golden-classic text-center">
                            {displayTitle}
                        </h1>

                        {/* Description */}
                        <p className="text-sm md:text-lg lg:text-xl text-golden-dark text-center max-w-3xl">
                            {displayDescription}
                        </p>
                    </div>
                </InteractiveGrid>
            </div>
        </div>
    )
}

export default PageHeader;
