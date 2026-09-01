import { baseApi } from "../baseApi";
import {
    Facility,
    CreateFacilityPayload,
    UpdateFacilityPayload,
    FacilityOverviewData,
    FacilityFootprintData,
} from "../types/facility";

export const facilityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /** ---------------------------
         * GET ALL FACILITIES
         * --------------------------- */
        getFacilities: builder.query<Facility[], void>({
            query: () => ({ url: "/facilities" }),
            transformResponse: (response: any): Facility[] => response.data ?? [],
            providesTags: ["Facility"],
        }),

        /** ---------------------------
         * GET FACILITY BY ID
         * --------------------------- */
        getFacilityById: builder.query<Facility, string>({
            query: (id) => `/facilities/${id}`,
            transformResponse: (response: any): Facility => response.data,
            providesTags: (_r, _e, id) => [{ type: "Facility", id }],
        }),

        /** ---------------------------
         * CREATE FACILITY
         * --------------------------- */
        createFacility: builder.mutation<Facility, CreateFacilityPayload>({
            query: (body) => ({
                url: "/facilities",
                method: "POST",
                body,
            }),
            transformResponse: (response: any): Facility => response.data,
            invalidatesTags: ["Facility"],
        }),

        /** ---------------------------
         * UPDATE FACILITY
         * --------------------------- */
        updateFacility: builder.mutation<
            Facility,
            { id: string; data: UpdateFacilityPayload }
        >({
            query: ({ id, data }) => ({
                url: `/facilities/${id}`,
                method: "PUT",
                body: data,
            }),
            transformResponse: (response: any): Facility => response.data,
            invalidatesTags: (_r, _e, { id }) => [{ type: "Facility", id }, "Facility"],
        }),

        /** ---------------------------
         * DELETE FACILITY
         * --------------------------- */
        deleteFacility: builder.mutation<{ message: string }, string>({
            query: (id) => ({
                url: `/facilities/${id}`,
                method: "DELETE",
            }),
            transformResponse: (response: any) => response,
            invalidatesTags: ["Facility"],
        }),

        /** ---------------------------
         * REORDER FACILITIES
         * --------------------------- */
        reorderFacilities: builder.mutation<{ message: string }, { facilities: { id: string; order: number }[] }>({
            query: (body) => ({
                url: "/facilities/reorder",
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Facility"],
        }),

        /** ---------------------------
         * FACILITY OVERVIEW
         * --------------------------- */
        getFacilityOverview: builder.query<FacilityOverviewData, void>({
            query: () => ({ url: "/facility-overview" }),
            transformResponse: (response: any) => response.data ?? {},
            providesTags: ["Facility"],
        }),
        updateFacilityOverview: builder.mutation<FacilityOverviewData, FacilityOverviewData>({
            query: (body) => ({
                url: "/facility-overview",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Facility"],
        }),

        /** ---------------------------
         * FACILITY FOOTPRINT
         * --------------------------- */
        getFacilityFootprint: builder.query<FacilityFootprintData, void>({
            query: () => ({ url: "/facility-footprint" }),
            transformResponse: (response: any) => response.data ?? {},
            providesTags: ["Facility"],
        }),
        updateFacilityFootprint: builder.mutation<FacilityFootprintData, FacilityFootprintData>({
            query: (body) => ({
                url: "/facility-footprint",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Facility"],
        }),
    }),
});

export const {
    useGetFacilitiesQuery,
    useGetFacilityByIdQuery,
    useCreateFacilityMutation,
    useUpdateFacilityMutation,
    useDeleteFacilityMutation,
    useReorderFacilitiesMutation,
    useGetFacilityOverviewQuery,
    useUpdateFacilityOverviewMutation,
    useGetFacilityFootprintQuery,
    useUpdateFacilityFootprintMutation,
} = facilityApi;
