"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import { useGetPaginatedNewsQuery } from "@/redux/api/newsApi";
import { extractExcerpt, extractHeadlineImage } from "@/utils/newsMapper";
import { format } from "date-fns";
import Link from "next/link";

export default function LatestNewsSection() {
    const [active, setActive] = useState(0);

    // Fetch published news from CMS, max 6 items for the slider
    const { data, isLoading, isError } = useGetPaginatedNewsQuery({ 
        limit: 6, 
        status: "published" 
    });

    const news = data?.items || [];

    // 🔁 Auto slide every 10s
    useEffect(() => {
        if (news.length <= 1) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev === news.length - 1 ? 0 : prev + 1));
        }, 10000);

        return () => clearInterval(interval);
    }, [news.length]);

    const next = () => {
        if (news.length === 0) return;
        setActive((prev) => (prev === news.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        if (news.length === 0) return;
        setActive((prev) => (prev === 0 ? news.length - 1 : prev - 1));
    };

    if (isLoading) {
        return (
            <section className="w-full py-20 flex justify-center items-center">
                <div className="animate-pulse bg-gray-200 h-96 w-full max-w-7xl rounded-3xl" />
            </section>
        );
    }

    if (isError || news.length === 0) {
        return null;
    }

    const item = news[active];
    const imageInfo = extractHeadlineImage(item.attachments || []);
    const imageUrl = imageInfo?.url || "/placeholder.jpg";
    const excerpt = extractExcerpt(item.content, 200);

    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6 ">

                {/* Section Header */}
                <div className="mb-10 flex justify-between items-center">
                    <div className="flex  flex-col ">
                        <p className=" text-sm font-medium text-muted">News & Updates</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                            Latest News
                        </h2>
                        <div className="mt-3 h-1 w-20 bg-primary rounded-full"></div>
                    </div>
                    {/* Creative "Find All News" Card */}
                    <div className="flex items-center">
                        <Link
                            href="/news"
                            className="flex items-center gap-2 bg-primary hover:bg-primaryHover text-white px-2 md:px-5 py-2 md:py-3 rounded-md md:rounded-2xl  shadow-md transition-all transform "
                        >
                            <span className="font-medium text-xs md:text-base">Find All News</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Main Card */}
                <div className="relative bg-white rounded-3xl shadow-sm overflow-hidden border">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Image */}
                        <div className="relative h-[250px] md:h-[370px]">
                            <Image
                                src={imageUrl}
                                alt={item.title || "News Image"}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Date */}
                            <span className="absolute top-4 left-4 bg-white text-primary text-xs md:text-sm font-medium px-4 py-1 rounded-full shadow">
                                {item.published_at ? format(new Date(item.published_at), "PPP") : ""}
                            </span>


                        </div>

                        {/* Content */}
                        <div className="p-4 md:p-8 flex flex-col justify-center gap-4">
                            <h3 className="text-lg md:text-xl font-semibold text-heading">
                                {item.title}
                            </h3>
                            <p className="text-muted leading-relaxed text-sm md:text-base">
                                {excerpt}
                            </p>

                            <Link href={`/news/${item.news_id}`}>
                                <Button className="mt-4 bg-primary hover:bg-primaryHover inline-flex items-center gap-2 w-fit px-6 py-3 rounded-md   text-white text-sm font-medium  transition">
                                    Read More <ArrowRight size={16} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Thumbnails (6 images max) */}
                {news.length > 1 && (
                    <div className="mt-6 flex w-full md:justify-center md:items-center gap-4 overflow-x-auto py-2 px-4 md:px-0 scroll-smooth snap-x snap-mandatory">

                        {news.map((n, i) => {
                            const nImageInfo = extractHeadlineImage(n.attachments || []);
                            const nImageUrl = nImageInfo?.url || "/placeholder.jpg";
                            
                            return (
                                <button
                                    key={n.news_id}
                                    onClick={() => setActive(i)}
                                    className={clsx(
                                        "relative flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border transition",
                                        active === i
                                            ? "border-primary ring-2 ring-primary/30"
                                            : "border-transparent opacity-70 hover:opacity-100"
                                    )}
                                >
                                    <Image
                                        src={nImageUrl}
                                        alt={n.title || "Thumbnail"}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
