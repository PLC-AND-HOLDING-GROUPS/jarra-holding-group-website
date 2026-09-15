import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function PurposeSkeleton() {
    return (
        <section className="w-full bg-slate-50 py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
                        <Skeleton className="h-4 w-32 mb-4" />
                        <Skeleton className="h-16 w-full max-w-lg mb-2" />
                        <Skeleton className="h-16 w-3/4 max-w-lg mb-8" />
                        
                        <div className="space-y-3">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-4/5" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 relative">
                        <Skeleton className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl" />
                        
                        {/* Overlapping Statement Skeleton */}
                        <div className="absolute -bottom-10 -left-6 md:-left-12 lg:-left-16 bg-white p-6 md:p-8 rounded-xl shadow-xl border border-slate-100 max-w-[280px] md:max-w-[320px] z-20 w-full">
                            <Skeleton className="h-1 w-12 bg-gray-200 rounded-full mb-4" />
                            <Skeleton className="h-6 w-full mb-2" />
                            <Skeleton className="h-6 w-3/4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pillars Skeleton */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <Skeleton className="w-14 h-14 rounded-xl mb-6" />
                            <Skeleton className="h-6 w-3/4 mb-3" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function PartnersSkeleton() {
    return (
        <section className="w-full max-w-7xl pb-28 overflow-hidden">
            <div className="mb-10 px-4">
                <Skeleton className="h-8 w-48 mb-2" />
                <div className="mt-2 h-1 w-20 bg-primary rounded-full mb-3"></div>
                <Skeleton className="h-4 w-full max-w-2xl mb-1" />
                <Skeleton className="h-4 w-5/6 max-w-2xl" />
            </div>

            <div className="flex gap-12 overflow-hidden px-4 opacity-50">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} className="h-16 md:h-24 min-w-[150px] shrink-0 rounded-xl" />
                ))}
            </div>
        </section>
    );
}

export function CardSkeleton() {
    return (
        <section className="w-full flex justify-center md:px-4 mb-20 pt-2">
            <div className="relative w-full max-w-7xl md:rounded-3xl overflow-hidden bg-slate-900 border border-slate-800">
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-8 lg:p-14">
                    {/* Left Text */}
                    <div className="w-full lg:w-3/4">
                        <Skeleton className="h-8 lg:h-10 w-full max-w-lg mb-4 bg-white/20" />
                        <Skeleton className="h-4 w-full max-w-2xl mb-2 bg-white/10" />
                        <Skeleton className="h-4 w-5/6 max-w-2xl bg-white/10" />
                    </div>

                    {/* Right Buttons */}
                    <div className="flex gap-4">
                        <Skeleton className="h-10 w-32 rounded-md bg-white/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function PurposeAndImpactSkeleton() {
    return (
        <section className="w-full py-24 bg-white relative overflow-hidden">
            {/* Section Header */}
            <div className="max-w-full mx-auto px-4 md:px-8 mb-16 text-center">
                <Skeleton className="h-10 md:h-14 w-3/4 max-w-2xl mx-auto mb-6" />
                <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2" />
                <Skeleton className="h-6 w-5/6 max-w-3xl mx-auto" />
            </div>

            {/* Purpose Visualization Skeleton */}
            <div className="relative max-w-[95%] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[2/1] md:aspect-[3/1]">
                <Skeleton className="absolute inset-0 bg-slate-800" />
            </div>

            {/* Vision Statement Skeleton */}
            <div className="max-w-4xl mx-auto mt-12 px-4 text-center">
                <Skeleton className="h-4 w-32 mx-auto mb-4" />
                <Skeleton className="h-8 md:h-10 w-full max-w-lg mx-auto" />
            </div>
        </section>
    );
}
