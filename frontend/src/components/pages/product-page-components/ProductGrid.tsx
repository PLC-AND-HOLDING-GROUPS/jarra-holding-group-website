"use client";

import React, { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useGetProductsPaginatedQuery, useGetCategoriesQuery } from "@/redux/api/productApi";
import { Product, ProductCategory } from "@/redux/types/product";
import ProductCard from "./ProductCard";
import { useParams } from "next/navigation";
import { ProductCardSkeleton } from "@/components/skeletons";
import { Button } from "@/components/ui/button";

export default function ProductGrid() {
    const params = useParams();
    const locale = (params?.locale as string) || "en";
    
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [page, setPage] = useState(1);
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Reset list when filters change
    useEffect(() => {
        setPage(1);
        setAllProducts([]);
    }, [activeCategory, debouncedSearch]);

    const { data: categories = [] } = useGetCategoriesQuery({ isPublic: true });

    const { data, isLoading, isError, isFetching } = useGetProductsPaginatedQuery({
        page,
        limit: 8,
        category: activeCategory !== "all" ? activeCategory : undefined,
        search: debouncedSearch || undefined,
        isAdmin: false
    });

    // Append new data
    useEffect(() => {
        if (data?.data) {
            if (page === 1) {
                setAllProducts(data.data);
            } else {
                setAllProducts((prev) => {
                    const existingIds = new Set(prev.map(p => p.product_id));
                    const newProducts = data.data.filter(p => !existingIds.has(p.product_id));
                    return [...prev, ...newProducts];
                });
            }
        }
    }, [data, page]);

    const hasMore = data?.meta ? page < data.meta.totalPages : false;

    return (
        <div id="product-grid" className="py-16 bg-white min-h-[600px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                    <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                                activeCategory === "all" 
                                ? "bg-primary text-white shadow-md" 
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                        >
                            All Products
                        </button>
                        {categories.map((cat: ProductCategory) => (
                            <button
                                key={cat.category_id}
                                onClick={() => setActiveCategory(cat.category_id)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                                    activeCategory === cat.category_id 
                                    ? "bg-primary text-white shadow-md" 
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-72">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 h-11 w-full bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-full"
                        />
                    </div>
                </div>

                {/* Grid */}
                {isLoading && page === 1 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                    </div>
                ) : isError ? (
                    <div className="py-24 text-center border-2 border-dashed border-red-200 rounded-2xl bg-red-50 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-bold text-red-700 mb-2">Error Loading Products</h3>
                        <p className="text-red-500 max-w-md mx-auto">
                            There was an issue loading the products. Please try again later.
                        </p>
                    </div>
                ) : allProducts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {allProducts.map((product: Product) => (
                                <ProductCard key={product.product_id} product={product} locale={locale} />
                            ))}
                        </div>
                        
                        {/* View More Button */}
                        {hasMore && (
                            <div className="mt-12 flex justify-center">
                                <Button 
                                    size="lg" 
                                    onClick={() => setPage(p => p + 1)}
                                    disabled={isFetching}
                                    className="px-8 rounded-full shadow-md"
                                >
                                    {isFetching ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Loading...
                                        </>
                                    ) : (
                                        "View More"
                                    )}
                                </Button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="py-24 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 flex flex-col items-center justify-center">
                        <Search className="w-12 h-12 text-slate-300 mb-4" />
                        <h3 className="text-xl font-bold text-slate-700 mb-2">No products found</h3>
                        <p className="text-slate-500 max-w-md mx-auto">
                            We couldn't find any products matching your search criteria. Try adjusting your filters or search terms.
                        </p>
                        <button 
                            onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                            className="mt-6 text-primary font-semibold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
