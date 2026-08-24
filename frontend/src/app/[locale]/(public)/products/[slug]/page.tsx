import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import InquiryForm from "@/components/pages/product-page-components/InquiryForm";
import ProductImageGallery from "@/components/pages/product-page-components/ProductImageGallery";

async function getProduct(slug: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`, {
            next: { revalidate: 60 } // Revalidate every minute
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.data;
    } catch (e) {
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug } = await params;
    const product = await getProduct(slug);
    if (!product) return { title: "Product Not Found" };
    
    return {
        title: `${product.name} - Jarra Holding Group`,
        description: product.short_description
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug, locale } = await params;
    const product = await getProduct(slug);
    
    if (!product) {
        notFound();
    }

    const category = product.category;

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
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Breadcrumb / Back Navigation */}
            <div className="bg-white border-b border-border py-4">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <Link href={`/${locale}/products`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to Products
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Left Column: Product Info */}
                    <div className="lg:col-span-7 space-y-8">
                        
                        {/* Hero Image / Gallery */}
                        <ProductImageGallery 
                            images={product.attachments?.map((a: any) => a.attachment?.url) || []} 
                            title={product.name} 
                            status={product.status} 
                        />

                        {/* Title & Description */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                            <div className="mb-4">
                                {category && (
                                    <Badge variant="secondary" className="mb-3">
                                        {category.name}
                                    </Badge>
                                )}
                                <h1 className="text-3xl md:text-4xl font-bold text-heading">
                                    {product.name}
                                </h1>
                            </div>
                            
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    {product.full_description}
                                </p>
                            </div>

                            {/* Specifications */}
                            {product.specifications && Object.keys(product.specifications).length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-heading mb-4">Key Specifications</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                                                    {key}
                                                </div>
                                                <div className="font-medium text-heading">
                                                    {value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Applications */}
                            {product.applications && product.applications.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-heading mb-4">Common Applications</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {product.applications.map((app, index) => (
                                            <li key={index} className="flex items-center text-muted-foreground">
                                                <CheckCircle2 className="w-5 h-5 text-primary/60 mr-3 flex-shrink-0" />
                                                <span>{app}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <InquiryForm product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
