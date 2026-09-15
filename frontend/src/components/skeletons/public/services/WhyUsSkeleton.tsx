import { Skeleton } from "@/components/ui/skeleton";
import { LayoutSectionHeaderSkeleton } from "../layout/LayoutSectionHeaderSkeleton";

export function WhyUsSkeleton() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <LayoutSectionHeaderSkeleton align="center" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200 p-8 rounded-2xl flex items-start gap-4"
                        >
                            <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
                            <div className="w-full">
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-full mb-1" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
