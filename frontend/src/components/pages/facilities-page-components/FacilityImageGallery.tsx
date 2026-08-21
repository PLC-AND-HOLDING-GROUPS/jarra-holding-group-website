"use client";

import React from "react";
import Image from "next/image";

interface FacilityImageGalleryProps {
    images: string[];
    title: string;
}

export default function FacilityImageGallery({ images, title }: FacilityImageGalleryProps) {
    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="relative w-full aspect-[21/9] bg-slate-100 overflow-hidden shadow-2xl">
                <Image 
                    src={images[0]} 
                    alt={title} 
                    fill 
                    className="object-cover"
                />
            </div>
        );
    }

    // Editorial Asymmetric Layout for multiple images
    return (
        <div className="space-y-4 md:space-y-8">
            {/* Massive hero shot */}
            <div className="relative w-full aspect-[21/9] bg-slate-100 overflow-hidden shadow-2xl group">
                <Image 
                    src={images[0]} 
                    alt={`${title} - Main View`}
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
            </div>

            {/* Split row for remaining images */}
            {images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {images.slice(1, 3).map((img, idx) => (
                        <div key={idx} className={`relative w-full overflow-hidden shadow-lg ${idx === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square md:aspect-[3/4]'} group`}>
                            <Image 
                                src={img} 
                                alt={`${title} - Detail View ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            )}
            
            {/* If there are more than 3 images, handle them dynamically (not required for current mock data) */}
        </div>
    );
}
