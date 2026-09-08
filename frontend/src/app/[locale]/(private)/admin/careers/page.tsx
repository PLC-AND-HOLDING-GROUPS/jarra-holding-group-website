"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VacancyList from "@/features/vacancies/VacancyList";
import AdminCareerContentManager from "@/components/pages/careers-page-components/AdminCareerContentManager";
import ApplicationVacancyList from "@/features/vacancies/ApplicationVacancyList";

export default function AdminCareersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Career Management</h1>
      </div>

      <Tabs defaultValue="vacancies" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[600px]">
          <TabsTrigger value="content">Introduction & Culture</TabsTrigger>
          <TabsTrigger value="vacancies">Vacancies</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="mt-6">
          <AdminCareerContentManager />
        </TabsContent>
        
        <TabsContent value="vacancies" className="mt-6">
          <VacancyList />
        </TabsContent>

        <TabsContent value="applications" className="mt-6">
          <ApplicationVacancyList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
