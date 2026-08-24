import { baseApi } from "../baseApi";

export const pageHeaderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPageHeaders: builder.query<any, void>({
      query: () => "/api/page-headers",
      providesTags: ["PageHeader"],
    }),
    getPageHeaderByIdentifier: builder.query<any, string>({
      query: (identifier) => `/api/page-headers/${identifier}`,
      providesTags: (result, error, arg) => [{ type: "PageHeader", id: arg }],
    }),
    updatePageHeader: builder.mutation<any, { identifier: string; body: any }>({
      query: ({ identifier, body }) => ({
        url: `/api/page-headers/${identifier}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { identifier }) => [
        "PageHeader",
        { type: "PageHeader", id: identifier },
      ],
    }),
  }),
});

export const {
  useGetAllPageHeadersQuery,
  useGetPageHeaderByIdentifierQuery,
  useUpdatePageHeaderMutation,
} = pageHeaderApi;
