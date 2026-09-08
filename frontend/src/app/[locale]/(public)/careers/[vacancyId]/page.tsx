import React from "react";
import VacancyDetail from "@/features/vacancies/VacancyDetail";
import ApplicationForm from "@/features/vacancies/ApplicationForm";

export default function PublicVacancyDetailPage() {
  return (
    <main className="min-h-screen py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <VacancyDetail />
            <ApplicationForm />
        </div>
      </div>
    </main>
  );
}
