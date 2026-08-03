"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type RelatedNewsItem = {
    id: string | number;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
};

type NewsSidebarProps = {
    relatedNews: RelatedNewsItem[];
};

const NewsLeftSide = ({ relatedNews }: NewsSidebarProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-heading mb-6 pb-3 border-b">
                Related News
            </h2>

            <div className="space-y-6">
                {relatedNews.map((item) => (
                    <a
                        key={item.id}
                        href={`/news/${item.id}`}
                        className="block group hover:bg-background-secondary p-3 rounded-lg transition-colors"
                    >
                        <div className="flex gap-3 mb-3">
                            <div className="flex-shrink-0">
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-heading group-hover:text-secondary mb-1 line-clamp-2 text-sm">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-muted line-clamp-2 mb-2">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted">{item.date}</span>
                                    <div className="flex items-center gap-1">
                                        <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <a
                href="/news"
                className="mt-6 inline-flex items-center gap-2 text-secondary hover:text-blue-800 font-medium text-sm"
            >
                View All News
                <ChevronRight size={14} />
            </a>
        </div>
    );
};

export default NewsLeftSide;