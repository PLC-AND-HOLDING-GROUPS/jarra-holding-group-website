import React from "react";
import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";

import PageHeader from "@/components/pages/home-page-components/PageHeader";
import ContactForm from "@/components/pages/contact-page-components/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "nav" });
    return {
        title: t("contact") || "Contact Us - Jarra Holdings",
    };
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <PageHeader
                pageIdentifier="contact"
                title="Contact Us"
                icon={<Mail />}
                description="Get in touch with Jarra Holdings. We are here to answer your questions and assist with your inquiries."
            />
            <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
                <ContactForm />
            </div>
        </main>
    );
}