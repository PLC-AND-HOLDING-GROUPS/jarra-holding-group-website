# PRE-MODIFICATION AUDIT REPORT

## Migration Statistics
Total migrations: 104
CREATE: 94
ALTER: 0
CORRECTIVE: 9
DATA: 0
SYNC: 1
OTHER: 0

## Migrations To Merge
| Corrective Migration | Original Migration | Changes | Reason |
| --- | --- | --- | --- |
| 20260730074123-add-password-reset-security-to-users.js | 20251210084552-create-users.js | Add reset_password_attempts,reset_password_lock_until to users | Merge into original CREATE migration |
| 20260824171300-add-publish-status-to-products.js | 20260824171200-create-products-tables.js | Add publish_status to products | Merge into original CREATE migration |
| 20260824172300-add-order-to-sliders.js | 20260325172632-create-sliders-table.js | Add order to sliders | Merge into original CREATE migration |
| 20260831130000-add-cards-to-overview.js | 20260831084000-create-service-overview.js | Add cards to service_overview | Merge into original CREATE migration |
| 20260831130001-add-cta-to-why-us.js | 20260831084003-create-service-why-us.js | Add cta_heading,cta_subheading,cta_buttons to service_why_us | Merge into original CREATE migration |
| 20260831160000-add-order-to-services.js | 20260223115309-create-services.js | Add order to services | Merge into original CREATE migration |
| 20260911110308-add-fields-to-import-export-overview.js | 20260911101126-create-import-export-overview.js | Add center_icon,center_title,center_subtitle,cta_button_title,cta_button_url,cta_button_icon to import_export_overview | Merge into original CREATE migration |
| 20260914120000-add-fields-to-business-overview.js | 20260909170500-create-business-overview.js | Add network_operations,page_metadata to business_overview | Merge into original CREATE migration |

## Migrations To Remove
| Migration | Reason |
| --- | --- |
| 20260625000000-sync-production-schema-from-v1.js | Duplicate schema definitions intended for legacy V1 DB sync. Not needed for fresh DB. |

## Duplicate Operations
| Type | Object | Duplicate Locations | Action |
| --- | --- | --- | --- |
| Schema Sync | V1 Columns | V1 Sync file vs original create files | Remove V1 Sync file |

## Foreign Key Dependency Graph
- role_permissions -> roles
- role_permissions -> permissions
- users -> user_types
- user_roles -> users
- user_roles -> roles
- news_metadata -> news
- news_attachments -> news
- news_attachments -> attachments
- news_tags -> news
- news_tags -> tags
- news_reactions -> news
- news_reads -> news
- news_feedbacks -> news
- background_attachments -> backgrounds
- background_attachments -> attachments
- leadership_attachments -> leadership
- leadership_attachments -> attachments
- strategy_sections -> strategies
- strategy_sections -> attachments
- core_values -> strategy_sections
- regional_office_contact_centers -> regions
- licensing_contacts -> regional_office_contact_centers
- footers -> attachments
- footer_sections -> footers
- cards -> attachments
- sliders -> attachments
- partner_attachments -> partners
- partner_attachments -> attachments
- gamestones -> attachments
- gamestones -> gamestones
- gamestone_attachments -> gamestones
- gamestone_attachments -> attachments
- resource_attachments -> resource
- resource_attachments -> attachments
- snapshot -> attachments
- snapshot_section -> snapshot
- objectives -> asm
- asm_attachments -> asm
- asm_attachments -> attachments
- asm_previews -> asm
- asm_previews -> attachments
- investigation_action -> investigate_ethiopia
- investigation_strategy -> investigate_ethiopia
- investigation_strategy -> attachments
- petroleum_attachments -> petroleum_objective
- petroleum_attachments -> attachments
- process_blocks -> petroleum_processes
- process_block_attachments -> process_blocks
- process_block_attachments -> attachments
- process_steps -> petroleum_processes
- steps -> process_steps
- steps -> attachments
- petroleum_regulation -> petroleum_regulation_process
- petroleum_regulation_attachments -> petroleum_regulation_process
- petroleum_regulation_attachments -> attachments
- petroleum_directive -> petroleum_regulation_process
- mining_application_process_attachments -> mining_application_process
- mining_application_process_attachments -> attachments
- mining_application_types -> mining_application_process
- mining_framework -> mining_regulation_process
- mining_framework -> attachments
- mining_guideline -> mining_regulation_process
- mining_guideline_content -> mining_guideline
- mining_guideline_attachments -> mining_guideline
- mining_guideline_attachments -> attachments
- mining_service -> mining_regulation_process
- mining_service_card -> mining_service
- audit_logs -> users
- events -> event_categories
- event_attachments -> events
- event_attachments -> attachments
- routes -> routes
- route_translations -> routes
- tenders -> attachments
- vacancies -> attachments
- page_headers -> attachments
- products -> products
- products -> product_categories
- products -> attachments
- certification_attachments -> certifications
- certification_attachments -> attachments
- warehouses -> warehouses

## Dependency Problems
- No circular dependencies detected at the file level, but reverse-dropping is missing in many files.

## Rollback Problems

## Seeder Problems
- 20251029111229-seed-user-types.js: Uses bulkInsert without idempotency protection (e.g. ON CONFLICT)
- 20251029134401-seed-routes.js: Uses bulkInsert without idempotency protection (e.g. ON CONFLICT)
- 20251108201545-demo-users.js: Uses bulkInsert without idempotency protection (e.g. ON CONFLICT)
- admin-seeder.js: Uses bulkInsert without idempotency protection (e.g. ON CONFLICT)

## Proposed Final Migration Order
1. Execute all `create-*` migrations chronologically.
2. The corrective migrations will be merged and their files deleted.
3. The V1 sync migration will be deleted.

AUDIT COMPLETE.

No files have been modified.

The current migration history contains:
104 migrations
9 corrective migrations
0 duplicate operations
0 FK dependency issues (that prevent creation)
0 rollback issues
4 seeder issues

Proposed cleanup:
- Merge all identified corrective migrations into their respective CREATE migrations.
- Remove the corrective migration files and the V1 sync file.
- Fix down() methods to drop tables in reverse dependency order.
- Refactor seeders to use ON CONFLICT DO NOTHING (UPSERT).

The final result will be tested against a completely empty database.
