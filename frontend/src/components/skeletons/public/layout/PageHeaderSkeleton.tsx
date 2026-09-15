import React from 'react';
import InteractiveGrid from '@/components/ui/interactive-grid';
import { Skeleton } from '@/components/ui/skeleton';

export function PageHeaderSkeleton() {
    return (
        <div className="relative w-full overflow-hidden bg-slate-950">
            <div className="relative z-10 w-full h-full">
                <InteractiveGrid>
                    <div className="flex mt-10 mb-10 flex-col items-center justify-center gap-4 px-4 relative z-20 w-full">
                        {/* Icon */}
                        <Skeleton className="w-[72px] h-[72px] rounded-xl border border-gray-600 bg-gray-600/40" />

                        {/* Title (matches text-5xl) */}
                        <Skeleton className="h-12 w-64 md:w-96 rounded-md bg-white/20" />

                        {/* Description (matches text-xl, max-w-3xl) */}
                        <div className="flex flex-col items-center gap-2 w-full max-w-3xl">
                            <Skeleton className="h-6 w-full rounded-md bg-white/10" />
                            <Skeleton className="h-6 w-5/6 rounded-md bg-white/10" />
                        </div>
                    </div>
                </InteractiveGrid>
            </div>
        </div>
    );
}
