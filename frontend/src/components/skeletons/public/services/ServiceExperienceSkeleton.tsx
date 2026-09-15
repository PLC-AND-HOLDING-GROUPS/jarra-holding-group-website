import { Skeleton } from "@/components/ui/skeleton";
import { LayoutSectionHeaderSkeleton } from "../layout/LayoutSectionHeaderSkeleton";

export function ServiceExperienceSkeleton() {
    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <LayoutSectionHeaderSkeleton align="center" />

                <div className="relative">
                    {/* Connecting Line Skeleton (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-200" />
                    
                    {/* Connecting Line Skeleton (Mobile) */}
                    <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200" />

                    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10 w-full">
                        {Array.from({ length: 5 }).map((_, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div 
                                    key={idx}
                                    className={`flex w-full md:w-auto md:flex-col items-center md:items-center relative ${isEven ? 'flex-row' : 'flex-row-reverse'} md:!flex-col`}
                                >
                                    {/* Content half */}
                                    <div className={`w-1/2 md:w-full flex flex-col justify-center ${isEven ? 'items-end text-right pr-12 md:pr-0' : 'items-start text-left pl-12 md:pl-0'} md:items-center md:text-center`}>
                                        <Skeleton className="h-6 w-24 mb-2" />
                                        <Skeleton className="h-4 w-full max-w-[180px] md:mx-auto mb-1" />
                                        <Skeleton className="h-4 w-4/5 max-w-[180px] md:mx-auto" />
                                    </div>
                                    
                                    {/* Empty half on mobile */}
                                    <div className="w-1/2 md:hidden" />

                                    {/* Mobile node position override */}
                                    <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:order-first w-16 md:w-24 h-16 md:h-24 rounded-full bg-slate-100 flex items-center justify-center z-10 md:mb-6 shrink-0 border-4 border-slate-200" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
