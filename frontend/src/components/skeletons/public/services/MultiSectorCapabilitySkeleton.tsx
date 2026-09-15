import { Skeleton } from "@/components/ui/skeleton";

export function MultiSectorCapabilitySkeleton() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <Skeleton className="h-10 md:h-12 w-3/4 max-w-lg mb-6" />
                    <Skeleton className="h-6 w-full max-w-2xl mb-2" />
                    <Skeleton className="h-6 w-5/6 max-w-2xl" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Navigation List Skeleton */}
                    <div className="lg:w-1/3 flex flex-col gap-2 lg:gap-3">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Skeleton key={idx} className="h-16 w-full rounded-xl" />
                        ))}
                    </div>

                    {/* Desktop Content Display Skeleton */}
                    <div className="hidden lg:block lg:w-2/3">
                        <Skeleton className="rounded-2xl h-full min-h-[400px] w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
