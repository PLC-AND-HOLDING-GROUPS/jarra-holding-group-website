"use client";

import { useState, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { DataTable } from "@/features/template/component/DataTable";
import { TableLayout } from "@/features/template/component/TableLayout";
import type { FilterField } from "@/types/tableLayout";
import { ComponentGuard } from "@/components/auth/ComponentGuard";
import { OpportunityStatusBadge } from "@/components/common/OpportunityStatusBadge";

import { useGetVacanciesQuery } from "@/redux/api/vacancyApi";
import { Vacancy } from "@/redux/types/vacancy";
import { formatDateOnly } from "@/utils/datetime";

export default function ApplicationVacancyList() {
  const router = useRouter();
  const { data = [], isLoading, isError } = useGetVacanciesQuery({ isAdmin: true });

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");

  const handlePagination = (index: number, size: number) => {
    setPageIndex(index);
    setPageSize(size);
  };

  const filters: FilterField[] = [
    {
      key: "status",
      label: "Status",
      type: "select",
      placeholder: "All statuses",
      value: statusFilter,
      onChange: setStatusFilter,
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
        { label: "Closed", value: "closed" },
      ],
    },
    {
      key: "search",
      label: "Search",
      type: "text",
      placeholder: "Search job title",
      value: search,
      onChange: setSearch,
    },
  ];

  const filteredData = useMemo(() => {
    return data.filter((item: Vacancy) => {
      const matchesStatus = !statusFilter || item.status === statusFilter;
      const matchesSearch =
        !search ||
        item.job_title?.toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [data, statusFilter, search]);

  const paginatedData = filteredData.slice(
    pageIndex * pageSize,
    pageIndex * pageSize + pageSize,
  );

  const columns: ColumnDef<Vacancy>[] = [
    {
      accessorKey: "job_title",
      header: "Job Title",
      cell: ({ row }) => (
        <div className="font-medium truncate max-w-[250px]">
          {row.original.job_title}
        </div>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => row.original.department || "—",
    },
    {
      accessorKey: "application_deadline",
      header: "Deadline",
      cell: ({ row }) => (
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {formatDateOnly(row.original.application_deadline)}
        </div>
      ),
    },
    {
      id: "display_status",
      header: "Status",
      cell: ({ row }) => (
        <OpportunityStatusBadge
          displayStatus={row.original.display_status}
          dbStatus={row.original.status}
        />
      ),
    },
    {
      id: "applications_count",
      header: "Applications Received",
      cell: ({ row }) => {
        const count = row.original.application_count || 0;
        return (
          <div className="font-semibold text-primary">
            {count} {count === 1 ? 'Application' : 'Applications'}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const id = row.original.vacancy_id;

        return (
          <div className="flex items-center gap-1">
            <ComponentGuard anyPermissions={["VACANCIES:READ"]}>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => router.push(`/admin/careers/${id}/applications`)}
              >
                <Users className="h-4 w-4" />
                View Applications
              </Button>
            </ComponentGuard>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Loading applications...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-destructive">
        Failed to load applications.
      </div>
    );
  }

  return (
    <TableLayout
      title="Submitted Applications"
      description="View and manage job applications submitted for each vacancy."
      filters={filters}
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
  );
}
