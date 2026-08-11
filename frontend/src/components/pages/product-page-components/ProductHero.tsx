"use client";

import React from "react";
import { Package, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductHero() {
    const handleScroll = () => {
        const gridElement = document.getElementById("product-grid");
        if (gridElement) {
            gridElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full bg-slate-50 py-16 md:py-24 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                    <Package className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-heading mb-6 tracking-tight">
                    Our Product <span className="text-primary">Portfolio</span>
                </h1>
                
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    Jarra Holding Group offers a comprehensive and diverse range of products across agriculture, chemicals, manufacturing, and industrial sectors. Explore our catalog or send an inquiry for specific sourcing and trading needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Button 
                        size="lg" 
                        onClick={handleScroll}
                        className="bg-primary hover:bg-primary/90 text-white min-w-[200px] h-12 text-base font-semibold"
                    >
                        Explore Products
                        <ArrowDown className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
