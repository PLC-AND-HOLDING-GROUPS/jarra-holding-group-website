"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProductImageGalleryProps {
    images: string[];
    title: string;
    status: string;
}

export default function ProductImageGallery({ images, title, status }: ProductImageGalleryProps) {
    const [mainImage, setMainImage] = useState(images[0]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Available': return 'bg-green-100 text-green-800 border-green-200';
            case 'Available on Request': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Inquiry Required': return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'Currently Unavailable': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-md">
                <Image 
                    src={mainImage} 
                    alt={title} 
                    fill 
                    className="object-cover transition-opacity duration-300"
                    priority
                />
                <div className="absolute top-4 right-4">
                    <Badge variant="outline" className={`px-3 py-1 shadow-sm backdrop-blur-sm ${getStatusColor(status)}`}>
                        {status}
                    </Badge>
                </div>
            </div>

            {/* Thumbnail Slider */}
            {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                    {images.map((img, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setMainImage(img)}
                            className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                                mainImage === img ? "border-primary shadow-md" : "border-transparent opacity-70 hover:opacity-100 hover:border-slate-300"
                            }`}
                        >
                            <Image 
                                src={img} 
                                alt={`${title} thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
