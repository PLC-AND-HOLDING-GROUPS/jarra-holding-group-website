"use client";

import React, { useState, useEffect } from 'react';
import { 
    useGetImportExportOverviewQuery, 
    useUpdateImportExportOverviewMutation,
    useGetImportExportCategoriesQuery,
    useCreateImportExportCategoryMutation,
    useUpdateImportExportCategoryMutation,
    useDeleteImportExportCategoryMutation,
    useGetImportExportStepsQuery,
    useCreateImportExportStepMutation,
    useUpdateImportExportStepMutation,
    useDeleteImportExportStepMutation,
    ImportExportOverview,
    ImportExportCategory,
    ImportExportStep
} from '@/redux/api/businessApi';
import { Pencil, Trash2, Plus, Save, Loader2, Plane, Ship, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { notify, extractErrorMessage } from '@/utils/notification';
import { LucideIconPicker } from "@/components/common/LucideIconPicker";

const ImportExportAdminPage = () => {
    // --- Overview ---
    const { data: overview, isLoading: isOverviewLoading, refetch: refetchOverview } = useGetImportExportOverviewQuery();
    const [updateOverview, { isLoading: isUpdatingOverview }] = useUpdateImportExportOverviewMutation();

    const [overviewData, setOverviewData] = useState<Partial<ImportExportOverview>>({
        page_subtitle: '', page_title: '', page_description: '',
        export_title: '', export_description: '',
        import_title: '', import_description: '',
        stat1_value: '', stat1_label: '', stat1_subtext: '',
        stat2_value: '', stat2_label: '',
        cta_title: '', cta_description: '',
        center_icon: '', center_title: '', center_subtitle: '',
        cta_button_title: '', cta_button_url: '', cta_button_icon: ''
    });

    useEffect(() => {
        if (overview) {
            setOverviewData(overview);
        }
    }, [overview]);

    const handleOverviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setOverviewData({ ...overviewData, [e.target.name]: e.target.value });
    };

    const handleOverviewSave = async () => {
        try {
            await updateOverview(overviewData).unwrap();
            notify.success('Overview updated successfully!');
            refetchOverview();
        } catch (error) {
            console.error('Failed to update overview', error);
            notify.error(extractErrorMessage(error, 'Failed to update overview.'));
        }
    };

    // --- Categories (Export & Import) ---
    const { data: categories = [], isLoading: isCategoriesLoading, refetch: refetchCategories } = useGetImportExportCategoriesQuery();
    const [createCategory] = useCreateImportExportCategoryMutation();
    const [updateCategory] = useUpdateImportExportCategoryMutation();
    const [deleteCategory] = useDeleteImportExportCategoryMutation();

    const exports = categories.filter(c => c.type === 'export');
    const imports = categories.filter(c => c.type === 'import');

    const handleAddCategory = async (type: 'import' | 'export') => {
        try {
            await createCategory({ type, title: 'New Category', description: '', icon: type === 'import' ? 'HelpCircle' : undefined, order: 0 }).unwrap();
            notify.success('Category added!');
            refetchCategories();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to add category.'));
        }
    };

    const handleUpdateCategory = async (id: string, field: keyof ImportExportCategory, value: any) => {
        try {
            await updateCategory({ id, data: { [field]: value } }).unwrap();
            refetchCategories();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to update category.'));
        }
    };

    const handleDeleteCategory = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this category?")) return;
        try {
            await deleteCategory(id).unwrap();
            notify.success('Category deleted!');
            refetchCategories();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to delete category.'));
        }
    };

    // --- Steps ---
    const { data: steps = [], isLoading: isStepsLoading, refetch: refetchSteps } = useGetImportExportStepsQuery();
    const [createStep] = useCreateImportExportStepMutation();
    const [updateStep] = useUpdateImportExportStepMutation();
    const [deleteStep] = useDeleteImportExportStepMutation();

    const handleAddStep = async () => {
        try {
            await createStep({ step_number: '00', title: 'New Step', description: '', order: 0 }).unwrap();
            notify.success('Step added!');
            refetchSteps();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to add step.'));
        }
    };

    const handleUpdateStep = async (id: string, field: keyof ImportExportStep, value: any) => {
        try {
            await updateStep({ id, data: { [field]: value } }).unwrap();
            refetchSteps();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to update step.'));
        }
    };

    const handleDeleteStep = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this step?")) return;
        try {
            await deleteStep(id).unwrap();
            notify.success('Step deleted!');
            refetchSteps();
        } catch (error) {
            notify.error(extractErrorMessage(error, 'Failed to delete step.'));
        }
    };

    return (
        <div className="mx-auto space-y-10 w-full">
            <div>
                <h1 className="text-3xl font-bold text-teal-900">Manage "Import & Export"</h1>
                <p className="text-muted-foreground mt-2">Manage the content for the public Import/Export trading page.</p>
            </div>

            {/* General Overview */}
            <div className="p-6 rounded-xl bg-card text-primary shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2"><Pencil className="w-5 h-5 text-primary" /> General Overview</h2>
                {isOverviewLoading ? (
                    <div className="flex items-center justify-center p-6"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
                ) : (
                    <div className="space-y-4 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Page Subtitle</label>
                                <Input name="page_subtitle" value={overviewData.page_subtitle || ''} onChange={handleOverviewChange} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Page Title</label>
                                <Input name="page_title" value={overviewData.page_title || ''} onChange={handleOverviewChange} />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Page Description</label>
                                <Textarea name="page_description" value={overviewData.page_description || ''} onChange={handleOverviewChange} rows={3} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-700">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-primary">Export Section Info</h3>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Title</label>
                                    <Input name="export_title" value={overviewData.export_title || ''} onChange={handleOverviewChange} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Description</label>
                                    <Textarea name="export_description" value={overviewData.export_description || ''} onChange={handleOverviewChange} rows={3} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-primary">Import Section Info</h3>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Title</label>
                                    <Input name="import_title" value={overviewData.import_title || ''} onChange={handleOverviewChange} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Description</label>
                                    <Textarea name="import_description" value={overviewData.import_description || ''} onChange={handleOverviewChange} rows={3} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-700">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-primary">Stat 1</h3>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Value (e.g. $5M+)</label>
                                    <Input name="stat1_value" value={overviewData.stat1_value || ''} onChange={handleOverviewChange} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Label</label>
                                    <Input name="stat1_label" value={overviewData.stat1_label || ''} onChange={handleOverviewChange} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Subtext</label>
                                    <Input name="stat1_subtext" value={overviewData.stat1_subtext || ''} onChange={handleOverviewChange} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-primary">Stat 2</h3>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Value (e.g. $20M+)</label>
                                    <Input name="stat2_value" value={overviewData.stat2_value || ''} onChange={handleOverviewChange} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Label</label>
                                    <Input name="stat2_label" value={overviewData.stat2_label || ''} onChange={handleOverviewChange} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">CTA Title</label>
                                <Input name="cta_title" value={overviewData.cta_title || ''} onChange={handleOverviewChange} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">CTA Description</label>
                                <Textarea name="cta_description" value={overviewData.cta_description || ''} onChange={handleOverviewChange} rows={2} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
                            <div className="col-span-full">
                                <h3 className="text-lg font-medium text-primary">Center Circular Content</h3>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Title (use \n for line break)</label>
                                <Input name="center_title" value={overviewData.center_title || ''} onChange={handleOverviewChange} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subtitle</label>
                                <Input name="center_subtitle" value={overviewData.center_subtitle || ''} onChange={handleOverviewChange} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Icon</label>
                                <LucideIconPicker value={overviewData.center_icon || ''} onChange={(icon) => setOverviewData({ ...overviewData, center_icon: icon })} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
                            <div className="col-span-full">
                                <h3 className="text-lg font-medium text-primary">CTA Button</h3>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Button Text</label>
                                <Input name="cta_button_title" value={overviewData.cta_button_title || ''} onChange={handleOverviewChange} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Button URL</label>
                                <Input name="cta_button_url" value={overviewData.cta_button_url || ''} onChange={handleOverviewChange} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Button Icon</label>
                                <LucideIconPicker value={overviewData.cta_button_icon || ''} onChange={(icon) => setOverviewData({ ...overviewData, cta_button_icon: icon })} />
                            </div>
                        </div>

                        <Button onClick={handleOverviewSave} disabled={isUpdatingOverview} className="mt-6">
                            {isUpdatingOverview ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                            Save Overview Details
                        </Button>
                    </div>
                )}
            </div>

            {/* Export Commodities */}
            <div className="p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2"><Plane className="w-5 h-5 text-primary" /> Export Commodities List</h2>
                    <Button onClick={() => handleAddCategory('export')} disabled={isCategoriesLoading} variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" /> Add Commodity
                    </Button>
                </div>
                
                {isCategoriesLoading ? (
                    <div className="flex items-center justify-center p-6"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
                ) : exports.length === 0 ? (
                    <p className="text-sm text-gray-500">No export commodities defined yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exports.map((item) => (
                            <Card key={item.category_id} className="border-slate-200 shadow-sm relative">
                                <CardHeader className="py-3 px-4 border-b flex flex-row justify-between items-center">
                                    <CardTitle className="text-sm font-semibold text-primary">Export Item</CardTitle>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500" onClick={() => handleDeleteCategory(item.category_id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent className="p-4 space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-500">Commodity Name</label>
                                        <Input 
                                            value={item.title} 
                                            onChange={(e) => handleUpdateCategory(item.category_id, 'title', e.target.value)} 
                                            className="h-8" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-500">Items (separated by " • " usually)</label>
                                        <Textarea 
                                            value={item.description || ''} 
                                            onChange={(e) => handleUpdateCategory(item.category_id, 'description', e.target.value)} 
                                            rows={3} 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-500">Icon</label>
                                        <LucideIconPicker 
                                            value={item.icon || ''} 
                                            onChange={(iconName) => handleUpdateCategory(item.category_id, 'icon', iconName)} 
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {/* Import Categories */}
            <div className="p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2"><Ship className="w-5 h-5 text-primary" /> Import Categories</h2>
                    <Button onClick={() => handleAddCategory('import')} disabled={isCategoriesLoading} variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" /> Add Category
                    </Button>
                </div>
                
                {isCategoriesLoading ? (
                    <div className="flex items-center justify-center p-6"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
                ) : imports.length === 0 ? (
                    <p className="text-sm text-gray-500">No import categories defined yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {imports.map((item) => (
                            <Card key={item.category_id} className="border-slate-200 shadow-sm relative">
                                <CardHeader className="py-3 px-4 border-b flex flex-row justify-between items-center">
                                    <CardTitle className="text-sm font-semibold text-primary">Import Category</CardTitle>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500" onClick={() => handleDeleteCategory(item.category_id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent className="p-4 space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-500">Category Name</label>
                                        <Input 
                                            value={item.title} 
                                            onChange={(e) => handleUpdateCategory(item.category_id, 'title', e.target.value)} 
                                            className="h-8" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-500">Description</label>
                                        <Textarea 
                                            value={item.description || ''} 
                                            onChange={(e) => handleUpdateCategory(item.category_id, 'description', e.target.value)} 
                                            rows={2} 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-500">Icon</label>
                                        <LucideIconPicker 
                                            value={item.icon || ''} 
                                            onChange={(iconName) => handleUpdateCategory(item.category_id, 'icon', iconName)} 
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {/* Flow Steps */}
            <div className="p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2"><Activity className="w-5 h-5 text-primary" /> Process Flow Steps</h2>
                    <Button onClick={handleAddStep} disabled={isStepsLoading} variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" /> Add Step
                    </Button>
                </div>
                
                {isStepsLoading ? (
                    <div className="flex items-center justify-center p-6"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
                ) : steps.length === 0 ? (
                    <p className="text-sm text-gray-500">No flow steps defined yet.</p>
                ) : (
                    <div className="space-y-4">
                        {steps.map((step) => (
                            <Card key={step.step_id} className="border-slate-200 shadow-sm relative">
                                <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
                                    <div className="space-y-2 w-24">
                                        <label className="text-xs font-medium text-slate-500">Number</label>
                                        <Input 
                                            value={step.step_number} 
                                            onChange={(e) => handleUpdateStep(step.step_id, 'step_number', e.target.value)} 
                                            className="h-8 text-center" 
                                            placeholder="e.g. 01"
                                        />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <label className="text-xs font-medium text-slate-500">Title</label>
                                        <Input 
                                            value={step.title} 
                                            onChange={(e) => handleUpdateStep(step.step_id, 'title', e.target.value)} 
                                            className="h-8" 
                                            placeholder="e.g. SOURCE"
                                        />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <label className="text-xs font-medium text-slate-500">Description</label>
                                        <Input 
                                            value={step.description || ''} 
                                            onChange={(e) => handleUpdateStep(step.step_id, 'description', e.target.value)} 
                                            className="h-8" 
                                        />
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 mt-6" onClick={() => handleDeleteStep(step.step_id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default ImportExportAdminPage;
