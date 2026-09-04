import { baseApi } from "../baseApi";
import { Certification, CreateCertificationPayload, UpdateCertificationPayload } from "../types/certification";

export const certificationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCertifications: builder.query<{ success: boolean; data: Certification[] }, void>({
            query: () => "/certifications",
            providesTags: ["Certification"],
            transformResponse: (response: any) => ({
                success: response.success,
                data: response.data || [],
            }),
        }),

        getCertificationById: builder.query<{ success: boolean; data: Certification }, string>({
            query: (id) => `/certifications/${id}`,
            providesTags: (result, error, id) => [{ type: "Certification", id }],
        }),

        createCertification: builder.mutation<{ success: boolean; data: Certification }, CreateCertificationPayload>({
            query: (payload) => ({
                url: "/certifications",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Certification"],
        }),

        updateCertification: builder.mutation<{ success: boolean; data: Certification }, UpdateCertificationPayload>({
            query: ({ certification_id, ...payload }) => ({
                url: `/certifications/${certification_id}`,
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: (result, error, { certification_id }) => [
                "Certification",
                { type: "Certification", id: certification_id },
            ],
        }),

        deleteCertification: builder.mutation<{ success: boolean; message: string }, string>({
            query: (id) => ({
                url: `/certifications/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Certification"],
        }),
    }),
});

export const {
    useGetCertificationsQuery,
    useGetCertificationByIdQuery,
    useCreateCertificationMutation,
    useUpdateCertificationMutation,
    useDeleteCertificationMutation,
} = certificationApi;
