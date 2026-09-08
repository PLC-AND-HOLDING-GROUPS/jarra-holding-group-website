"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useGetApplicationsByVacancyQuery } from "@/redux/api/jobApplicationApi";
import { useGetVacancyByIdQuery } from "@/redux/api/vacancyApi";
import { DataTable } from "@/features/template/component/DataTable";
import { TableLayout } from "@/features/template/component/TableLayout";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye, ArrowLeft } from "lucide-react";
import { JobApplication } from "@/redux/api/jobApplicationApi";
import { formatDateOnly } from "@/utils/datetime";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
    new: "bg-blue-100 text-blue-800",
    reviewed: "bg-purple-100 text-purple-800",
    shortlisted: "bg-amber-100 text-amber-800",
    rejected: "bg-red-100 text-red-800",
    hired: "bg-green-100 text-green-800",
};

export default function AdminApplicationsList() {
    const params = useParams();
    const router = useRouter();
    const vacancyId = params.vacancyId as string;

    const { data: vacancyResponse, isLoading: isVacancyLoading } = useGetVacancyByIdQuery(
        { id: vacancyId },
        { skip: !vacancyId }
    );
    const vacancy = vacancyResponse;

    const { data: appsResponse, isLoading: isAppsLoading } = useGetApplicationsByVacancyQuery(vacancyId, { skip: !vacancyId });
    const applications = appsResponse?.data || [];

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [statusFilter, setStatusFilter] = useState("");
    const [search, setSearch] = useState("");

    const handlePagination = (index: number, size: number) => {
        setPageIndex(index);
        setPageSize(size);
    };

    const filteredData = applications.filter((app: JobApplication) => {
        const matchesStatus = !statusFilter || app.status === statusFilter;
        const matchesSearch = !search || 
            `${app.first_name} ${app.last_name}`.toLowerCase().includes(search.toLowerCase()) ||
            app.email.toLowerCase().includes(search.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const paginatedData = filteredData.slice(
        pageIndex * pageSize,
        pageIndex * pageSize + pageSize
    );

    const columns: ColumnDef<JobApplication>[] = [
        {
            accessorKey: "name",
            header: "Applicant Name",
            cell: ({ row }) => <span className="font-medium">{row.original.first_name} {row.original.last_name}</span>
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => row.original.email
        },
        {
            accessorKey: "created_at",
            header: "Applied On",
            cell: ({ row }) => formatDateOnly(row.original.created_at)
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant="outline" className={STATUS_COLORS[row.original.status] || "bg-gray-100"}>
                    {row.original.status.toUpperCase()}
                </Badge>
            )
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                <Button
                    variant="ghost"
                    size="icon"
                    title="View Details"
                    onClick={() => router.push(`/admin/careers/${vacancyId}/applications/${row.original.application_id}`)}
                >
                    <Eye className="h-4 w-4 text-blue-600" />
                </Button>
            )
        }
    ];

    if (isVacancyLoading || isAppsLoading) {
        return <div className="p-8 text-center text-muted-foreground">Loading applications...</div>;
    }

    const jobTitle = vacancy?.job_title || "Unknown Vacancy";

    return (
        <div className="space-y-4">
            <div>
                <Button variant="link" asChild className="px-0 mb-4 text-muted-foreground">
                    <Link href="/admin/careers"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Vacancies</Link>
                </Button>
            </div>
            
            <TableLayout
                title={`Applications for ${jobTitle}`}
                description={`Review and manage applications for this position.`}
                filters={[
                    {
                        key: "status",
                        label: "Status",
                        type: "select",
                        placeholder: "All statuses",
                        value: statusFilter,
                        onChange: setStatusFilter,
                        options: [
                            { label: "New", value: "new" },
                            { label: "Reviewed", value: "reviewed" },
                            { label: "Shortlisted", value: "shortlisted" },
                            { label: "Rejected", value: "rejected" },
                            { label: "Hired", value: "hired" }
                        ]
                    },
                    {
                        key: "search",
                        label: "Search",
                        type: "text",
                        placeholder: "Search name or email",
                        value: search,
                        onChange: setSearch
                    }
                ]}
                actions={[]}
                filterColumnsPerRow={2}
            >
                <DataTable
                    columns={columns}
                    data={paginatedData}
                    totalPageCount={Math.ceil(filteredData.length / pageSize) || 1}
                    handlePagination={handlePagination}
                    tablePageSize={pageSize}
                    currentIndex={pageIndex}
                />
            </TableLayout>
        </div>
    );
}
