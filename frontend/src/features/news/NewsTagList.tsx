"use client";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Edit, Trash, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import type { FilterField, ActionButton } from "@/types/tableLayout";
import { useGetTagsQuery, useDeleteTagMutation } from "@/redux/api/tagApi";
import { Tag } from "@/redux/types/tag";

import { TableLayout } from "../template/component/TableLayout";
import { DataTable } from "../template/component/DataTable";
import CreateTagModal from "@/components/common/modals/CreateTag";
import { ComponentGuard } from "@/components/auth/ComponentGuard";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { notify, extractErrorMessage } from "@/utils/notification";

/* ----------------------------------
   COMPONENT
----------------------------------- */
export default function NewsTagList() {
    const router = useRouter();

    /* API */
    const { data = [], isLoading, isError } = useGetTagsQuery();
    const [deleteTag] = useDeleteTagMutation();
    const [isModalOpen, setModalOpen] = useState(false);
    const [tagToDelete, setTagToDelete] = useState<{ id: string; name: string } | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteTag = async () => {
        if (!tagToDelete) return;
        try {
            setIsDeleting(true);
            await deleteTag(tagToDelete.id).unwrap();
            notify.success(`Tag "${tagToDelete.name}" deleted successfully.`);
            setTagToDelete(null);
        } catch (error) {
            notify.error(extractErrorMessage(error, "Failed to delete tag."));
        } finally {
            setIsDeleting(false);
        }
    };

    /* Pagination */
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const handlePagination = (index: number, size: number) => {
        setPageIndex(index);
        setPageSize(size);
    };

    /* Filters */
    const [search, setSearch] = useState("");

    const filters: FilterField[] = [
        {
            key: "search",
            label: "Search",
            type: "text",
            placeholder: "Search tag name",
            value: search,
            onChange: setSearch,
        },
    ];

    /* ----------------------------------
       TABLE COLUMNS
    ----------------------------------- */
    const columns: ColumnDef<Tag>[] = [
        {
            accessorKey: "name",
            header: "Tag Name",
            cell: ({ row }) => (
                <span className="font-medium">
                    {row.getValue("name")}
                </span>
            ),
        },
        {
            accessorKey: "created_at",
            header: "Created",
            cell: ({ row }) =>
                row.getValue("created_at")
                    ? new Date(row.getValue("created_at")).toLocaleDateString()
                    : "—",
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const tagId = row.original.tag_id;

                return (
                    <div className="flex items-center gap-1">
                        <ComponentGuard anyPermissions={["TAGS:UPDATE"]}>
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => router.push(`/news/tags/${tagId}`)}
                                >
                                    <Eye className="h-4 w-4" />
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => router.push(`/news/tags/${tagId}/edit`)}
                                >
                                    <Edit className="h-4 w-4" />
                                </Button>
                            </>
                        </ComponentGuard>

                        <ComponentGuard anyPermissions={["TAGS:DELETE"]}>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTagToDelete({ id: tagId, name: row.original.name || "Tag" })}
                            >
                                <Trash className="h-4 w-4 text-destructive" />
                            </Button>
                        </ComponentGuard>
                    </div>
                );
            },
        },
    ];

    /* Top actions */
    const actions: ActionButton[] = [
        {
            label: "Create Tag",
            icon: <Plus className="h-4 w-4" />,
            variant: "default",
            onClick: () => setModalOpen(true),
            permissions: ["TAGS:CREATE"],
        },
    ];

    /* Client-side filtering */
    const filteredData = data.filter((tag) =>
        search
            ? tag.name?.toLowerCase().includes(search.toLowerCase())
            : true
    );

    /* Pagination slice */
    const paginatedData = filteredData.slice(
        pageIndex * pageSize,
        pageIndex * pageSize + pageSize
    );

    return (
        <>
            <TableLayout
                actions={actions}
                filters={filters}
                filterColumnsPerRow={1}
            >
                <DataTable
                    columns={columns}
                    data={paginatedData}
                    totalPageCount={Math.ceil(filteredData.length / pageSize)}
                    handlePagination={handlePagination}
                    tablePageSize={pageSize}
                    currentIndex={pageIndex}
                />
            </TableLayout>
            <CreateTagModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
            <ConfirmDialog
                open={!!tagToDelete}
                onOpenChange={(open) => !open && setTagToDelete(null)}
                title="Delete Tag?"
                description={`Are you sure you want to delete "${tagToDelete?.name}"? This action cannot be undone.`}
                confirmText="Delete Tag"
                variant="destructive"
                isLoading={isDeleting}
                onConfirm={handleDeleteTag}
            />
        </>
    );
}
