"use client";

import { useState, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { DataTable } from "@/features/template/component/DataTable";
import { TableLayout } from "@/features/template/component/TableLayout";
import type { FilterField, ActionButton } from "@/types/tableLayout";
import { ComponentGuard } from "@/components/auth/ComponentGuard";

import { 
    useGetCategoriesQuery, 
    useDeleteCategoryMutation, 
    useCreateCategoryMutation,
    useUpdateCategoryMutation 
} from "@/redux/api/productApi";
import { ProductCategory } from "@/redux/types/product";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CategoryList() {
    const { data = [], isLoading } = useGetCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [createCategory, { isLoading: isCreating }] = useCreateCategoryMutation();
    const [updateCategory, { isLoading: isUpdating }] = useUpdateCategoryMutation();

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");

    // Create Modal state
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newCategorySlug, setNewCategorySlug] = useState("");

    // Edit Modal state
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editCategoryId, setEditCategoryId] = useState("");
    const [editCategoryName, setEditCategoryName] = useState("");
    const [editCategorySlug, setEditCategorySlug] = useState("");

    const handlePagination = (index: number, size: number) => {
        setPageIndex(index);
        setPageSize(size);
    };

    const filters: FilterField[] = [
        {
            key: "search",
            label: "Search",
            type: "text",
            placeholder: "Search category...",
            value: search,
            onChange: setSearch,
        },
    ];

    const filteredData = useMemo(() => {
        return data.filter((item: ProductCategory) => {
            return !search || item.name.toLowerCase().includes(search.toLowerCase());
        });
    }, [data, search]);

    const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    const handleCreateCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategoryName || !newCategorySlug) {
            toast.error("Please fill in both name and slug");
            return;
        }

        try {
            await createCategory({
                name: newCategoryName,
                slug: newCategorySlug
            }).unwrap();
            
            toast.success("Category created successfully");
            setIsCreateModalOpen(false);
            setNewCategoryName("");
            setNewCategorySlug("");
        } catch (error) {
            toast.error("Failed to create category");
        }
    };

    const openEditModal = (category: ProductCategory) => {
        setEditCategoryId(category.category_id);
        setEditCategoryName(category.name);
        setEditCategorySlug(category.slug);
        setIsEditModalOpen(true);
    };

    const handleUpdateCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editCategoryName || !editCategorySlug) {
            toast.error("Please fill in both name and slug");
            return;
        }

        try {
            await updateCategory({
                id: editCategoryId,
                data: {
                    name: editCategoryName,
                    slug: editCategorySlug
                }
            }).unwrap();
            
            toast.success("Category updated successfully");
            setIsEditModalOpen(false);
        } catch (error) {
            toast.error("Failed to update category");
        }
    };

    const columns: ColumnDef<ProductCategory>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-medium text-primary">{row.getValue("name")}</span>
                </div>
            ),
        },
        {
            accessorKey: "slug",
            header: "Slug",
            cell: ({ row }) => (
                <span className="text-xs text-muted-foreground">{row.getValue("slug")}</span>
            ),
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                <div className="flex items-center gap-1">
                    <ComponentGuard action="update" subject="ProductCategory">
                        <Button
                            variant="ghost"
                            size="icon"
                            title="Edit Category"
                            onClick={() => openEditModal(row.original)}
                        >
                            <Edit className="h-4 w-4 text-primary" />
                        </Button>
                    </ComponentGuard>
                    <ComponentGuard action="delete" subject="ProductCategory">
                        <Button
                            variant="ghost"
                            size="icon"
                            title="Delete Category"
                            onClick={() => {
                                if (confirm("Are you sure you want to delete this category?")) {
                                    deleteCategory(row.original.category_id);
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
            label: "Add Category",
            icon: <Plus className="w-4 h-4" />,
            onClick: () => setIsCreateModalOpen(true),
            variant: "default",
            permission: { action: "create", subject: "ProductCategory" },
        },
    ];

    return (
        <>
            <TableLayout
                title="Product Categories"
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

            {/* Create Category Modal */}
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Category</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleCreateCategory} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="categoryName">Category Name</Label>
                            <Input
                                id="categoryName"
                                value={newCategoryName}
                                onChange={(e) => {
                                    setNewCategoryName(e.target.value);
                                    if (!newCategorySlug || newCategorySlug === newCategoryName.slice(0, -1).toLowerCase().replace(/\s+/g, '-')) {
                                        setNewCategorySlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
                                    }
                                }}
                                placeholder="e.g. Electronics"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="categorySlug">Slug</Label>
                            <Input
                                id="categorySlug"
                                value={newCategorySlug}
                                onChange={(e) => setNewCategorySlug(e.target.value)}
                                placeholder="e.g. electronics"
                                required
                            />
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isCreating}>
                                {isCreating ? "Creating..." : "Create Category"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Edit Category Modal */}
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleUpdateCategory} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="editCategoryName">Category Name</Label>
                            <Input
                                id="editCategoryName"
                                value={editCategoryName}
                                onChange={(e) => {
                                    setEditCategoryName(e.target.value);
                                    if (!editCategorySlug || editCategorySlug === editCategoryName.slice(0, -1).toLowerCase().replace(/\s+/g, '-')) {
                                        setEditCategorySlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
                                    }
                                }}
                                placeholder="e.g. Electronics"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="editCategorySlug">Slug</Label>
                            <Input
                                id="editCategorySlug"
                                value={editCategorySlug}
                                onChange={(e) => setEditCategorySlug(e.target.value)}
                                placeholder="e.g. electronics"
                                required
                            />
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsEditModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isUpdating}>
                                {isUpdating ? "Updating..." : "Update Category"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
