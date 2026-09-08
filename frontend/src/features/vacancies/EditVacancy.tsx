"use client";

import { useParams, useRouter } from "next/navigation";
import { notify, extractErrorMessage } from "@/utils/notification";
import {
  useGetVacancyByIdQuery,
  useUpdateVacancyMutation,
} from "@/redux/api/vacancyApi";
import VacancyForm from "./VacancyForm";

export default function EditVacancy() {
  const params = useParams();
  const router = useRouter();
  const vacancyId = params.vacancyId as string;

  const { data, isLoading, isError } = useGetVacancyByIdQuery({
    id: vacancyId,
    isAdmin: true,
  });
  const [updateVacancy, { isLoading: isSaving }] = useUpdateVacancyMutation();

  const handleSubmit = async (formData: any) => {
    notify.loading("Updating vacancy...", { id: "edit-vacancy" });
    try {
      await updateVacancy({ id: vacancyId, data: formData }).unwrap();
      notify.success("Vacancy updated successfully.", { id: "edit-vacancy" });
      router.push("/admin/careers");
    } catch (err: any) {
      notify.error(extractErrorMessage(err, "Failed to update vacancy."), { id: "edit-vacancy" });
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading vacancy...</div>;
  }

  if (isError || !data) {
    return (
      <div className="p-8 text-center text-destructive">Vacancy not found.</div>
    );
  }

  return (
    <VacancyForm
      title="Edit Vacancy"
      initialData={data}
      onSubmit={handleSubmit}
      isLoading={isSaving}
    />
  );
}
