import { baseApi } from "../baseApi";
import { Purpose, CreateOrUpdatePurposePayload } from "../types/purpose";

export const purposeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPurpose: builder.query<Purpose, void>({
            query: () => ({ url: "/purpose" }),
            transformResponse: (response: any): Purpose => response.data || {},
            providesTags: ["Purpose"],
        }),
        createOrUpdatePurpose: builder.mutation<Purpose, CreateOrUpdatePurposePayload>({
            query: (body) => ({
                url: "/purpose",
                method: "POST",
                body,
            }),
            transformResponse: (response: any): Purpose => response.data,
            invalidatesTags: ["Purpose"],
        }),
    }),
});

export const { useGetPurposeQuery, useCreateOrUpdatePurposeMutation } = purposeApi;
