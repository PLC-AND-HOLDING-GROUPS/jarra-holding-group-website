export interface SectorNode {
    sector_node_id: string;
    parent_id: string | null;
    name: string;
    description?: string;
    level?: number;
    is_active?: boolean;
    children?: SectorNode[];
}
