// src/data/sampleSectorNodes.ts
"use client";

import HierarchyD3Tree from "@/utils/hierarchyD3";

export const sampleSectorNodes = [
    { sector_node_id: "1", parent_id: null, name: "Chief Executive Officer (CEO)" },

    /* ───────────── Top Leadership ───────────── */
    { sector_node_id: "2", parent_id: "1", name: "Chief Operations Officer (COO)" },
    { sector_node_id: "3", parent_id: "1", name: "Chief Financial Officer (CFO)" },
    { sector_node_id: "4", parent_id: "1", name: "Internal Audit" },
    { sector_node_id: "5", parent_id: "1", name: "Legal Affairs Department" },

    /* ───────────── Under COO ───────────── */
    { sector_node_id: "6", parent_id: "2", name: "Import/Export Division" },
    { sector_node_id: "7", parent_id: "2", name: "Manufacturing Division" },
    { sector_node_id: "8", parent_id: "2", name: "Logistics & Supply Chain" },
    { sector_node_id: "9", parent_id: "2", name: "Quality Assurance" },

    /* ───────────── Import/Export Division ───────────── */
    { sector_node_id: "10", parent_id: "6", name: "Customs & Compliance" },
    { sector_node_id: "11", parent_id: "6", name: "International Trade Desk" },
    { sector_node_id: "12", parent_id: "6", name: "Freight Forwarding Unit" },

    /* ───────────── Manufacturing Division ───────────── */
    { sector_node_id: "13", parent_id: "7", name: "Production Plant A" },
    { sector_node_id: "14", parent_id: "7", name: "Production Plant B" },
    { sector_node_id: "15", parent_id: "7", name: "Maintenance & Engineering" },

    /* ───────────── Logistics & Supply Chain ───────────── */
    { sector_node_id: "16", parent_id: "8", name: "Warehouse Management" },
    { sector_node_id: "17", parent_id: "8", name: "Distribution Network" },
    { sector_node_id: "18", parent_id: "8", name: "Fleet Operations" },

    /* ───────────── Quality Assurance ───────────── */
    { sector_node_id: "19", parent_id: "9", name: "Product Testing Unit" },
    { sector_node_id: "20", parent_id: "9", name: "Regulatory Compliance" },
    { sector_node_id: "21", parent_id: "9", name: "Process Improvement" },

    /* ───────────── CFO Branch ───────────── */
    { sector_node_id: "22", parent_id: "3", name: "Human Resources Department" },
    { sector_node_id: "23", parent_id: "3", name: "Finance & Accounting" },
    { sector_node_id: "24", parent_id: "3", name: "IT & Digital Transformation" },
    { sector_node_id: "25", parent_id: "3", name: "Strategic Planning" },

    /* ───────────── HR Department ───────────── */
    { sector_node_id: "26", parent_id: "22", name: "Talent Acquisition" },
    { sector_node_id: "27", parent_id: "22", name: "Employee Relations & Training" },

    /* ───────────── Finance & Accounting ───────────── */
    { sector_node_id: "28", parent_id: "23", name: "Corporate Finance" },
    { sector_node_id: "29", parent_id: "23", name: "Procurement & Asset Management" },
];



export default function SectorHierarchyPage() {
    return (
        <HierarchyD3Tree
            data={sampleSectorNodes}
            isLoading={false}
        />
    );
}
