export interface Facility {
    facility_id: string;
    name: string;
    location: string;
    short_description: string;
    image: string;
    order: number;
    created_at?: string;
    updated_at?: string;
}

export interface CreateFacilityPayload {
    name: string;
    location?: string;
    short_description?: string;
    image?: string;
}

export interface UpdateFacilityPayload {
    name?: string;
    location?: string;
    short_description?: string;
    image?: string;
    order?: number;
}

export interface FacilityOverviewData {
    heading?: string;
    subheading?: string;
    description?: string;
    image?: string;
    list_heading?: string;
}

export interface FootprintLocation {
    id: string;
    name: string;
    order: number;
}

export interface FacilityFootprintData {
    heading?: string;
    description?: string;
    card_heading?: string;
    card_description?: string;
    locations?: FootprintLocation[];
}
