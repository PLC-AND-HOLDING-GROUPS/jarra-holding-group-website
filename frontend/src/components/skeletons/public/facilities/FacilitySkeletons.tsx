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
