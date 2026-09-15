import { Skeleton } from "@/components/ui/skeleton";

export function PhysicalFootprintSkeleton() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col items-center md:items-start">
                    <Skeleton className="h-10 w-3/4 max-w-md mb-6" />
                    <Skeleton className="h-6 w-full max-w-xl mb-2" />
                    <Skeleton className="h-6 w-5/6 max-w-xl" />
                </div>

                <div className="relative w-full rounded-3xl bg-slate-900 p-8 md:p-16 overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                    {/* Locations List Skeleton */}
                    <div className="relative z-10 w-full md:w-1/2">
                        <div className="space-y-6">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex items-center space-x-4 border-b border-white/20 pb-4">
                                    <Skeleton className="w-2 h-2 rounded-full shrink-0 bg-white/20" />
                                    <Skeleton className="h-6 w-48 bg-white/20" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats or text Skeleton */}
                    <div className="relative z-10 w-full md:w-1/2">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                            <Skeleton className="h-7 w-48 mb-4 bg-white/20" />
                            <Skeleton className="h-4 w-full mb-2 bg-white/20" />
                            <Skeleton className="h-4 w-full mb-2 bg-white/20" />
                            <Skeleton className="h-4 w-5/6 bg-white/20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function EditorialIntroSkeleton() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Editorial Text Skeleton */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center space-x-4 mb-4">
                            <div className="w-12 h-px bg-gray-300" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                        
                        <div className="space-y-3">
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-10 w-4/5" />
                        </div>
                        
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <br />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-11/12" />
                        </div>
                    </div>

                    {/* Large Image Skeleton */}
                    <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden order-1 lg:order-2">
                        <Skeleton className="w-full h-full rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function FacilityEditorialShowcaseSkeleton() {
    return (
        <section className="py-24 bg-slate-50 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-20 text-center">
                    <Skeleton className="h-10 md:h-12 w-64 mx-auto mb-6" />
                    <div className="w-24 h-1 bg-gray-200 mx-auto mt-6 rounded-full" />
                </div>

                <div className="space-y-32">
                    {Array.from({ length: 3 }).map((_, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                {/* Image Column */}
                                <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <Skeleton className="w-full h-full" />
                                </div>

                                {/* Text Column */}
                                <div className={`flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <Skeleton className="h-20 w-24 mb-4 opacity-10" />
                                    <Skeleton className="h-4 w-48 mb-4" />
                                    <Skeleton className="h-10 md:h-12 w-3/4 mb-6" />
                                    <div className="space-y-2 border-l-2 border-gray-200 pl-6 mb-8">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-5/6" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
