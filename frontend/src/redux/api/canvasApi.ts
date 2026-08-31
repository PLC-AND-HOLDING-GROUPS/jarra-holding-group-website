import { baseApi } from "../baseApi";
import { Canvas, CreateOrUpdateCanvasPayload } from "../types/canvas";

export const canvasApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCanvas: builder.query<Canvas, void>({
            query: () => ({ url: "/canvas" }),
            transformResponse: (response: any): Canvas => response.data || {},
            providesTags: ["Canvas"],
        }),
        createOrUpdateCanvas: builder.mutation<Canvas, CreateOrUpdateCanvasPayload>({
            query: (body) => ({
                url: "/canvas",
                method: "POST",
                body,
            }),
            transformResponse: (response: any): Canvas => response.data,
            invalidatesTags: ["Canvas"],
        }),
    }),
});

export const { useGetCanvasQuery, useCreateOrUpdateCanvasMutation } = canvasApi;
