export interface SectorNode {
    sector_node_id: string;
    name: string;
    description?: string;
    parent_id: string | null;
    level?: number;
    is_active?: boolean;
    children?: SectorNode[];
}
