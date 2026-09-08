"use client";

import Link from "next/link";
import { Calendar, Briefcase, ExternalLink, Clock, Building2, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TenderVacancyListSkeleton } from "@/components/skeletons";
import PublicEmptyState from "@/components/common/PublicEmptyState";
import { OpportunityStatusBadge } from "@/components/common/OpportunityStatusBadge";
import { useGetVacanciesQuery } from "@/redux/api/vacancyApi";
import { EMPLOYMENT_TYPE_LABELS } from "@/redux/types/vacancy";
import { formatDateOnly } from "@/utils/datetime";
import { useTranslations } from "next-intl";

interface PublicVacancyListProps {
  emptyState?: React.ReactNode;
}

const stripHtml = (html: string) => {
  if (!html) return '';
  return html
    .replace(/<[^>]*>?/gm, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
};

export default function PublicVacancyList({ emptyState }: PublicVacancyListProps) {
  const { data = [], isLoading, isError } = useGetVacanciesQuery();
  const t = useTranslations("empty_state");

  if (isLoading) {
    return <TenderVacancyListSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center py-12 text-red-600">
        Failed to load vacancies. Please try again later.
      </div>
    );
  }

  // Filter for published and not expired
  const now = new Date();
  const validData = data.filter((item) => {
    if (item.status !== "published") return false;
    const deadline = new Date(item.application_deadline);
    // Add 1 day to deadline to include the whole day
    deadline.setDate(deadline.getDate() + 1);
    return deadline >= now;
  });

  if (validData.length === 0) {
    if (emptyState) return emptyState;
    return <PublicEmptyState title={t("vacancies_title")} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {validData.map((item) => (
        <div
          key={item.vacancy_id}
          className="group relative flex flex-col border border-slate-200 bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-left"
        >
          {/* Header row: Status Badge & Department */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase">
                {EMPLOYMENT_TYPE_LABELS[item.employment_type]}
              </span>
              <OpportunityStatusBadge displayStatus={item.display_status} />
            </div>

            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <ChevronRight size={18} className="text-slate-400 group-hover:text-white" />
            </div>
          </div>

          {/* Job Title */}
          <Link href={`/careers/${item.vacancy_id}`}>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
              {item.job_title}
            </h2>
          </Link>

          {/* Job Description Excerpt */}
          <div className="mb-6 text-sm text-slate-600 line-clamp-3 overflow-hidden flex-grow">
            {stripHtml(item.description)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-slate-100 mb-6">
            {/* Department */}
            {item.department && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <Building2 size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">Department</p>
                  <p className="text-sm font-semibold text-slate-700">{item.department}</p>
                </div>
              </div>
            )}

            {/* Published Date */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                <Calendar size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">Published</p>
                <p className="text-sm font-semibold text-slate-700">{formatDateOnly(item.published_date)}</p>
              </div>
            </div>

            {/* Deadline Date */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-red-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">Deadline</p>
                <p className="text-sm font-semibold text-red-600">{formatDateOnly(item.application_deadline)}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <Button asChild size="lg" className="w-full font-semibold">
              <Link href={`/careers/${item.vacancy_id}`}>
                Apply Now <Send className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
