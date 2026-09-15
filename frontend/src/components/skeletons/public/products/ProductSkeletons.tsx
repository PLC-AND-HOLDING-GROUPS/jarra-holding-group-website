import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <Card className="group flex flex-col h-full overflow-hidden border-border bg-card pt-0">
            {/* Image Skeleton */}
            <div className="relative w-full h-56 bg-slate-100 overflow-hidden pb-0 -mb-2">
                <Skeleton className="w-full h-full rounded-none" />
                
                {/* Badges Skeleton */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                    <Skeleton className="h-5 w-24 rounded-full" />
                </div>
                <div className="absolute top-3 right-3 z-10">
                    <Skeleton className="h-5 w-20 rounded-full" />
                </div>
            </div>

            {/* Content Skeleton */}
            <CardContent className="flex flex-col flex-grow p-2 pt-4 lg:pt-6">
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                
                {/* Specs Skeleton */}
                <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-1 mb-2 pt-4 border-t border-border">
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-3 w-12" />
                        <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-3 w-12" />
                        <Skeleton className="h-4 w-20" />
                    </div>
                </div>
            </CardContent>

            {/* Actions Skeleton */}
            <CardFooter className="p-2 pt-0 mt-auto flex gap-2">
                <Skeleton className="w-full h-10 rounded-md" />
            </CardFooter>
        </Card>
    );
}
