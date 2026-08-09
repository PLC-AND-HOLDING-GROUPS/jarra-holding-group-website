"use client";

import { useGetLeadershipsQuery } from "@/redux/api/leadershipApi";
import HierarchyNode from "./HierarchyNode";
import { useMemo } from "react";
import { getImageUrl } from "@/utils/fileUrl";

function buildTree(items: any[], parentId: string | null = null): any[] {
    return items
        .filter((item) => item.parent_id === parentId)
        .map((item) => {
            const attachment = item.attachments?.[0]?.attachment;
            return {
                id: item.leadership_id,
                level: item.level,
                name: item.name,
                title: item.title,
                image: getImageUrl(attachment, "medium") || "/businessman.png",
                fullDescription: item.description,
                children: buildTree(items, item.leadership_id),
            };
        });
}

export default function LeadershipSection() {
    const { data: leaderships = [], isLoading, isError } = useGetLeadershipsQuery();

    const rootNodes = useMemo(() => {
        // Find top-level nodes (those without parents or whose parents don't exist in the list)
        return buildTree(leaderships, null);
    }, [leaderships]);

    if (isLoading) {
        return (
            <div className="min-h-screen py-12 flex justify-center items-center">
                <div className="animate-pulse bg-gray-200 h-64 w-64 rounded-xl" />
            </div>
        );
    }

    if (isError || rootNodes.length === 0) {
        return (
            <div className="min-h-screen py-12 text-center text-muted">
                No leadership structure available at the moment.
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 md:px-4 space-y-4">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="md:text-4xl text-2xl font-bold text-teal-900">
                    Corporate Leadership Structure
                </h1>
                <p className="text-muted mt-2">
                    Interactive organizational hierarchy
                </p>
            </div>

            <div className="flex flex-col items-center gap-12 overflow-x-auto pb-10">
                {rootNodes.map((rootNode) => (
                    <HierarchyNode key={rootNode.id} node={rootNode} />
                ))}
            </div>
        </div>
    );
}

