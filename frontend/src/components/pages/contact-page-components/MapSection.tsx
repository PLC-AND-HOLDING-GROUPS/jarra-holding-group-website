"use client";

import { MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetFederalOfficesQuery } from "@/redux/api/federalOfficeApi";

const MapSection = () => {
    const { data: federalOffices, isLoading, isError } = useGetFederalOfficesQuery();
    const office = federalOffices?.[0];

    // Generate Google Maps embed URL from map_location or use default
    const getMapEmbedUrl = (location?: string) => {
        if (!location) {
            return "https://www.google.com/maps?q=Bole%20Addis%20Ababa%20Ethiopia&output=embed";
        }

        // If location is already an embed URL, use it directly
        if (location.includes("output=embed")) {
            return location;
        }

        if (location.includes("google.com/maps")) {
            const matches = location.match(/[?&]q=([^&]+)/);
            if (matches && matches[1]) {
                return `https://www.google.com/maps?q=${matches[1]}&output=embed`;
            }
        }

        return `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
    };

    if (isLoading) {
        return (
            <section className="w-full">
                <Skeleton className="h-80 w-full rounded-2xl" />
            </section>
        );
    }

    const mapUrl = getMapEmbedUrl(office?.map_location || office?.office_address);

    return (
        <section className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                    <MapPin className="text-golden-dark w-6 h-6" />
                    Office Location
                </h2>
                <p className="text-muted-foreground mt-1">
                    Find Jarra Holdings head office on the interactive map below.
                </p>
                {office?.office_address && (
                    <p className="text-sm text-gray-700 font-medium mt-2">
                        <span className="text-muted-foreground font-normal">Address: </span>
                        {office.office_address}
                    </p>
                )}
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-inner">
                <iframe
                    title="Jarra Holdings Location Map"
                    src={mapUrl}
                    className="w-full h-[360px] md:h-[420px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>

            {isError && (
                <p className="text-red-500 text-sm mt-2">
                    Could not fetch custom office coordinates; displaying default map area.
                </p>
            )}
        </section>
    );
};

export default MapSection;