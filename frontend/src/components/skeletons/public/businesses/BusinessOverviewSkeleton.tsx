import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export function BusinessOverviewSkeleton() {
    return (
        <div className='w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                {/* Left Column - Main Content */}
                <div className='lg:col-span-8 space-y-8'>
                    
                    {/* Key Metrics Grid Skeleton */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className='bg-white rounded-xl border border-border p-6 shadow-sm'>
                                <div className='flex items-start justify-between mb-4'>
                                    <Skeleton className="w-9 h-9 rounded-lg" />
                                    <Skeleton className="w-12 h-5 rounded-full" />
                                </div>
                                <Skeleton className="h-8 w-24 mb-2" />
                                <Skeleton className="h-5 w-3/4 mb-1" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        ))}
                    </div>

                    {/* Featured Dashboard Skeleton */}
                    <div className='bg-white rounded-xl shadow-sm overflow-hidden border border-border'>
                        <div className='p-6'>
                            <div className='flex justify-between items-start mb-6'>
                                <div className="w-full">
                                    <Skeleton className="h-8 w-1/3 mb-2" />
                                    <Skeleton className="h-5 w-1/2" />
                                </div>
                            </div>

                            <div className='mb-8'>
                                <Skeleton className="h-64 w-full rounded-lg" />
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className='flex items-center gap-3 p-3 bg-slate-50 rounded-lg'>
                                        <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                                        <Skeleton className="h-4 w-3/4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* General Overview Skeleton */}
                    <div className='bg-white rounded-xl shadow-sm overflow-hidden border border-border'>
                        <div className='p-6'>
                            <div className='flex justify-between items-start mb-6'>
                                <div className="w-full">
                                    <Skeleton className="h-8 w-1/3 mb-2" />
                                    <Skeleton className="h-5 w-1/2" />
                                </div>
                            </div>
                            <div className='mb-8'>
                                <Skeleton className="h-64 w-full rounded-lg" />
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className='flex items-center gap-3 p-3 bg-slate-50 rounded-lg'>
                                        <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                                        <Skeleton className="h-4 w-3/4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Operations Table Skeleton */}
                    <div className='bg-white rounded-xl border border-border shadow-sm overflow-hidden'>
                        <div className='p-6 border-b border-border'>
                            <Skeleton className="h-8 w-1/3 mb-2" />
                            <Skeleton className="h-5 w-2/3" />
                        </div>
                        <div className='p-6'>
                            <div className="space-y-4">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <Skeleton key={i} className="h-12 w-full" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar Content */}
                <div className='lg:col-span-4 space-y-8'>
                    {/* Key Verticals Skeleton */}
                    <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                        <Skeleton className="h-8 w-1/2 mb-6" />
                        <div className='space-y-4'>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className='bg-white p-4 rounded-lg border border-slate-100'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <div className='flex items-center gap-2'>
                                            <Skeleton className="w-9 h-9 rounded-lg" />
                                            <Skeleton className="h-5 w-24" />
                                        </div>
                                    </div>
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-5/6 mb-4" />
                                    
                                    <div className='pt-3 border-t border-gray-100'>
                                        <Skeleton className="h-3 w-16 mb-2" />
                                        <div className='flex gap-2'>
                                            <Skeleton className="h-6 w-16 rounded" />
                                            <Skeleton className="h-6 w-20 rounded" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Network Operations Skeleton */}
                    <div className='bg-white rounded-xl border border-border p-6 shadow-sm'>
                        <Skeleton className="h-8 w-2/3 mb-2" />
                        <Skeleton className="h-4 w-full mb-6" />
                        
                        <div className='space-y-4'>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className='flex items-center justify-between p-3 bg-slate-50 rounded-lg'>
                                    <div className='flex items-center gap-3 w-full'>
                                        <Skeleton className="w-9 h-9 rounded-lg shrink-0" />
                                        <div className="w-full">
                                            <Skeleton className="h-4 w-3/4 mb-1" />
                                            <Skeleton className="h-3 w-1/2" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats Footer Skeleton */}
            <div className='mt-12 pt-8 border-t border-border'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div className="flex gap-8 w-full md:w-1/3">
                        <div className="w-full">
                            <Skeleton className="h-3 w-16 mb-2" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                        <div className="w-full">
                            <Skeleton className="h-3 w-16 mb-2" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                    </div>
                    <div className='flex items-center gap-6 w-full md:w-1/3 justify-end'>
                        <div className='text-center w-24'>
                            <Skeleton className="h-8 w-16 mx-auto mb-1" />
                            <Skeleton className="h-3 w-12 mx-auto" />
                        </div>
                        <div className='h-8 w-px bg-gray-200'></div>
                        <div className='text-center w-24'>
                            <Skeleton className="h-8 w-16 mx-auto mb-1" />
                            <Skeleton className="h-3 w-12 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
