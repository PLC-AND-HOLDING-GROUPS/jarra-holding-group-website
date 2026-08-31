import { baseApi } from "../baseApi";
import {
    Service,
    CreateServicePayload,
    UpdateServicePayload,
    ServiceOverviewData,
    ServiceExperienceData,
    ServiceCapabilityData,
    ServiceWhyUsData,
} from "../types/service";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /** ---------------------------
         * GET ALL SERVICES
         * --------------------------- */
        getServices: builder.query<Service[], void>({
            query: () => ({ url: "/services" }),
            transformResponse: (response: any): Service[] => response.data ?? [],
            providesTags: ["Service"],
        }),

        /** ---------------------------
         * GET SERVICE BY ID
         * --------------------------- */
        getServiceById: builder.query<Service, string>({
            query: (id) => `/services/${id}`,
            transformResponse: (response: any): Service => response.data,
            providesTags: (_r, _e, id) => [{ type: "Service", id }],
        }),

        /** ---------------------------
         * CREATE SERVICE
         * --------------------------- */
        createService: builder.mutation<Service, CreateServicePayload>({
            query: (body) => ({
                url: "/services",
                method: "POST",
                body,
            }),
            transformResponse: (response: any): Service => response.data,
            invalidatesTags: ["Service"],
        }),

        /** ---------------------------
         * UPDATE SERVICE
         * --------------------------- */
        updateService: builder.mutation<
            Service,
            { id: string; data: UpdateServicePayload }
        >({
            query: ({ id, data }) => ({
                url: `/services/${id}`,
                method: "PUT",
                body: data,
            }),
            transformResponse: (response: any): Service => response.data,
            invalidatesTags: (_r, _e, { id }) => [{ type: "Service", id }, "Service"],
        }),

        /** ---------------------------
         * DELETE SERVICE
         * --------------------------- */
        deleteService: builder.mutation<{ message: string }, string>({
            query: (id) => ({
                url: `/services/${id}`,
                method: "DELETE",
            }),
            transformResponse: (response: any) => response,
            invalidatesTags: ["Service"],
        }),

        /** ---------------------------
         * REORDER SERVICES
         * --------------------------- */
        reorderServices: builder.mutation<{ message: string }, { services: { id: string; order: number }[] }>({
            query: (body) => ({
                url: "/services/reorder",
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Service"],
        }),

        /** ---------------------------
         * SERVICE OVERVIEW
         * --------------------------- */
        getServiceOverview: builder.query<ServiceOverviewData, void>({
            query: () => ({ url: "/service-overview" }),
            transformResponse: (response: any) => response.data ?? {},
            providesTags: ["Service"],
        }),
        updateServiceOverview: builder.mutation<ServiceOverviewData, ServiceOverviewData>({
            query: (body) => ({
                url: "/service-overview",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Service"],
        }),

        /** ---------------------------
         * SERVICE EXPERIENCE
         * --------------------------- */
        getServiceExperience: builder.query<ServiceExperienceData, void>({
            query: () => ({ url: "/service-experience" }),
            transformResponse: (response: any) => response.data ?? {},
            providesTags: ["Service"],
        }),
        updateServiceExperience: builder.mutation<ServiceExperienceData, ServiceExperienceData>({
            query: (body) => ({
                url: "/service-experience",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Service"],
        }),

        /** ---------------------------
         * SERVICE CAPABILITY
         * --------------------------- */
        getServiceCapability: builder.query<ServiceCapabilityData, void>({
            query: () => ({ url: "/service-capability" }),
            transformResponse: (response: any) => response.data ?? {},
            providesTags: ["Service"],
        }),
        updateServiceCapability: builder.mutation<ServiceCapabilityData, ServiceCapabilityData>({
            query: (body) => ({
                url: "/service-capability",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Service"],
        }),

        /** ---------------------------
         * SERVICE WHY US
         * --------------------------- */
        getServiceWhyUs: builder.query<ServiceWhyUsData, void>({
            query: () => ({ url: "/service-why-us" }),
            transformResponse: (response: any) => response.data ?? {},
            providesTags: ["Service"],
        }),
        updateServiceWhyUs: builder.mutation<ServiceWhyUsData, ServiceWhyUsData>({
            query: (body) => ({
                url: "/service-why-us",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Service"],
        }),
    }),
});

export const {
    useGetServicesQuery,
    useGetServiceByIdQuery,
    useCreateServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
    useReorderServicesMutation,
    useGetServiceOverviewQuery,
    useUpdateServiceOverviewMutation,
    useGetServiceExperienceQuery,
    useUpdateServiceExperienceMutation,
    useGetServiceCapabilityQuery,
    useUpdateServiceCapabilityMutation,
    useGetServiceWhyUsQuery,
    useUpdateServiceWhyUsMutation,
} = serviceApi;