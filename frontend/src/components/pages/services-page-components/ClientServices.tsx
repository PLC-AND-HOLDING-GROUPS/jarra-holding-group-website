"use client";

import React from "react";
import { useGetServicesQuery } from "@/redux/api/serviceApi";

export default function ClientServices() {
    const { data: services = [], isLoading, isError } = useGetServicesQuery();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-xl" />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-10 text-red-500">
                Failed to load services.
            </div>
        );
    }

    if (services.length === 0) {
        return (
            <div className="text-center py-10 text-muted">
                No services available at the moment.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any) => (
                <div key={service.service_id} className="bg-card shadow-lg rounded-xl p-6 border border-border transition hover:shadow-xl">
                    <h2 className="text-2xl font-semibold mb-4 text-heading">{service.title}</h2>
                    <p className="text-body text-sm line-clamp-4">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
