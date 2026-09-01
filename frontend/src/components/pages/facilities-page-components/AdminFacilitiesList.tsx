"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { FilterField, ActionButton } from "@/types/tableLayout";
import {
    useGetFacilitiesQuery,
    useDeleteFacilityMutation,
    useReorderFacilitiesMutation,
} from "@/redux/api/facilityApi";
import { Facility } from "@/redux/types/facility";

import { TableLayout } from "@/features/template/component/TableLayout";
import { DataTable } from "@/features/template/component/DataTable";
import FacilityModal from "./FacilityModal";
import { ComponentGuard } from "@/components/auth/ComponentGuard";

export default function AdminFacilitiesList() {
    const { data = [], isLoading } = useGetFacilitiesQuery();
    const [deleteFacility] = useDeleteFacilityMutation();
    const [reorderFacilities] = useReorderFacilitiesMutation();

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentFacility, setCurrentFacility] = useState<Facility | null>(null);

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
            placeholder: "Search facility name",
            value: search,
            onChange: setSearch,
        },
    ];

    const columns: ColumnDef<Facility>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => (
                <span className="font-medium">
                    {row.getValue("name")}
                </span>
            ),
        },
        {
            accessorKey: "location",
            header: "Location",
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const facility = row.original;
                const index = data.findIndex(f => f.facility_id === facility.facility_id);

                const handleMoveUp = async () => {
                    if (index > 0) {
                        const newFacilities = [...data];
                        const temp = newFacilities[index];
                        newFacilities[index] = newFacilities[index - 1];
                        newFacilities[index - 1] = temp;

                        const payload = newFacilities.map((f, i) => ({ id: f.facility_id, order: i }));
                        await reorderFacilities({ facilities: payload });
                    }
                };

                const handleMoveDown = async () => {
                    if (index < data.length - 1) {
                        const newFacilities = [...data];
                        const temp = newFacilities[index];
                        newFacilities[index] = newFacilities[index + 1];
                        newFacilities[index + 1] = temp;

                        const payload = newFacilities.map((f, i) => ({ id: f.facility_id, order: i }));
                        await reorderFacilities({ facilities: payload });
                    }
                };

                return (
                    <div className="flex items-center gap-1">
                        <ComponentGuard anyPermissions={["SERVICES:UPDATE"]}>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                    setCurrentFacility(facility);
                                    setModalOpen(true);
                                }}
                            >
                                <Edit className="h-4 w-4" />
                            </Button>
                        </ComponentGuard>

                        <ComponentGuard anyPermissions={["SERVICES:DELETE"]}>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => deleteFacility(facility.facility_id)}
                            >
                                <Trash className="h-4 w-4 text-destructive" />
                            </Button>
                        </ComponentGuard>

                        {!search && (
                            <>
                                <ComponentGuard anyPermissions={["SERVICES:UPDATE"]}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleMoveUp}
                                        disabled={index === 0}
                                    >
                                        <ArrowUp className="h-4 w-4" />
                                    </Button>
                                </ComponentGuard>
                                <ComponentGuard anyPermissions={["SERVICES:UPDATE"]}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleMoveDown}
                                        disabled={index === data.length - 1}
                                    >
                                        <ArrowDown className="h-4 w-4" />
                                    </Button>
                                </ComponentGuard>
                            </>
                        )}
                    </div>
                );
            },
        },
    ];

    const actions: ActionButton[] = [
        {
            label: "Add Facility",
            icon: <Plus className="h-4 w-4" />,
            onClick: () => {
                setCurrentFacility(null);
                setModalOpen(true);
            },
            permissions: ["SERVICES:CREATE"],
        },
    ];

    const filteredData = data.filter((f) =>
        search
            ? f.name.toLowerCase().includes(search.toLowerCase())
            : true
    );

    const paginatedData = filteredData.slice(
        pageIndex * pageSize,
        pageIndex * pageSize + pageSize
    );

    return (
        <>
            <TableLayout
                title="Facilities Management"
                description="Manage the list of facilities"
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

            <FacilityModal
                open={isModalOpen}
                onOpenChange={setModalOpen}
                currentFacility={currentFacility}
                setCurrentFacility={setCurrentFacility}
            />
        </>
    );
}
