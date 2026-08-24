"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useGetProductsQuery, useGetCategoriesQuery } from "@/redux/api/productApi";
import { Product, ProductCategory } from "@/redux/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const { data: products = [] } = useGetProductsQuery();
    const { data: categories = [] } = useGetCategoriesQuery();

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = activeCategory === "all" || product.category_id === activeCategory;
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = product.name.toLowerCase().includes(searchLower) || 
                                  product.short_description.toLowerCase().includes(searchLower);
            
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory, products]);

    return (
        <div id="product-grid" className="py-16 bg-white min-h-[600px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                    {/* Categories Tabs (Desktop) / Select (Mobile) - simplified to wrapping pills for both */}
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
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product: Product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
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
