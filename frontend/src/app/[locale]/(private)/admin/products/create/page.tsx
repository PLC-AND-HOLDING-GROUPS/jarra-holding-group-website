"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Eye, FileIcon, Trash2, Upload, X, XIcon, Plus } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCreateProductMutation, useGetCategoriesQuery } from "@/redux/api/productApi";
import {
    useUploadAttachmentsMutation,
    useDeleteAttachmentMutation,
    useGetAttachmentsQuery,
} from "@/redux/api/attachementApi";
import { getFileType as getFileTypeUtil, getFileUrl, getImageUrl } from "@/utils/fileUrl";
import "quill/dist/quill.snow.css";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

// Dynamic import for Quill
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

/** Types */
type ProductAttachmentInput = {
    attachment_id: string;
    category: "image" | "document";
};

export type UploadedFileInfo = {
    attachment_id: string;
    file_name: string;
    file_path?: string;
    previewUrl?: string | null;
    category?: "image" | "document";
    isBlob?: boolean;
    file_type?: 'image' | 'video' | 'pdf' | 'document';
};

interface FileUploadFieldProps {
    id: string;
    label: string;
    value: string[];
    onChange: (value: string[], files?: UploadedFileInfo[]) => void;
    required?: boolean;
    accept?: string;
    multiple?: boolean;
    showPreview?: boolean;
    category?: "image" | "document";
}

// Enhanced file type detection
const getFileType = (fileName: string): 'image' | 'video' | 'pdf' | 'document' => {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'].includes(extension)) return 'image';
    if (['mp4', 'mov', 'avi', 'mkv', 'webm', 'flv', 'wmv', 'm4v', '3gp'].includes(extension)) return 'video';
    if (extension === 'pdf') return 'pdf';
    return 'document';
};

