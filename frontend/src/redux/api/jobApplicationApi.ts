import { baseApi } from "../baseApi";
import { Vacancy } from "../types/vacancy";

export interface JobApplication {
    application_id: string;
    vacancy_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    cover_letter?: string;
    cv_attachment_id: string;
    status: "new" | "reviewed" | "shortlisted" | "rejected" | "hired";
    feedback?: string;
    created_at: string;
    updated_at: string;
    vacancy?: Partial<Vacancy>;
    cv_attachment?: {
        attachment_id: string;
        file_name: string;
        file_path: string;
        mime_type: string;
    };
}

interface SubmitApplicationPayload {
    vacancy_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    cover_letter?: string;
    cv_attachment_id: string;
}

export const jobApplicationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitJobApplication: builder.mutation<{ success: boolean; message: string; data?: JobApplication }, SubmitApplicationPayload>({
            query: (body) => ({
                url: "/job-applications",
                method: "POST",
                body,
            }),
            invalidatesTags: ["JobApplication" as any],
        }),
        getApplicationsByVacancy: builder.query<{ success: boolean; data: JobApplication[] }, string>({
            query: (vacancyId) => `/job-applications/vacancy/${vacancyId}`,
            providesTags: (result, error, id) => [{ type: "JobApplication" as any, id: `LIST-${id}` }],
        }),
        getApplicationById: builder.query<{ success: boolean; data: JobApplication }, string>({
            query: (id) => `/job-applications/${id}`,
            providesTags: (result, error, id) => [{ type: "JobApplication" as any, id }],
        }),
        updateApplicationStatus: builder.mutation<{ success: boolean; message: string }, { id: string; status: string }>({
            query: ({ id, status }) => ({
                url: `/job-applications/${id}/status`,
                method: "PUT",
                body: { status },
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "JobApplication" as any, id },
                { type: "JobApplication" as any, id: "LIST" }
            ],
        }),
        updateApplicationFeedback: builder.mutation<{ success: boolean; message: string }, { id: string; feedback: string }>({
            query: ({ id, feedback }) => ({
                url: `/job-applications/${id}/feedback`,
                method: "PUT",
                body: { feedback },
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "JobApplication" as any, id },
                { type: "JobApplication" as any, id: "LIST" }
            ],
        }),
    }),
});

export const {
    useSubmitJobApplicationMutation,
    useGetApplicationsByVacancyQuery,
    useGetApplicationByIdQuery,
    useUpdateApplicationStatusMutation,
    useUpdateApplicationFeedbackMutation,
} = jobApplicationApi;
