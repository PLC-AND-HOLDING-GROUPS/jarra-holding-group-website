import React from 'react';
import { Skeleton } from '../../ui/skeleton';

export function SectionHeaderSkeleton({ 
    align = "center",
    light = false 
}: { 
    align?: "center" | "left" | "right",
    light?: boolean
}) {
    return (
        <div className={`mb-12 md:mb-16 flex flex-col ${
            align === "center" ? "items-center text-center" : 
            align === "right" ? "items-end text-right" : "items-start text-left"
        }`}>
            <Skeleton className={`h-10 md:h-12 w-64 md:w-96 mb-6 ${light ? "bg-white/30" : ""}`} />
            <Skeleton className={`h-6 w-full max-w-2xl mb-2 ${light ? "bg-white/20" : ""}`} />
            <Skeleton className={`h-6 w-5/6 max-w-2xl ${light ? "bg-white/20" : ""}`} />
        </div>
    );
}