/** File Upload Component */
const FileUploadField: React.FC<FileUploadFieldProps> = ({
    id,
    label,
    value = [],
    onChange,
    required = false,
    accept = "image/*,.pdf",
    multiple = true,
    showPreview = true,
    category,
}) => {
    const [uploadAttachments] = useUploadAttachmentsMutation();
    const [deleteAttachment] = useDeleteAttachmentMutation();
    const { data: attachmentsResponse } = useGetAttachmentsQuery();
    const [files, setFiles] = useState<UploadedFileInfo[]>([]);
    const [previewFile, setPreviewFile] = useState<UploadedFileInfo | null>(null);

    useEffect(() => {
        if (!attachmentsResponse || value.length === 0) return;
        const all = attachmentsResponse.attachments || [];
        const mapped = value
            .map((id) => {
                const found = all.find((a) => a.attachment_id === id);
                if (found) {
                    return {
                        attachment_id: found.attachment_id,
                        file_name: found.file_name,
                        file_path: found.file_path,
                        previewUrl: getImageUrl(found, "large"),
                        category,
                        isBlob: false,
                        file_type: getFileType(found.file_name),
                    };
                }
                return null;
            })
            .filter(Boolean) as UploadedFileInfo[];

        if (mapped.length) {
            const existingIds = new Set(files.map(f => f.attachment_id));
            const newFiles = mapped.filter(f => !existingIds.has(f.attachment_id));
            
            if (newFiles.length > 0) {
                setFiles(prev => [...prev, ...newFiles]);
                // Only notify parent about initialized files if there are new ones
                onChange(value, mapped);
            }
        }
    }, [attachmentsResponse, value, category, files]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (!selectedFiles || selectedFiles.length === 0) return;

        const uploadPromises = Array.from(selectedFiles).map(async (file) => {
            try {
                const result = await uploadAttachments({ files: [file] }).unwrap();
                if (result.attachments.length > 0) {
                    const uploaded = result.attachments[0];
                    return {
                        attachment_id: uploaded.attachment_id,
                        file_name: uploaded.file_name,
                        file_path: uploaded.file_path,
                        previewUrl: URL.createObjectURL(file),
                        category,
                        isBlob: true,
                        file_type: getFileType(uploaded.file_name),
                    };
                }
            } catch {
                toast.error(`Failed to upload ${file.name}`);
                return null;
            }
        });

        const uploadedFiles = (await Promise.all(uploadPromises)).filter(Boolean) as UploadedFileInfo[];

        if (uploadedFiles.length > 0) {
            const updatedFiles = [...files, ...uploadedFiles];
            setFiles(updatedFiles);
            onChange(updatedFiles.map((f) => f.attachment_id), updatedFiles);
            uploadedFiles.forEach((f) => toast.success(`${f.file_name} uploaded`));
        }
        e.target.value = '';
    };

    const handleDelete = async (attachment_id: string) => {
        try {
            const fileToDelete = files.find(f => f.attachment_id === attachment_id);
            if (!fileToDelete?.isBlob) {
                await deleteAttachment(attachment_id).unwrap();
            }
            if (fileToDelete?.previewUrl && fileToDelete.isBlob) {
                URL.revokeObjectURL(fileToDelete.previewUrl);
            }
            const updatedFiles = files.filter((f) => f.attachment_id !== attachment_id);
            setFiles(updatedFiles);
            onChange(updatedFiles.map((f) => f.attachment_id), updatedFiles);
            toast.success("File removed successfully");
        } catch {
            toast.error("Failed to delete file");
        }
    };

    useEffect(() => {
        return () => {
            files.forEach((f) => {
                if (f.isBlob && f.previewUrl) URL.revokeObjectURL(f.previewUrl);
            });
        };
    }, []);

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium cursor-pointer">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative flex flex-col items-center justify-center border border-[#B1C9E3] rounded-md border-dashed p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                <input
                    id={id}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center space-y-2">
                    <Upload className="w-6 h-6 text-muted-foreground" />
                    <p className="text-sm text-gray-600">Click or drag to upload</p>
                </div>
            </div>
            {showPreview && files.length > 0 && (
                <div className="grid grid-cols-1 gap-2 mt-2">
                    {files.map((file) => (
                        <div key={file.attachment_id} className="flex items-center justify-between border border-border rounded-md p-2 bg-secondary text-secondary-foreground">
                            <div className="flex items-center gap-2">
                                {file.previewUrl && file.file_type === "image" && (
                                    <img src={file.previewUrl || ""} alt={file.file_name} className="w-10 h-10 object-cover rounded" />
                                )}
                                {file.file_type === "video" && (
                                    <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                                        <video className="w-8 h-8 object-cover" muted><source src={file.previewUrl ?? undefined} type="video/mp4" /></video>
                                    </div>
                                )}
                                <span className="text-sm text-muted-foreground truncate max-w-[100px]">{file.file_name}</span>
                            </div>
                            <div className="flex gap-1">
                                <Button type="button" variant="ghost" size="icon" onClick={() => setPreviewFile(file)}><Eye className="w-5 h-5 text-primary" /></Button>
                                <Button type="button" variant="ghost" size="icon" onClick={() => handleDelete(file.attachment_id)}><Trash2 className="w-5 h-5 text-red-600" /></Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {previewFile && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-card text-card-foreground rounded-lg max-w-3xl w-full max-h-[90vh] p-4 relative overflow-auto">
                        <button className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200" onClick={() => setPreviewFile(null)}>
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-lg font-semibold mb-4">{previewFile.file_name}</h3>
                        {previewFile.file_type === "image" && previewFile.previewUrl && (
                            <img src={previewFile.previewUrl} alt={previewFile.file_name} className="w-full h-auto max-h-[70vh] object-contain" />
                        )}
                        {previewFile.file_type === "video" && previewFile.previewUrl && (
                            <video controls className="w-full h-auto max-h-[70vh]">
                                <source src={previewFile.previewUrl || ""} type="video/mp4" />
                            </video>
                        )}
                        {previewFile.file_type === "pdf" && previewFile.previewUrl && (
                            <iframe src={previewFile.previewUrl || ""} className="w-full h-[70vh]" title={previewFile.file_name} />
                        )}
                        {!previewFile.previewUrl && <p className="text-gray-600">Cannot preview this file type.</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function CreateProduct() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [categoryIds, setCategoryIds] = useState<string[]>([]);
    const [shortDescription, setShortDescription] = useState("");
    const [fullDescriptionHtml, setFullDescriptionHtml] = useState("");
    const [status, setStatus] = useState<"Available" | "Available on Request" | "Inquiry Required" | "Currently Unavailable">("Available");
    const [publishStatus, setPublishStatus] = useState<"draft" | "published" | "archived">("draft");
    
    // Dynamic specifications
    const [specifications, setSpecifications] = useState<{key: string, value: string}[]>([{key: "", value: ""}]);
    
    // Applications removed as requested
    
    const [productAttachments, setProductAttachments] = useState<ProductAttachmentInput[]>([]);
    const [imageFiles, setImageFiles] = useState<UploadedFileInfo[]>([]);
    const [documentFiles, setDocumentFiles] = useState<UploadedFileInfo[]>([]);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const router = useRouter();

    const [createProduct] = useCreateProductMutation();
    const { data: categories = [] } = useGetCategoriesQuery();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (!slug || slug === name.slice(0, -1).toLowerCase().replace(/\s+/g, '-')) {
            setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
        }
    };

    const addSpecification = () => setSpecifications([...specifications, {key: "", value: ""}]);
    const updateSpecification = (index: number, field: "key" | "value", val: string) => {
        const updated = [...specifications];
        updated[index][field] = val;
        setSpecifications(updated);
    };
    const removeSpecification = (index: number) => {
        setSpecifications(specifications.filter((_, i) => i !== index));
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || categoryIds.length === 0 || !fullDescriptionHtml) {
            toast.error("Please fill all required fields");
            return;
        }

        // Convert specs array to object
        const specsRecord: Record<string, string> = {};
        specifications.forEach(spec => {
            if (spec.key.trim() && spec.value.trim()) {
                specsRecord[spec.key.trim()] = spec.value.trim();
            }
        });

        try {
            const result = await createProduct({
                name,
                slug,
                category_ids: categoryIds,
                short_description: shortDescription,
                full_description: fullDescriptionHtml,
                status,
                publish_status: publishStatus,
                specifications: specsRecord,
                applications: [],
                attachments: productAttachments,
            }).unwrap();

            toast.success("Product Created Successfully!");
            
            // Redirect to edit page instead of clearing form
            if (result?.product_id) {
                router.push(`/admin/products/${result.product_id}`);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create product");
        }
    };

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            ["blockquote", "code-block"],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const getCurrentMedia = () => (imageFiles.length ? imageFiles[currentMediaIndex] : null);
    const currentMedia = getCurrentMedia();

    const getMediaUrl = (file: UploadedFileInfo) => {
        if (file.isBlob) return file.previewUrl;
        if (file.file_path) return getImageUrl(file as any, "large");
        return file.previewUrl;
    };

    return (
        <div className="min-h-screen w-full grid grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow overflow-y-auto space-y-6">
                <h1 className="text-2xl font-bold mb-6 text-primary">Create Product</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="publish_status">Publish Status</Label>
                            <select
                                id="publish_status"
                                value={publishStatus}
                                onChange={(e) => setPublishStatus(e.target.value as any)}
                                className="w-full border border-border p-2 rounded-md bg-card text-card-foreground text-sm h-10"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="status">Availability</Label>
                            <select
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value as any)}
                                className="w-full border border-border p-2 rounded-md bg-card text-card-foreground text-sm h-10"
                            >
                                <option value="Available">Available</option>
                                <option value="Available on Request">Available on Request</option>
                                <option value="Inquiry Required">Inquiry Required</option>
                                <option value="Currently Unavailable">Currently Unavailable</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label>Categories <span className="text-red-500">*</span></Label>
                            <div className="flex flex-wrap gap-2 border border-border p-3 rounded-md bg-card">
                                {categories.map(cat => (
                                    <label key={cat.category_id} className="flex items-center gap-2 cursor-pointer bg-secondary px-3 py-1.5 rounded-md hover:bg-secondary/80">
                                        <input
                                            type="checkbox"
                                            value={cat.category_id}
                                            checked={categoryIds.includes(cat.category_id)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setCategoryIds([...categoryIds, cat.category_id]);
                                                } else {
                                                    setCategoryIds(categoryIds.filter(id => id !== cat.category_id));
                                                }
                                            }}
                                            className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4"
                                        />
                                        <span className="text-sm font-medium">{cat.name}</span>
                                    </label>
                                ))}
                                {categories.length === 0 && <span className="text-sm text-muted-foreground">No categories available.</span>}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Product Name <span className="text-red-500">*</span></Label>
                            <Input id="name" value={name} onChange={handleNameChange} placeholder="e.g. Industrial Engine" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug <span className="text-red-500">*</span></Label>
                            <Input id="slug" value={slug} onChange={e => setSlug(e.target.value)} placeholder="e.g. industrial-engine" required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="short_desc">Short Description</Label>
                        <Textarea id="short_desc" value={shortDescription} onChange={e => setShortDescription(e.target.value)} placeholder="Brief summary of the product..." rows={3} />
                    </div>
                    
                    <div className="space-y-2">
                        <Label>Specifications</Label>
                        {specifications.map((spec, index) => (
                            <div key={index} className="flex gap-2 items-center">
                                <Input value={spec.key} onChange={(e) => updateSpecification(index, "key", e.target.value)} placeholder="e.g. Weight" className="flex-1" />
                                <Input value={spec.value} onChange={(e) => updateSpecification(index, "value", e.target.value)} placeholder="e.g. 50 kg" className="flex-1" />
                                <Button type="button" variant="ghost" size="icon" onClick={() => removeSpecification(index)} className="text-red-500"><XIcon className="h-4 w-4" /></Button>
                            </div>
                        ))}
                        <Button type="button" variant="outline" size="sm" onClick={addSpecification} className="mt-2 text-xs"><Plus className="h-3 w-3 mr-1" /> Add Spec</Button>
                    </div>



                    <FileUploadField
                        id="product-images"
                        label="Product Images / Video"
                        accept="image/*,video/*"
                        value={productAttachments.filter(a => a.category === "image").map(a => a.attachment_id)}
                        onChange={(ids, files) => {
                            setProductAttachments(prev => [
                                ...prev.filter(a => a.category !== "image"),
                                ...ids.map(id => ({ attachment_id: id, category: "image" as const })),
                            ]);
                            if (files) setImageFiles(files);
                            setCurrentMediaIndex(0);
                        }}
                        multiple
                        showPreview
                        category="image"
                    />

                    <FileUploadField
                        id="product-documents"
                        label="Product Documents (Brochures, Manuals)"
                        accept=".pdf,.doc,.docx"
                        value={productAttachments.filter(a => a.category === "document").map(a => a.attachment_id)}
                        onChange={(ids, files) => {
                            setProductAttachments(prev => [
                                ...prev.filter(a => a.category !== "document"),
                                ...ids.map(id => ({ attachment_id: id, category: "document" as const })),
                            ]);
                            if (files) setDocumentFiles(files);
                        }}
                        multiple
                        showPreview
                        category="document"
                    />

                    <div className="space-y-2">
                        <Label>Full Description <span className="text-red-500">*</span></Label>
                        <ReactQuill
                            theme="snow"
                            value={fullDescriptionHtml}
                            modules={modules}
                            onChange={(html) => setFullDescriptionHtml(html)}
                        />
                    </div>

                    <Button type="submit">Create Product</Button>
                </form>
            </div >

            {/* Preview Pane */}
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Live Preview</h2>
                
                {imageFiles.length > 0 && currentMedia && (
                    <div className="relative w-full mb-6">
                        {currentMedia.file_type === "image" && (
                            <img
                                src={getMediaUrl(currentMedia) || undefined}
                                alt={currentMedia.file_name}
                                className="w-full h-80 object-cover rounded-lg shadow"
                            />
                        )}
                        {currentMedia.file_type === "video" && (
                            <video controls className="w-full h-80 rounded-lg bg-black shadow" key={currentMedia.attachment_id}>
                                <source src={getMediaUrl(currentMedia) || undefined} type="video/mp4" />
                            </video>
                        )}
                        {imageFiles.length > 1 && (
                            <>
                                <button type="button" onClick={() => setCurrentMediaIndex(prev => (prev === 0 ? imageFiles.length - 1 : prev - 1))} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/70 text-white rounded-full p-2 hover:bg-gray-900 z-10 cursor-pointer">
                                    &#8592;
                                </button>
                                <button type="button" onClick={() => setCurrentMediaIndex(prev => (prev === imageFiles.length - 1 ? 0 : prev + 1))} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/70 text-white rounded-full p-2 hover:bg-gray-900 z-10 cursor-pointer">
                                    &#8594;
                                </button>
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                                    {currentMediaIndex + 1} / {imageFiles.length}
                                </div>
                            </>
                        )}
                    </div>
                )}

                <div className="flex gap-2 mb-2 items-center">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${publishStatus === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {publishStatus.toUpperCase()}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        status === 'Available' ? 'bg-blue-100 text-blue-700' : 
                        status === 'Currently Unavailable' ? 'bg-red-100 text-red-700' : 
                        'bg-amber-100 text-amber-700'
                    }`}>
                        {status.toUpperCase()}
                    </span>
                    {categoryIds.length > 0 && (
                        <div className="flex gap-1 flex-wrap">
                            {categoryIds.map(id => (
                                <span key={id} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                    {categories.find(c => c.category_id === id)?.name || "Category"}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <h1 className="text-4xl font-bold mb-3 text-primary">{name || "Product Name"}</h1>
                
                {shortDescription && (
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {shortDescription}
                    </p>
                )}

                {specifications.some(s => s.key && s.value) && (
                    <div className="mb-6 bg-secondary/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Specifications</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            {specifications.filter(s => s.key && s.value).map((spec, i) => (
                                <div key={i} className="flex border-b border-border pb-1">
                                    <span className="font-medium w-1/3 text-muted-foreground">{spec.key}:</span>
                                    <span className="w-2/3">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}


                <div className="mt-8 border-t pt-6">
                    <h3 className="font-semibold text-lg mb-4">Description</h3>
                    <div
                        className="prose prose-slate max-w-none break-words dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: fullDescriptionHtml || "<p>Product description will appear here...</p>" }}
                    />
                </div>

                {documentFiles.length > 0 && (
                    <div className="mt-8">
                        <h3 className="font-semibold text-lg mb-3">Downloads & Resources</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {documentFiles.map(doc => (
                                <a
                                    key={doc.attachment_id}
                                    href={doc.isBlob ? doc.previewUrl! : getFileUrl(doc.file_path!)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-border p-3 rounded-lg flex items-center gap-3 hover:bg-secondary/50 transition-colors group"
                                >
                                    <div className="bg-primary/10 p-2 rounded-md text-primary">
                                        <FileIcon className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">{doc.file_name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
