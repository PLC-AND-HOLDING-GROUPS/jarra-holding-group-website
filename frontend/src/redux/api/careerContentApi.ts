

export interface CareerContent {
    intro_title?: string;
    intro_title_highlight?: string;
    intro_description_1?: string;
    intro_description_2?: string;
    intro_image_id?: string;
    intro_image?: { file_path: string };
    intro_card_focus?: string;
    intro_card_growth?: string;

    culture_top_title?: string;
    culture_title?: string;
    culture_title_highlight?: string;
    culture_description?: string;
    culture_image_main_id?: string;
    culture_image_main?: { file_path: string };
    culture_image_sub_id?: string;
    culture_image_sub?: { file_path: string };
    
    culture_features?: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
}

import { baseApi } from "../baseApi";

export const careerContentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCareerContent: builder.query<CareerContent, void>({
            query: () => "/career-content",
            transformResponse: (response: { data: CareerContent }) => response.data,
            providesTags: ["CareerContent"] as any,
        }),
        updateCareerContent: builder.mutation<CareerContent, Partial<CareerContent>>({
            query: (data) => ({
                url: "/career-content",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["CareerContent"] as any,
        }),
    }),
    overrideExisting: false,
});

export const { useGetCareerContentQuery, useUpdateCareerContentMutation } = careerContentApi;
