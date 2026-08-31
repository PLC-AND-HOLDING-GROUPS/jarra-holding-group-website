export interface PurposePillar {
    title: string;
    description: string;
    icon: string;
}

export interface Purpose {
    purpose_id: string;
    subtitle: string | null;
    title: string;
    description: string | null;
    quote: string | null;
    pillars: PurposePillar[] | null;
    attachment_id: string | null;
    attachment?: any;
    created_at: string;
    updated_at: string;
}

export interface CreateOrUpdatePurposePayload {
    subtitle?: string;
    title: string;
    description?: string;
    quote?: string;
    pillars?: PurposePillar[];
    attachment_id?: string | null;
}
