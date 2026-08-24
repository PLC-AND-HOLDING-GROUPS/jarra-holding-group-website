"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, getCategoryById } from "@/datas/mockProducts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
    const category = getCategoryById(product.categoryId);

    const getStatusColor = (status: Product['status']) => {
        switch (status) {
            case 'Available': return 'bg-green-100 text-green-800 border-green-200';
            case 'Available on Request': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Inquiry Required': return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'Currently Unavailable': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <Card className="group flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-card pt-0">
            {/* Image Container */}
            <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {category && (
                        <Badge variant="secondary" className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm shadow-sm font-semibold">
                            {category.name}
                        </Badge>
                    )}
                </div>
                <div className="absolute top-3 right-3">
                    <Badge variant="outline" className={`backdrop-blur-sm shadow-sm ${getStatusColor(product.status)}`}>
                        {product.status}
                    </Badge>
                </div>
            </div>

            {/* Content Container */}
            <CardContent className="flex flex-col flex-grow p-5">
                <h3 className="text-xl font-bold text-heading mb-2 line-clamp-2">
                    {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                    {product.shortDescription}
                </p>

                {/* Specifications Preview (if any) */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-1 mb-2 pt-4 border-t border-border">
                        {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                            <div key={key} className="flex flex-col">
                                <span className="text-[10px] uppercase text-muted-foreground font-semibold">{key}</span>
                                <span className="text-xs font-medium text-heading truncate">{value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>

            {/* Actions */}
            <CardFooter className="p-5 pt-0 mt-auto flex gap-2">
                <Link href={`/products/${product.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full text-sm h-10 border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors">
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
