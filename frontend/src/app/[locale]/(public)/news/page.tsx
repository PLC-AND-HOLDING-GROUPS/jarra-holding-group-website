"use client";

import PageHeader from "@/components/pages/home-page-components/PageHeader";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import NewsCard from "@/components/pages/news-page-components/NewsCard";
import { useGetNewsQuery } from "@/redux/api/newsApi";
import { extractExcerpt, extractHeadlineImage, extractTags, calculateReadingTime } from "@/utils/newsMapper";
import { format } from "date-fns";
import { News } from "@/redux/types/news";

const NewsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All News");

    const { data: news = [], isLoading, isError } = useGetNewsQuery({ status: "published" });

    // Derive categories from unique tags across all published news
    const categories = useMemo(() => {
        const uniqueTags = new Set<string>();
        news.forEach((item) => {
            const tags = extractTags(item.tag_links || []);
            tags.forEach(tag => uniqueTags.add(tag));
        });
        return ["All News", ...Array.from(uniqueTags)];
    }, [news]);

    const filteredNews = useMemo(() => {
        if (activeCategory === "All News") return news;
        return news.filter((item) => {
            const tags = extractTags(item.tag_links || []);
            return tags.includes(activeCategory);
        });
    }, [news, activeCategory]);

    return (
        <>
            <PageHeader
                pageIdentifier="news"
                title="News"
                icon={<MessageCircle />}
                description="News and updates from Jarra Holding Group"
            />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-heading">
                        News
                    </h1>
                    <div className="mt-2 h-1 w-12 bg-primary rounded-full" />
                    <p className="text-muted mt-4 max-w-2xl">
                        Stay updated with the latest news and announcements from Jarra Holding Group.

                        Here you can find information about our activities, projects, and initiatives.
                    </p>
                </div>

                {/* Category Tabs with moving background effect */}
                {!isLoading && categories.length > 1 && (
                    <div className="relative flex gap-4 mb-8 flex-wrap">
                        {categories.map((cat: string) => {
                            const isActive = activeCategory === cat;
                            return (
                                <div key={cat} className="relative z-10">
                                    <button
                                        onClick={() => setActiveCategory(cat)}
                                        className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? "text-white" : "text-muted hover:bg-primary20"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                    {/* Moving background */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-category"
                                            className="absolute inset-0 bg-primary rounded-lg z-0"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Loading State */}
                {isLoading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="animate-pulse bg-gray-200 h-96 rounded-2xl" />
                        ))}
                    </div>
                )}

                {/* Error State */}
                {isError && (
                    <div className="text-center py-20 text-red-500">
                        Failed to load news. Please try again later.
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !isError && filteredNews.length === 0 && (
                    <div className="text-center py-20 text-muted">
                        No news available for the selected category.
                    </div>
                )}

                {/* News grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map((item: News) => {
                        const tags = extractTags(item.tag_links || []);
                        const excerpt = extractExcerpt(item.content, 120);
                        const imageInfo = extractHeadlineImage(item.attachments || []);
                        const imageUrl = imageInfo?.url || "/placeholder.jpg";
                        const date = item.published_at ? format(new Date(item.published_at), "PPP") : "";

                        return (
                            <NewsCard
                                key={item.news_id}
                                id={item.news_id}
                                title={item.title}
                                excerpt={excerpt}
                                image={imageUrl}
                                date={date}
                                category={tags[0] || "News"}
                                tags={tags}
                                readingTime={(t) => calculateReadingTime(item.content || "")}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default NewsPage;