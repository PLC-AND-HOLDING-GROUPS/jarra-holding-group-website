"use client";

import { useState, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2, CheckCircle2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { DataTable } from "@/features/template/component/DataTable";
import { TableLayout } from "@/features/template/component/TableLayout";
import type { FilterField } from "@/types/tableLayout";
import { ComponentGuard } from "@/components/auth/ComponentGuard";

import { useGetInquiriesQuery, useDeleteInquiryMutation } from "@/redux/api/productApi";
import { ProductInquiry } from "@/redux/types/product";

export default function InquiryList() {
    const { data = [], isLoading } = useGetInquiriesQuery();
    const [deleteInquiry] = useDeleteInquiryMutation();
    const router = useRouter();

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");

    const handlePagination = (index: number, size: number) => {
        setPageIndex(index);
        setPageSize(size);
    };

    const filters: FilterField[] = [
        {
            key: "search",
            label: "Search",
            type: "text",
            placeholder: "Search name or email...",
            value: search,
            onChange: setSearch,
        },
    ];

    const filteredData = useMemo(() => {
        return data.filter((item: ProductInquiry) => {
            return !search || 
                   item.name.toLowerCase().includes(search.toLowerCase()) ||
                   item.email.toLowerCase().includes(search.toLowerCase());
        });
    }, [data, search]);

    const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    const columns: ColumnDef<ProductInquiry>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-medium text-primary">{row.getValue("name")}</span>
                    <span className="text-xs text-muted-foreground">{row.original.email}</span>
                </div>
            ),
        },
        {
            accessorKey: "product.name",
            header: "Product",
            cell: ({ row }) => (
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                    {row.original.product?.name || "Unknown"}
                </span>
            ),
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status") as string;
                const isResolved = status?.toLowerCase() === "resolved" || status?.toLowerCase() === "completed";
                return (
                    <div
                        className={`inline-flex items-center gap-1.5 h-8 px-2 rounded-full ${isResolved
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-amber-50 text-amber-600 border border-amber-200"
                            }`}
                    >
                        {isResolved ? (
                            <>
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                <span className="text-xs font-semibold">{status || "Resolved"}</span>
                            </>
                        ) : (
                            <span className="text-xs font-semibold">{status || "Pending"}</span>
                        )}
                    </div>
                );
            },
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        title="View Inquiry"
                        onClick={() => router.push(`/admin/products/inquiries/${row.original.inquiry_id}`)}
                    >
                        <Eye className="h-4 w-4 text-primary" />
                    </Button>
                    <ComponentGuard action="delete" subject="ProductInquiry">
                        <Button
                            variant="ghost"
                            size="icon"
                            title="Delete Inquiry"
                            onClick={() => {
                                if (confirm("Are you sure you want to delete this inquiry?")) {
                                    deleteInquiry(row.original.inquiry_id);
                                }
                            }}
                        >
                            <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                    </ComponentGuard>
                </div>
            ),
        },
    ];

    return (
        <TableLayout
            title="Product Inquiries"
            filters={filters}
            actions={[]}
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
    );
}
