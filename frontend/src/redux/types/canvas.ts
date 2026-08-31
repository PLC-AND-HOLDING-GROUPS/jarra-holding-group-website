export interface CanvasWords {
    [key: string]: string;
}

export interface Canvas {
    canvas_id: string;
    title_prefix: string | null;
    title_highlight: string | null;
    description: string | null;
    vision_title: string | null;
    vision_description: string | null;
    words: CanvasWords | null;
    created_at: string;
    updated_at: string;
}

export interface CreateOrUpdateCanvasPayload {
    title_prefix?: string;
    title_highlight?: string;
    description?: string;
    vision_title?: string;
    vision_description?: string;
    words?: CanvasWords;
}
