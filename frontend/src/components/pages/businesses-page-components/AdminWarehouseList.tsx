"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, EyeOff, Edit, Trash2, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import type { FilterField, ActionButton } from "@/types/tableLayout";
import {
    useGetWarehousesQuery,
    useDeleteWarehouseMutation,
    useReorderWarehousesMutation,
    useUpdateWarehouseMutation,
    Warehouse,
} from "@/redux/api/businessApi";

import { TableLayout } from "@/features/template/component/TableLayout";
import { DataTable } from "@/features/template/component/DataTable";
import { notify, extractErrorMessage } from "@/utils/notification";

export default function AdminWarehouseList() {
    const router = useRouter();

    /* API */
    const { data = [], isLoading, isError, refetch } = useGetWarehousesQuery();
    const [deleteWarehouse] = useDeleteWarehouseMutation();
    const [reorderWarehouses] = useReorderWarehousesMutation();
    const [updateWarehouse] = useUpdateWarehouseMutation();

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
            placeholder: "Search facility name",
            value: search,
            onChange: setSearch,
        },
    ];

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this facility?")) return;
        try {
            await deleteWarehouse(id).unwrap();
            notify.success('Facility deleted!');
            refetch();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to delete facility.'));
        }
    };

    const handleTogglePublish = async (warehouse: Warehouse) => {
        try {
            const newStatus = warehouse.publish_status === 'published' ? 'draft' : 'published';
            await updateWarehouse({
                id: warehouse.warehouse_id,
                data: { publish_status: newStatus }
            }).unwrap();
            notify.success(`Facility ${newStatus === 'published' ? 'published' : 'unpublished'} successfully!`);
            refetch();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to update publish status.'));
        }
    };

    /* ----------------------------------
       TABLE COLUMNS
    ----------------------------------- */
    const columns: ColumnDef<Warehouse>[] = [
        {
            accessorKey: "name",
            header: "Facility Name",
            cell: ({ row }) => (
                <span className="font-medium">
                    {row.getValue("name")}
                </span>
            ),
        },
        {
            accessorKey: "region",
            header: "Region",
        },
        {
            accessorKey: "city",
            header: "City",
            cell: ({ row }) => row.getValue("city") || 'N/A'
        },
        {
            accessorKey: "area",
            header: "Area",
            cell: ({ row }) => row.getValue("area") || 'N/A'
        },
        {
            accessorKey: "publish_status",
            header: "Publish Status",
            cell: ({ row }) => {
                const status = row.original.publish_status;
                return (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${status === 'published' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                        {status === 'published' ? 'Published' : 'Draft'}
                    </span>
                );
            }
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const warehouse = row.original;
                const index = data.findIndex(w => w.warehouse_id === warehouse.warehouse_id);

                const handleMoveUp = async () => {
                    if (index > 0) {
                        const newWarehouses = [...data];
                        const temp = newWarehouses[index];
                        newWarehouses[index] = newWarehouses[index - 1];
                        newWarehouses[index - 1] = temp;

                        const payload = newWarehouses.map((w, i) => ({ id: w.warehouse_id, order: i }));
                        try {
                            await reorderWarehouses({ warehouses: payload }).unwrap();
                            refetch();
                        } catch (error) {
                            notify.error('Failed to reorder facilities');
                        }
                    }
                };

                const handleMoveDown = async () => {
                    if (index < data.length - 1) {
                        const newWarehouses = [...data];
                        const temp = newWarehouses[index];
                        newWarehouses[index] = newWarehouses[index + 1];
                        newWarehouses[index + 1] = temp;

                        const payload = newWarehouses.map((w, i) => ({ id: w.warehouse_id, order: i }));
                        try {
                            await reorderWarehouses({ warehouses: payload }).unwrap();
                            refetch();
                        } catch (error) {
                            notify.error('Failed to reorder facilities');
                        }
                    }
                };

                return (
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleTogglePublish(warehouse)}
                            title={warehouse.publish_status === 'published' ? 'Unpublish' : 'Publish'}
                        >
                            {warehouse.publish_status === 'published' ? (
                                <Eye className="h-4 w-4 text-blue-600" />
                            ) : (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                            )}
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push(`/admin/businesses/warehousing/${warehouse.warehouse_id}`)}
                        >
                            <Edit className="h-4 w-4" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(warehouse.warehouse_id)}
                        >
                            <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>

                        {!search && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleMoveUp}
                                    disabled={index === 0}
                                >
                                    <ArrowUp className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleMoveDown}
                                    disabled={index === data.length - 1}
                                >
                                    <ArrowDown className="h-4 w-4" />
                                </Button>
                            </>
                        )}
                    </div>
                );
            },
        },
    ];

    /* Top actions */
    const actions: ActionButton[] = [
        {
            label: "Add Facility",
            icon: <Plus className="h-4 w-4" />,
            onClick: () => {
                router.push('/admin/businesses/warehousing/create');
            },
        },
    ];

    /* Client-side filtering */
    const filteredData = data.filter((warehouse) =>
        search
            ? warehouse.name.toLowerCase().includes(search.toLowerCase())
            : true
    );

    /* Pagination slice */
    const paginatedData = filteredData.slice(
        pageIndex * pageSize,
        pageIndex * pageSize + pageSize
    );

    return (
        <TableLayout
            title="Managed Facilities"
            description="Manage and reorder your warehousing facilities"
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
    );
}
