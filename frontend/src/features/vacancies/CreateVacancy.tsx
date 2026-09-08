"use client";

import { useRouter } from "next/navigation";
import { notify, extractErrorMessage } from "@/utils/notification";
import { useCreateVacancyMutation } from "@/redux/api/vacancyApi";
import VacancyForm from "./VacancyForm";

export default function CreateVacancy() {
  const router = useRouter();
  const [createVacancy, { isLoading }] = useCreateVacancyMutation();

  const handleSubmit = async (data: any) => {
    notify.loading("Creating vacancy...", { id: "create-vacancy" });
    try {
      await createVacancy(data).unwrap();
      notify.success("Vacancy created successfully.", { id: "create-vacancy" });
      router.push("/admin/careers");
    } catch (err: any) {
      notify.error(extractErrorMessage(err, "Failed to create vacancy."), { id: "create-vacancy" });
    }
  };

  return (
    <VacancyForm
      title="Create New Vacancy"
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
}
