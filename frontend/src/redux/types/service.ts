export interface Service {
    service_id: string;
    icon: string;
    title: string;
    content: string;
    created_at: string;
}

export interface CreateServicePayload {
    icon: string;
    title: string;
    content: string;
}

export interface UpdateServicePayload {
    icon?: string;
    title?: string;
    content?: string;
}

export interface ServiceOverviewData {
    heading: string;
    subheading: string;
    description: string;
    cards?: { name: string; icon: string }[];
}

export interface ServiceExperienceData {
    heading: string;
    subheading: string;
    steps: {
        num: string;
        title: string;
        desc: string;
    }[];
}

export interface ServiceCapabilityData {
    heading: string;
    subheading: string;
    capabilities: {
        id: string;
        name: string;
        desc: string;
        image: string;
    }[];
}

export interface ServiceWhyUsData {
    heading: string;
    subheading: string;
    points: {
        title: string;
        desc: string;
        icon: string;
    }[];
    cta_heading?: string;
    cta_subheading?: string;
    cta_buttons?: { title: string; icon: string; route: string }[];
}