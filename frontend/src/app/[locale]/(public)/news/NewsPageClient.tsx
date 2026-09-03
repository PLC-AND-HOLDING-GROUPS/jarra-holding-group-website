"use client";

import PageHeader from "@/components/pages/home-page-components/PageHeader";
import { Search, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useGetPaginatedNewsQuery } from "@/redux/api/newsApi";
import { useGetTagsQuery } from "@/redux/api/tagApi";
import NewsCard from "@/components/pages/news-page-components/NewsCard";
import {
    calculateReadingTime,
    extractExcerpt,
    extractHeadlineImage,
    extractTags,
} from "@/utils/newsMapper";
import { formatDate } from "@/utils/datetime";
import PublicEmptyState from "@/components/common/PublicEmptyState";
import Pagination from "@/components/common/Pagination";
import { useTranslations } from "next-intl";
import { SkeletonMediaCard, TagFilterSkeleton } from "@/components/skeletons";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";

const PAGE_SIZE = 9;
const ALL_NEWS = "All News";

export default function NewsPageClient() {
    const t = useTranslations("empty_state");
    const { data: tagsData = [] } = useGetTagsQuery();

    const [searchTerm, setSearchTerm] = useState("");
    const [activeTag, setActiveTag] = useState<string>(ALL_NEWS);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const queryArgs = useMemo(
        () => ({
            page: currentPage,
            limit: PAGE_SIZE,
            ...(activeTag !== ALL_NEWS ? { tag: activeTag } : {}),
            ...(searchTerm ? { search: searchTerm } : {}),
        }),
        [currentPage, activeTag, searchTerm],
    );

    const { data, isLoading, isFetching, isError } =
        useGetPaginatedNewsQuery(queryArgs);

    const items = data?.items ?? [];
    const pagination = data?.pagination;
    const totalPages = pagination?.totalPages ?? 1;

    const handleTagChange = (tag: string) => {
        setActiveTag(tag);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const tagNames = [ALL_NEWS, ...tagsData.map((tag) => tag.name)];

    if (isLoading) {
        return (
            <>
                <PageHeader
                    pageIdentifier="news"
                    title="News"
                    icon={<MessageCircle />}
                    description="News and updates from Jarra Holding Group"
                />
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8 space-y-4">
                        <Skeleton className="h-9 w-32" />
                        <Skeleton className="h-1 w-12 rounded-full" />
                        <Skeleton className="h-4 w-full max-w-2xl" />
                    </div>
                    <TagFilterSkeleton />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                            <SkeletonMediaCard key={index} />
                        ))}
                    </div>
                </section>
            </>
        );
    }

    if (isError) {
        return (
            <>
                <PageHeader
                    pageIdentifier="news"
                    title="News"
                    icon={<MessageCircle />}
                    description="News and updates from Jarra Holding Group"
                />
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <PublicEmptyState
                        title={t("news_title")}
                        description={t("error_description")}
                    />
                </section>
            </>
        );
    }

    return (
        <>
            <PageHeader
                pageIdentifier="news"
                title="News"
                icon={<MessageCircle />}
                description="News and updates from Jarra Holding Group"
            />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary">News</h1>
                    <div className="mt-2 h-1 w-12 bg-primary rounded-full" />
                    <p className="text-gray-600 mt-4 max-w-2xl">
                        Stay updated with the latest news and announcements from Jarra Holding Group.
                        Here you can find information about our activities, projects, and initiatives.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8">
                    <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                        {tagNames.map((tag) => {
                            const isActive = activeTag === tag;
                            return (
                                <div key={tag} className="relative z-10">
                                    <button
                                        onClick={() => handleTagChange(tag)}
                                        className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-700 hover:bg-primary/20"
                                        }`}
                                    >
                                        {tag}
                                    </button>
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
                    <div className="relative w-full md:w-72">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search news..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1); // Reset page on search
                            }}
                            className="pl-10 h-11 w-full bg-slate-50 border-slate-200 focus:bg-white transition-colors rounded-full"
                        />
                    </div>
                </div>

                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-200 ${
                        isFetching ? "opacity-60" : "opacity-100"
                    }`}
                    aria-busy={isFetching}
                >
                    {items.length === 0 ? (
                        <div className="col-span-full">
                            <PublicEmptyState
                                title={
                                    activeTag === ALL_NEWS
                                        ? t("news_title")
                                        : t("news_filter_title")
                                }
                                description={
                                    activeTag !== ALL_NEWS
                                        ? t("filter_description")
                                        : undefined
                                }
                            />
                        </div>
                    ) : (
                        items.map((item) => {
                            const excerpt = extractExcerpt(item.content);
                            const tags = extractTags(item.tag_links ?? []);
                            const media = extractHeadlineImage(item.attachments ?? []) as
                                | { url: string; type: "image" | "video" }
                                | null;
                            return (
                                <NewsCard
                                    key={item.news_id}
                                    id={item.news_id}
                                    title={item.title}
                                    excerpt={excerpt}
                                    media={media}
                                    date={formatDate(item.created_at)}
                                    category={tags[0] || "General"}
                                    tags={tags}
                                    readingTime={() => calculateReadingTime(excerpt)}
                                />
                            );
                        })
                    )}
                </div>

                {items.length > 0 && totalPages > 1 && (
                    <div className="mt-12 flex flex-col items-center gap-3">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                        {pagination && (
                            <p className="text-sm text-gray-500">
                                Showing page {pagination.page} of {pagination.totalPages}
                                {" · "}
                                {pagination.total} {pagination.total === 1 ? "article" : "articles"}
                            </p>
                        )}
                    </div>
                )}
            </section>
        </>
    );
}
