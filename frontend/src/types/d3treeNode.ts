import { SectorNode } from "@/redux/types/sectorNode";

export interface D3TreeNode {
    name: string;
    attributes: {
        sector_node_id: string;
        description?: string;
        parent_id: string | null;
        level?: number;
        is_active?: boolean;
    };
    children?: D3TreeNode[];
}

export interface HierarchyD3TreeProps {
    data: SectorNode[];
    isLoading?: boolean;
}
