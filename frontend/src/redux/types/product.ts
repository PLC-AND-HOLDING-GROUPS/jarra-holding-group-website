export interface ProductCategory {
    category_id: string;
    name: string;
    slug: string;
    description: string | null;
    created_at: string;
}

export interface ProductAttachment {
    product_attachment_id: string;
    product_id: string;
    attachment_id: string;
    category: string;
    attachment?: any; // You can refine this with the global Attachment type
}

export interface Product {
    product_id: string;
    name: string;
    slug: string;
    category_id: string;
    short_description: string;
    full_description: string;
    status: string;
    publish_status: "draft" | "published" | "archived";
    specifications: Record<string, string>;
    applications: string[];
    created_at: string;
    category?: ProductCategory;
    attachments?: ProductAttachment[];
}

export interface ProductInquiry {
    inquiry_id: string;
    product_id: string;
    name: string;
    company: string | null;
    email: string;
    phone: string | null;
    quantity: string | null;
    message: string;
    status: string;
    created_at: string;
    product?: { name: string; slug: string };
}

export interface CreateProductPayload {
    name: string;
    slug: string;
    category_id: string;
    short_description: string;
    full_description: string;
    status: string;
    publish_status: "draft" | "published" | "archived";
    specifications: Record<string, string>;
    applications: string[];
    attachments?: { attachment_id: string; category: string }[];
}

export interface UpdateProductPayload extends Partial<CreateProductPayload> {}

export interface CreateProductInquiryPayload {
    product_id: string;
    name: string;
    company?: string;
    email: string;
    phone?: string;
    quantity?: string;
    message: string;
}
