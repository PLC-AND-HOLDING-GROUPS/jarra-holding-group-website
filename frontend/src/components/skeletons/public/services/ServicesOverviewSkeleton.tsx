import { Skeleton } from "@/components/ui/skeleton";

export function ServicesOverviewSkeleton() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Editorial Heading Skeleton */}
                    <div className="lg:w-1/2 w-full">
                        <Skeleton className="h-4 w-32 mb-4" />
                        <Skeleton className="h-10 md:h-12 w-full max-w-lg mb-2" />
                        <Skeleton className="h-10 md:h-12 w-4/5 max-w-lg mb-6" />
                        
                        <div className="space-y-3">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-4/5" />
                        </div>
                    </div>

                    {/* Right: Visual Capability Map Skeleton */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {Array.from({ length: 6 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex items-center justify-between"
                                >
                                    <Skeleton className="w-10 h-10 rounded-full shrink-0" />
                                    <Skeleton className="h-5 w-24" />
                                    <div className="w-4 h-4" /> {/* Placeholder for arrow */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
