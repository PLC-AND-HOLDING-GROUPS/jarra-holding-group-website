"use client";

import { useState, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Trash2, Edit, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { DataTable } from "@/features/template/component/DataTable";
import { TableLayout } from "@/features/template/component/TableLayout";
import type { FilterField, ActionButton } from "@/types/tableLayout";
import { ComponentGuard } from "@/components/auth/ComponentGuard";

import { useGetProductsQuery, useDeleteProductMutation } from "@/redux/api/productApi";
import { Product } from "@/redux/types/product";

export default function ProductList() {
    const router = useRouter();

    const { data = [], isLoading, isError } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const handlePagination = (index: number, size: number) => {
        setPageIndex(index);
        setPageSize(size);
    };

    const [search, setSearch] = useState("");

    const filters: FilterField[] = [
        {
            key: "search",
            label: "Search",
            type: "text",
            placeholder: "Search name...",
            value: search,
            onChange: setSearch,
        },
    ];

    const filteredData = useMemo(() => {
        return data.filter((item: Product) => {
            return !search || item.name.toLowerCase().includes(search.toLowerCase());
        });
    }, [data, search]);

    const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    const columns: ColumnDef<Product>[] = [
        {
            accessorKey: "name",
            header: "Product Name",
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-medium text-primary">{row.getValue("name")}</span>
                </div>
            ),
        },

        {
            accessorKey: "publish_status",
            header: "Publish Status",
            cell: ({ row }) => {
                const status = row.original.publish_status;
                const isPublished = status?.toLowerCase() === "published";
                return (
                    <div
                        className={`inline-flex items-center gap-1.5 h-8 px-2 rounded-full ${isPublished
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-gray-50 text-gray-700 border border-gray-200"
                            }`}
                    >
                        {isPublished ? (
                            <>
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                <span className="text-xs font-semibold capitalize">{status || "Published"}</span>
                            </>
                        ) : (
                            <span className="text-xs font-semibold capitalize">{status || "Draft"}</span>
                        )}
                    </div>
                );
            },
        },
        {
            accessorKey: "status",
            header: "Availability",
            cell: ({ row }) => {
                const status = row.getValue("status") as string;
                return (
                    <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-md">
                        {status || "Available"}
                    </span>
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
                        title="Edit Product"
                        onClick={() => router.push(`/admin/products/${row.original.product_id}`)}
                    >
                        <Edit className="h-4 w-4 text-primary" />
                    </Button>
                    <ComponentGuard anyPermissions={["PRODUCT:DELETE"]}>
                        <Button
                            variant="ghost"
                            size="icon"
                            title="Delete Product"
                            onClick={() => {
                                if (confirm("Are you sure you want to delete this product?")) {
                                    deleteProduct(row.original.product_id);
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

    const actions: ActionButton[] = [
        {
            label: "Add Product",
            icon: <Plus className="w-4 h-4" />,
            onClick: () => router.push("/admin/products/create"),
            variant: "default",
            permissions: ["PRODUCT:CREATE"],
        },
    ];

    return (
        <TableLayout
            title="Product Management"
            description="Manage your products, categories, and inventory."
            filters={filters}
            actions={actions}
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
