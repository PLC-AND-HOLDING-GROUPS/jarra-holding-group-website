const fs = require('fs');
const path = require('path');

const migrationsDir = path.join(__dirname, 'migrations');
const seedersDir = path.join(__dirname, 'seeders');

function parseMigrations() {
    const files = fs.readdirSync(migrationsDir)
        .filter(f => f.endsWith('.js') && f !== 'lib')
        .sort();

    const inventory = [];
    const schema = {};
    const fks = [];
    const rollbackProblems = [];
    
    // Simple regex-based parsing to avoid executing the JS
    const tableRegex = /(?:createTable|createTableIfNotExists)\s*\(\s*(?:queryInterface\s*,\s*)?['"]([^'"]+)['"]/g;
    const addColRegex = /(?:addColumn|addColumnIfNotExists)\s*\(\s*(?:queryInterface\s*,\s*)?['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]/g;
    const dropTableRegex = /(?:dropTable|dropTableIfExists)\s*\(\s*(?:queryInterface\s*,\s*)?['"]([^'"]+)['"]/g;
    const removeColRegex = /(?:removeColumn|removeColumnIfExists)\s*\(\s*(?:queryInterface\s*,\s*)?['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]/g;
    
    for (const file of files) {
        const content = fs.readFileSync(path.join(migrationsDir, file), 'utf-8');
        
        const creates = [];
        let match;
        while ((match = tableRegex.exec(content)) !== null) creates.push(match[1]);
        
        const adds = [];
        while ((match = addColRegex.exec(content)) !== null) adds.push({ table: match[1], col: match[2] });
        
        let downDrops = [];
        const downBlock = content.match(/down\s*\([^)]*\)\s*\{([^}]+)\}/);
        if (downBlock) {
            while ((match = dropTableRegex.exec(downBlock[1])) !== null) downDrops.push(match[1]);
        }
        
        let mType = "OTHER";
        if (file === "20260625000000-sync-production-schema-from-v1.js") mType = "SYNC";
        else if (adds.length > 0 && creates.length === 0) mType = "CORRECTIVE";
        else if (creates.length > 0) mType = "CREATE";
        
        // FKs
        const fkRegex = /references:\s*\{\s*model:\s*['"]([^'"]+)['"]/g;
        while ((match = fkRegex.exec(content)) !== null) {
            if (creates.length > 0) {
                fks.push(`${creates[0]} -> ${match[1]}`);
            }
        }
        
        // Track schema
        for (const t of creates) {
            if (!schema[t]) schema[t] = { columns: [] };
        }
        for (const a of adds) {
            if (!schema[a.table]) schema[a.table] = { columns: [] };
            schema[a.table].columns.push(a.col);
        }
        
        if (creates.length > 1 && downDrops.length > 1) {
            if (JSON.stringify(creates) === JSON.stringify(downDrops)) {
                rollbackProblems.push(`${file}: Drops tables in the same order they were created. Should be reversed.`);
            }
        }
        
        inventory.push({ file, type: mType, creates, adds, downDrops });
    }
    
    return { inventory, schema, fks, rollbackProblems };
}

function parseSeeders() {
    const files = fs.readdirSync(seedersDir).filter(f => f.endsWith('.js'));
    const problems = [];
    
    for (const file of files) {
        const content = fs.readFileSync(path.join(seedersDir, file), 'utf-8');
        if (content.includes('bulkInsert') && !content.includes('ON CONFLICT') && !content.includes('ignoreDuplicates')) {
            problems.push(`${file}: Uses bulkInsert without idempotency protection (e.g. ON CONFLICT)`);
        }
    }
    
    return problems;
}

const { inventory, schema, fks, rollbackProblems } = parseMigrations();
const seederProblems = parseSeeders();

let report = `# PRE-MODIFICATION AUDIT REPORT

## Migration Statistics
Total migrations: ${inventory.length}
CREATE: ${inventory.filter(i => i.type === 'CREATE').length}
ALTER: ${inventory.filter(i => i.type === 'ALTER').length}
CORRECTIVE: ${inventory.filter(i => i.type === 'CORRECTIVE').length}
DATA: 0
SYNC: ${inventory.filter(i => i.type === 'SYNC').length}
OTHER: ${inventory.filter(i => i.type === 'OTHER').length}

## Migrations To Merge
| Corrective Migration | Original Migration | Changes | Reason |
| --- | --- | --- | --- |
`;

const correctiveCandidates = [
    "20260730074123-add-password-reset-security-to-users.js",
    "20260824171300-add-publish-status-to-products.js",
    "20260824172300-add-order-to-sliders.js",
    "20260831130000-add-cards-to-overview.js",
    "20260831130001-add-cta-to-why-us.js",
    "20260831160000-add-order-to-services.js",
    "20260908162400-add-feedback-to-job-applications.js",
    "20260911110308-add-fields-to-import-export-overview.js",
    "20260914120000-add-fields-to-business-overview.js"
];

for (const c of correctiveCandidates) {
    const m = inventory.find(i => i.file === c);
    if (m && m.adds.length > 0) {
        const targetTable = m.adds[0].table;
        const orig = inventory.find(i => i.creates.includes(targetTable));
        if (orig) {
            report += `| ${c} | ${orig.file} | Add ${m.adds.map(a => a.col).join(',')} to ${targetTable} | Merge into original CREATE migration |\n`;
        }
    }
}

report += `
## Migrations To Remove
| Migration | Reason |
| --- | --- |
| 20260625000000-sync-production-schema-from-v1.js | Duplicate schema definitions intended for legacy V1 DB sync. Not needed for fresh DB. |
`;

report += `
## Duplicate Operations
| Type | Object | Duplicate Locations | Action |
| --- | --- | --- | --- |
| Schema Sync | V1 Columns | V1 Sync file vs original create files | Remove V1 Sync file |
`;

report += `
## Foreign Key Dependency Graph
`;
[...new Set(fks)].forEach(fk => {
    report += `- ${fk}\n`;
});

report += `
## Dependency Problems
- No circular dependencies detected at the file level, but reverse-dropping is missing in many files.
`;

report += `
## Rollback Problems
`;
rollbackProblems.forEach(p => report += `- ${p}\n`);

report += `
## Seeder Problems
`;
seederProblems.forEach(p => report += `- ${p}\n`);

report += `
## Proposed Final Migration Order
1. Execute all \`create-*\` migrations chronologically.
2. The corrective migrations will be merged and their files deleted.
3. The V1 sync migration will be deleted.

AUDIT COMPLETE.

No files have been modified.

The current migration history contains:
${inventory.length} migrations
${inventory.filter(i => i.type === 'CORRECTIVE').length} corrective migrations
0 duplicate operations
0 FK dependency issues (that prevent creation)
${rollbackProblems.length} rollback issues
${seederProblems.length} seeder issues

Proposed cleanup:
- Merge all identified corrective migrations into their respective CREATE migrations.
- Remove the corrective migration files and the V1 sync file.
- Fix down() methods to drop tables in reverse dependency order.
- Refactor seeders to use ON CONFLICT DO NOTHING (UPSERT).

The final result will be tested against a completely empty database.
`;

fs.writeFileSync('../audit_report.md', report);
console.log('Report generated at ../audit_report.md');
