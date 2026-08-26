import { baseApi } from "../baseApi";
import {
    Product,
    ProductCategory,
    ProductInquiry,
    CreateProductPayload,
    UpdateProductPayload,
    CreateProductInquiryPayload,
} from "../types/product";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // ================= PRODUCT CATEGORIES =================
        getCategories: builder.query<ProductCategory[], void>({
            query: () => "/product-categories",
            transformResponse: (res: any) => res.data ?? [],
            providesTags: ["ProductCategory"],
        }),
        getCategoryById: builder.query<ProductCategory, string>({
            query: (id) => `/product-categories/${id}`,
            transformResponse: (res: any) => res.data,
            providesTags: (_r, _e, id) => [{ type: "ProductCategory", id }],
        }),
        createCategory: builder.mutation<ProductCategory, Partial<ProductCategory>>({
            query: (body) => ({ url: "/product-categories", method: "POST", body }),
            invalidatesTags: ["ProductCategory"],
        }),
        updateCategory: builder.mutation<ProductCategory, { id: string; data: Partial<ProductCategory> }>({
            query: ({ id, data }) => ({ url: `/product-categories/${id}`, method: "PUT", body: data }),
            invalidatesTags: ["ProductCategory"],
        }),
        deleteCategory: builder.mutation<{ message: string }, string>({
            query: (id) => ({ url: `/product-categories/${id}`, method: "DELETE" }),
            invalidatesTags: ["ProductCategory"],
        }),

        // ================= PRODUCTS =================
        getProducts: builder.query<Product[], { category?: string } | void>({
            query: (params) => (params ? { url: "/products", params } : { url: "/products" }),
            transformResponse: (res: any) => res.data ?? [],
            providesTags: ["Product"],
        }),
        getProductByIdOrSlug: builder.query<Product, string>({
            query: (identifier) => `/products/${identifier}`,
            transformResponse: (res: any) => res.data,
            providesTags: (_r, _e, id) => [{ type: "Product", id }],
        }),
        createProduct: builder.mutation<Product, CreateProductPayload>({
            query: (body) => ({ url: "/products", method: "POST", body }),
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation<Product, { id: string; data: UpdateProductPayload }>({
            query: ({ id, data }) => ({ url: `/products/${id}`, method: "PUT", body: data }),
            invalidatesTags: (_r, _e, { id }) => [{ type: "Product", id }, "Product"],
        }),
        deleteProduct: builder.mutation<{ message: string }, string>({
            query: (id) => ({ url: `/products/${id}`, method: "DELETE" }),
            invalidatesTags: ["Product"],
        }),

        // ================= INQUIRIES =================
        getInquiries: builder.query<ProductInquiry[], void>({
            query: () => "/product-inquiries",
            transformResponse: (res: any) => res.data ?? [],
            providesTags: ["ProductInquiry"],
        }),
        getInquiryById: builder.query<ProductInquiry, string>({
            query: (id) => `/product-inquiries/${id}`,
            transformResponse: (res: any) => res.data,
            providesTags: (_r, _e, id) => [{ type: "ProductInquiry", id }],
        }),
        submitInquiry: builder.mutation<ProductInquiry, CreateProductInquiryPayload>({
            query: (body) => ({ url: "/product-inquiries", method: "POST", body }),
            invalidatesTags: ["ProductInquiry"],
        }),
        updateInquiryStatus: builder.mutation<ProductInquiry, { id: string; status: string }>({
            query: ({ id, status }) => ({ url: `/product-inquiries/${id}/status`, method: "PUT", body: { status } }),
            invalidatesTags: ["ProductInquiry"],
        }),
        deleteInquiry: builder.mutation<{ message: string }, string>({
            query: (id) => ({ url: `/product-inquiries/${id}`, method: "DELETE" }),
            invalidatesTags: ["ProductInquiry"],
        }),
        replyToInquiry: builder.mutation<ProductInquiry, { id: string; subject: string; message: string }>({
            query: ({ id, subject, message }) => ({ url: `/product-inquiries/${id}/reply`, method: "POST", body: { subject, message } }),
            invalidatesTags: (_r, _e, { id }) => [{ type: "ProductInquiry", id }, "ProductInquiry"],
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useGetProductsQuery,
    useGetProductByIdOrSlugQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useGetInquiriesQuery,
    useGetInquiryByIdQuery,
    useSubmitInquiryMutation,
    useUpdateInquiryStatusMutation,
    useDeleteInquiryMutation,
    useReplyToInquiryMutation,
} = productApi;
