--
-- PostgreSQL database dump
--

\restrict AGYxfMLrntF1Fhg79xp0kH5NwPcMsBMnoScq6igBqu7USsdtW7iWOCDQoiCazw6

-- Dumped from database version 18.2
-- Dumped by pg_dump version 18.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_events_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_events_status AS ENUM (
    'draft',
    'scheduled',
    'published',
    'ongoing',
    'completed',
    'archived',
    'cancelled'
);


ALTER TYPE public.enum_events_status OWNER TO postgres;

--
-- Name: enum_investigation_strategy_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_investigation_strategy_type AS ENUM (
    'headlines',
    'strategic_minerals',
    'autonomy',
    'autonomous_institutions',
    'strategic_pillars',
    'ambition',
    'global_proclamation'
);


ALTER TYPE public.enum_investigation_strategy_type OWNER TO postgres;

--
-- Name: enum_mining_guideline_content_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_mining_guideline_content_type AS ENUM (
    'card',
    'bullet',
    'others'
);


ALTER TYPE public.enum_mining_guideline_content_type OWNER TO postgres;

--
-- Name: enum_news_attachments_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_news_attachments_category AS ENUM (
    'headline',
    'body',
    'footer'
);


ALTER TYPE public.enum_news_attachments_category OWNER TO postgres;

--
-- Name: enum_news_reactions_reaction; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_news_reactions_reaction AS ENUM (
    'like',
    'dislike'
);


ALTER TYPE public.enum_news_reactions_reaction OWNER TO postgres;

--
-- Name: enum_news_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_news_status AS ENUM (
    'draft',
    'published',
    'archived'
);


ALTER TYPE public.enum_news_status OWNER TO postgres;

--
-- Name: enum_objectives_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_objectives_type AS ENUM (
    'headlines',
    'strategic_objective',
    'economic_impact',
    'impact_contribution',
    'strategic_pillars',
    'key_initiatives',
    'objectives'
);


ALTER TYPE public.enum_objectives_type OWNER TO postgres;

--
-- Name: enum_partner_attachments_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_partner_attachments_category AS ENUM (
    'logo',
    'gallery',
    'document'
);


ALTER TYPE public.enum_partner_attachments_category OWNER TO postgres;

--
-- Name: enum_petroleum_directive_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_petroleum_directive_type AS ENUM (
    'main',
    'sub'
);


ALTER TYPE public.enum_petroleum_directive_type OWNER TO postgres;

--
-- Name: enum_petroleum_objective_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_petroleum_objective_type AS ENUM (
    'headline',
    'others'
);


ALTER TYPE public.enum_petroleum_objective_type OWNER TO postgres;

--
-- Name: enum_product_inquiries_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_product_inquiries_status AS ENUM (
    'pending',
    'reviewed',
    'replied'
);


ALTER TYPE public.enum_product_inquiries_status OWNER TO postgres;

--
-- Name: enum_products_publish_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_products_publish_status AS ENUM (
    'draft',
    'published',
    'archived'
);


ALTER TYPE public.enum_products_publish_status OWNER TO postgres;

--
-- Name: enum_products_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_products_status AS ENUM (
    'Available',
    'Available on Request',
    'Inquiry Required',
    'Currently Unavailable'
);


ALTER TYPE public.enum_products_status OWNER TO postgres;

--
-- Name: enum_resource_sector; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_resource_sector AS ENUM (
    'mining',
    'geology',
    'petroleum',
    'other'
);


ALTER TYPE public.enum_resource_sector OWNER TO postgres;

--
-- Name: enum_snapshot_sector; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_snapshot_sector AS ENUM (
    'mining',
    'geothermal',
    'petroleum',
    'others'
);


ALTER TYPE public.enum_snapshot_sector OWNER TO postgres;

--
-- Name: enum_tenders_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_tenders_status AS ENUM (
    'draft',
    'published',
    'closed'
);


ALTER TYPE public.enum_tenders_status OWNER TO postgres;

--
-- Name: enum_vacancies_employment_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_vacancies_employment_type AS ENUM (
    'full_time',
    'contract',
    'part_time'
);


ALTER TYPE public.enum_vacancies_employment_type OWNER TO postgres;

--
-- Name: enum_vacancies_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_vacancies_status AS ENUM (
    'draft',
    'published',
    'closed'
);


ALTER TYPE public.enum_vacancies_status OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: asm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asm (
    asm_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.asm OWNER TO postgres;

--
-- Name: asm_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asm_attachments (
    asm_attachment_id uuid NOT NULL,
    label character varying(255) NOT NULL,
    asm_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.asm_attachments OWNER TO postgres;

--
-- Name: asm_previews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asm_previews (
    preview_id uuid NOT NULL,
    asm_id uuid,
    icon character varying(255),
    title character varying(255) NOT NULL,
    description text,
    attachment_id uuid,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.asm_previews OWNER TO postgres;

--
-- Name: attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.attachments (
    attachment_id uuid NOT NULL,
    file_name character varying(255) NOT NULL,
    file_path character varying(500) NOT NULL,
    file_path_thumb character varying(500),
    file_path_medium character varying(500),
    file_path_large character varying(500),
    mime_type character varying(100),
    width integer,
    height integer,
    uploaded_by uuid,
    created_at timestamp with time zone
);


ALTER TABLE public.attachments OWNER TO postgres;

--
-- Name: audit_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.audit_logs (
    audit_id uuid NOT NULL,
    user_id uuid,
    action character varying(50) NOT NULL,
    model_name character varying(100) NOT NULL,
    record_id character varying(255) NOT NULL,
    old_values jsonb,
    new_values jsonb,
    created_at timestamp with time zone
);


ALTER TABLE public.audit_logs OWNER TO postgres;

--
-- Name: background_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.background_attachments (
    background_attachment_id uuid NOT NULL,
    background_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.background_attachments OWNER TO postgres;

--
-- Name: backgrounds; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.backgrounds (
    background_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    icon character varying(255) NOT NULL,
    content text NOT NULL
);


ALTER TABLE public.backgrounds OWNER TO postgres;

--
-- Name: canvases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.canvases (
    canvas_id uuid NOT NULL,
    title_prefix character varying(255),
    title_highlight character varying(255),
    description text,
    vision_title character varying(255),
    vision_description text,
    words json,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.canvases OWNER TO postgres;

--
-- Name: cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cards (
    card_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    button_name character varying(100),
    button_url character varying(500),
    attachment_id uuid,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.cards OWNER TO postgres;

--
-- Name: core_values; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.core_values (
    value_id uuid NOT NULL,
    section_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    icon character varying(255),
    content text
);


ALTER TABLE public.core_values OWNER TO postgres;

--
-- Name: event_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.event_attachments (
    event_attachment_id uuid NOT NULL,
    event_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.event_attachments OWNER TO postgres;

--
-- Name: event_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.event_categories (
    event_category_id uuid NOT NULL,
    name character varying(100) NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.event_categories OWNER TO postgres;

--
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    event_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    event_category_id uuid,
    description text,
    start_time timestamp with time zone NOT NULL,
    end_time timestamp with time zone NOT NULL,
    location character varying(255),
    virtual_link text,
    organizer character varying(255) NOT NULL,
    content text,
    status public.enum_events_status DEFAULT 'draft'::public.enum_events_status,
    publish_start timestamp with time zone,
    publish_end timestamp with time zone,
    published_at timestamp with time zone,
    approved_by uuid,
    approved_at timestamp with time zone,
    created_by uuid,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.events OWNER TO postgres;

--
-- Name: COLUMN events.content; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.events.content IS 'Rich content (multi-language JSON or HTML)';


--
-- Name: facilities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facilities (
    facility_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    location character varying(255),
    short_description text,
    image character varying(255),
    "order" integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.facilities OWNER TO postgres;

--
-- Name: facility_footprint; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facility_footprint (
    facility_footprint_id uuid NOT NULL,
    heading character varying(255),
    description text,
    locations json,
    card_heading character varying(255),
    card_description text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.facility_footprint OWNER TO postgres;

--
-- Name: facility_overview; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facility_overview (
    facility_overview_id uuid NOT NULL,
    heading character varying(255),
    subheading text,
    description text,
    image character varying(255),
    list_heading character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.facility_overview OWNER TO postgres;

--
-- Name: federal_office_contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.federal_office_contacts (
    federal_office_id uuid NOT NULL,
    office_address text NOT NULL,
    phone character varying(50),
    email character varying(255),
    map_location character varying(500),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.federal_office_contacts OWNER TO postgres;

--
-- Name: COLUMN federal_office_contacts.map_location; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.federal_office_contacts.map_location IS 'Can store map URL or coordinates';


--
-- Name: footer_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footer_sections (
    footer_section_id uuid NOT NULL,
    footer_id uuid NOT NULL,
    section_name character varying(100) NOT NULL,
    links json DEFAULT '[]'::json NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.footer_sections OWNER TO postgres;

--
-- Name: footers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footers (
    footer_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    text character varying(1000) NOT NULL,
    attachment_id uuid,
    content text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.footers OWNER TO postgres;

--
-- Name: gamestone_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gamestone_attachments (
    gamestone_attachment_id uuid NOT NULL,
    gamestone_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.gamestone_attachments OWNER TO postgres;

--
-- Name: gamestones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gamestones (
    gamestone_id uuid NOT NULL,
    title text NOT NULL,
    description text,
    location text,
    attachment_id uuid,
    discovered_date timestamp with time zone,
    parent_id uuid,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.gamestones OWNER TO postgres;

--
-- Name: investigate_ethiopia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.investigate_ethiopia (
    investigate_ethiopia_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.investigate_ethiopia OWNER TO postgres;

--
-- Name: investigation_action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.investigation_action (
    investigation_action_id uuid NOT NULL,
    investigate_ethiopia_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    action text NOT NULL,
    link character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.investigation_action OWNER TO postgres;

--
-- Name: investigation_strategy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.investigation_strategy (
    investigation_strategy_id uuid NOT NULL,
    investigate_ethiopia_id uuid NOT NULL,
    type public.enum_investigation_strategy_type DEFAULT 'headlines'::public.enum_investigation_strategy_type NOT NULL,
    icon character varying(255),
    title text NOT NULL,
    description text,
    content text,
    tags character varying(255)[],
    attachment_id uuid,
    link character varying(255),
    bg_color character varying(255) DEFAULT '#0b102dff'::character varying,
    fg_color character varying(255) DEFAULT '#FFFFFF'::character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.investigation_strategy OWNER TO postgres;

--
-- Name: leadership; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.leadership (
    leadership_id uuid NOT NULL,
    header character varying(255) DEFAULT 'Ministry of Mines'::character varying NOT NULL,
    parent_id uuid,
    name character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    level integer DEFAULT 1,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.leadership OWNER TO postgres;

--
-- Name: leadership_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.leadership_attachments (
    leadership_attachment_id uuid NOT NULL,
    leadership_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.leadership_attachments OWNER TO postgres;

--
-- Name: licensing_contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.licensing_contacts (
    licensing_contact_id uuid NOT NULL,
    regional_office_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255),
    phone character varying(50),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.licensing_contacts OWNER TO postgres;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    message_id uuid NOT NULL,
    full_name character varying(255) NOT NULL,
    email_address character varying(255) NOT NULL,
    subject character varying(255) NOT NULL,
    message text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- Name: mining_application_process; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_application_process (
    mining_application_process_id uuid CONSTRAINT mining_application_process_mining_application_process__not_null NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    objectives json DEFAULT '[]'::json NOT NULL,
    publish boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_application_process OWNER TO postgres;

--
-- Name: mining_application_process_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_application_process_attachments (
    mining_application_process_attachment_id uuid CONSTRAINT mining_application_process__mining_application_process_not_null NOT NULL,
    mining_application_process_id uuid CONSTRAINT mining_application_process_mining_application_process_not_null1 NOT NULL,
    attachment_id uuid NOT NULL,
    overlay_text character varying(255) NOT NULL,
    overlay_icon character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.mining_application_process_attachments OWNER TO postgres;

--
-- Name: mining_application_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_application_types (
    mining_application_types_id uuid NOT NULL,
    mining_application_process_id uuid NOT NULL,
    icon text NOT NULL,
    title text NOT NULL,
    requirements json DEFAULT '[]'::json NOT NULL,
    steps json DEFAULT '[]'::json NOT NULL,
    action_label text NOT NULL,
    action_url text NOT NULL,
    color text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_application_types OWNER TO postgres;

--
-- Name: mining_framework; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_framework (
    mining_framework_id uuid NOT NULL,
    mining_regulation_process_id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    objectives json DEFAULT '[]'::json NOT NULL,
    attachment_id uuid,
    attachment_overlay_text text DEFAULT 'Mining Framework'::text,
    attachment_overlay_color text DEFAULT '#ffffff'::text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_framework OWNER TO postgres;

--
-- Name: mining_guideline; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_guideline (
    mining_guideline_id uuid NOT NULL,
    mining_regulation_process_id uuid NOT NULL,
    icon text,
    title text NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_guideline OWNER TO postgres;

--
-- Name: mining_guideline_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_guideline_attachments (
    mining_guideline_attachment_id uuid CONSTRAINT mining_guideline_attachment_mining_guideline_attachmen_not_null NOT NULL,
    mining_guideline_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    label character varying(255) NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.mining_guideline_attachments OWNER TO postgres;

--
-- Name: mining_guideline_content; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_guideline_content (
    mining_guideline_content_id uuid NOT NULL,
    mining_guideline_id uuid NOT NULL,
    type public.enum_mining_guideline_content_type DEFAULT 'others'::public.enum_mining_guideline_content_type NOT NULL,
    bg_color text,
    icon text,
    stamp text,
    title text NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_guideline_content OWNER TO postgres;

--
-- Name: mining_regulation_process; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_regulation_process (
    mining_regulation_process_id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    publish boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_regulation_process OWNER TO postgres;

--
-- Name: mining_service; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_service (
    mining_service_id uuid NOT NULL,
    mining_regulation_process_id uuid NOT NULL,
    title text NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_service OWNER TO postgres;

--
-- Name: mining_service_card; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mining_service_card (
    mining_service_card_id uuid NOT NULL,
    mining_service_id uuid NOT NULL,
    title text NOT NULL,
    sub_title text,
    sub_title_color text DEFAULT '#f8f521ff'::text,
    icon text,
    description text NOT NULL,
    requirements json DEFAULT '[]'::json NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.mining_service_card OWNER TO postgres;

--
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    news_id uuid NOT NULL,
    title text NOT NULL,
    content jsonb NOT NULL,
    author text,
    status public.enum_news_status DEFAULT 'draft'::public.enum_news_status NOT NULL,
    published_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.news OWNER TO postgres;

--
-- Name: news_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_attachments (
    news_attachment_id uuid NOT NULL,
    news_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    category public.enum_news_attachments_category DEFAULT 'body'::public.enum_news_attachments_category NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.news_attachments OWNER TO postgres;

--
-- Name: news_feedbacks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_feedbacks (
    news_feedback_id uuid NOT NULL,
    news_id uuid NOT NULL,
    fullname character varying(150) NOT NULL,
    thought text NOT NULL,
    is_published boolean DEFAULT false,
    created_at timestamp with time zone
);


ALTER TABLE public.news_feedbacks OWNER TO postgres;

--
-- Name: news_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_metadata (
    news_metadata_id uuid NOT NULL,
    news_id uuid NOT NULL,
    like_count integer DEFAULT 0,
    dislike_count integer DEFAULT 0,
    read_count integer DEFAULT 0,
    average_read_time integer DEFAULT 0,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.news_metadata OWNER TO postgres;

--
-- Name: news_reactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_reactions (
    news_reaction_id uuid NOT NULL,
    news_id uuid NOT NULL,
    ip_address character varying(45) NOT NULL,
    reaction public.enum_news_reactions_reaction NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.news_reactions OWNER TO postgres;

--
-- Name: news_reads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_reads (
    news_read_id uuid NOT NULL,
    news_id uuid NOT NULL,
    ip_address character varying(45) NOT NULL,
    total_read_time integer DEFAULT 0,
    last_read_at timestamp with time zone
);


ALTER TABLE public.news_reads OWNER TO postgres;

--
-- Name: news_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_tags (
    news_tag_id uuid NOT NULL,
    news_id uuid NOT NULL,
    tag_id uuid NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.news_tags OWNER TO postgres;

--
-- Name: notifications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notifications (
    notification_id uuid NOT NULL,
    recipient_id uuid NOT NULL,
    recipient_type character varying(50) NOT NULL,
    title character varying(255) NOT NULL,
    message text NOT NULL,
    related_entity_type character varying(50),
    related_entity_id uuid,
    is_read boolean DEFAULT false,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.notifications OWNER TO postgres;

--
-- Name: objectives; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.objectives (
    objective_id uuid NOT NULL,
    asm_id uuid,
    type public.enum_objectives_type DEFAULT 'objectives'::public.enum_objectives_type NOT NULL,
    icon character varying(255),
    title text NOT NULL,
    description text,
    content text,
    foot_note text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.objectives OWNER TO postgres;

--
-- Name: page_headers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.page_headers (
    page_header_id uuid NOT NULL,
    page_identifier character varying(255) NOT NULL,
    title character varying(255),
    description text,
    icon character varying(255),
    attachment_id uuid
);


ALTER TABLE public.page_headers OWNER TO postgres;

--
-- Name: partner_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.partner_attachments (
    partner_attachment_id uuid NOT NULL,
    category public.enum_partner_attachments_category DEFAULT 'logo'::public.enum_partner_attachments_category NOT NULL,
    partner_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.partner_attachments OWNER TO postgres;

--
-- Name: partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.partners (
    partner_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.partners OWNER TO postgres;

--
-- Name: permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permissions (
    permission_id uuid NOT NULL,
    resource character varying(100) NOT NULL,
    action character varying(100) NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.permissions OWNER TO postgres;

--
-- Name: petroleum_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petroleum_attachments (
    petroleum_attachment_id uuid NOT NULL,
    label character varying(255) NOT NULL,
    petroleum_objective_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.petroleum_attachments OWNER TO postgres;

--
-- Name: petroleum_directive; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petroleum_directive (
    petroleum_directive_id uuid NOT NULL,
    petroleum_regulation_process_id uuid NOT NULL,
    "order" integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    type public.enum_petroleum_directive_type DEFAULT 'sub'::public.enum_petroleum_directive_type NOT NULL,
    action_label text,
    action text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.petroleum_directive OWNER TO postgres;

--
-- Name: petroleum_objective; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petroleum_objective (
    petroleum_objective_id uuid NOT NULL,
    type public.enum_petroleum_objective_type DEFAULT 'others'::public.enum_petroleum_objective_type NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    content text,
    objectives json DEFAULT '[]'::json NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.petroleum_objective OWNER TO postgres;

--
-- Name: petroleum_processes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petroleum_processes (
    petroleum_process_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    published boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.petroleum_processes OWNER TO postgres;

--
-- Name: petroleum_regulation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petroleum_regulation (
    petroleum_regulation_id uuid NOT NULL,
    petroleum_regulation_process_id uuid NOT NULL,
    "order" integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    content json DEFAULT '[]'::json NOT NULL,
    objectives json DEFAULT '[]'::json NOT NULL,
    bullet_points json DEFAULT '[]'::json NOT NULL,
    steps json DEFAULT '[]'::json NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.petroleum_regulation OWNER TO postgres;

--
-- Name: petroleum_regulation_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petroleum_regulation_attachments (
    petroleum_regulation_attachment_id uuid CONSTRAINT petroleum_regulation_attach_petroleum_regulation_attac_not_null NOT NULL,
    petroleum_regulation_process_id uuid CONSTRAINT petroleum_regulation_attach_petroleum_regulation_proce_not_null NOT NULL,
    attachment_id uuid NOT NULL,
    label character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.petroleum_regulation_attachments OWNER TO postgres;

--
-- Name: petroleum_regulation_process; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petroleum_regulation_process (
    petroleum_regulation_process_id uuid CONSTRAINT petroleum_regulation_proces_petroleum_regulation_proce_not_null NOT NULL,
    published boolean DEFAULT false,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.petroleum_regulation_process OWNER TO postgres;

--
-- Name: process_block_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.process_block_attachments (
    process_block_attachment_id uuid NOT NULL,
    label character varying(255) NOT NULL,
    process_block_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.process_block_attachments OWNER TO postgres;

--
-- Name: process_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.process_blocks (
    process_block_id uuid NOT NULL,
    petroleum_process_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    content json,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.process_blocks OWNER TO postgres;

--
-- Name: process_steps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.process_steps (
    process_step_id uuid NOT NULL,
    petroleum_process_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    content json,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.process_steps OWNER TO postgres;

--
-- Name: product_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_attachments (
    product_attachment_id uuid NOT NULL,
    product_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    category character varying(255) DEFAULT 'main'::character varying NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.product_attachments OWNER TO postgres;

--
-- Name: product_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_categories (
    category_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.product_categories OWNER TO postgres;

--
-- Name: product_categories_map; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_categories_map (
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    product_id uuid NOT NULL,
    category_id uuid NOT NULL
);


ALTER TABLE public.product_categories_map OWNER TO postgres;

--
-- Name: product_inquiries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_inquiries (
    inquiry_id uuid NOT NULL,
    product_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    company character varying(255),
    email character varying(255) NOT NULL,
    phone character varying(255),
    quantity character varying(255),
    message text NOT NULL,
    status public.enum_product_inquiries_status DEFAULT 'pending'::public.enum_product_inquiries_status NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.product_inquiries OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    product_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    short_description text NOT NULL,
    full_description text NOT NULL,
    status public.enum_products_status DEFAULT 'Available'::public.enum_products_status NOT NULL,
    specifications jsonb DEFAULT '{}'::jsonb,
    applications jsonb DEFAULT '[]'::jsonb,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone,
    publish_status public.enum_products_publish_status DEFAULT 'draft'::public.enum_products_publish_status NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: purposes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purposes (
    purpose_id uuid NOT NULL,
    subtitle character varying(255),
    title character varying(255) NOT NULL,
    description text,
    quote text,
    pillars json,
    attachment_id uuid,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.purposes OWNER TO postgres;

--
-- Name: regional_office_contact_centers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regional_office_contact_centers (
    regional_office_id uuid NOT NULL,
    region_id uuid NOT NULL,
    bureau_name character varying(255) NOT NULL,
    address text,
    director character varying(255),
    email character varying(255),
    phone character varying(50),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.regional_office_contact_centers OWNER TO postgres;

--
-- Name: regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regions (
    region_id uuid NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.regions OWNER TO postgres;

--
-- Name: resource; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resource (
    resource_id uuid NOT NULL,
    sector public.enum_resource_sector NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.resource OWNER TO postgres;

--
-- Name: resource_attachments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resource_attachments (
    resource_attachment_id uuid NOT NULL,
    resource_id uuid NOT NULL,
    attachment_id uuid NOT NULL,
    label character varying(255) NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.resource_attachments OWNER TO postgres;

--
-- Name: role_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role_permissions (
    role_permission_id uuid NOT NULL,
    role_id uuid NOT NULL,
    permission_id uuid NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.role_permissions OWNER TO postgres;

--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    role_id uuid NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: route_translations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.route_translations (
    route_translation_id uuid NOT NULL,
    route_id uuid NOT NULL,
    language_code character varying(10) NOT NULL,
    label character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.route_translations OWNER TO postgres;

--
-- Name: routes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.routes (
    route_id uuid NOT NULL,
    path character varying(255),
    parent_id uuid,
    "order" integer DEFAULT 0,
    is_active boolean DEFAULT true,
    show_in_navbar boolean DEFAULT true,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.routes OWNER TO postgres;

--
-- Name: COLUMN routes.path; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.routes.path IS 'URL path - null for parent groups';


--
-- Name: service_capability; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_capability (
    service_capability_id uuid NOT NULL,
    heading character varying(255),
    subheading text,
    capabilities json,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.service_capability OWNER TO postgres;

--
-- Name: service_experience; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_experience (
    service_experience_id uuid NOT NULL,
    heading character varying(255),
    subheading text,
    steps json,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.service_experience OWNER TO postgres;

--
-- Name: service_overview; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_overview (
    service_overview_id uuid NOT NULL,
    heading character varying(255),
    subheading character varying(255),
    description text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at timestamp with time zone,
    cards json
);


ALTER TABLE public.service_overview OWNER TO postgres;

--
-- Name: service_why_us; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_why_us (
    service_why_us_id uuid NOT NULL,
    heading character varying(255),
    subheading text,
    points json,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at timestamp with time zone,
    cta_heading character varying(255),
    cta_subheading text,
    cta_buttons json
);


ALTER TABLE public.service_why_us OWNER TO postgres;

--
-- Name: services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services (
    service_id uuid NOT NULL,
    icon character varying(255) NOT NULL,
    title character varying(100) NOT NULL,
    content character varying(555) NOT NULL,
    created_at timestamp with time zone,
    "order" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.services OWNER TO postgres;

--
-- Name: sliders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sliders (
    slider_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    attachment_id uuid,
    button_name character varying(100),
    button_url character varying(500),
    button2_name character varying(100),
    button2_url character varying(500),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone,
    "order" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.sliders OWNER TO postgres;

--
-- Name: snapshot; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.snapshot (
    snapshot_id uuid NOT NULL,
    title text NOT NULL,
    sector public.enum_snapshot_sector NOT NULL,
    description_one text NOT NULL,
    description_two text NOT NULL,
    attachment_id uuid NOT NULL,
    attachment_description text,
    is_published boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.snapshot OWNER TO postgres;

--
-- Name: snapshot_section; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.snapshot_section (
    section_id uuid NOT NULL,
    snapshot_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.snapshot_section OWNER TO postgres;

--
-- Name: social_medias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.social_medias (
    social_media_id uuid NOT NULL,
    platform_name character varying(100) NOT NULL,
    icon character varying(255) NOT NULL,
    url character varying(500) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.social_medias OWNER TO postgres;

--
-- Name: steps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.steps (
    step_id uuid NOT NULL,
    process_step_id uuid NOT NULL,
    description text,
    attachment_id uuid NOT NULL,
    "order" integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.steps OWNER TO postgres;

--
-- Name: strategies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strategies (
    strategy_id uuid NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.strategies OWNER TO postgres;

--
-- Name: strategy_sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strategy_sections (
    section_id uuid NOT NULL,
    strategy_id uuid NOT NULL,
    type character varying(50) NOT NULL,
    title character varying(255) NOT NULL,
    attachment_id uuid NOT NULL,
    content text
);


ALTER TABLE public.strategy_sections OWNER TO postgres;

--
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    tag_id uuid NOT NULL,
    name character varying(100) NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- Name: tenders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tenders (
    tender_id uuid NOT NULL,
    title character varying(500) NOT NULL,
    reference_number character varying(100),
    description text NOT NULL,
    published_date date NOT NULL,
    closing_date date NOT NULL,
    attachment_id uuid,
    status public.enum_tenders_status DEFAULT 'draft'::public.enum_tenders_status NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.tenders OWNER TO postgres;

--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    user_role_id uuid NOT NULL,
    user_id uuid NOT NULL,
    role_id uuid NOT NULL,
    assigned_by uuid,
    assigned_at timestamp with time zone,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- Name: user_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_types (
    user_type_id uuid NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.user_types OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id uuid NOT NULL,
    user_type_id uuid,
    full_name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    phone_number character varying(50),
    profile_image character varying(255),
    is_first_logged_in boolean DEFAULT true,
    last_login_at timestamp with time zone,
    password_changed_at timestamp with time zone,
    reset_password_otp character varying(255),
    reset_password_otp_expires timestamp with time zone,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    reset_password_attempts integer DEFAULT 0,
    reset_password_lock_until timestamp with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: vacancies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vacancies (
    vacancy_id uuid NOT NULL,
    job_title character varying(500) NOT NULL,
    department character varying(255),
    location character varying(255),
    employment_type public.enum_vacancies_employment_type DEFAULT 'full_time'::public.enum_vacancies_employment_type NOT NULL,
    positions integer,
    description text NOT NULL,
    requirements text,
    published_date date NOT NULL,
    application_deadline date NOT NULL,
    attachment_id uuid,
    status public.enum_vacancies_status DEFAULT 'draft'::public.enum_vacancies_status NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone
);


ALTER TABLE public.vacancies OWNER TO postgres;

--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20251210084133-create-user-types.js
20251210084301-create-permissions.js
20251210084404-create-roles.js
20251210084443-create-role-permissions.js
20251210084552-create-users.js
20251210084639-create-user-roles.js
20260218195338-create-attachments-table.js
20260218195752-create-tags-table.js
20260218195825-create-news-table.js
20260218195955-create-news-metadata-table.js
20260218200017-create-news-attachments-table.js
20260218200047-create-news-tags-table.js
20260218200108-create-news-reactions-table.js
20260218200132-create-news-reads-table.js
20260220135313-create-news-feedbacks.js
20260223115309-create-services.js
20260223132409-create-backgrounds.js
20260223132428-create-background-attachments.js
20260224085409-create-leadership-table.js
20260224085429-create-leadership-attachments-table.js
20260306084533-create-strategies.js
20260306084535-create-strategy-sections.js
20260306084537-create-core-values.js
20260309092503-create-regions-table.js
20260309092506-create-federal-office-contacts-table.js
20260309092509-create-regional-office-contact-centers-table.js
20260309092511-create-licensing-contacts-table.js
20260311074315-create-messages-table.js
20260311083559-create-social-medias-table.js
20260311121733-create-footer.js
20260311121800-create-footer-section.js
20260325172233-create-cards-table.js
20260325172632-create-sliders-table.js
20260325182142-create-partners-table.js
20260325182206-create-partner-attachments-table.js
20260326094257-create-gamestones.js
20260326094259-create-gamestone-attachments.js
20260327054852-create-resource-table.js
20260327054937-create-resource-attachments-table.js
20260404162044-create-snapshot.js
20260404162045-create-snapshot-section.js
20260406065222-create-asm-table.js
20260406065230-create-objectives-table.js
20260406065237-create-asm-attachments-table.js
20260406081153-create-asm-previews.js
20260406132426-create-investigate-ethiopia.js
20260406132428-create-investigation-action.js
20260406132429-create-investigation-strategy.js
20260408072905-create-petroleum-objective.js
20260408072907-create-petroleum-attachments.js
20260410111555-create-petroleum-processes.js
20260410111556-create-process-blocks.js
20260410111557-create-process-block-attachments.js
20260410111559-create-process-steps.js
20260410111600-create-steps.js
20260413142635-create-petroleum-regulation-process-table.js
20260413142656-create-petroleum-regulation-table.js
20260413142718-create-petroleum-regulation-attachments-table.js
20260413142736-create-petroleum-directive-table.js
20260414131811-create-mining-application-process-table.js
20260414131813-create-mining-application-process-attachments-table.js
20260414131814-create-mining-application-types-table.js
20260416142816-create-mining-regulation-process.js
20260416142818-create-mining-framework.js
20260416142819-create-mining-guideline.js
20260416142822-create-mining-guideline-content.js
20260416142824-create-mining-guideline-attachments.js
20260416142826-create-mining-service.js
20260416142828-create-mining-service-card.js
20260418231000-create-audit-logs.js
20260421000001-create-event-categories.js
20260421000002-create-events.js
20260421000003-create-event-attachments.js
20260423184442-create-routes-table.js
20260423184444-create-route-translations-table.js
20260622140000-create-tenders-table.js
20260622140100-create-vacancies-table.js
20260625000000-sync-production-schema-from-v1.js
20260730074123-add-password-reset-security-to-users.js
20260824120000-create-page-headers-table.js
20260824171300-add-publish-status-to-products.js
20260824172300-add-order-to-sliders.js
20260831084000-create-service-overview.js
20260831084001-create-service-experience.js
20260831084002-create-service-capability.js
20260831084003-create-service-why-us.js
20260831130000-add-cards-to-overview.js
20260831130001-add-cta-to-why-us.js
20260831160000-add-order-to-services.js
20260901140101-create-facility-overview.js
20260901140102-create-facilities.js
20260901140104-create-facility-footprint.js
\.


--
-- Data for Name: asm; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asm (asm_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: asm_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asm_attachments (asm_attachment_id, label, asm_id, attachment_id, created_at) FROM stdin;
\.


--
-- Data for Name: asm_previews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asm_previews (preview_id, asm_id, icon, title, description, attachment_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.attachments (attachment_id, file_name, file_path, file_path_thumb, file_path_medium, file_path_large, mime_type, width, height, uploaded_by, created_at) FROM stdin;
a4c55241-880a-45a1-8b0c-41d1f00396ea	home-2.jpg	uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/large.webp	uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/thumb.webp	uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/medium.webp	uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/large.webp	image/webp	5824	3264	\N	2026-08-11 10:39:11.318-07
39a58e7c-9fe4-4525-93c0-1d370f1e932e	home-4.jpg	uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/large.webp	uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/thumb.webp	uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/medium.webp	uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/large.webp	image/webp	6400	2944	\N	2026-08-11 10:39:24.104-07
2f4b099c-b405-4721-aacf-9effcc004e8a	home-2.jpg	uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/large.webp	uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/thumb.webp	uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/medium.webp	uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/large.webp	image/webp	5824	3264	\N	2026-08-11 10:40:02.03-07
901d0694-6b2f-4be5-9acd-2cd1cf3d8226	home-4.jpg	uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/large.webp	uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/thumb.webp	uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/medium.webp	uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/large.webp	image/webp	6400	2944	\N	2026-08-11 10:40:13.761-07
077d7252-78f1-41ac-a1b1-0a80e317a2da	home-4.jpg	uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/large.webp	uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/thumb.webp	uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/medium.webp	uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/large.webp	image/webp	6400	2944	\N	2026-08-11 10:40:26.799-07
05589cf9-4371-41ca-8d23-49ff4b1fd444	home-2.jpg	uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/large.webp	uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/thumb.webp	uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/medium.webp	uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/large.webp	image/webp	5824	3264	\N	2026-08-11 11:12:05.76-07
21ff6910-5ed8-4861-b8bd-40b29d5c1ed4	eth_geography.png	uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/large.webp	uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/thumb.webp	uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/medium.webp	uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/large.webp	image/webp	720	571	\N	2026-08-11 11:29:11.35-07
48590172-b1ec-4609-989d-04a825ec9de3	factory.jpg	uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/large.webp	uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/thumb.webp	uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/medium.webp	uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/large.webp	image/webp	150	150	\N	2026-08-11 11:29:17.212-07
c35295c6-7484-4fad-9142-19f9c8bae309	asm-hero.png	uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/large.webp	uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/thumb.webp	uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/medium.webp	uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/large.webp	image/webp	640	640	\N	2026-08-11 11:37:22.73-07
b759ebe9-45c9-4f22-92b9-812ce37e9e74	eth_geography.png	uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/large.webp	uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/thumb.webp	uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/medium.webp	uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/large.webp	image/webp	720	571	\N	2026-08-11 11:37:30.054-07
7297df98-dd69-49e9-8139-208b4bc4b289	Screenshot 2026-08-09 113035.png	uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/large.webp	uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/thumb.webp	uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/medium.webp	uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/large.webp	image/webp	1828	555	\N	2026-08-21 01:21:32.255-07
a97cfda8-d465-4d7d-8378-2e0d9c2c0183	biftu_adugna.jpg	uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/large.webp	uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/thumb.webp	uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/medium.webp	uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/large.webp	image/webp	221	210	\N	2026-08-21 01:34:05.755-07
fa828dcd-a13f-4fed-993d-1a2c186e43e6	trade-1.png	uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/large.webp	uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/thumb.webp	uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/medium.webp	uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/large.webp	image/webp	740	415	\N	2026-08-21 01:53:24.78-07
32362bc3-9e5b-41e3-8b1c-c335c4fa5a56	Coffee.png	uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/large.webp	uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/thumb.webp	uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/medium.webp	uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/large.webp	image/webp	1600	1068	\N	2026-08-21 02:03:22.499-07
bb080df1-b560-4fb4-97b4-7d016bf4d1ba	trade-1.png	uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/large.webp	uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/thumb.webp	uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/medium.webp	uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/large.webp	image/webp	740	415	\N	2026-08-21 02:03:33.914-07
64cbc56c-a0b3-4c9b-b155-1cd06f260212	machinery-1.jpg	uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/large.webp	uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/thumb.webp	uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/medium.webp	uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/large.webp	image/webp	1500	617	\N	2026-08-21 02:12:12.769-07
ef7f07c0-9d43-4cfe-bde9-cae4e05583cd	2.png	uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/large.webp	uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/thumb.webp	uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/medium.webp	uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/large.webp	image/webp	703	703	\N	2026-08-21 02:22:12.204-07
dc4a48ec-5e51-423d-8cec-ee1aa1a05257	agri.png	uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/large.webp	uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/thumb.webp	uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/medium.webp	uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/large.webp	image/webp	1497	1303	\N	2026-08-21 02:22:18.765-07
a5008742-7d5f-4532-8603-2045555f9211	biiftuu.png	uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/large.webp	uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/thumb.webp	uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/medium.webp	uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/large.webp	image/webp	1263	1263	\N	2026-08-21 02:22:24.732-07
609b7ed1-6514-49b0-a060-61f26f1350b8	Cooperative_Bank_of_Oromia-3.png	uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/large.webp	uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/thumb.webp	uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/medium.webp	uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/large.webp	image/webp	983	392	\N	2026-08-21 02:22:34.967-07
4341324e-a551-4fdd-9079-b12bf5234221	geda.png	uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/large.webp	uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/thumb.webp	uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/medium.webp	uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/large.webp	image/webp	1409	1384	\N	2026-08-21 02:22:42.293-07
099417c5-996d-4008-b627-e4a60055204d	odaa.png	uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/large.webp	uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/thumb.webp	uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/medium.webp	uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/large.webp	image/webp	4468	2506	\N	2026-08-21 02:22:51.048-07
bd662192-e8af-4919-b264-fb2a55548583	siinqee.png	uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/large.webp	uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/thumb.webp	uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/medium.webp	uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/large.webp	image/webp	2462	781	\N	2026-08-21 02:23:07.569-07
9ea8d618-d0be-4246-8a52-07640d8ee09c	Untitled design (3).png	uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/large.webp	uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/thumb.webp	uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/medium.webp	uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/large.webp	image/webp	1250	1250	\N	2026-08-21 02:23:20.044-07
c0029eee-422f-4c34-875f-f66877870f6d	Untitled design.png	uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/large.webp	uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/thumb.webp	uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/medium.webp	uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/large.webp	image/webp	1397	1397	\N	2026-08-21 02:23:25.149-07
db6865ed-2a7c-4f61-8c8f-187b9298adfe	solar.jpg	uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/large.webp	uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/thumb.webp	uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/medium.webp	uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/large.webp	image/webp	1640	924	\N	2026-08-21 02:27:07.447-07
ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce	logistic.png	uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/large.webp	uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/thumb.webp	uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/medium.webp	uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/large.webp	image/webp	1200	613	\N	2026-08-21 02:35:58.817-07
522da8b9-d779-4874-ba2d-7840623d94dc	man_image_1.jpg	uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/large.webp	uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/thumb.webp	uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/medium.webp	uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/large.webp	image/webp	449	612	\N	2026-08-21 07:30:46.875-07
2070b2f1-1d84-472a-b7a9-e432667e0765	man_image_1.jpg	uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/large.webp	uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/thumb.webp	uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/medium.webp	uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/large.webp	image/webp	449	612	\N	2026-08-21 07:31:47.596-07
78590239-178e-4677-ac73-85c4cd6c15e8	man_image_1.jpg	uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/large.webp	uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/thumb.webp	uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/medium.webp	uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/large.webp	image/webp	449	612	\N	2026-08-21 07:32:07.036-07
efe29302-572d-4a12-bad8-011f36fb56d1	man_image_1.jpg	uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/large.webp	uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/thumb.webp	uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/medium.webp	uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/large.webp	image/webp	449	612	\N	2026-08-21 07:33:14.761-07
f2f63abd-223d-4780-a851-875c4bcfd0eb	man_image_1.jpg	uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/large.webp	uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/thumb.webp	uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/medium.webp	uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/large.webp	image/webp	449	612	\N	2026-08-21 07:33:47.125-07
5101e8a0-1070-45a3-be01-78757125fdc8	man_image_1.jpg	uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/large.webp	uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/thumb.webp	uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/medium.webp	uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/large.webp	image/webp	449	612	\N	2026-08-21 07:34:56.923-07
419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a	man_image_1.jpg	uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/large.webp	uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/thumb.webp	uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/medium.webp	uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/large.webp	image/webp	449	612	\N	2026-08-21 07:36:11.773-07
a05205d4-e169-408f-b17c-f79d5b30db46	mission.png	uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/large.webp	uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/thumb.webp	uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/medium.webp	uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/large.webp	image/webp	200	200	\N	2026-08-21 07:52:32.355-07
aea2015b-5d2e-4378-846c-691f8c335397	vision.png	uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/large.webp	uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/thumb.webp	uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/medium.webp	uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/large.webp	image/webp	512	512	\N	2026-08-21 07:52:55.265-07
89adb70b-a2ab-4f90-8b07-1c9953ba5c27	value.png	uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/large.webp	uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/thumb.webp	uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/medium.webp	uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/large.webp	image/webp	512	512	\N	2026-08-21 07:53:17.248-07
cb08e172-5120-4944-8a36-5dae8afa12c4	home-4.jpg	uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/large.webp	uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/thumb.webp	uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/medium.webp	uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/large.webp	image/webp	2752	1536	\N	2026-08-24 00:15:17.839-07
865ca954-c1e2-41a1-a74c-b8010c02caa6	about-section.jpg	uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/large.webp	uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/thumb.webp	uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/medium.webp	uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/large.webp	image/webp	2752	1536	\N	2026-08-24 02:36:44.216-07
15199c87-8d55-4893-943e-62d71e777183	service-section.jpg	uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/large.webp	uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/thumb.webp	uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/medium.webp	uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/large.webp	image/webp	2752	1536	\N	2026-08-24 02:45:02.513-07
911834dc-ff4a-4717-a15a-4eed3f149860	product-section.jpg	uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/large.webp	uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/thumb.webp	uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/medium.webp	uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/large.webp	image/webp	2752	1536	\N	2026-08-24 02:49:33.854-07
ba5d60a6-bebd-4f79-961f-63e8e61cc867	facilities-section.jpg	uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/large.webp	uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/thumb.webp	uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/medium.webp	uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/large.webp	image/webp	2752	1536	\N	2026-08-24 02:52:17.45-07
847beb6d-bcdc-4683-8149-c69f1f63b5f8	news-section.jpg	uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/large.webp	uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/thumb.webp	uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/medium.webp	uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/large.webp	image/webp	2752	1536	\N	2026-08-24 02:56:02.365-07
df8a536b-86ec-4136-98bb-1f2f909d0c95	career-section.jpg	uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/large.webp	uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/thumb.webp	uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/medium.webp	uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/large.webp	image/webp	2752	1536	\N	2026-08-24 02:57:49.045-07
cda602f4-b6a0-402b-9426-d9ec20780eeb	contact-section.jpg	uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/large.webp	uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/thumb.webp	uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/medium.webp	uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/large.webp	image/webp	2752	1536	\N	2026-08-24 03:02:56.41-07
b0936f0b-ecda-4169-80db-f5fdf8a0c63e	career-section.jpg	uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/large.webp	uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/thumb.webp	uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/medium.webp	uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/large.webp	image/webp	2752	1536	\N	2026-08-24 07:04:19.502-07
8d7fae83-48ae-4254-9cb7-34d3491441af	contact-section.jpg	uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/large.webp	uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/thumb.webp	uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/medium.webp	uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/large.webp	image/webp	2752	1536	\N	2026-08-24 07:04:19.524-07
aed694d0-f540-4878-89da-4d88dfc96a30	about-section.jpg	uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/large.webp	uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/thumb.webp	uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/medium.webp	uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/large.webp	image/webp	2752	1536	\N	2026-08-24 07:04:19.495-07
5868ece9-9563-435d-a1cd-84fea5923148	1787580267130-925542409_Invoice-142963.pdf	uploads/attachments/1787580267130-925542409_Invoice-142963.pdf	\N	\N	\N	application/pdf	\N	\N	\N	2026-08-24 07:04:27.132-07
2ca16436-2e2a-49e6-8bee-56a33379cfaf	coffee-beans-in-old-wooden-box.jpg	uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/large.webp	uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/thumb.webp	uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/medium.webp	uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/large.webp	image/webp	1024	682	\N	2026-08-25 02:29:54.854-07
f68da443-9a32-461d-a0f1-cf552e15f17a	Coffee.png	uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/large.webp	uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/thumb.webp	uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/medium.webp	uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/large.webp	image/webp	1600	1068	\N	2026-08-25 02:30:33.878-07
74e942ac-3fa5-4767-b190-134358063d74	sesame-seeds-1.jpg	uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/large.webp	uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/thumb.webp	uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/medium.webp	uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/large.webp	image/webp	500	281	\N	2026-08-26 06:18:04.79-07
bb8e4235-880a-496b-8fe7-03f7e1e8c536	sesame-2.jpg	uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/large.webp	uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/thumb.webp	uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/medium.webp	uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/large.webp	image/webp	717	428	\N	2026-08-26 06:18:04.763-07
b89ff03a-ad01-413a-9e6a-188151b2ab63	sesame-1.jpg	uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/large.webp	uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/thumb.webp	uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/medium.webp	uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/large.webp	image/webp	717	428	\N	2026-08-26 06:18:04.725-07
1d09bf35-62cf-42b1-8bf2-284c32710d7b	soybean-3.jpg	uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/large.webp	uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/thumb.webp	uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/medium.webp	uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/large.webp	image/webp	625	350	\N	2026-08-26 06:53:05.775-07
61f0e28a-54be-487a-92ba-86a8bb9998a9	about-section.jpg	uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/large.webp	uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/thumb.webp	uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/medium.webp	uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/large.webp	image/webp	2752	1536	\N	2026-08-27 02:06:12.343-07
5bf983e0-7734-4921-bf15-e027eabb1322	business-section.jpg	uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/large.webp	uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/thumb.webp	uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/medium.webp	uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/large.webp	image/webp	2752	1536	\N	2026-08-27 02:10:52.286-07
efce5909-5e87-460d-82ef-99b24ae6ef4f	about-section.jpg	uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/large.webp	uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/thumb.webp	uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/medium.webp	uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/large.webp	image/webp	2752	1536	\N	2026-08-31 00:24:09.2-07
af0da9c4-8cc0-4fe3-9eb6-2bff98858bac	about-section.jpg	uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/large.webp	uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/thumb.webp	uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/medium.webp	uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/large.webp	image/webp	2752	1536	\N	2026-08-31 06:10:23.463-07
3b0810b6-07ec-4fc2-91b1-59362ae5a77d	about-section.jpg	uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/large.webp	uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/thumb.webp	uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/medium.webp	uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/large.webp	image/webp	2752	1536	\N	2026-08-31 06:10:34.436-07
c3813ab7-653c-4a8e-9c52-de69e272b98f	about-section.jpg	uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/large.webp	uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/thumb.webp	uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/medium.webp	uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/large.webp	image/webp	2752	1536	\N	2026-08-31 06:14:54.651-07
12b9cb08-4750-4486-94bc-c577a8d78cd1	career-section.jpg	uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/large.webp	uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/thumb.webp	uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/medium.webp	uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/large.webp	image/webp	2752	1536	\N	2026-08-31 06:15:28.766-07
3c2379bf-0557-42b8-b8c1-779afdfbd322	about-section.jpg	uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/large.webp	uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/thumb.webp	uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/medium.webp	uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/large.webp	image/webp	2752	1536	\N	2026-08-31 06:28:24.11-07
9df5dfa3-c434-4016-a701-e34830b257fe	about-section.jpg	uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/large.webp	uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/thumb.webp	uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/medium.webp	uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/large.webp	image/webp	2752	1536	\N	2026-08-31 06:41:06.733-07
193ad1d2-2f7e-4dae-b417-ecafc48a80fa	business-section.jpg	uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/large.webp	uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/thumb.webp	uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/medium.webp	uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/large.webp	image/webp	2752	1536	\N	2026-08-31 06:41:15.863-07
9b431b70-06f0-4ca9-a275-1157fc50ce29	facilities-section.jpg	uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/large.webp	uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/thumb.webp	uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/medium.webp	uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/large.webp	image/webp	2752	1536	\N	2026-08-31 06:41:24.381-07
7b5b3bbc-205a-49a0-93c3-fbc02cb27636	product-section.jpg	uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/large.webp	uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/thumb.webp	uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/medium.webp	uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/large.webp	image/webp	2752	1536	\N	2026-08-31 06:41:41.925-07
2b520271-5dea-42d5-97b8-9c1fe03f37cf	service-section.jpg	uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/large.webp	uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/thumb.webp	uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/medium.webp	uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/large.webp	image/webp	2752	1536	\N	2026-08-31 06:41:53.343-07
d65da17f-eeea-4c99-bdb5-b79376184927	facilities-section.jpg	uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/large.webp	uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/thumb.webp	uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/medium.webp	uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/large.webp	image/webp	2752	1536	\N	2026-08-31 06:42:09.462-07
14cd36f5-5008-40fb-b0ef-0ec16308b1ec	facilities-section.jpg	uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/large.webp	uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/thumb.webp	uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/medium.webp	uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/large.webp	image/webp	2752	1536	\N	2026-09-01 07:51:26.797-07
3791f78d-c57c-4f58-b94f-a292156a7e36	facilities-section.jpg	uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/large.webp	uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/thumb.webp	uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/medium.webp	uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/large.webp	image/webp	2752	1536	\N	2026-09-01 07:52:10.679-07
89332444-f542-40ae-af48-05d211fa5c74	about-section.jpg	uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/large.webp	uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/thumb.webp	uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/medium.webp	uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/large.webp	image/webp	2752	1536	\N	2026-09-01 07:55:55.813-07
\.


--
-- Data for Name: audit_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.audit_logs (audit_id, user_id, action, model_name, record_id, old_values, new_values, created_at) FROM stdin;
cf9cf554-4957-4bd6-a798-fd4c8b861171	\N	CREATE	Attachment	cb08e172-5120-4944-8a36-5dae8afa12c4	\N	{"width": 2752, "height": 1536, "file_name": "home-4.jpg", "file_path": "uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T07:15:17.839Z", "uploaded_by": null, "attachment_id": "cb08e172-5120-4944-8a36-5dae8afa12c4", "file_path_large": "uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/large.webp", "file_path_thumb": "uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/thumb.webp", "file_path_medium": "uploads/attachments/cb08e172-5120-4944-8a36-5dae8afa12c4/medium.webp"}	2026-08-24 00:15:18.774-07
09305550-df1b-45c2-a91b-a7f8119cd6c0	00000000-0000-4000-8000-000000000001	UPDATE	User	00000000-0000-4000-8000-000000000001	{"email": "admin@gmail.com", "user_id": "00000000-0000-4000-8000-000000000001", "password": "$2b$10$2xjnzfShCIELGgVEkggvB.4lUqhOOFggq3ZQznsP0EB8j6hBm.dVS", "full_name": "Admin Account", "is_active": true, "created_at": "2026-08-24T04:56:53.000Z", "updated_at": "2026-08-24T04:56:53.000Z", "phone_number": "251911000001", "user_type_id": null, "last_login_at": "2026-08-24T08:33:13.726Z", "profile_image": null, "is_first_logged_in": true, "reset_password_otp": null, "password_changed_at": null, "reset_password_attempts": 0, "reset_password_lock_until": null, "reset_password_otp_expires": null}	{"email": "admin@gmail.com", "user_id": "00000000-0000-4000-8000-000000000001", "password": "$2b$10$7gqrigBbD/tSma03Z1VcTe0m74DKvC4WbqAfwtOwkdlHqSkk6JesK", "full_name": "Admin Account", "is_active": true, "created_at": "2026-08-24T04:56:53.000Z", "updated_at": "2026-08-24T08:35:04.230Z", "phone_number": "251911000001", "user_type_id": null, "last_login_at": "2026-08-24T08:33:13.726Z", "profile_image": null, "is_first_logged_in": false, "reset_password_otp": null, "password_changed_at": "2026-08-24T08:35:04.230Z", "reset_password_attempts": 0, "reset_password_lock_until": null, "reset_password_otp_expires": null}	2026-08-24 01:35:04.233-07
2d41f66c-39f1-49e9-8381-a5538ae89e3f	\N	CREATE	PageHeader	48c3c849-a762-49da-8fe8-4b38888a4e13	\N	{"icon": "LucidePhoneCall", "title": "Contact Jarra Holdings", "description": "Connect with our team to explore partnerships, products, services, and business opportunities.", "attachment_id": "cda602f4-b6a0-402b-9426-d9ec20780eeb", "page_header_id": "48c3c849-a762-49da-8fe8-4b38888a4e13", "page_identifier": "contact"}	2026-08-24 03:03:17.986-07
00bee099-3c60-47ba-b318-234823af8303	\N	CREATE	Attachment	ca04cd79-a349-433d-9ea3-ef7634744b82	\N	{"width": 694, "height": 750, "file_name": "Screenshot 2026-06-23 103346.png", "file_path": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T12:08:17.721Z", "uploaded_by": null, "attachment_id": "ca04cd79-a349-433d-9ea3-ef7634744b82", "file_path_large": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/large.webp", "file_path_thumb": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/thumb.webp", "file_path_medium": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/medium.webp"}	2026-08-11 05:08:17.972-07
44c90e5e-ff4a-4bf8-a5a8-cb7641937943	\N	CREATE	ProductCategory	5e09be95-af20-4a39-a2ec-2ffca4510ec3	\N	{"name": "Cars", "slug": "car", "created_at": "2026-08-24T13:49:07.298Z", "deleted_at": null, "updated_at": "2026-08-24T13:49:07.298Z", "category_id": "5e09be95-af20-4a39-a2ec-2ffca4510ec3", "description": null}	2026-08-24 06:49:07.31-07
b96b9486-ad3e-4c5b-bed8-f7dedb639a37	\N	CREATE	Attachment	a4c55241-880a-45a1-8b0c-41d1f00396ea	\N	{"width": 5824, "height": 3264, "file_name": "home-2.jpg", "file_path": "uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T17:39:11.318Z", "uploaded_by": null, "attachment_id": "a4c55241-880a-45a1-8b0c-41d1f00396ea", "file_path_large": "uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/large.webp", "file_path_thumb": "uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/thumb.webp", "file_path_medium": "uploads/attachments/a4c55241-880a-45a1-8b0c-41d1f00396ea/medium.webp"}	2026-08-11 10:39:14.095-07
9ef03532-4e12-407f-8726-7567523bebcb	\N	CREATE	Attachment	39a58e7c-9fe4-4525-93c0-1d370f1e932e	\N	{"width": 6400, "height": 2944, "file_name": "home-4.jpg", "file_path": "uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T17:39:24.104Z", "uploaded_by": null, "attachment_id": "39a58e7c-9fe4-4525-93c0-1d370f1e932e", "file_path_large": "uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/large.webp", "file_path_thumb": "uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/thumb.webp", "file_path_medium": "uploads/attachments/39a58e7c-9fe4-4525-93c0-1d370f1e932e/medium.webp"}	2026-08-11 10:39:26.537-07
c9597562-e8a1-43e5-8c50-beb0373d026c	\N	CREATE	ProductCategory	05f0a9d4-c30c-4099-a53d-62510a630708	\N	{"name": "Electronics", "slug": "electronics", "created_at": "2026-08-24T13:49:16.697Z", "deleted_at": null, "updated_at": "2026-08-24T13:49:16.697Z", "category_id": "05f0a9d4-c30c-4099-a53d-62510a630708", "description": null}	2026-08-24 06:49:16.701-07
512ee4de-a42a-4c1f-80c9-e947fd89c7bc	\N	CREATE	ProductCategory	655deb2e-329b-4214-a8be-ff578febaaca	\N	{"name": "Agricultural Products", "slug": "agricultural-products", "created_at": "2026-08-25T09:28:50.418Z", "deleted_at": null, "updated_at": "2026-08-25T09:28:50.418Z", "category_id": "655deb2e-329b-4214-a8be-ff578febaaca", "description": null}	2026-08-25 02:28:50.501-07
bd3b5a18-6c58-4267-bfac-412b6b823bfc	\N	CREATE	Attachment	2f4b099c-b405-4721-aacf-9effcc004e8a	\N	{"width": 5824, "height": 3264, "file_name": "home-2.jpg", "file_path": "uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T17:40:02.030Z", "uploaded_by": null, "attachment_id": "2f4b099c-b405-4721-aacf-9effcc004e8a", "file_path_large": "uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/large.webp", "file_path_thumb": "uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/thumb.webp", "file_path_medium": "uploads/attachments/2f4b099c-b405-4721-aacf-9effcc004e8a/medium.webp"}	2026-08-11 10:40:04.708-07
fb7793b9-a7ed-47ab-a12f-987f6b818cc6	\N	CREATE	Attachment	74e942ac-3fa5-4767-b190-134358063d74	\N	{"width": 500, "height": 281, "file_name": "sesame-seeds-1.jpg", "file_path": "uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/large.webp", "mime_type": "image/webp", "created_at": "2026-08-26T13:18:04.790Z", "uploaded_by": null, "attachment_id": "74e942ac-3fa5-4767-b190-134358063d74", "file_path_large": "uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/large.webp", "file_path_thumb": "uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/thumb.webp", "file_path_medium": "uploads/attachments/74e942ac-3fa5-4767-b190-134358063d74/medium.webp"}	2026-08-26 06:18:04.997-07
7744d4b3-e3b5-4900-8989-be1552ea659b	\N	CREATE	Attachment	bb8e4235-880a-496b-8fe7-03f7e1e8c536	\N	{"width": 717, "height": 428, "file_name": "sesame-2.jpg", "file_path": "uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/large.webp", "mime_type": "image/webp", "created_at": "2026-08-26T13:18:04.763Z", "uploaded_by": null, "attachment_id": "bb8e4235-880a-496b-8fe7-03f7e1e8c536", "file_path_large": "uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/large.webp", "file_path_thumb": "uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/thumb.webp", "file_path_medium": "uploads/attachments/bb8e4235-880a-496b-8fe7-03f7e1e8c536/medium.webp"}	2026-08-26 06:18:05.043-07
393abf1e-6992-4847-a80c-b780dedf05c4	\N	CREATE	Attachment	b2f21f8c-7518-428c-a30a-b8d33095aa4a	\N	{"width": 2752, "height": 1536, "file_name": "home-4.jpg", "file_path": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T08:49:14.511Z", "uploaded_by": null, "attachment_id": "b2f21f8c-7518-428c-a30a-b8d33095aa4a", "file_path_large": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/large.webp", "file_path_thumb": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/thumb.webp", "file_path_medium": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/medium.webp"}	2026-08-24 01:49:15.491-07
53f84bde-028f-43a1-ac83-0e29f946f4b5	\N	CREATE	Attachment	901d0694-6b2f-4be5-9acd-2cd1cf3d8226	\N	{"width": 6400, "height": 2944, "file_name": "home-4.jpg", "file_path": "uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T17:40:13.761Z", "uploaded_by": null, "attachment_id": "901d0694-6b2f-4be5-9acd-2cd1cf3d8226", "file_path_large": "uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/large.webp", "file_path_thumb": "uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/thumb.webp", "file_path_medium": "uploads/attachments/901d0694-6b2f-4be5-9acd-2cd1cf3d8226/medium.webp"}	2026-08-11 10:40:16.183-07
bd27b198-82af-4b0a-80c5-709bef0218ae	\N	CREATE	Attachment	077d7252-78f1-41ac-a1b1-0a80e317a2da	\N	{"width": 6400, "height": 2944, "file_name": "home-4.jpg", "file_path": "uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T17:40:26.799Z", "uploaded_by": null, "attachment_id": "077d7252-78f1-41ac-a1b1-0a80e317a2da", "file_path_large": "uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/large.webp", "file_path_thumb": "uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/thumb.webp", "file_path_medium": "uploads/attachments/077d7252-78f1-41ac-a1b1-0a80e317a2da/medium.webp"}	2026-08-11 10:40:29.352-07
1e138983-66e4-4236-8118-e9a31fd2e50e	\N	CREATE	PageHeader	2bf44f7f-96a7-4748-be6c-77adfa944ad2	\N	{"icon": "Airplay", "title": "About Jarra Holdingss", "description": "About Jarra Holdingss", "attachment_id": "b2f21f8c-7518-428c-a30a-b8d33095aa4a", "page_header_id": "2bf44f7f-96a7-4748-be6c-77adfa944ad2", "page_identifier": "about"}	2026-08-24 01:49:28.123-07
011fb6eb-3af6-4225-8160-32c70d8b68c2	\N	CREATE	ProductCategory	8f352612-c4d6-4130-a466-a59c25d28bd2	\N	{"name": "Grain", "slug": "grains-", "created_at": "2026-08-24T13:49:35.212Z", "deleted_at": null, "updated_at": "2026-08-24T13:49:35.212Z", "category_id": "8f352612-c4d6-4130-a466-a59c25d28bd2", "description": null}	2026-08-24 06:49:35.271-07
82a579be-75fc-4ab6-953d-67fcac12784e	\N	CREATE	Attachment	2ca16436-2e2a-49e6-8bee-56a33379cfaf	\N	{"width": 1024, "height": 682, "file_name": "coffee-beans-in-old-wooden-box.jpg", "file_path": "uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/large.webp", "mime_type": "image/webp", "created_at": "2026-08-25T09:29:54.854Z", "uploaded_by": null, "attachment_id": "2ca16436-2e2a-49e6-8bee-56a33379cfaf", "file_path_large": "uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/large.webp", "file_path_thumb": "uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/thumb.webp", "file_path_medium": "uploads/attachments/2ca16436-2e2a-49e6-8bee-56a33379cfaf/medium.webp"}	2026-08-25 02:29:55.615-07
eddcfffd-922a-46fa-93f9-9a5e9e5cb38d	\N	CREATE	Attachment	b89ff03a-ad01-413a-9e6a-188151b2ab63	\N	{"width": 717, "height": 428, "file_name": "sesame-1.jpg", "file_path": "uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/large.webp", "mime_type": "image/webp", "created_at": "2026-08-26T13:18:04.725Z", "uploaded_by": null, "attachment_id": "b89ff03a-ad01-413a-9e6a-188151b2ab63", "file_path_large": "uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/large.webp", "file_path_thumb": "uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/thumb.webp", "file_path_medium": "uploads/attachments/b89ff03a-ad01-413a-9e6a-188151b2ab63/medium.webp"}	2026-08-26 06:18:05.068-07
ee3197d7-b225-444a-bfda-6d97df6ec6ba	00000000-0000-4000-8000-000000000001	CREATE	Purpose	2500950d-6c08-4a60-840a-086a209e7afb	\N	{"quote": "\\"Delivering innovative and sustainable solutions across industries.\\"", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [], "subtitle": "Our Purpose", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	2026-08-31 00:27:44.503-07
5dffd4dd-2890-4470-b6eb-e11bef1a55a0	00000000-0000-4000-8000-000000000001	UPDATE	Canvas	d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9	{"words": {"center": "IMPACTING"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.", "title_prefix": "Creating Value.", "vision_title": "Our Vision", "title_highlight": " Driving Sustainable Growth.", "vision_description": "To be a leading community-based conglomerate in Africa by 2030."}	{"words": {"center": "IMPACTING"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.", "title_prefix": "Creating Value.", "vision_title": "Our Visions", "title_highlight": " Driving Sustainable Growth.", "vision_description": "To be a leading community-based conglomerate in Africa by 2030....."}	2026-08-31 00:39:13.85-07
32114fdc-e981-46bf-9bd9-9515fb4dfffb	\N	CREATE	Attachment	05589cf9-4371-41ca-8d23-49ff4b1fd444	\N	{"width": 5824, "height": 3264, "file_name": "home-2.jpg", "file_path": "uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:12:05.760Z", "uploaded_by": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444", "file_path_large": "uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/large.webp", "file_path_thumb": "uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/thumb.webp", "file_path_medium": "uploads/attachments/05589cf9-4371-41ca-8d23-49ff4b1fd444/medium.webp"}	2026-08-11 11:12:07.538-07
de966418-981e-4098-8a34-ed2f6372c60c	\N	CREATE	Attachment	b759ebe9-45c9-4f22-92b9-812ce37e9e74	\N	{"width": 720, "height": 571, "file_name": "eth_geography.png", "file_path": "uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:37:30.054Z", "uploaded_by": null, "attachment_id": "b759ebe9-45c9-4f22-92b9-812ce37e9e74", "file_path_large": "uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/large.webp", "file_path_thumb": "uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/thumb.webp", "file_path_medium": "uploads/attachments/b759ebe9-45c9-4f22-92b9-812ce37e9e74/medium.webp"}	2026-08-11 11:37:30.303-07
11d417a0-62f4-4ed0-a85f-d57208b175cd	\N	UPDATE	PageHeader	2bf44f7f-96a7-4748-be6c-77adfa944ad2	{"icon": "Airplay", "title": "About Jarra Holdingss", "description": "About Jarra Holdingss", "attachment_id": "b2f21f8c-7518-428c-a30a-b8d33095aa4a", "page_header_id": "2bf44f7f-96a7-4748-be6c-77adfa944ad2", "page_identifier": "about"}	{"icon": "LucideQuote", "title": "About Jarra Holdings", "description": "About Jarra Holdings", "attachment_id": "b2f21f8c-7518-428c-a30a-b8d33095aa4a", "page_header_id": "2bf44f7f-96a7-4748-be6c-77adfa944ad2", "page_identifier": "about"}	2026-08-24 02:23:24.533-07
b46febd5-b1a0-4bac-b114-47f5e46cc62d	\N	UPDATE	ProductCategory	8f352612-c4d6-4130-a466-a59c25d28bd2	{"name": "Grain", "slug": "grains-", "created_at": "2026-08-24T13:49:35.212Z", "deleted_at": null, "updated_at": "2026-08-24T13:49:35.212Z", "category_id": "8f352612-c4d6-4130-a466-a59c25d28bd2", "description": null}	{"name": "Grain", "slug": "grains", "created_at": "2026-08-24T13:49:35.212Z", "deleted_at": null, "updated_at": "2026-08-24T13:49:35.212Z", "category_id": "8f352612-c4d6-4130-a466-a59c25d28bd2", "description": null}	2026-08-24 06:53:21.545-07
3ca500b1-6754-4cd4-86e3-46f44509060e	\N	CREATE	Attachment	f68da443-9a32-461d-a0f1-cf552e15f17a	\N	{"width": 1600, "height": 1068, "file_name": "Coffee.png", "file_path": "uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/large.webp", "mime_type": "image/webp", "created_at": "2026-08-25T09:30:33.878Z", "uploaded_by": null, "attachment_id": "f68da443-9a32-461d-a0f1-cf552e15f17a", "file_path_large": "uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/large.webp", "file_path_thumb": "uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/thumb.webp", "file_path_medium": "uploads/attachments/f68da443-9a32-461d-a0f1-cf552e15f17a/medium.webp"}	2026-08-25 02:30:34.984-07
a34fdc05-9601-463e-8726-02b68e5eece4	\N	CREATE	Attachment	7de7a4a0-b994-4597-8b51-2c81497eb2aa	\N	{"width": 6400, "height": 2944, "file_name": "home-4.jpg", "file_path": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:13:54.049Z", "uploaded_by": null, "attachment_id": "7de7a4a0-b994-4597-8b51-2c81497eb2aa", "file_path_large": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/large.webp", "file_path_thumb": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/thumb.webp", "file_path_medium": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/medium.webp"}	2026-08-11 11:13:55.649-07
9adc0943-3ba1-46a9-be3f-ac3b92be964b	\N	CREATE	Product	53f5a1df-5b52-456f-a415-8bab157f076f	\N	{"name": "Ethiopian Sesame Seeds", "slug": "ethiopian-sesame-seeds", "status": "Available", "created_at": "2026-08-26T13:18:50.503Z", "deleted_at": null, "product_id": "53f5a1df-5b52-456f-a415-8bab157f076f", "updated_at": "2026-08-26T13:18:50.503Z", "category_id": "8f352612-c4d6-4130-a466-a59c25d28bd2", "applications": [], "publish_status": "published", "specifications": {"Origin": "Ethiopia", "Supply": "Bulk / Export", "Quality": "Graded", "Application": "Food & Oil Processing", "Product Type": "Sesame Seeds"}, "full_description": "<p><strong>High-quality&nbsp;Ethiopian</strong>&nbsp;<em>sesame&nbsp;seeds</em>&nbsp;sourced&nbsp;through&nbsp;reliable&nbsp;farmer&nbsp;and&nbsp;aggregator&nbsp;networks,&nbsp;suitable&nbsp;for&nbsp;international&nbsp;food&nbsp;and&nbsp;processing&nbsp;markets.</p>", "short_description": "High-quality Ethiopian sesame seeds sourced through reliable farmer and aggregator networks, suitable for international food and processing markets."}	2026-08-26 06:18:50.513-07
6160ab22-f56e-4c0b-ac7a-7ef42110aac5	00000000-0000-4000-8000-000000000001	UPDATE	Canvas	d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9	{"words": {"center": "IMPACTS"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "", "title_prefix": "", "vision_title": "", "title_highlight": "", "vision_description": ""}	{"words": {"center": "IMPACTS"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.", "title_prefix": "Creating Value.", "vision_title": "Our Vision", "title_highlight": " Driving Sustainable Growth.", "vision_description": "To be a leading community-based conglomerate in Africa by 2030."}	2026-08-31 00:28:53.724-07
5034acd0-6bda-4ea0-97d3-7f066a8293ca	00000000-0000-4000-8000-000000000001	CREATE	Service	9226368e-e5c9-4285-be5e-5c6e58d2511e	\N	{"icon": "SearchCheck", "order": 0, "title": "Sourcing & Procurement", "content": "Business-oriented sourcing and procurement support for customers and partners seeking appropriate products and supply solutions across our operating sectors.", "created_at": "2026-08-31T13:09:29.227Z", "service_id": "9226368e-e5c9-4285-be5e-5c6e58d2511e"}	2026-08-31 06:09:29.234-07
b37c1b36-48ea-45e3-b087-911fe0bc37c6	\N	CREATE	Attachment	21ff6910-5ed8-4861-b8bd-40b29d5c1ed4	\N	{"width": 720, "height": 571, "file_name": "eth_geography.png", "file_path": "uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:29:11.350Z", "uploaded_by": null, "attachment_id": "21ff6910-5ed8-4861-b8bd-40b29d5c1ed4", "file_path_large": "uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/large.webp", "file_path_thumb": "uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/thumb.webp", "file_path_medium": "uploads/attachments/21ff6910-5ed8-4861-b8bd-40b29d5c1ed4/medium.webp"}	2026-08-11 11:29:11.642-07
8ff915d6-dc17-471c-9f2f-dc7e4174f0d6	\N	CREATE	Attachment	48590172-b1ec-4609-989d-04a825ec9de3	\N	{"width": 150, "height": 150, "file_name": "factory.jpg", "file_path": "uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:29:17.212Z", "uploaded_by": null, "attachment_id": "48590172-b1ec-4609-989d-04a825ec9de3", "file_path_large": "uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/large.webp", "file_path_thumb": "uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/thumb.webp", "file_path_medium": "uploads/attachments/48590172-b1ec-4609-989d-04a825ec9de3/medium.webp"}	2026-08-11 11:29:17.282-07
47d74e67-9774-4036-9ec6-cd5bc6c5e03f	\N	CREATE	Attachment	c35295c6-7484-4fad-9142-19f9c8bae309	\N	{"width": 640, "height": 640, "file_name": "asm-hero.png", "file_path": "uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:37:22.730Z", "uploaded_by": null, "attachment_id": "c35295c6-7484-4fad-9142-19f9c8bae309", "file_path_large": "uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/large.webp", "file_path_thumb": "uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/thumb.webp", "file_path_medium": "uploads/attachments/c35295c6-7484-4fad-9142-19f9c8bae309/medium.webp"}	2026-08-11 11:37:23.164-07
9548a802-996f-494e-b7cf-fba2d82997cb	\N	CREATE	Slider	b1c1b054-122f-49ea-b4d1-5b6ee9418c2c	\N	{"title": "New Slide Title", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-11T18:13:41.923Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-11 11:13:41.925-07
82cfaae8-a6dd-4d64-b5b8-c5a3b79b2565	\N	CREATE	Attachment	494a931a-4df6-4b41-ac98-ff8921081bee	\N	{"width": 720, "height": 571, "file_name": "eth_geography.png", "file_path": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:42:11.030Z", "uploaded_by": null, "attachment_id": "494a931a-4df6-4b41-ac98-ff8921081bee", "file_path_large": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/large.webp", "file_path_thumb": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/thumb.webp", "file_path_medium": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/medium.webp"}	2026-08-11 11:42:11.326-07
0f8ddde2-36a7-4457-ab06-6c0893316864	\N	CREATE	Attachment	3de6afc7-2ef8-4810-a6ee-fb5a300768ee	\N	{"width": 640, "height": 640, "file_name": "asm-hero.png", "file_path": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:43:46.263Z", "uploaded_by": null, "attachment_id": "3de6afc7-2ef8-4810-a6ee-fb5a300768ee", "file_path_large": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/large.webp", "file_path_thumb": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/thumb.webp", "file_path_medium": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/medium.webp"}	2026-08-11 11:43:46.631-07
512bbc7d-8dc1-400c-af0f-d48905caf348	\N	CREATE	Attachment	7297df98-dd69-49e9-8139-208b4bc4b289	\N	{"width": 1828, "height": 555, "file_name": "Screenshot 2026-08-09 113035.png", "file_path": "uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T08:21:32.255Z", "uploaded_by": null, "attachment_id": "7297df98-dd69-49e9-8139-208b4bc4b289", "file_path_large": "uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/large.webp", "file_path_thumb": "uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/thumb.webp", "file_path_medium": "uploads/attachments/7297df98-dd69-49e9-8139-208b4bc4b289/medium.webp"}	2026-08-21 01:21:32.857-07
df5233e0-a9fc-4fa6-a9f9-6af83a279821	\N	DELETE	Attachment	b2f21f8c-7518-428c-a30a-b8d33095aa4a	{"width": 2752, "height": 1536, "file_name": "home-4.jpg", "file_path": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T08:49:14.511Z", "uploaded_by": null, "attachment_id": "b2f21f8c-7518-428c-a30a-b8d33095aa4a", "file_path_large": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/large.webp", "file_path_thumb": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/thumb.webp", "file_path_medium": "uploads/attachments/b2f21f8c-7518-428c-a30a-b8d33095aa4a/medium.webp"}	\N	2026-08-24 02:29:21.057-07
17fe2b24-7e2e-40ca-a51c-3d2bf54e2b0d	\N	CREATE	Attachment	a97cfda8-d465-4d7d-8378-2e0d9c2c0183	\N	{"width": 221, "height": 210, "file_name": "biftu_adugna.jpg", "file_path": "uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T08:34:05.755Z", "uploaded_by": null, "attachment_id": "a97cfda8-d465-4d7d-8378-2e0d9c2c0183", "file_path_large": "uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/large.webp", "file_path_thumb": "uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/thumb.webp", "file_path_medium": "uploads/attachments/a97cfda8-d465-4d7d-8378-2e0d9c2c0183/medium.webp"}	2026-08-21 01:34:05.901-07
0b2f72a1-bcfe-486b-b3ef-6d29a96dce68	\N	CREATE	Attachment	b0936f0b-ecda-4169-80db-f5fdf8a0c63e	\N	{"width": 2752, "height": 1536, "file_name": "career-section.jpg", "file_path": "uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T14:04:19.502Z", "uploaded_by": null, "attachment_id": "b0936f0b-ecda-4169-80db-f5fdf8a0c63e", "file_path_large": "uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/large.webp", "file_path_thumb": "uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/thumb.webp", "file_path_medium": "uploads/attachments/b0936f0b-ecda-4169-80db-f5fdf8a0c63e/medium.webp"}	2026-08-24 07:04:20.313-07
d92a0823-fa62-414a-b6fd-215fb65bffe1	\N	DELETE	Attachment	7de7a4a0-b994-4597-8b51-2c81497eb2aa	{"width": 6400, "height": 2944, "file_name": "home-4.jpg", "file_path": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:13:54.049Z", "uploaded_by": null, "attachment_id": "7de7a4a0-b994-4597-8b51-2c81497eb2aa", "file_path_large": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/large.webp", "file_path_thumb": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/thumb.webp", "file_path_medium": "uploads/attachments/7de7a4a0-b994-4597-8b51-2c81497eb2aa/medium.webp"}	\N	2026-08-21 01:43:59.475-07
b274a344-59c4-4511-96ee-1fc35bafab0e	\N	CREATE	Product	647410d2-4611-4fea-bc49-6afc1d7a377f	\N	{"name": "Ethiopian Arabica Coffee", "slug": "ethiopian-arabica-coffee", "status": "Available", "created_at": "2026-08-25T09:33:05.238Z", "deleted_at": null, "product_id": "647410d2-4611-4fea-bc49-6afc1d7a377f", "updated_at": "2026-08-25T09:33:05.238Z", "category_id": "8f352612-c4d6-4130-a466-a59c25d28bd2", "applications": [], "publish_status": "published", "specifications": {"Origin": "Ethiopia", "Quality": "Export Grade", "Packaging": "Export-grade packaging", "Processing": "Washed & Natural", "Product Type": "Arabica Coffee"}, "full_description": "<p>Premium&nbsp;Ethiopian&nbsp;Arabica&nbsp;coffee&nbsp;sourced&nbsp;from&nbsp;renowned&nbsp;coffee-growing&nbsp;regions,&nbsp;selected&nbsp;and&nbsp;prepared&nbsp;to&nbsp;meet&nbsp;international&nbsp;quality&nbsp;and&nbsp;traceability&nbsp;standards.</p>", "short_description": "Premium Ethiopian Arabica coffee sourced from renowned coffee-growing regions, selected and prepared to meet international quality and traceability standards."}	2026-08-25 02:33:05.248-07
1909104c-2cdb-4d46-bf3f-fbdb7d51001b	\N	CREATE	Attachment	5d71ca6a-f444-4b4a-8321-a4f05ffbd76e	\N	{"width": 1400, "height": 900, "file_name": "port-1.png", "file_path": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T08:50:17.606Z", "uploaded_by": null, "attachment_id": "5d71ca6a-f444-4b4a-8321-a4f05ffbd76e", "file_path_large": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/large.webp", "file_path_thumb": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/thumb.webp", "file_path_medium": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/medium.webp"}	2026-08-21 01:50:18.26-07
43f63cd4-df2f-4faf-bbfb-06d86599579c	\N	CREATE	Attachment	a5008742-7d5f-4532-8603-2045555f9211	\N	{"width": 1263, "height": 1263, "file_name": "biiftuu.png", "file_path": "uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:22:24.732Z", "uploaded_by": null, "attachment_id": "a5008742-7d5f-4532-8603-2045555f9211", "file_path_large": "uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/large.webp", "file_path_thumb": "uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/thumb.webp", "file_path_medium": "uploads/attachments/a5008742-7d5f-4532-8603-2045555f9211/medium.webp"}	2026-08-21 02:22:27.08-07
811f4dda-bdb8-443e-b505-f1f558833cab	\N	CREATE	Partner	435ee576-1036-4b04-ae5c-a4d4a3a43938	\N	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T08:34:09.028Z", "description": ""}	2026-08-21 01:34:09.039-07
b1064940-6085-4268-8a84-cfb46b978e14	\N	CREATE	Attachment	0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f	\N	{"width": 6400, "height": 2944, "file_name": "home-4.jpg", "file_path": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:29:54.368Z", "uploaded_by": null, "attachment_id": "0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f", "file_path_large": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/large.webp", "file_path_thumb": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/thumb.webp", "file_path_medium": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/medium.webp"}	2026-08-24 02:29:56.284-07
67bb33b4-b56d-4043-ace7-4d77be8d3fbb	\N	UPDATE	PageHeader	2bf44f7f-96a7-4748-be6c-77adfa944ad2	{"icon": "LucideQuote", "title": "About Jarra Holdings", "description": "About Jarra Holdings", "attachment_id": null, "page_header_id": "2bf44f7f-96a7-4748-be6c-77adfa944ad2", "page_identifier": "about"}	{"icon": "LucideQuote", "title": "About Jarra Holdings", "description": "About Jarra Holdings", "attachment_id": "0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f", "page_header_id": "2bf44f7f-96a7-4748-be6c-77adfa944ad2", "page_identifier": "about"}	2026-08-24 02:29:59.165-07
7b2c0682-7073-40b4-a205-3c98e281371d	\N	CREATE	Attachment	b03d29ef-99c4-4661-80a9-9de53f5c8d25	\N	{"width": 740, "height": 415, "file_name": "trade-1.png", "file_path": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T08:52:04.657Z", "uploaded_by": null, "attachment_id": "b03d29ef-99c4-4661-80a9-9de53f5c8d25", "file_path_large": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/large.webp", "file_path_thumb": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/thumb.webp", "file_path_medium": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/medium.webp"}	2026-08-21 01:52:04.879-07
d17e9398-d284-4bbc-84c1-f103c812ab38	\N	CREATE	Attachment	8d7fae83-48ae-4254-9cb7-34d3491441af	\N	{"width": 2752, "height": 1536, "file_name": "contact-section.jpg", "file_path": "uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T14:04:19.524Z", "uploaded_by": null, "attachment_id": "8d7fae83-48ae-4254-9cb7-34d3491441af", "file_path_large": "uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/large.webp", "file_path_thumb": "uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/thumb.webp", "file_path_medium": "uploads/attachments/8d7fae83-48ae-4254-9cb7-34d3491441af/medium.webp"}	2026-08-24 07:04:20.316-07
ab027df0-1445-4bbb-9054-7db486be3ed6	\N	CREATE	Attachment	aed694d0-f540-4878-89da-4d88dfc96a30	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T14:04:19.495Z", "uploaded_by": null, "attachment_id": "aed694d0-f540-4878-89da-4d88dfc96a30", "file_path_large": "uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/large.webp", "file_path_thumb": "uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/thumb.webp", "file_path_medium": "uploads/attachments/aed694d0-f540-4878-89da-4d88dfc96a30/medium.webp"}	2026-08-24 07:04:20.346-07
fe70867f-25ce-41b1-913e-8772d24c1138	\N	DELETE	Attachment	5d71ca6a-f444-4b4a-8321-a4f05ffbd76e	{"width": 1400, "height": 900, "file_name": "port-1.png", "file_path": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T08:50:17.606Z", "uploaded_by": null, "attachment_id": "5d71ca6a-f444-4b4a-8321-a4f05ffbd76e", "file_path_large": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/large.webp", "file_path_thumb": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/thumb.webp", "file_path_medium": "uploads/attachments/5d71ca6a-f444-4b4a-8321-a4f05ffbd76e/medium.webp"}	\N	2026-08-21 01:53:19.654-07
d286786d-96ff-4a07-8166-e7f35625914b	\N	CREATE	Attachment	fa828dcd-a13f-4fed-993d-1a2c186e43e6	\N	{"width": 740, "height": 415, "file_name": "trade-1.png", "file_path": "uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T08:53:24.780Z", "uploaded_by": null, "attachment_id": "fa828dcd-a13f-4fed-993d-1a2c186e43e6", "file_path_large": "uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/large.webp", "file_path_thumb": "uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/thumb.webp", "file_path_medium": "uploads/attachments/fa828dcd-a13f-4fed-993d-1a2c186e43e6/medium.webp"}	2026-08-21 01:53:24.995-07
97f9ac08-bddf-4b69-9936-f369b7671278	\N	DELETE	Attachment	b03d29ef-99c4-4661-80a9-9de53f5c8d25	{"width": 740, "height": 415, "file_name": "trade-1.png", "file_path": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T08:52:04.657Z", "uploaded_by": null, "attachment_id": "b03d29ef-99c4-4661-80a9-9de53f5c8d25", "file_path_large": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/large.webp", "file_path_thumb": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/thumb.webp", "file_path_medium": "uploads/attachments/b03d29ef-99c4-4661-80a9-9de53f5c8d25/medium.webp"}	\N	2026-08-21 01:53:28.032-07
9d77586a-9262-40ea-8375-676c1e0c3cc8	\N	CREATE	Attachment	32362bc3-9e5b-41e3-8b1c-c335c4fa5a56	\N	{"width": 1600, "height": 1068, "file_name": "Coffee.png", "file_path": "uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:03:22.499Z", "uploaded_by": null, "attachment_id": "32362bc3-9e5b-41e3-8b1c-c335c4fa5a56", "file_path_large": "uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/large.webp", "file_path_thumb": "uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/thumb.webp", "file_path_medium": "uploads/attachments/32362bc3-9e5b-41e3-8b1c-c335c4fa5a56/medium.webp"}	2026-08-21 02:03:23.135-07
1468cdd5-434e-404f-ba92-0a54dafe215f	\N	CREATE	Attachment	609b7ed1-6514-49b0-a060-61f26f1350b8	\N	{"width": 983, "height": 392, "file_name": "Cooperative_Bank_of_Oromia-3.png", "file_path": "uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:22:34.967Z", "uploaded_by": null, "attachment_id": "609b7ed1-6514-49b0-a060-61f26f1350b8", "file_path_large": "uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/large.webp", "file_path_thumb": "uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/thumb.webp", "file_path_medium": "uploads/attachments/609b7ed1-6514-49b0-a060-61f26f1350b8/medium.webp"}	2026-08-21 02:22:35.271-07
fb44e7b1-be8b-452d-a0d5-0b0399526052	\N	CREATE	Attachment	5868ece9-9563-435d-a1cd-84fea5923148	\N	{"width": null, "height": null, "file_name": "1787580267130-925542409_Invoice-142963.pdf", "file_path": "uploads/attachments/1787580267130-925542409_Invoice-142963.pdf", "mime_type": "application/pdf", "created_at": "2026-08-24T14:04:27.132Z", "uploaded_by": null, "attachment_id": "5868ece9-9563-435d-a1cd-84fea5923148", "file_path_large": null, "file_path_thumb": null, "file_path_medium": null}	2026-08-24 07:04:27.136-07
6f11d745-cd17-4259-a413-e6928d84cce1	\N	CREATE	Attachment	1d09bf35-62cf-42b1-8bf2-284c32710d7b	\N	{"width": 625, "height": 350, "file_name": "soybean-3.jpg", "file_path": "uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/large.webp", "mime_type": "image/webp", "created_at": "2026-08-26T13:53:05.775Z", "uploaded_by": null, "attachment_id": "1d09bf35-62cf-42b1-8bf2-284c32710d7b", "file_path_large": "uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/large.webp", "file_path_thumb": "uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/thumb.webp", "file_path_medium": "uploads/attachments/1d09bf35-62cf-42b1-8bf2-284c32710d7b/medium.webp"}	2026-08-26 06:53:05.948-07
4472cc3d-e830-49d8-9a41-89bd14c865ee	\N	CREATE	Attachment	865ca954-c1e2-41a1-a74c-b8010c02caa6	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:36:44.216Z", "uploaded_by": null, "attachment_id": "865ca954-c1e2-41a1-a74c-b8010c02caa6", "file_path_large": "uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/large.webp", "file_path_thumb": "uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/thumb.webp", "file_path_medium": "uploads/attachments/865ca954-c1e2-41a1-a74c-b8010c02caa6/medium.webp"}	2026-08-24 02:36:45.706-07
049912d0-c5ba-437c-9bdf-f04516189257	\N	CREATE	Attachment	bb080df1-b560-4fb4-97b4-7d016bf4d1ba	\N	{"width": 740, "height": 415, "file_name": "trade-1.png", "file_path": "uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:03:33.914Z", "uploaded_by": null, "attachment_id": "bb080df1-b560-4fb4-97b4-7d016bf4d1ba", "file_path_large": "uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/large.webp", "file_path_thumb": "uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/thumb.webp", "file_path_medium": "uploads/attachments/bb080df1-b560-4fb4-97b4-7d016bf4d1ba/medium.webp"}	2026-08-21 02:03:34.124-07
2ad47d66-3da9-4229-9172-6e4627ed6ee6	\N	DELETE	Attachment	0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f	{"width": 6400, "height": 2944, "file_name": "home-4.jpg", "file_path": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:29:54.368Z", "uploaded_by": null, "attachment_id": "0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f", "file_path_large": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/large.webp", "file_path_thumb": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/thumb.webp", "file_path_medium": "uploads/attachments/0ac1cbcc-7dca-4782-9f8e-815ccfc14b0f/medium.webp"}	\N	2026-08-24 02:36:45.94-07
e2bdf7f3-52b8-47fb-98ad-eda4b312ad32	\N	UPDATE	PageHeader	2bf44f7f-96a7-4748-be6c-77adfa944ad2	{"icon": "LucideQuote", "title": "About Jarra Holdings", "description": "About Jarra Holdings", "attachment_id": null, "page_header_id": "2bf44f7f-96a7-4748-be6c-77adfa944ad2", "page_identifier": "about"}	{"icon": "LucideQuote", "title": "About Jarra Holdings S.C.", "description": "Building trusted trade and sustainable opportunities from Ethiopia to global markets.", "attachment_id": "865ca954-c1e2-41a1-a74c-b8010c02caa6", "page_header_id": "2bf44f7f-96a7-4748-be6c-77adfa944ad2", "page_identifier": "about"}	2026-08-24 02:36:49.385-07
98b255df-11a3-4af6-9219-8fae9ac1d293	\N	CREATE	Attachment	64cbc56c-a0b3-4c9b-b155-1cd06f260212	\N	{"width": 1500, "height": 617, "file_name": "machinery-1.jpg", "file_path": "uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:12:12.769Z", "uploaded_by": null, "attachment_id": "64cbc56c-a0b3-4c9b-b155-1cd06f260212", "file_path_large": "uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/large.webp", "file_path_thumb": "uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/thumb.webp", "file_path_medium": "uploads/attachments/64cbc56c-a0b3-4c9b-b155-1cd06f260212/medium.webp"}	2026-08-21 02:12:13.111-07
dfaeca2d-ea3c-4faa-aaf3-b763b0920711	\N	CREATE	Product	ac7fa049-551e-49f5-81d1-212a2791e360	\N	{"name": "Soybeans", "slug": "soybeans", "status": "Available", "created_at": "2026-08-26T13:53:28.328Z", "deleted_at": null, "product_id": "ac7fa049-551e-49f5-81d1-212a2791e360", "updated_at": "2026-08-26T13:53:28.328Z", "applications": [], "publish_status": "published", "specifications": {"Origin": "Ethiopia", "Quality": "Graded", "Packaging": "Bulk", "Product Type": "Soybeans"}, "full_description": "<p>Quality&nbsp;Ethiopian&nbsp;soybeans&nbsp;supplied&nbsp;for&nbsp;food&nbsp;processing,&nbsp;agricultural&nbsp;applications,&nbsp;and&nbsp;other&nbsp;commercial&nbsp;uses.</p>", "short_description": "Quality Ethiopian soybeans supplied for food processing, agricultural applications, and other commercial uses."}	2026-08-26 06:53:28.334-07
00586fa8-7128-4b4c-ae2e-25751331e377	00000000-0000-4000-8000-000000000001	UPDATE	Canvas	d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9	{"words": {"center": "IMPACTS"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.", "title_prefix": "Creating Value.", "vision_title": "Our Vision", "title_highlight": " Driving Sustainable Growth.", "vision_description": "To be a leading community-based conglomerate in Africa by 2030."}	{"words": {"center": "IMPACTING"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.", "title_prefix": "Creating Value.", "vision_title": "Our Vision", "title_highlight": " Driving Sustainable Growth.", "vision_description": "To be a leading community-based conglomerate in Africa by 2030."}	2026-08-31 00:35:51.751-07
02c0655c-6801-43e3-a045-466a83bc3b52	00000000-0000-4000-8000-000000000001	CREATE	ServiceExperience	560e3bfa-61b4-41c9-8294-ac09511c38dd	\N	{"steps": [{"num": "01", "desc": "Understand customer and market requirements.", "title": "Understand"}, {"num": "02", "desc": "Identify appropriate products and supply channels.", "title": "Source"}, {"num": "03", "desc": "Manage import, export, and trading activities", "title": "Trade"}, {"num": "04", "desc": "Utilize warehousing and facilities where required.", "title": "Store"}, {"num": "05", "desc": "Connect products and solutions to customers and target markets.", "title": "Deliver"}], "heading": "From Source to Market", "created_at": "2026-08-31T09:14:07.021Z", "deleted_at": null, "subheading": "Our integrated approach ensures reliability at every step of the commercial supply chain.", "updated_at": "2026-08-31T09:14:07.021Z", "service_experience_id": "560e3bfa-61b4-41c9-8294-ac09511c38dd"}	2026-08-31 02:14:07.031-07
f02d6211-a449-43c7-9a2b-4da12c36ecd5	\N	CREATE	Attachment	ef7f07c0-9d43-4cfe-bde9-cae4e05583cd	\N	{"width": 703, "height": 703, "file_name": "2.png", "file_path": "uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:22:12.204Z", "uploaded_by": null, "attachment_id": "ef7f07c0-9d43-4cfe-bde9-cae4e05583cd", "file_path_large": "uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/large.webp", "file_path_thumb": "uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/thumb.webp", "file_path_medium": "uploads/attachments/ef7f07c0-9d43-4cfe-bde9-cae4e05583cd/medium.webp"}	2026-08-21 02:22:12.89-07
2fc79bc8-30b7-4397-8853-8a09208356c7	\N	CREATE	Attachment	dc4a48ec-5e51-423d-8cec-ee1aa1a05257	\N	{"width": 1497, "height": 1303, "file_name": "agri.png", "file_path": "uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:22:18.765Z", "uploaded_by": null, "attachment_id": "dc4a48ec-5e51-423d-8cec-ee1aa1a05257", "file_path_large": "uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/large.webp", "file_path_thumb": "uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/thumb.webp", "file_path_medium": "uploads/attachments/dc4a48ec-5e51-423d-8cec-ee1aa1a05257/medium.webp"}	2026-08-21 02:22:21.058-07
e617136d-1bcc-4df3-99df-00f13452f9a0	\N	CREATE	Attachment	4341324e-a551-4fdd-9079-b12bf5234221	\N	{"width": 1409, "height": 1384, "file_name": "geda.png", "file_path": "uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:22:42.293Z", "uploaded_by": null, "attachment_id": "4341324e-a551-4fdd-9079-b12bf5234221", "file_path_large": "uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/large.webp", "file_path_thumb": "uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/thumb.webp", "file_path_medium": "uploads/attachments/4341324e-a551-4fdd-9079-b12bf5234221/medium.webp"}	2026-08-21 02:22:44.816-07
5d862c9c-6900-45e6-8738-cb9b6b0bdffd	\N	CREATE	Attachment	099417c5-996d-4008-b627-e4a60055204d	\N	{"width": 4468, "height": 2506, "file_name": "odaa.png", "file_path": "uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:22:51.048Z", "uploaded_by": null, "attachment_id": "099417c5-996d-4008-b627-e4a60055204d", "file_path_large": "uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/large.webp", "file_path_thumb": "uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/thumb.webp", "file_path_medium": "uploads/attachments/099417c5-996d-4008-b627-e4a60055204d/medium.webp"}	2026-08-21 02:22:54.416-07
16be5af1-719c-4df2-a720-c35e50f24fc4	\N	CREATE	Attachment	bd662192-e8af-4919-b264-fb2a55548583	\N	{"width": 2462, "height": 781, "file_name": "siinqee.png", "file_path": "uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:23:07.569Z", "uploaded_by": null, "attachment_id": "bd662192-e8af-4919-b264-fb2a55548583", "file_path_large": "uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/large.webp", "file_path_thumb": "uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/thumb.webp", "file_path_medium": "uploads/attachments/bd662192-e8af-4919-b264-fb2a55548583/medium.webp"}	2026-08-21 02:23:09.19-07
30d6df84-8198-44e5-a6f6-f81e6b69c15f	\N	CREATE	Attachment	9ea8d618-d0be-4246-8a52-07640d8ee09c	\N	{"width": 1250, "height": 1250, "file_name": "Untitled design (3).png", "file_path": "uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:23:20.044Z", "uploaded_by": null, "attachment_id": "9ea8d618-d0be-4246-8a52-07640d8ee09c", "file_path_large": "uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/large.webp", "file_path_thumb": "uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/thumb.webp", "file_path_medium": "uploads/attachments/9ea8d618-d0be-4246-8a52-07640d8ee09c/medium.webp"}	2026-08-21 02:23:21.82-07
fda2db16-65e3-400e-ad05-002f344d25d0	\N	CREATE	Attachment	c0029eee-422f-4c34-875f-f66877870f6d	\N	{"width": 1397, "height": 1397, "file_name": "Untitled design.png", "file_path": "uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:23:25.149Z", "uploaded_by": null, "attachment_id": "c0029eee-422f-4c34-875f-f66877870f6d", "file_path_large": "uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/large.webp", "file_path_thumb": "uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/thumb.webp", "file_path_medium": "uploads/attachments/c0029eee-422f-4c34-875f-f66877870f6d/medium.webp"}	2026-08-21 02:23:27.696-07
1942a758-7645-444e-841d-1b584176e23c	\N	CREATE	Attachment	15199c87-8d55-4893-943e-62d71e777183	\N	{"width": 2752, "height": 1536, "file_name": "service-section.jpg", "file_path": "uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:45:02.513Z", "uploaded_by": null, "attachment_id": "15199c87-8d55-4893-943e-62d71e777183", "file_path_large": "uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/large.webp", "file_path_thumb": "uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/thumb.webp", "file_path_medium": "uploads/attachments/15199c87-8d55-4893-943e-62d71e777183/medium.webp"}	2026-08-24 02:45:03.708-07
f4e17074-ecf0-4b9a-8bd3-7b67561257f3	\N	CREATE	Attachment	ca8824e7-c23d-4a47-881b-51bc53fb98f8	\N	{"width": 1024, "height": 683, "file_name": "solar-2.png", "file_path": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:26:13.787Z", "uploaded_by": null, "attachment_id": "ca8824e7-c23d-4a47-881b-51bc53fb98f8", "file_path_large": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/large.webp", "file_path_thumb": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/thumb.webp", "file_path_medium": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/medium.webp"}	2026-08-21 02:26:14.222-07
d7439b6d-3e0c-496b-9a7b-73ce45542d5c	\N	CREATE	PageHeader	b86100fe-4a8c-4deb-8cbd-28e91126f889	\N	{"icon": "BriefcaseBusiness", "title": "Our Services", "description": "Reliable trade, supply, and logistics solutions built to connect businesses with global opportunities.", "attachment_id": "15199c87-8d55-4893-943e-62d71e777183", "page_header_id": "b86100fe-4a8c-4deb-8cbd-28e91126f889", "page_identifier": "services"}	2026-08-24 02:45:05.632-07
8937b084-6a77-4f9e-abec-e98e939dfed1	\N	CREATE	Attachment	db6865ed-2a7c-4f61-8c8f-187b9298adfe	\N	{"width": 1640, "height": 924, "file_name": "solar.jpg", "file_path": "uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:27:07.447Z", "uploaded_by": null, "attachment_id": "db6865ed-2a7c-4f61-8c8f-187b9298adfe", "file_path_large": "uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/large.webp", "file_path_thumb": "uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/thumb.webp", "file_path_medium": "uploads/attachments/db6865ed-2a7c-4f61-8c8f-187b9298adfe/medium.webp"}	2026-08-21 02:27:07.955-07
7ba01b25-f3ad-45ed-acae-311ee467774f	\N	DELETE	Attachment	ca8824e7-c23d-4a47-881b-51bc53fb98f8	{"width": 1024, "height": 683, "file_name": "solar-2.png", "file_path": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:26:13.787Z", "uploaded_by": null, "attachment_id": "ca8824e7-c23d-4a47-881b-51bc53fb98f8", "file_path_large": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/large.webp", "file_path_thumb": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/thumb.webp", "file_path_medium": "uploads/attachments/ca8824e7-c23d-4a47-881b-51bc53fb98f8/medium.webp"}	\N	2026-08-21 02:27:08.047-07
fcb4d51c-605e-4cda-9059-b7b3945cc2ff	\N	DELETE	Attachment	ca04cd79-a349-433d-9ea3-ef7634744b82	{"width": 694, "height": 750, "file_name": "Screenshot 2026-06-23 103346.png", "file_path": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T12:08:17.721Z", "uploaded_by": null, "attachment_id": "ca04cd79-a349-433d-9ea3-ef7634744b82", "file_path_large": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/large.webp", "file_path_thumb": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/thumb.webp", "file_path_medium": "uploads/attachments/ca04cd79-a349-433d-9ea3-ef7634744b82/medium.webp"}	\N	2026-08-21 07:29:42.271-07
77988fe0-06dd-41dd-9bd5-40f955a219e5	\N	CREATE	ProductInquiry	4c217b24-a878-493d-9ee7-06071bfbbb3e	\N	{"name": "Amanuel Daniel", "email": "2000amandanm@gmail.com", "phone": "0919755719", "status": "pending", "company": "fghjkl;", "message": "sdjfnjsdfnkjsndf sjkdjfnsjdn fskjdfnjnsjdnf jk sdfnsjdfnjnsdf", "quantity": "knjjzndfn jsdf sjdkfnsdf sdijfnsdf", "created_at": "2026-08-26T13:55:26.563Z", "deleted_at": null, "inquiry_id": "4c217b24-a878-493d-9ee7-06071bfbbb3e", "product_id": "ac7fa049-551e-49f5-81d1-212a2791e360", "updated_at": "2026-08-26T13:55:26.563Z"}	2026-08-26 06:55:26.57-07
54f71936-1e0c-4180-87c6-bcfec7756040	\N	CREATE	Attachment	911834dc-ff4a-4717-a15a-4eed3f149860	\N	{"width": 2752, "height": 1536, "file_name": "product-section.jpg", "file_path": "uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:49:33.854Z", "uploaded_by": null, "attachment_id": "911834dc-ff4a-4717-a15a-4eed3f149860", "file_path_large": "uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/large.webp", "file_path_thumb": "uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/thumb.webp", "file_path_medium": "uploads/attachments/911834dc-ff4a-4717-a15a-4eed3f149860/medium.webp"}	2026-08-24 02:49:35.684-07
419dfce2-a2ea-4054-9f94-9a3580814a04	\N	CREATE	PageHeader	e5756e8b-8156-4a24-b99a-5186c830c7fb	\N	{"icon": "LucidePackage", "title": "Our Products", "description": "Quality products and solutions sourced and supplied to meet the needs of diverse industries and markets.", "attachment_id": "911834dc-ff4a-4717-a15a-4eed3f149860", "page_header_id": "e5756e8b-8156-4a24-b99a-5186c830c7fb", "page_identifier": "products"}	2026-08-24 02:49:37.405-07
44f5bf9f-2e26-4dbc-9e73-6a62d24c968a	\N	CREATE	Attachment	61f0e28a-54be-487a-92ba-86a8bb9998a9	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/large.webp", "mime_type": "image/webp", "created_at": "2026-08-27T09:06:12.343Z", "uploaded_by": null, "attachment_id": "61f0e28a-54be-487a-92ba-86a8bb9998a9", "file_path_large": "uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/large.webp", "file_path_thumb": "uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/thumb.webp", "file_path_medium": "uploads/attachments/61f0e28a-54be-487a-92ba-86a8bb9998a9/medium.webp"}	2026-08-27 02:06:13.72-07
f7840879-5689-481b-bc9a-b16a6dc7698b	00000000-0000-4000-8000-000000000001	UPDATE	Purpose	2500950d-6c08-4a60-840a-086a209e7afb	{"quote": "\\"Delivering innovative and sustainable solutions across industries.\\"", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [], "subtitle": "Our Purpose", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	{"quote": "Delivering innovative and sustainable solutions across industries.", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [], "subtitle": "Our PurposeS", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	2026-08-31 00:36:58.393-07
8a2d9296-09c8-44c2-a58f-94c390931207	00000000-0000-4000-8000-000000000001	UPDATE	Canvas	d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9	{"words": {"center": "IMPACTING"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.", "title_prefix": "Creating Value.", "vision_title": "Our Visions", "title_highlight": " Driving Sustainable Growth.", "vision_description": "To be a leading community-based conglomerate in Africa by 2030....."}	{"words": {"center": "IMPACTING"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.", "title_prefix": "Creating Value.", "vision_title": "Our Vision", "title_highlight": " Driving Sustainable Growth.", "vision_description": "To be a leading community-based conglomerate in Africa by 2030."}	2026-08-31 00:39:28.735-07
af9613c1-1fdd-4084-b394-0e58727268fa	00000000-0000-4000-8000-000000000001	CREATE	ServiceCapability	583a3cf3-2478-48cc-a20f-948f608c88b8	\N	{"heading": "One Partner. Multiple Sectors.", "created_at": "2026-08-31T13:04:54.991Z", "deleted_at": null, "subheading": "Jarra Holdings operates as a multi-sector company with activities spanning import, export, trading, and supply across key economic pillars.", "updated_at": "2026-08-31T13:04:54.991Z", "capabilities": [{"id": "sector-1788181172885", "desc": "Supplying essential agricultural inputs to support farming communities and boost productivity.", "name": " AGRICULTURE", "image": ""}], "service_capability_id": "583a3cf3-2478-48cc-a20f-948f608c88b8"}	2026-08-31 06:04:55.018-07
626a555b-5654-4248-9d36-5300441a1604	\N	CREATE	Attachment	ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce	\N	{"width": 1200, "height": 613, "file_name": "logistic.png", "file_path": "uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T09:35:58.817Z", "uploaded_by": null, "attachment_id": "ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce", "file_path_large": "uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/large.webp", "file_path_thumb": "uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/thumb.webp", "file_path_medium": "uploads/attachments/ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce/medium.webp"}	2026-08-21 02:35:59.233-07
e565ca39-751b-49da-bb72-5fb5bf7e37c0	00000000-0000-4000-8000-000000000001	CREATE	Service	0df774a1-a13b-48a8-9457-150c45f8682f	\N	{"icon": "Network", "order": 0, "title": "Market & Supply Solutions", "content": "Solutions designed around market demand, customer needs, and supply gaps across multiple sectors, driving our role as a comprehensive multi-sector business.", "created_at": "2026-08-31T13:09:54.883Z", "service_id": "0df774a1-a13b-48a8-9457-150c45f8682f"}	2026-08-31 06:09:54.886-07
4b049baa-9e7e-45eb-99c1-019435207ea5	\N	CREATE	Attachment	3b0810b6-07ec-4fc2-91b1-59362ae5a77d	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:10:34.436Z", "uploaded_by": null, "attachment_id": "3b0810b6-07ec-4fc2-91b1-59362ae5a77d", "file_path_large": "uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/large.webp", "file_path_thumb": "uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/thumb.webp", "file_path_medium": "uploads/attachments/3b0810b6-07ec-4fc2-91b1-59362ae5a77d/medium.webp"}	2026-08-31 06:10:35.866-07
23c0e854-b6c5-4ce9-8a33-1068fddb24a2	\N	CREATE	Slider	3df07029-51db-4f17-a1c3-8db216fa77ea	\N	{"title": "New Slide Title", "slider_id": "3df07029-51db-4f17-a1c3-8db216fa77ea", "button_url": null, "created_at": "2026-08-21T09:35:01.060Z", "deleted_at": null, "updated_at": "2026-08-21T09:35:01.060Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-21 02:35:01.066-07
a7329b77-bbc0-4b97-baf7-9ead2d579460	\N	CREATE	Attachment	522da8b9-d779-4874-ba2d-7840623d94dc	\N	{"width": 449, "height": 612, "file_name": "man_image_1.jpg", "file_path": "uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:30:46.875Z", "uploaded_by": null, "attachment_id": "522da8b9-d779-4874-ba2d-7840623d94dc", "file_path_large": "uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/large.webp", "file_path_thumb": "uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/thumb.webp", "file_path_medium": "uploads/attachments/522da8b9-d779-4874-ba2d-7840623d94dc/medium.webp"}	2026-08-21 07:30:47.257-07
63022467-42d1-4b66-815d-9fff804cde9c	\N	CREATE	Attachment	ba5d60a6-bebd-4f79-961f-63e8e61cc867	\N	{"width": 2752, "height": 1536, "file_name": "facilities-section.jpg", "file_path": "uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:52:17.450Z", "uploaded_by": null, "attachment_id": "ba5d60a6-bebd-4f79-961f-63e8e61cc867", "file_path_large": "uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/large.webp", "file_path_thumb": "uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/thumb.webp", "file_path_medium": "uploads/attachments/ba5d60a6-bebd-4f79-961f-63e8e61cc867/medium.webp"}	2026-08-24 02:52:18.541-07
14a20655-e6d1-468e-b216-5bdd0b6e8ba4	\N	DELETE	Attachment	494a931a-4df6-4b41-ac98-ff8921081bee	{"width": 720, "height": 571, "file_name": "eth_geography.png", "file_path": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:42:11.030Z", "uploaded_by": null, "attachment_id": "494a931a-4df6-4b41-ac98-ff8921081bee", "file_path_large": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/large.webp", "file_path_thumb": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/thumb.webp", "file_path_medium": "uploads/attachments/494a931a-4df6-4b41-ac98-ff8921081bee/medium.webp"}	\N	2026-08-21 07:31:41.305-07
0fdf7cc4-63b6-4e3d-b684-f29a2f9aff4c	\N	CREATE	Attachment	2070b2f1-1d84-472a-b7a9-e432667e0765	\N	{"width": 449, "height": 612, "file_name": "man_image_1.jpg", "file_path": "uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:31:47.596Z", "uploaded_by": null, "attachment_id": "2070b2f1-1d84-472a-b7a9-e432667e0765", "file_path_large": "uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/large.webp", "file_path_thumb": "uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/thumb.webp", "file_path_medium": "uploads/attachments/2070b2f1-1d84-472a-b7a9-e432667e0765/medium.webp"}	2026-08-21 07:31:47.818-07
ce58cca9-d253-4d5b-ab34-67aad2eeeb35	\N	CREATE	Attachment	bb5f7e94-bad7-4b0f-908b-8c6967d96437	\N	{"width": 408, "height": 612, "file_name": "man_image.jpg", "file_path": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:31:55.757Z", "uploaded_by": null, "attachment_id": "bb5f7e94-bad7-4b0f-908b-8c6967d96437", "file_path_large": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/large.webp", "file_path_thumb": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/thumb.webp", "file_path_medium": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/medium.webp"}	2026-08-21 07:31:55.973-07
def89536-2e8c-444c-988d-026ef84d9134	\N	DELETE	Attachment	3de6afc7-2ef8-4810-a6ee-fb5a300768ee	{"width": 640, "height": 640, "file_name": "asm-hero.png", "file_path": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/large.webp", "mime_type": "image/webp", "created_at": "2026-08-11T18:43:46.263Z", "uploaded_by": null, "attachment_id": "3de6afc7-2ef8-4810-a6ee-fb5a300768ee", "file_path_large": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/large.webp", "file_path_thumb": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/thumb.webp", "file_path_medium": "uploads/attachments/3de6afc7-2ef8-4810-a6ee-fb5a300768ee/medium.webp"}	\N	2026-08-21 07:31:56.172-07
579b66b4-4030-4f2b-9ba0-4d8c26f643cc	\N	CREATE	Attachment	78590239-178e-4677-ac73-85c4cd6c15e8	\N	{"width": 449, "height": 612, "file_name": "man_image_1.jpg", "file_path": "uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:32:07.036Z", "uploaded_by": null, "attachment_id": "78590239-178e-4677-ac73-85c4cd6c15e8", "file_path_large": "uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/large.webp", "file_path_thumb": "uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/thumb.webp", "file_path_medium": "uploads/attachments/78590239-178e-4677-ac73-85c4cd6c15e8/medium.webp"}	2026-08-21 07:32:07.245-07
bda25e8f-6881-4665-84a5-7d68560f982b	\N	DELETE	Attachment	bb5f7e94-bad7-4b0f-908b-8c6967d96437	{"width": 408, "height": 612, "file_name": "man_image.jpg", "file_path": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:31:55.757Z", "uploaded_by": null, "attachment_id": "bb5f7e94-bad7-4b0f-908b-8c6967d96437", "file_path_large": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/large.webp", "file_path_thumb": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/thumb.webp", "file_path_medium": "uploads/attachments/bb5f7e94-bad7-4b0f-908b-8c6967d96437/medium.webp"}	\N	2026-08-21 07:32:07.378-07
c836b33c-94e9-49fe-b0eb-a93fe1121283	\N	CREATE	PageHeader	d9bdb7f3-610e-4161-8ca5-2ba9a1169c97	\N	{"icon": "LucideBuilding2", "title": "Our Facilities", "description": "Strategic facilities and infrastructure that support Jarra Holdings’ growing business operations and long-term investments.", "attachment_id": "ba5d60a6-bebd-4f79-961f-63e8e61cc867", "page_header_id": "d9bdb7f3-610e-4161-8ca5-2ba9a1169c97", "page_identifier": "facilities"}	2026-08-24 02:52:20.758-07
4daa3c39-5c38-417b-bb15-738028947718	\N	CREATE	Attachment	5bf983e0-7734-4921-bf15-e027eabb1322	\N	{"width": 2752, "height": 1536, "file_name": "business-section.jpg", "file_path": "uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/large.webp", "mime_type": "image/webp", "created_at": "2026-08-27T09:10:52.286Z", "uploaded_by": null, "attachment_id": "5bf983e0-7734-4921-bf15-e027eabb1322", "file_path_large": "uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/large.webp", "file_path_thumb": "uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/thumb.webp", "file_path_medium": "uploads/attachments/5bf983e0-7734-4921-bf15-e027eabb1322/medium.webp"}	2026-08-27 02:10:53.875-07
0572c62b-2c09-4c52-98f5-5cdd9c8741fd	\N	CREATE	Attachment	efe29302-572d-4a12-bad8-011f36fb56d1	\N	{"width": 449, "height": 612, "file_name": "man_image_1.jpg", "file_path": "uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:33:14.761Z", "uploaded_by": null, "attachment_id": "efe29302-572d-4a12-bad8-011f36fb56d1", "file_path_large": "uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/large.webp", "file_path_thumb": "uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/thumb.webp", "file_path_medium": "uploads/attachments/efe29302-572d-4a12-bad8-011f36fb56d1/medium.webp"}	2026-08-21 07:33:15.033-07
839c090e-8853-4815-b5b0-09421802fb18	\N	DELETE	Leadership	7dc75fd4-0983-40fb-a369-5ce5d56ee1f5	{"name": "jhgfds", "level": 2, "title": "kjhgfd", "header": "Jarra Holdings", "is_active": true, "parent_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77", "created_at": "2026-08-11T17:44:28.934Z", "deleted_at": "2026-08-21T14:32:50.653Z", "updated_at": "2026-08-21T14:32:50.654Z", "description": ",mnbvfcdvbnm", "leadership_id": "7dc75fd4-0983-40fb-a369-5ce5d56ee1f5"}	\N	2026-08-21 07:32:50.657-07
acc83828-ab83-4689-8552-c2e42f15534d	\N	CREATE	Attachment	f2f63abd-223d-4780-a851-875c4bcfd0eb	\N	{"width": 449, "height": 612, "file_name": "man_image_1.jpg", "file_path": "uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:33:47.125Z", "uploaded_by": null, "attachment_id": "f2f63abd-223d-4780-a851-875c4bcfd0eb", "file_path_large": "uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/large.webp", "file_path_thumb": "uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/thumb.webp", "file_path_medium": "uploads/attachments/f2f63abd-223d-4780-a851-875c4bcfd0eb/medium.webp"}	2026-08-21 07:33:47.4-07
a45de0b8-3cc3-4b21-9ae4-b93095e9ac55	\N	CREATE	Attachment	5101e8a0-1070-45a3-be01-78757125fdc8	\N	{"width": 449, "height": 612, "file_name": "man_image_1.jpg", "file_path": "uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:34:56.923Z", "uploaded_by": null, "attachment_id": "5101e8a0-1070-45a3-be01-78757125fdc8", "file_path_large": "uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/large.webp", "file_path_thumb": "uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/thumb.webp", "file_path_medium": "uploads/attachments/5101e8a0-1070-45a3-be01-78757125fdc8/medium.webp"}	2026-08-21 07:34:57.259-07
22b9e647-9601-4055-a870-56774c8c0ec3	\N	CREATE	Attachment	847beb6d-bcdc-4683-8149-c69f1f63b5f8	\N	{"width": 2752, "height": 1536, "file_name": "news-section.jpg", "file_path": "uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:56:02.365Z", "uploaded_by": null, "attachment_id": "847beb6d-bcdc-4683-8149-c69f1f63b5f8", "file_path_large": "uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/large.webp", "file_path_thumb": "uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/thumb.webp", "file_path_medium": "uploads/attachments/847beb6d-bcdc-4683-8149-c69f1f63b5f8/medium.webp"}	2026-08-24 02:56:03.887-07
2d12dc9e-e8be-4b42-b50c-0788352490d1	\N	CREATE	PageHeader	b6d8540b-93c2-4689-a7fe-2b815a6735f0	\N	{"icon": "LucideNewspaper", "title": "News & Updates", "description": "Stay informed about Jarra Holdings’ latest developments, activities, achievements, and business updates.", "attachment_id": "847beb6d-bcdc-4683-8149-c69f1f63b5f8", "page_header_id": "b6d8540b-93c2-4689-a7fe-2b815a6735f0", "page_identifier": "news"}	2026-08-24 02:56:09.414-07
ac4abb3f-7913-4842-b1c9-975e28e0e1a0	\N	CREATE	Attachment	419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a	\N	{"width": 449, "height": 612, "file_name": "man_image_1.jpg", "file_path": "uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:36:11.773Z", "uploaded_by": null, "attachment_id": "419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a", "file_path_large": "uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/large.webp", "file_path_thumb": "uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/thumb.webp", "file_path_medium": "uploads/attachments/419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a/medium.webp"}	2026-08-21 07:36:12.096-07
302d4d1c-a647-4063-be6a-44a9175be923	\N	CREATE	PageHeader	b813fceb-4feb-4e02-8dc8-782ba0e9b598	\N	{"icon": "LucideBuilding2", "title": "Jarra Holdings Businesses", "description": "A diversified portfolio of businesses driving sustainable growth, investment, and economic opportunity across Ethiopia and beyond.", "attachment_id": "5bf983e0-7734-4921-bf15-e027eabb1322", "page_header_id": "b813fceb-4feb-4e02-8dc8-782ba0e9b598", "page_identifier": "businesses"}	2026-08-27 02:10:55.922-07
35144914-ad48-4b0b-9f33-76adff5740c8	00000000-0000-4000-8000-000000000001	UPDATE	Purpose	2500950d-6c08-4a60-840a-086a209e7afb	{"quote": "Delivering innovative and sustainable solutions across industries.", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [], "subtitle": "Our PurposeS", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	{"quote": "Delivering innovative and sustainable solutions across industries.", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [], "subtitle": "Our Purpose", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	2026-08-31 00:37:20.85-07
170d9c5c-6a03-4999-b271-b77b01915d68	\N	CREATE	Attachment	a05205d4-e169-408f-b17c-f79d5b30db46	\N	{"width": 200, "height": 200, "file_name": "mission.png", "file_path": "uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:52:32.355Z", "uploaded_by": null, "attachment_id": "a05205d4-e169-408f-b17c-f79d5b30db46", "file_path_large": "uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/large.webp", "file_path_thumb": "uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/thumb.webp", "file_path_medium": "uploads/attachments/a05205d4-e169-408f-b17c-f79d5b30db46/medium.webp"}	2026-08-21 07:52:32.547-07
a1a04c3b-02d5-41cf-8e76-0a8687ac74b3	\N	CREATE	Attachment	aea2015b-5d2e-4378-846c-691f8c335397	\N	{"width": 512, "height": 512, "file_name": "vision.png", "file_path": "uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:52:55.265Z", "uploaded_by": null, "attachment_id": "aea2015b-5d2e-4378-846c-691f8c335397", "file_path_large": "uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/large.webp", "file_path_thumb": "uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/thumb.webp", "file_path_medium": "uploads/attachments/aea2015b-5d2e-4378-846c-691f8c335397/medium.webp"}	2026-08-21 07:52:55.77-07
e2dd5fc4-6b14-4848-96bb-4a4fc6a0af8c	\N	CREATE	Attachment	89adb70b-a2ab-4f90-8b07-1c9953ba5c27	\N	{"width": 512, "height": 512, "file_name": "value.png", "file_path": "uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/large.webp", "mime_type": "image/webp", "created_at": "2026-08-21T14:53:17.248Z", "uploaded_by": null, "attachment_id": "89adb70b-a2ab-4f90-8b07-1c9953ba5c27", "file_path_large": "uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/large.webp", "file_path_thumb": "uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/thumb.webp", "file_path_medium": "uploads/attachments/89adb70b-a2ab-4f90-8b07-1c9953ba5c27/medium.webp"}	2026-08-21 07:53:17.62-07
d173c19e-702f-4f9a-b3cc-1a5f461b1407	00000000-0000-4000-8000-000000000001	CREATE	Service	e5c800a3-ae36-4385-9382-276e1377ec87	\N	{"icon": "AArrowDown", "title": "Import Services", "content": "Professional import and supply solutions across multiple categories, including agricultural inputs, construction materials, machinery, vehicles, electrical equipment, and other approved trading categories.", "created_at": "2026-08-31T09:10:08.267Z", "service_id": "e5c800a3-ae36-4385-9382-276e1377ec87"}	2026-08-31 02:10:08.286-07
5385c077-660d-4ab7-b96a-c6372d370525	\N	CREATE	Attachment	df8a536b-86ec-4136-98bb-1f2f909d0c95	\N	{"width": 2752, "height": 1536, "file_name": "career-section.jpg", "file_path": "uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T09:57:49.045Z", "uploaded_by": null, "attachment_id": "df8a536b-86ec-4136-98bb-1f2f909d0c95", "file_path_large": "uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/large.webp", "file_path_thumb": "uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/thumb.webp", "file_path_medium": "uploads/attachments/df8a536b-86ec-4136-98bb-1f2f909d0c95/medium.webp"}	2026-08-24 02:57:50.414-07
098c28a6-d289-4851-bb05-a4fca7d6c6b9	\N	CREATE	PageHeader	0ce1c1ea-a7ff-4543-a51d-2596ba9e5b8b	\N	{"icon": "LucideUsersRound", "title": "Careers at Jarra Holdings", "description": "Join a growing organization where talent, innovation, and opportunity come together to create lasting impact.", "attachment_id": "df8a536b-86ec-4136-98bb-1f2f909d0c95", "page_header_id": "0ce1c1ea-a7ff-4543-a51d-2596ba9e5b8b", "page_identifier": "careers"}	2026-08-24 02:57:53.172-07
d248f3f4-94f8-411e-ad42-038d79e1c121	00000000-0000-4000-8000-000000000001	CREATE	Canvas	d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9	\N	{"words": {"center": "IMPACTS"}, "canvas_id": "d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9", "created_at": "2026-08-31T07:22:31.363Z", "deleted_at": null, "updated_at": "2026-08-31T07:22:31.363Z", "description": "", "title_prefix": "", "vision_title": "", "title_highlight": "", "vision_description": ""}	2026-08-31 00:22:31.381-07
4eadbb14-46d9-4c38-a33e-399791dc4df5	00000000-0000-4000-8000-000000000001	UPDATE	Purpose	2500950d-6c08-4a60-840a-086a209e7afb	{"quote": "Delivering innovative and sustainable solutions across industries.", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [], "subtitle": "Our Purpose", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	{"quote": "Delivering innovative and sustainable solutions across industries.", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [{"icon": "Star", "title": "TEST PILLAR", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of"}], "subtitle": "Our Purpose", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	2026-08-31 00:37:46.278-07
8b122d76-5cd7-4935-9f95-c8afc63928e2	00000000-0000-4000-8000-000000000001	CREATE	Service	685a5dcf-98bd-4c09-8928-92d487a8373f	\N	{"icon": "AArrowUpIcon", "title": "Export Services", "content": "Export solutions connecting Ethiopian products with international markets, specializing in Ethiopian Arabica coffee, oilseeds, and pulses.", "created_at": "2026-08-31T09:10:27.129Z", "service_id": "685a5dcf-98bd-4c09-8928-92d487a8373f"}	2026-08-31 02:10:27.131-07
d4d8638d-677c-4898-9298-dd3bd18ce0ab	\N	UPDATE	User	00000000-0000-4000-8000-000000000001	{"email": "admin@gmail.com", "user_id": "00000000-0000-4000-8000-000000000001", "password": "$2b$10$tbwmw4lODzoz4slmPfIZ9OhljT2etos3oeyw6lRhVLIcOf26aMx0m", "full_name": "Admin Account", "is_active": true, "created_at": "2026-08-09T10:30:45.236Z", "updated_at": "2026-08-09T10:30:45.236Z", "phone_number": "251911000001", "user_type_id": null, "last_login_at": "2026-08-09T10:56:11.038Z", "profile_image": null, "is_first_logged_in": true, "reset_password_otp": null, "password_changed_at": null, "reset_password_attempts": 0, "reset_password_lock_until": null, "reset_password_otp_expires": null}	{"email": "admin@gmail.com", "user_id": "00000000-0000-4000-8000-000000000001", "password": "$2b$10$RZ4uHhNrn056KlkFaB7I4esDZIyffROLyhL5SKkgszwTfftEFJkM.", "full_name": "Admin Account", "is_active": true, "created_at": "2026-08-09T10:30:45.236Z", "updated_at": "2026-08-09T11:13:59.066Z", "phone_number": "251911000001", "user_type_id": null, "last_login_at": "2026-08-09T10:56:11.038Z", "profile_image": null, "is_first_logged_in": false, "reset_password_otp": null, "password_changed_at": "2026-08-09T11:13:59.066Z", "reset_password_attempts": 0, "reset_password_lock_until": null, "reset_password_otp_expires": null}	2026-08-09 04:13:59.08-07
fae8e295-f6ef-4f47-99c0-19246cd14d2f	\N	CREATE	Slider	de83de26-8467-4b68-b72e-dc3419d0f048	\N	{"title": "New Slide Title", "slider_id": "de83de26-8467-4b68-b72e-dc3419d0f048", "button_url": null, "created_at": "2026-08-11T07:30:15.974Z", "deleted_at": null, "updated_at": "2026-08-11T07:30:15.974Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-11 00:30:15.993-07
d32473bc-c4b9-40ff-8358-9c467c74f2b8	\N	CREATE	Slider	8a44d0fb-dd2a-4843-85b5-00ffc25b625b	\N	{"title": "New Slide Title", "slider_id": "8a44d0fb-dd2a-4843-85b5-00ffc25b625b", "button_url": null, "created_at": "2026-08-11T07:42:04.904Z", "deleted_at": null, "updated_at": "2026-08-11T07:42:04.904Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-11 00:42:04.918-07
0142415a-96a4-4887-9ab7-791de2a44049	\N	CREATE	Leadership	8c3626b8-92e4-4849-a26b-51ce29b3ac77	\N	{"name": "sdfghjklcvbnm,", "level": 1, "title": "cvbnm,./.,mnm,.,mn m,.,m,", "header": "Jarra Holdings", "is_active": true, "parent_id": null, "created_at": "2026-08-11T12:08:21.648Z", "deleted_at": null, "updated_at": "2026-08-11T12:08:21.648Z", "description": "bnjcnbjdbjnjdmsn jwnejfnwje", "leadership_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77"}	2026-08-11 05:08:21.65-07
5c4e41fd-5804-4005-a3c1-0239f1f3a0da	\N	UPDATE	Slider	de83de26-8467-4b68-b72e-dc3419d0f048	{"title": "New Slide Title", "slider_id": "de83de26-8467-4b68-b72e-dc3419d0f048", "button_url": null, "created_at": "2026-08-11T07:30:15.974Z", "deleted_at": null, "updated_at": "2026-08-11T07:30:15.974Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "New Slide Title", "slider_id": "de83de26-8467-4b68-b72e-dc3419d0f048", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:30:15.974Z", "deleted_at": null, "updated_at": "2026-08-11T17:39:31.987Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": null}	2026-08-11 10:39:32.001-07
f8de0f7d-e384-4f11-b10c-4a728787a221	\N	CREATE	FacilityOverview	6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3	\N	{"image": null, "heading": null, "created_at": "2026-09-01T14:12:12.186Z", "subheading": null, "updated_at": "2026-09-01T14:12:12.186Z", "description": null, "list_heading": null, "facility_overview_id": "6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3"}	2026-09-01 07:12:12.191-07
4e39e302-f38b-44e9-9ec9-10c0da18f0e1	\N	UPDATE	Slider	8a44d0fb-dd2a-4843-85b5-00ffc25b625b	{"title": "New Slide Title", "slider_id": "8a44d0fb-dd2a-4843-85b5-00ffc25b625b", "button_url": null, "created_at": "2026-08-11T07:42:04.904Z", "deleted_at": null, "updated_at": "2026-08-11T07:42:04.904Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "New Slide Title", "slider_id": "8a44d0fb-dd2a-4843-85b5-00ffc25b625b", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:42:04.904Z", "deleted_at": null, "updated_at": "2026-08-11T17:39:32.020Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": null}	2026-08-11 10:39:32.026-07
0abc2f03-bb4e-4bd9-947a-f4bf1007d495	\N	UPDATE	Slider	bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:11:49.890Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:12:10.020Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	2026-08-11 11:12:10.023-07
2a101da2-0825-417d-8ef2-d4ce8a50f031	\N	UPDATE	Slider	8a44d0fb-dd2a-4843-85b5-00ffc25b625b	{"title": "New Slide Title", "slider_id": "8a44d0fb-dd2a-4843-85b5-00ffc25b625b", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:42:04.904Z", "deleted_at": null, "updated_at": "2026-08-11T17:39:32.020Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": null}	{"title": "New Slide Title", "slider_id": "8a44d0fb-dd2a-4843-85b5-00ffc25b625b", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:42:04.904Z", "deleted_at": null, "updated_at": "2026-08-11T17:40:15.171Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": null}	2026-08-11 10:40:15.176-07
ab2a98c3-210d-48dd-95bb-1adc06557072	\N	UPDATE	Slider	de83de26-8467-4b68-b72e-dc3419d0f048	{"title": "New Slide Title", "slider_id": "de83de26-8467-4b68-b72e-dc3419d0f048", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:30:15.974Z", "deleted_at": null, "updated_at": "2026-08-11T17:39:31.987Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": null}	{"title": "New Slide Title", "slider_id": "de83de26-8467-4b68-b72e-dc3419d0f048", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:30:15.974Z", "deleted_at": null, "updated_at": "2026-08-11T17:40:31.373Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": "077d7252-78f1-41ac-a1b1-0a80e317a2da"}	2026-08-11 10:40:31.383-07
1ce64205-8195-4a17-9f6f-4f29f8846a65	\N	UPDATE	Slider	8a44d0fb-dd2a-4843-85b5-00ffc25b625b	{"title": "New Slide Title", "slider_id": "8a44d0fb-dd2a-4843-85b5-00ffc25b625b", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:42:04.904Z", "deleted_at": null, "updated_at": "2026-08-11T17:40:15.171Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": null}	{"title": "New Slide Title", "slider_id": "8a44d0fb-dd2a-4843-85b5-00ffc25b625b", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:42:04.904Z", "deleted_at": "2026-08-11T17:40:45.931Z", "updated_at": "2026-08-11T17:40:15.171Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": null}	2026-08-11 10:40:45.935-07
d853f698-0ec4-49b3-a965-dd54a18cb018	\N	UPDATE	Slider	de83de26-8467-4b68-b72e-dc3419d0f048	{"title": "New Slide Title", "slider_id": "de83de26-8467-4b68-b72e-dc3419d0f048", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:30:15.974Z", "deleted_at": null, "updated_at": "2026-08-11T17:40:31.373Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": "077d7252-78f1-41ac-a1b1-0a80e317a2da"}	{"title": "New Slide Title", "slider_id": "de83de26-8467-4b68-b72e-dc3419d0f048", "button_url": "/investigating-in-ethiopia", "created_at": "2026-08-11T07:30:15.974Z", "deleted_at": "2026-08-11T17:40:49.067Z", "updated_at": "2026-08-11T17:40:31.373Z", "button2_url": "/services", "button_name": "Invest in Ethiopia", "description": "New slide description goes here.", "button2_name": "Our Services", "attachment_id": "077d7252-78f1-41ac-a1b1-0a80e317a2da"}	2026-08-11 10:40:49.074-07
39376909-2295-4031-95db-ae070b8c5244	\N	CREATE	Leadership	8b0cd76e-b833-4721-ba80-c632c139908f	\N	{"name": "asdfghjkl;", "level": 2, "title": "dfghjkl", "header": "Jarra Holdings", "is_active": true, "parent_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77", "created_at": "2026-08-11T17:44:06.847Z", "deleted_at": null, "updated_at": "2026-08-11T17:44:06.847Z", "description": "sxdcfvgbhnjm,", "leadership_id": "8b0cd76e-b833-4721-ba80-c632c139908f"}	2026-08-11 10:44:06.861-07
18482fe1-5e88-4928-bb73-7f60ceb33c1e	\N	CREATE	Leadership	7dc75fd4-0983-40fb-a369-5ce5d56ee1f5	\N	{"name": "jhgfds", "level": 2, "title": "kjhgfd", "header": "Jarra Holdings", "is_active": true, "parent_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77", "created_at": "2026-08-11T17:44:28.934Z", "deleted_at": null, "updated_at": "2026-08-11T17:44:28.934Z", "description": ",mnbvfcdvbnm", "leadership_id": "7dc75fd4-0983-40fb-a369-5ce5d56ee1f5"}	2026-08-11 10:44:28.937-07
6440f1f9-6079-440a-8544-34b054ccc477	\N	CREATE	Slider	bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	\N	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:11:49.890Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-11 11:11:49.894-07
2f3dbe43-547c-454f-9069-dc922d1b2e9b	\N	UPDATE	Slider	bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:12:10.020Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:12:14.273Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	2026-08-11 11:12:14.275-07
b6009912-138c-498a-b59d-05ec3b0e9658	\N	CREATE	FacilityFootprint	ea4fe27e-0e17-4a8f-9ed0-a545add37ef3	\N	{"heading": null, "locations": null, "created_at": "2026-09-01T14:12:12.283Z", "updated_at": "2026-09-01T14:12:12.283Z", "description": null, "card_heading": null, "card_description": null, "facility_footprint_id": "ea4fe27e-0e17-4a8f-9ed0-a545add37ef3"}	2026-09-01 07:12:12.287-07
e0f40828-1bbb-49fc-a25d-6ea59e68ba24	\N	UPDATE	Slider	bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:12:14.273Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:12:45.716Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	2026-08-11 11:12:45.718-07
102724a7-d27d-4804-b422-9ead4a12f316	\N	UPDATE	Slider	b1c1b054-122f-49ea-b4d1-5b6ee9418c2c	{"title": "New Slide Title", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-11T18:13:41.923Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "New Slide Title", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-11T18:13:58.060Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "7de7a4a0-b994-4597-8b51-2c81497eb2aa"}	2026-08-11 11:13:58.063-07
6a0e83b9-f746-46a4-b9a0-39d50fd189f4	\N	UPDATE	Slider	bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:12:45.716Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:14:38.352Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	2026-08-11 11:14:38.354-07
342cf921-1bd8-4dd8-a790-c9f73b760764	\N	UPDATE	Slider	bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:14:38.352Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:14:43.884Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	2026-08-11 11:14:43.885-07
616df571-e5dd-4743-8778-64ebf6e97994	\N	CREATE	Card	4fd351d9-8ecb-4ff9-ab77-77b447dcc78d	\N	{"title": "One of the Best Performing Economies in Ethiopians", "card_id": "4fd351d9-8ecb-4ff9-ab77-77b447dcc78d", "button_url": "/en", "created_at": "2026-08-21T08:21:35.905Z", "deleted_at": null, "updated_at": "2026-08-21T08:21:35.905Z", "button_name": "Leraning More", "description": "Ethiopia has seen astonishing growth in the last ten years. Growing at an average rate of 9.7% between 2009 and 2019, Ethiopia has consistently been one of Africa’s top performing economies.\\n\\n", "attachment_id": "7297df98-dd69-49e9-8139-208b4bc4b289"}	2026-08-21 01:21:35.929-07
49096362-0adc-4034-a6cc-e6bca1fa0b5c	\N	UPDATE	Slider	bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": null, "updated_at": "2026-08-11T18:14:43.884Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	{"title": "New Slide Title", "slider_id": "bbb7b53c-a339-44e5-9ca7-cf4721c60ceb", "button_url": null, "created_at": "2026-08-11T18:11:49.890Z", "deleted_at": "2026-08-21T08:44:18.441Z", "updated_at": "2026-08-11T18:14:43.884Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": "05589cf9-4371-41ca-8d23-49ff4b1fd444"}	2026-08-21 01:44:18.449-07
7b45825a-2f12-4545-8242-ab6e23a94d6f	\N	UPDATE	Slider	b1c1b054-122f-49ea-b4d1-5b6ee9418c2c	{"title": "New Slide Title", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-11T18:13:58.060Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "Connecting Ethiopia to Global Markets", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-21T08:50:35.971Z", "button2_url": null, "button_name": null, "description": "Jarra Holdings S.C. facilitates reliable international trade by connecting Ethiopian businesses and commodities with global markets through trusted import, export, logistics, and trade solutions.", "button2_name": null, "attachment_id": "5d71ca6a-f444-4b4a-8321-a4f05ffbd76e"}	2026-08-21 01:50:35.974-07
e43af1ae-541c-4115-be0a-7cfaa6367222	\N	UPDATE	Slider	b1c1b054-122f-49ea-b4d1-5b6ee9418c2c	{"title": "Connecting Ethiopia to Global Markets", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-21T08:50:35.971Z", "button2_url": null, "button_name": null, "description": "Jarra Holdings S.C. facilitates reliable international trade by connecting Ethiopian businesses and commodities with global markets through trusted import, export, logistics, and trade solutions.", "button2_name": null, "attachment_id": "5d71ca6a-f444-4b4a-8321-a4f05ffbd76e"}	{"title": "Connecting Ethiopia to Global Markets", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-21T08:50:59.416Z", "button2_url": null, "button_name": null, "description": "Jarra Holdings S.C. facilitates reliable international trade by connecting Ethiopian businesses and commodities with global markets through trusted import, export, logistics, and trade solutions.", "button2_name": null, "attachment_id": "5d71ca6a-f444-4b4a-8321-a4f05ffbd76e"}	2026-08-21 01:50:59.421-07
68d4bb97-32ed-48b6-94f3-4174a4a5b8d9	\N	CREATE	Slider	c717452c-951a-48de-a740-5e4999b3d684	\N	{"title": "New Slide Title", "slider_id": "c717452c-951a-48de-a740-5e4999b3d684", "button_url": null, "created_at": "2026-08-21T08:51:35.690Z", "deleted_at": null, "updated_at": "2026-08-21T08:51:35.690Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-21 01:51:35.695-07
25d50669-0e2e-483c-aaa7-408c38ceed48	00000000-0000-4000-8000-000000000001	CREATE	Service	54cc067e-894e-4911-8c67-31c76a25ab90	\N	{"icon": "Activity", "title": "Trading & Supply", "content": "Reliable trading and supply solutions designed to address market needs and connect customers with appropriate products and resources.", "created_at": "2026-08-31T09:10:42.455Z", "service_id": "54cc067e-894e-4911-8c67-31c76a25ab90"}	2026-08-31 02:10:42.459-07
84fbbeb9-5672-4722-950b-3e4aecaf3cb6	\N	UPDATE	Slider	c717452c-951a-48de-a740-5e4999b3d684	{"title": "New Slide Title", "slider_id": "c717452c-951a-48de-a740-5e4999b3d684", "button_url": null, "created_at": "2026-08-21T08:51:35.690Z", "deleted_at": null, "updated_at": "2026-08-21T08:51:35.690Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "Bringing Ethiopia’s Finest Coffee to the World", "slider_id": "c717452c-951a-48de-a740-5e4999b3d684", "button_url": null, "created_at": "2026-08-21T08:51:35.690Z", "deleted_at": null, "updated_at": "2026-08-21T08:52:06.372Z", "button2_url": null, "button_name": null, "description": "We source and export premium Ethiopian coffee from renowned coffee-growing regions, with strong attention to quality, traceability, packaging, and international standards.", "button2_name": null, "attachment_id": "b03d29ef-99c4-4661-80a9-9de53f5c8d25"}	2026-08-21 01:52:06.38-07
68da3139-b527-40d1-98ad-4657946692a5	\N	UPDATE	Slider	c717452c-951a-48de-a740-5e4999b3d684	{"title": "Bringing Ethiopia’s Finest Coffee to the World", "slider_id": "c717452c-951a-48de-a740-5e4999b3d684", "button_url": null, "created_at": "2026-08-21T08:51:35.690Z", "deleted_at": null, "updated_at": "2026-08-21T08:52:06.372Z", "button2_url": null, "button_name": null, "description": "We source and export premium Ethiopian coffee from renowned coffee-growing regions, with strong attention to quality, traceability, packaging, and international standards.", "button2_name": null, "attachment_id": "b03d29ef-99c4-4661-80a9-9de53f5c8d25"}	{"title": "Bringing Ethiopia’s Finest Coffee to the World", "slider_id": "c717452c-951a-48de-a740-5e4999b3d684", "button_url": null, "created_at": "2026-08-21T08:51:35.690Z", "deleted_at": null, "updated_at": "2026-08-21T08:52:09.414Z", "button2_url": null, "button_name": null, "description": "We source and export premium Ethiopian coffee from renowned coffee-growing regions, with strong attention to quality, traceability, packaging, and international standards.", "button2_name": null, "attachment_id": "b03d29ef-99c4-4661-80a9-9de53f5c8d25"}	2026-08-21 01:52:09.415-07
b0d4a5dc-3210-45c8-8b51-9bbdf798396c	\N	UPDATE	Slider	c717452c-951a-48de-a740-5e4999b3d684	{"title": "Bringing Ethiopia’s Finest Coffee to the World", "slider_id": "c717452c-951a-48de-a740-5e4999b3d684", "button_url": null, "created_at": "2026-08-21T08:51:35.690Z", "deleted_at": null, "updated_at": "2026-08-21T08:52:09.414Z", "button2_url": null, "button_name": null, "description": "We source and export premium Ethiopian coffee from renowned coffee-growing regions, with strong attention to quality, traceability, packaging, and international standards.", "button2_name": null, "attachment_id": null}	{"title": "Bringing Ethiopia’s Finest Coffee to the World", "slider_id": "c717452c-951a-48de-a740-5e4999b3d684", "button_url": null, "created_at": "2026-08-21T08:51:35.690Z", "deleted_at": null, "updated_at": "2026-08-21T09:03:25.741Z", "button2_url": null, "button_name": null, "description": "We source and export premium Ethiopian coffee from renowned coffee-growing regions, with strong attention to quality, traceability, packaging, and international standards.", "button2_name": null, "attachment_id": "32362bc3-9e5b-41e3-8b1c-c335c4fa5a56"}	2026-08-21 02:03:25.743-07
2175cec0-fc41-4901-9c13-0a925d18b1a6	\N	UPDATE	Slider	b1c1b054-122f-49ea-b4d1-5b6ee9418c2c	{"title": "Connecting Ethiopia to Global Markets", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-21T08:50:59.416Z", "button2_url": null, "button_name": null, "description": "Jarra Holdings S.C. facilitates reliable international trade by connecting Ethiopian businesses and commodities with global markets through trusted import, export, logistics, and trade solutions.", "button2_name": null, "attachment_id": null}	{"title": "Connecting Ethiopia to Global Markets", "slider_id": "b1c1b054-122f-49ea-b4d1-5b6ee9418c2c", "button_url": null, "created_at": "2026-08-11T18:13:41.923Z", "deleted_at": null, "updated_at": "2026-08-21T09:03:36.179Z", "button2_url": null, "button_name": null, "description": "Jarra Holdings S.C. facilitates reliable international trade by connecting Ethiopian businesses and commodities with global markets through trusted import, export, logistics, and trade solutions.", "button2_name": null, "attachment_id": "bb080df1-b560-4fb4-97b4-7d016bf4d1ba"}	2026-08-21 02:03:36.188-07
4fec9b9b-36a7-4be8-8aba-ae5d0702720a	\N	CREATE	Slider	899478a2-990d-41d2-9231-05b06ee264fb	\N	{"title": "New Slide Title", "slider_id": "899478a2-990d-41d2-9231-05b06ee264fb", "button_url": null, "created_at": "2026-08-21T09:11:47.327Z", "deleted_at": null, "updated_at": "2026-08-21T09:11:47.327Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-21 02:11:47.33-07
6cde317a-a357-4d7e-a4b3-8d0fe4832cda	\N	UPDATE	Slider	899478a2-990d-41d2-9231-05b06ee264fb	{"title": "New Slide Title", "slider_id": "899478a2-990d-41d2-9231-05b06ee264fb", "button_url": null, "created_at": "2026-08-21T09:11:47.327Z", "deleted_at": null, "updated_at": "2026-08-21T09:11:47.327Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "Powering Industry Through Technology", "slider_id": "899478a2-990d-41d2-9231-05b06ee264fb", "button_url": null, "created_at": "2026-08-21T09:11:47.327Z", "deleted_at": null, "updated_at": "2026-08-21T09:12:15.169Z", "button2_url": null, "button_name": null, "description": "From ICT and communication equipment to electrical systems, machinery, and industrial supplies, we provide solutions that support institutions, enterprises, and infrastructure development.", "button2_name": null, "attachment_id": "64cbc56c-a0b3-4c9b-b155-1cd06f260212"}	2026-08-21 02:12:15.172-07
d6ddb963-1bd8-4edd-ae63-68db73c17551	\N	CREATE	Slider	b45b4a0e-134a-418a-b639-0764e4d9bd9f	\N	{"title": "New Slide Title", "slider_id": "b45b4a0e-134a-418a-b639-0764e4d9bd9f", "button_url": null, "created_at": "2026-08-21T09:20:08.300Z", "deleted_at": null, "updated_at": "2026-08-21T09:20:08.300Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	2026-08-21 02:20:08.302-07
dcee1eb9-0d72-4862-9e7f-73119980c1d6	\N	UPDATE	Slider	b45b4a0e-134a-418a-b639-0764e4d9bd9f	{"title": "New Slide Title", "slider_id": "b45b4a0e-134a-418a-b639-0764e4d9bd9f", "button_url": null, "created_at": "2026-08-21T09:20:08.300Z", "deleted_at": null, "updated_at": "2026-08-21T09:20:08.300Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "Building Reliable Energy Solutions", "slider_id": "b45b4a0e-134a-418a-b639-0764e4d9bd9f", "button_url": null, "created_at": "2026-08-21T09:20:08.300Z", "deleted_at": null, "updated_at": "2026-08-21T09:21:46.531Z", "button2_url": null, "button_name": null, "description": "We supply solar power systems and Battery Energy Storage Systems designed to support renewable energy projects, energy reliability, commercial operations, and industrial applications.", "button2_name": null, "attachment_id": null}	2026-08-21 02:21:46.533-07
4753261c-723c-4b23-ab16-4d79bd3c0001	\N	UPDATE	Partner	435ee576-1036-4b04-ae5c-a4d4a3a43938	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T08:34:09.028Z", "description": ""}	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:23:30.320Z", "description": ""}	2026-08-21 02:23:30.323-07
65ab454a-78bd-4f09-833b-aea24a51d3fe	\N	UPDATE	Slider	b45b4a0e-134a-418a-b639-0764e4d9bd9f	{"title": "Building Reliable Energy Solutions", "slider_id": "b45b4a0e-134a-418a-b639-0764e4d9bd9f", "button_url": null, "created_at": "2026-08-21T09:20:08.300Z", "deleted_at": null, "updated_at": "2026-08-21T09:21:46.531Z", "button2_url": null, "button_name": null, "description": "We supply solar power systems and Battery Energy Storage Systems designed to support renewable energy projects, energy reliability, commercial operations, and industrial applications.", "button2_name": null, "attachment_id": null}	{"title": "Building Reliable Energy Solutions", "slider_id": "b45b4a0e-134a-418a-b639-0764e4d9bd9f", "button_url": null, "created_at": "2026-08-21T09:20:08.300Z", "deleted_at": null, "updated_at": "2026-08-21T09:26:17.832Z", "button2_url": null, "button_name": null, "description": "We supply solar power systems and Battery Energy Storage Systems designed to support renewable energy projects, energy reliability, commercial operations, and industrial applications.", "button2_name": null, "attachment_id": "ca8824e7-c23d-4a47-881b-51bc53fb98f8"}	2026-08-21 02:26:17.835-07
fe80c39e-a390-48bf-9db7-0644a1846310	\N	UPDATE	Slider	b45b4a0e-134a-418a-b639-0764e4d9bd9f	{"title": "Building Reliable Energy Solutions", "slider_id": "b45b4a0e-134a-418a-b639-0764e4d9bd9f", "button_url": null, "created_at": "2026-08-21T09:20:08.300Z", "deleted_at": null, "updated_at": "2026-08-21T09:26:17.832Z", "button2_url": null, "button_name": null, "description": "We supply solar power systems and Battery Energy Storage Systems designed to support renewable energy projects, energy reliability, commercial operations, and industrial applications.", "button2_name": null, "attachment_id": null}	{"title": "Building Reliable Energy Solutions", "slider_id": "b45b4a0e-134a-418a-b639-0764e4d9bd9f", "button_url": null, "created_at": "2026-08-21T09:20:08.300Z", "deleted_at": null, "updated_at": "2026-08-21T09:27:10.402Z", "button2_url": null, "button_name": null, "description": "We supply solar power systems and Battery Energy Storage Systems designed to support renewable energy projects, energy reliability, commercial operations, and industrial applications.", "button2_name": null, "attachment_id": "db6865ed-2a7c-4f61-8c8f-187b9298adfe"}	2026-08-21 02:27:10.404-07
783f3718-3bb4-4906-9dfb-9704239c51d9	\N	UPDATE	Partner	435ee576-1036-4b04-ae5c-a4d4a3a43938	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:23:30.320Z", "description": ""}	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:28:38.379Z", "description": "We collaborate with trusted in national and international partners to support sustainable industrial and economic development."}	2026-08-21 02:28:38.382-07
09f615f3-6f87-46ed-acfc-e0e52d77cbab	\N	UPDATE	Partner	435ee576-1036-4b04-ae5c-a4d4a3a43938	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:28:38.379Z", "description": "We collaborate with trusted in national and international partners to support sustainable industrial and economic development."}	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:28:47.639Z", "description": "We collaborate with trusted in national and international partners to support sustainable industrial and economic development."}	2026-08-21 02:28:47.642-07
aef07d23-b0c8-47c8-a532-b6aa37b7d728	\N	UPDATE	Partner	435ee576-1036-4b04-ae5c-a4d4a3a43938	{"title": "Our Partners", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:28:47.639Z", "description": "We collaborate with trusted in national and international partners to support sustainable industrial and economic development."}	{"title": "Our Partnering", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:28:54.116Z", "description": "We collaborate with trusted in national and international partners to support sustainable industrial and economic development."}	2026-08-21 02:28:54.118-07
aeb5f5b7-5df6-4109-bc6b-b952ace937cf	\N	UPDATE	Partner	435ee576-1036-4b04-ae5c-a4d4a3a43938	{"title": "Our Partnering", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:28:54.116Z", "description": "We collaborate with trusted in national and international partners to support sustainable industrial and economic development."}	{"title": "Our Partnering vahsbdhabnsd", "created_at": "2026-08-21T08:34:09.028Z", "deleted_at": null, "partner_id": "435ee576-1036-4b04-ae5c-a4d4a3a43938", "updated_at": "2026-08-21T09:29:14.452Z", "description": "We collaborate with trusted in national and international partners to support sustainable industrial and economic development."}	2026-08-21 02:29:14.454-07
5959f73a-7254-4512-8f54-777b65d66244	\N	UPDATE	Slider	3df07029-51db-4f17-a1c3-8db216fa77ea	{"title": "New Slide Title", "slider_id": "3df07029-51db-4f17-a1c3-8db216fa77ea", "button_url": null, "created_at": "2026-08-21T09:35:01.060Z", "deleted_at": null, "updated_at": "2026-08-21T09:35:01.060Z", "button2_url": null, "button_name": null, "description": "New slide description goes here.", "button2_name": null, "attachment_id": null}	{"title": "Your Reliable Partner in Trade", "slider_id": "3df07029-51db-4f17-a1c3-8db216fa77ea", "button_url": null, "created_at": "2026-08-21T09:35:01.060Z", "deleted_at": null, "updated_at": "2026-08-21T09:36:01.919Z", "button2_url": null, "button_name": null, "description": "With strong supplier networks, professional trade and logistics management, and a commitment to quality and long-term partnerships, Jarra delivers dependable solutions across diverse markets.", "button2_name": null, "attachment_id": "ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce"}	2026-08-21 02:36:01.923-07
eb94292d-8510-4507-b75e-fe952acd5af0	\N	UPDATE	Card	4fd351d9-8ecb-4ff9-ab77-77b447dcc78d	{"title": "One of the Best Performing Economies in Ethiopians", "card_id": "4fd351d9-8ecb-4ff9-ab77-77b447dcc78d", "button_url": "/en", "created_at": "2026-08-21T08:21:35.905Z", "deleted_at": null, "updated_at": "2026-08-21T08:21:35.905Z", "button_name": "Leraning More", "description": "Ethiopia has seen astonishing growth in the last ten years. Growing at an average rate of 9.7% between 2009 and 2019, Ethiopia has consistently been one of Africa’s top performing economies.\\n\\n", "attachment_id": "7297df98-dd69-49e9-8139-208b4bc4b289"}	{"title": "One of the Best Performing Economies in Ethiopians", "card_id": "4fd351d9-8ecb-4ff9-ab77-77b447dcc78d", "button_url": "http://localhost:3000/en/about", "created_at": "2026-08-21T08:21:35.905Z", "deleted_at": null, "updated_at": "2026-08-21T14:09:07.724Z", "button_name": "Learn More", "description": "Ethiopia has seen astonishing growth in the last ten years. Growing at an average rate of 9.7% between 2009 and 2019, Ethiopia has consistently been one of Africa’s top performing economies.\\n\\n", "attachment_id": "7297df98-dd69-49e9-8139-208b4bc4b289"}	2026-08-21 07:09:07.751-07
f440db18-4ee4-43b0-afaf-9863d03655db	00000000-0000-4000-8000-000000000001	CREATE	Service	34bf0e57-855e-4f46-ba80-67c36d738581	\N	{"icon": "Building2", "title": "Warehousing & Storage", "content": "Professional warehousing capability supporting the company's supply and trading operations with our holistic-purpose facilities of approximately 6,850 m².", "created_at": "2026-08-31T09:11:02.071Z", "service_id": "34bf0e57-855e-4f46-ba80-67c36d738581"}	2026-08-31 02:11:02.074-07
72218ff0-4524-4eb1-baf7-c1aaf363453b	\N	UPDATE	Leadership	8c3626b8-92e4-4849-a26b-51ce29b3ac77	{"name": "sdfghjklcvbnm,", "level": 1, "title": "cvbnm,./.,mnm,.,mn m,.,m,", "header": "Jarra Holdings", "is_active": true, "parent_id": null, "created_at": "2026-08-11T12:08:21.648Z", "deleted_at": null, "updated_at": "2026-08-11T12:08:21.648Z", "description": "bnjcnbjdbjnjdmsn jwnejfnwje", "leadership_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77"}	{"name": "First Name Middle Name", "level": 1, "title": "Chief Executive Officer (CEO)", "header": "Jarra Holdings", "is_active": true, "parent_id": null, "created_at": "2026-08-11T12:08:21.648Z", "deleted_at": null, "updated_at": "2026-08-21T14:31:38.953Z", "description": "Leads Jarra Holdings' strategic direction and oversees the company's import, export, investment, and business development activities, with a focus on sustainable growth and long-term partnerships.", "leadership_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77"}	2026-08-21 07:31:38.959-07
36fada4e-0b7c-4324-9c14-af3c9f8a4462	\N	DELETE	Leadership	8b0cd76e-b833-4721-ba80-c632c139908f	{"name": "asdfghjkl;", "level": 2, "title": "dfghjkl", "header": "Jarra Holdings", "is_active": true, "parent_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77", "created_at": "2026-08-11T17:44:06.847Z", "deleted_at": "2026-08-21T14:32:51.920Z", "updated_at": "2026-08-21T14:32:51.921Z", "description": "sxdcfvgbhnjm,", "leadership_id": "8b0cd76e-b833-4721-ba80-c632c139908f"}	\N	2026-08-21 07:32:51.926-07
26b23db5-f23c-46ac-81b4-1bc6f582b0fe	\N	CREATE	Leadership	b4650450-c0db-4c57-9b5d-4f2dbe109d0c	\N	{"name": "First Name_2 Middle Name", "level": 2, "title": "Director of Import & Export Operations", "header": "Jarra Holdings", "is_active": true, "parent_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77", "created_at": "2026-08-21T14:35:00.757Z", "deleted_at": null, "updated_at": "2026-08-21T14:35:00.757Z", "description": "Oversees international sourcing, commodity exports, supplier relationships, logistics coordination, and trade compliance to ensure reliable and efficient execution across markets.", "leadership_id": "b4650450-c0db-4c57-9b5d-4f2dbe109d0c"}	2026-08-21 07:35:00.761-07
7fcdb3a1-8e9d-4cbf-b459-fe390198febd	\N	CREATE	Leadership	cda67c27-a533-4568-b428-5f08a26cfad7	\N	{"name": "[First Name] [Middle Name]", "level": 2, "title": "Director of Business Development & Investments", "header": "Jarra Holdings", "is_active": true, "parent_id": "8c3626b8-92e4-4849-a26b-51ce29b3ac77", "created_at": "2026-08-21T14:35:45.633Z", "deleted_at": null, "updated_at": "2026-08-21T14:35:45.633Z", "description": "Drives new business opportunities, strategic partnerships, and investment initiatives while supporting Jarra Holdings' expansion across industrial, technology, energy, and trading sectors.", "leadership_id": "cda67c27-a533-4568-b428-5f08a26cfad7"}	2026-08-21 07:35:45.637-07
1facb4d3-bc2e-4f67-afcf-a21d79c21057	\N	CREATE	Background	233962f9-692c-4771-9216-d78f5f5a1eec	\N	{"icon": "Info", "title": "Ministry Background", "content": "", "description": "Established to regulate and develop Ethiopia's mineral and petroleum resources for sustainable economic growth and national development.", "background_id": "233962f9-692c-4771-9216-d78f5f5a1eec"}	2026-08-21 07:36:37.165-07
03faba5f-3dbf-4c75-8a2a-1f739e36a7aa	\N	UPDATE	Background	233962f9-692c-4771-9216-d78f5f5a1eec	{"icon": "Info", "title": "Ministry Background", "content": "", "description": "Established to regulate and develop Ethiopia's mineral and petroleum resources for sustainable economic growth and national development.", "background_id": "233962f9-692c-4771-9216-d78f5f5a1eec"}	{"icon": "Globe2Icon", "title": "Connecting Ethiopia to the World", "content": "", "description": "Jarra Holdings S.C. is a diversified import, export, and trading company committed to connecting Ethiopia with global markets through reliable trade and supply solutions.", "background_id": "233962f9-692c-4771-9216-d78f5f5a1eec"}	2026-08-21 07:40:06.546-07
ec174089-3b6a-4b2a-a2c1-6d4570b5796e	\N	CREATE	Strategy	f43df591-c2a9-47c2-ab68-992d46c8fdea	\N	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:53:20.848Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	2026-08-21 07:53:20.852-07
30e6c6a3-c2fc-4c04-bf0d-67ea9d6a2473	\N	UPDATE	Strategy	f43df591-c2a9-47c2-ab68-992d46c8fdea	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:53:20.848Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:53:39.244Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	2026-08-21 07:53:39.252-07
26411398-71a6-42ab-ab9a-390952358efd	\N	UPDATE	Strategy	f43df591-c2a9-47c2-ab68-992d46c8fdea	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:53:39.244Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:55:40.940Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	2026-08-21 07:55:40.943-07
aeaf4642-f171-4246-8d20-072b48d297c6	\N	UPDATE	Strategy	f43df591-c2a9-47c2-ab68-992d46c8fdea	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:55:40.940Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:55:55.199Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	2026-08-21 07:55:55.207-07
aeef284b-8a31-4625-8c48-529bd0439fcd	\N	UPDATE	Strategy	f43df591-c2a9-47c2-ab68-992d46c8fdea	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T14:55:55.199Z", "description": "Guiding principles that define our purpose, direction, and commitment to developing Ethiopia’s mineral resources responsibly and sustainably.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T15:01:47.534Z", "description": "The principles that guide Jarra Holdings S.C. as we build sustainable businesses, create opportunities, and contribute to Ethiopia’s economic development.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	2026-08-21 08:01:47.544-07
582e5d08-a231-43e6-bd3d-9e61a5b0133e	\N	UPDATE	Strategy	f43df591-c2a9-47c2-ab68-992d46c8fdea	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T15:01:47.534Z", "description": "The principles that guide Jarra Holdings S.C. as we build sustainable businesses, create opportunities, and contribute to Ethiopia’s economic development.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T15:04:00.232Z", "description": "The principles that guide Jarra Holdings S.C. as we build sustainable businesses, create opportunities, and contribute to Ethiopia’s economic development.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	2026-08-21 08:04:00.243-07
1127776a-63c1-4036-ae9d-2d621930b915	\N	UPDATE	Strategy	f43df591-c2a9-47c2-ab68-992d46c8fdea	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T15:04:00.232Z", "description": "The principles that guide Jarra Holdings S.C. as we build sustainable businesses, create opportunities, and contribute to Ethiopia’s economic development.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	{"title": "Our Mission, Vision & Core Values", "created_at": "2026-08-21T14:53:20.848Z", "deleted_at": null, "updated_at": "2026-08-21T15:06:13.333Z", "description": "The principles that guide Jarra Holdings S.C. as we build sustainable businesses, create opportunities, and contribute to Ethiopia’s economic development.", "strategy_id": "f43df591-c2a9-47c2-ab68-992d46c8fdea"}	2026-08-21 08:06:13.337-07
d99c95c2-c625-43dc-ae4f-5423aeb4f153	\N	CREATE	Attachment	cda602f4-b6a0-402b-9426-d9ec20780eeb	\N	{"width": 2752, "height": 1536, "file_name": "contact-section.jpg", "file_path": "uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/large.webp", "mime_type": "image/webp", "created_at": "2026-08-24T10:02:56.410Z", "uploaded_by": null, "attachment_id": "cda602f4-b6a0-402b-9426-d9ec20780eeb", "file_path_large": "uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/large.webp", "file_path_thumb": "uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/thumb.webp", "file_path_medium": "uploads/attachments/cda602f4-b6a0-402b-9426-d9ec20780eeb/medium.webp"}	2026-08-24 03:02:57.9-07
f78623da-5e82-4369-8506-acfbcfd49286	\N	CREATE	Attachment	efce5909-5e87-460d-82ef-99b24ae6ef4f	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T07:24:09.200Z", "uploaded_by": null, "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f", "file_path_large": "uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/large.webp", "file_path_thumb": "uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/thumb.webp", "file_path_medium": "uploads/attachments/efce5909-5e87-460d-82ef-99b24ae6ef4f/medium.webp"}	2026-08-31 00:24:10.337-07
d44afc62-40eb-4f06-9d39-089990a8b3cb	00000000-0000-4000-8000-000000000001	UPDATE	Purpose	2500950d-6c08-4a60-840a-086a209e7afb	{"quote": "Delivering innovative and sustainable solutions across industries.", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [{"icon": "Star", "title": "TEST PILLAR", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of"}], "subtitle": "Our Purpose", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	{"quote": "Delivering innovative and sustainable solutions across industries.", "title": "Creating Value Across Industries, Empowering Communities", "pillars": [{"icon": "Star", "title": "TEST PILLAR", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of"}, {"icon": "Star", "title": "asdfghj", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of"}, {"icon": "Star", "title": "asdfghjkl", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of"}, {"icon": "Star", "title": "lkjhgfd", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of"}, {"icon": "Star", "title": "poiuytr", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of"}], "subtitle": "Our Purpose", "created_at": "2026-08-31T07:27:44.497Z", "deleted_at": null, "purpose_id": "2500950d-6c08-4a60-840a-086a209e7afb", "updated_at": "2026-08-31T07:27:44.497Z", "description": "Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.", "attachment_id": "efce5909-5e87-460d-82ef-99b24ae6ef4f"}	2026-08-31 00:38:27.906-07
90a60ea1-6bb3-4720-b057-3837ec205fb3	00000000-0000-4000-8000-000000000001	CREATE	ServiceOverview	3c8cb6b1-76e9-49b8-9c3d-c2847248338e	\N	{"heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	2026-08-31 02:11:57.211-07
8658c89a-23b9-407e-a2ec-6cb9722a5e48	00000000-0000-4000-8000-000000000001	UPDATE	ServiceOverview	3c8cb6b1-76e9-49b8-9c3d-c2847248338e	{"cards": null, "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}], "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	2026-08-31 06:06:16.691-07
7c28ae8e-a5f3-4d3b-84d4-649b9f79488d	\N	CREATE	Attachment	af0da9c4-8cc0-4fe3-9eb6-2bff98858bac	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:10:23.463Z", "uploaded_by": null, "attachment_id": "af0da9c4-8cc0-4fe3-9eb6-2bff98858bac", "file_path_large": "uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/large.webp", "file_path_thumb": "uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/thumb.webp", "file_path_medium": "uploads/attachments/af0da9c4-8cc0-4fe3-9eb6-2bff98858bac/medium.webp"}	2026-08-31 06:10:24.625-07
36297127-6df4-43af-8f7c-440be3832d8c	00000000-0000-4000-8000-000000000001	UPDATE	ServiceOverview	3c8cb6b1-76e9-49b8-9c3d-c2847248338e	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}], "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}, {"icon": "ArrowLeftRight", "name": "Trading"}, {"icon": "SearchCheckIcon", "name": "Sourcing"}, {"icon": "Warehouse", "name": "warehousing"}, {"icon": "Network", "name": "Supply Solutions"}], "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	2026-08-31 06:09:02.832-07
db31ba34-29ac-4818-b5f6-b20d54599594	\N	CREATE	Attachment	c3813ab7-653c-4a8e-9c52-de69e272b98f	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:14:54.651Z", "uploaded_by": null, "attachment_id": "c3813ab7-653c-4a8e-9c52-de69e272b98f", "file_path_large": "uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/large.webp", "file_path_thumb": "uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/thumb.webp", "file_path_medium": "uploads/attachments/c3813ab7-653c-4a8e-9c52-de69e272b98f/medium.webp"}	2026-08-31 06:14:55.984-07
f5979923-41a5-4135-babf-793cd42d5f60	\N	CREATE	Attachment	12b9cb08-4750-4486-94bc-c577a8d78cd1	\N	{"width": 2752, "height": 1536, "file_name": "career-section.jpg", "file_path": "uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:15:28.766Z", "uploaded_by": null, "attachment_id": "12b9cb08-4750-4486-94bc-c577a8d78cd1", "file_path_large": "uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/large.webp", "file_path_thumb": "uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/thumb.webp", "file_path_medium": "uploads/attachments/12b9cb08-4750-4486-94bc-c577a8d78cd1/medium.webp"}	2026-08-31 06:15:29.929-07
78cddee1-12f2-4d3f-80bb-f41ec1579ccc	00000000-0000-4000-8000-000000000001	UPDATE	ServiceCapability	583a3cf3-2478-48cc-a20f-948f608c88b8	{"heading": "One Partner. Multiple Sectors.", "created_at": "2026-08-31T13:04:54.991Z", "deleted_at": null, "subheading": "Jarra Holdings operates as a multi-sector company with activities spanning import, export, trading, and supply across key economic pillars.", "updated_at": "2026-08-31T13:04:54.991Z", "capabilities": [{"id": "sector-1788181172885", "desc": "Supplying essential agricultural inputs to support farming communities and boost productivity.", "name": " AGRICULTURE", "image": ""}], "service_capability_id": "583a3cf3-2478-48cc-a20f-948f608c88b8"}	{"heading": "One Partner. Multiple Sectors.", "created_at": "2026-08-31T13:04:54.991Z", "deleted_at": null, "subheading": "Jarra Holdings operates as a multi-sector company with activities spanning import, export, trading, and supply across key economic pillars.", "updated_at": "2026-08-31T13:04:54.991Z", "capabilities": [{"id": "sector-1788181172885", "desc": "Supplying essential agricultural inputs to support farming communities and boost productivity.", "name": " AGRICULTURE", "image": ""}, {"id": "sector-1788182200753", "desc": "Providing reliable construction-related materials and heavy machinery for infrastructure development.", "name": " CONSTRUCTION", "image": ""}, {"id": "sector-1788182202317", "desc": "Sourcing and supplying factory raw materials to keep manufacturing lines operational.", "name": "INDUSTRIAL", "image": ""}, {"id": "sector-1788182203797", "desc": "Importing vehicles and genuine spare parts for commercial and personal transport needs.", "name": "AUTOMOTIVE", "image": ""}, {"id": "sector-1788182204781", "desc": "Delivering certified electrical equipment for commercial, industrial, and residential projects.", "name": "ELECTRICAL", "image": ""}, {"id": "sector-1788182205403", "desc": "Exporting premium Ethiopian Arabica coffee, oilseeds, and pulses to international markets.", "name": "COMMODITY TRADE", "image": ""}], "service_capability_id": "583a3cf3-2478-48cc-a20f-948f608c88b8"}	2026-08-31 06:18:31.649-07
e34cd9a0-cb33-43cd-a355-5f912dceee49	\N	CREATE	Attachment	3c2379bf-0557-42b8-b8c1-779afdfbd322	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:28:24.110Z", "uploaded_by": null, "attachment_id": "3c2379bf-0557-42b8-b8c1-779afdfbd322", "file_path_large": "uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/large.webp", "file_path_thumb": "uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/thumb.webp", "file_path_medium": "uploads/attachments/3c2379bf-0557-42b8-b8c1-779afdfbd322/medium.webp"}	2026-08-31 06:28:25.812-07
a54bdfd2-3c2e-4bd9-8fda-a78afa6d189b	00000000-0000-4000-8000-000000000001	CREATE	ServiceWhyUs	9b5759c1-b9a8-41be-b7df-995c7f01ec71	\N	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": null, "cta_heading": null, "cta_subheading": null, "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	2026-08-31 06:31:32.564-07
f25d097f-2e2f-432e-b3da-1b3ade7b8f45	\N	CREATE	Attachment	9df5dfa3-c434-4016-a701-e34830b257fe	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:41:06.733Z", "uploaded_by": null, "attachment_id": "9df5dfa3-c434-4016-a701-e34830b257fe", "file_path_large": "uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/large.webp", "file_path_thumb": "uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/thumb.webp", "file_path_medium": "uploads/attachments/9df5dfa3-c434-4016-a701-e34830b257fe/medium.webp"}	2026-08-31 06:41:07.869-07
5efe75d0-08c4-46bf-8d87-085d6461494f	\N	CREATE	Attachment	193ad1d2-2f7e-4dae-b417-ecafc48a80fa	\N	{"width": 2752, "height": 1536, "file_name": "business-section.jpg", "file_path": "uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:41:15.863Z", "uploaded_by": null, "attachment_id": "193ad1d2-2f7e-4dae-b417-ecafc48a80fa", "file_path_large": "uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/large.webp", "file_path_thumb": "uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/thumb.webp", "file_path_medium": "uploads/attachments/193ad1d2-2f7e-4dae-b417-ecafc48a80fa/medium.webp"}	2026-08-31 06:41:16.981-07
a9753113-2115-4f0d-a01e-db5ec7cef7e2	\N	CREATE	Attachment	9b431b70-06f0-4ca9-a275-1157fc50ce29	\N	{"width": 2752, "height": 1536, "file_name": "facilities-section.jpg", "file_path": "uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:41:24.381Z", "uploaded_by": null, "attachment_id": "9b431b70-06f0-4ca9-a275-1157fc50ce29", "file_path_large": "uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/large.webp", "file_path_thumb": "uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/thumb.webp", "file_path_medium": "uploads/attachments/9b431b70-06f0-4ca9-a275-1157fc50ce29/medium.webp"}	2026-08-31 06:41:25.307-07
36086fc1-82d4-4bcf-9382-76d86db32e53	\N	CREATE	Attachment	38ca2751-4dd8-47db-ab82-43aeda08cfb3	\N	{"width": 2752, "height": 1536, "file_name": "home-4.jpg", "file_path": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:41:32.724Z", "uploaded_by": null, "attachment_id": "38ca2751-4dd8-47db-ab82-43aeda08cfb3", "file_path_large": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/large.webp", "file_path_thumb": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/thumb.webp", "file_path_medium": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/medium.webp"}	2026-08-31 06:41:33.558-07
731adc82-7064-4ab7-990d-81d1dbdf9656	\N	CREATE	Attachment	7b5b3bbc-205a-49a0-93c3-fbc02cb27636	\N	{"width": 2752, "height": 1536, "file_name": "product-section.jpg", "file_path": "uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:41:41.925Z", "uploaded_by": null, "attachment_id": "7b5b3bbc-205a-49a0-93c3-fbc02cb27636", "file_path_large": "uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/large.webp", "file_path_thumb": "uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/thumb.webp", "file_path_medium": "uploads/attachments/7b5b3bbc-205a-49a0-93c3-fbc02cb27636/medium.webp"}	2026-08-31 06:41:42.961-07
5a7e7971-2ea9-4a17-a915-ddf59b11debc	\N	DELETE	Attachment	38ca2751-4dd8-47db-ab82-43aeda08cfb3	{"width": 2752, "height": 1536, "file_name": "home-4.jpg", "file_path": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:41:32.724Z", "uploaded_by": null, "attachment_id": "38ca2751-4dd8-47db-ab82-43aeda08cfb3", "file_path_large": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/large.webp", "file_path_thumb": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/thumb.webp", "file_path_medium": "uploads/attachments/38ca2751-4dd8-47db-ab82-43aeda08cfb3/medium.webp"}	\N	2026-08-31 06:41:43.198-07
c28cfc5d-6f4f-4c0b-aea9-0a9252506fa4	\N	CREATE	Attachment	2b520271-5dea-42d5-97b8-9c1fe03f37cf	\N	{"width": 2752, "height": 1536, "file_name": "service-section.jpg", "file_path": "uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:41:53.343Z", "uploaded_by": null, "attachment_id": "2b520271-5dea-42d5-97b8-9c1fe03f37cf", "file_path_large": "uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/large.webp", "file_path_thumb": "uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/thumb.webp", "file_path_medium": "uploads/attachments/2b520271-5dea-42d5-97b8-9c1fe03f37cf/medium.webp"}	2026-08-31 06:41:54.32-07
c984f072-436d-4a22-abfc-442ea448f2c3	\N	CREATE	Attachment	d65da17f-eeea-4c99-bdb5-b79376184927	\N	{"width": 2752, "height": 1536, "file_name": "facilities-section.jpg", "file_path": "uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/large.webp", "mime_type": "image/webp", "created_at": "2026-08-31T13:42:09.462Z", "uploaded_by": null, "attachment_id": "d65da17f-eeea-4c99-bdb5-b79376184927", "file_path_large": "uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/large.webp", "file_path_thumb": "uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/thumb.webp", "file_path_medium": "uploads/attachments/d65da17f-eeea-4c99-bdb5-b79376184927/medium.webp"}	2026-08-31 06:42:10.515-07
ed10e25f-6552-42bf-8540-b6389ca6e5af	00000000-0000-4000-8000-000000000001	UPDATE	ServiceCapability	583a3cf3-2478-48cc-a20f-948f608c88b8	{"heading": "One Partner. Multiple Sectors.", "created_at": "2026-08-31T13:04:54.991Z", "deleted_at": null, "subheading": "Jarra Holdings operates as a multi-sector company with activities spanning import, export, trading, and supply across key economic pillars.", "updated_at": "2026-08-31T13:04:54.991Z", "capabilities": [{"id": "sector-1788181172885", "desc": "Supplying essential agricultural inputs to support farming communities and boost productivity.", "name": " AGRICULTURE", "image": ""}, {"id": "sector-1788182200753", "desc": "Providing reliable construction-related materials and heavy machinery for infrastructure development.", "name": " CONSTRUCTION", "image": ""}, {"id": "sector-1788182202317", "desc": "Sourcing and supplying factory raw materials to keep manufacturing lines operational.", "name": "INDUSTRIAL", "image": ""}, {"id": "sector-1788182203797", "desc": "Importing vehicles and genuine spare parts for commercial and personal transport needs.", "name": "AUTOMOTIVE", "image": ""}, {"id": "sector-1788182204781", "desc": "Delivering certified electrical equipment for commercial, industrial, and residential projects.", "name": "ELECTRICAL", "image": ""}, {"id": "sector-1788182205403", "desc": "Exporting premium Ethiopian Arabica coffee, oilseeds, and pulses to international markets.", "name": "COMMODITY TRADE", "image": ""}], "service_capability_id": "583a3cf3-2478-48cc-a20f-948f608c88b8"}	{"heading": "One Partner. Multiple Sectors.", "created_at": "2026-08-31T13:04:54.991Z", "deleted_at": null, "subheading": "Jarra Holdings operates as a multi-sector company with activities spanning import, export, trading, and supply across key economic pillars.", "updated_at": "2026-08-31T13:04:54.991Z", "capabilities": [{"id": "sector-1788181172885", "desc": "Supplying essential agricultural inputs to support farming communities and boost productivity.", "name": " AGRICULTURE", "image": "9df5dfa3-c434-4016-a701-e34830b257fe"}, {"id": "sector-1788182200753", "desc": "Providing reliable construction-related materials and heavy machinery for infrastructure development.", "name": " CONSTRUCTION", "image": "193ad1d2-2f7e-4dae-b417-ecafc48a80fa"}, {"id": "sector-1788182202317", "desc": "Sourcing and supplying factory raw materials to keep manufacturing lines operational.", "name": "INDUSTRIAL", "image": "9b431b70-06f0-4ca9-a275-1157fc50ce29"}, {"id": "sector-1788182203797", "desc": "Importing vehicles and genuine spare parts for commercial and personal transport needs.", "name": "AUTOMOTIVE", "image": "7b5b3bbc-205a-49a0-93c3-fbc02cb27636"}, {"id": "sector-1788182204781", "desc": "Delivering certified electrical equipment for commercial, industrial, and residential projects.", "name": "ELECTRICAL", "image": "2b520271-5dea-42d5-97b8-9c1fe03f37cf"}, {"id": "sector-1788182205403", "desc": "Exporting premium Ethiopian Arabica coffee, oilseeds, and pulses to international markets.", "name": "COMMODITY TRADE", "image": "d65da17f-eeea-4c99-bdb5-b79376184927"}], "service_capability_id": "583a3cf3-2478-48cc-a20f-948f608c88b8"}	2026-08-31 06:42:16.457-07
84050623-85b0-4a73-a831-0501a9285381	00000000-0000-4000-8000-000000000001	UPDATE	ServiceOverview	3c8cb6b1-76e9-49b8-9c3d-c2847248338e	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}, {"icon": "ArrowLeftRight", "name": "Trading"}, {"icon": "SearchCheckIcon", "name": "Sourcing"}, {"icon": "Warehouse", "name": "warehousing"}, {"icon": "Network", "name": "Supply Solutions"}], "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}, {"icon": "ArrowLeftRight", "name": "Trading"}, {"icon": "SearchCheckIcon", "name": "Sourcing"}, {"icon": "Warehouse", "name": "warehousing"}, {"icon": "Network", "name": "Supply Solutions"}], "heading": "Integrated Business Services Built Around Your Needs...", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO IS", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	2026-09-01 06:33:23.321-07
091e9b9f-95a2-4f3d-ab75-db585fb5b5dd	00000000-0000-4000-8000-000000000001	UPDATE	ServiceOverview	3c8cb6b1-76e9-49b8-9c3d-c2847248338e	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}, {"icon": "ArrowLeftRight", "name": "Trading"}, {"icon": "SearchCheckIcon", "name": "Sourcing"}, {"icon": "Warehouse", "name": "warehousing"}, {"icon": "Network", "name": "Supply Solutions"}], "heading": "Integrated Business Services Built Around Your Needs...", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO IS", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}, {"icon": "ArrowLeftRight", "name": "Trading"}, {"icon": "SearchCheckIcon", "name": "Sourcing"}, {"icon": "Warehouse", "name": "warehousing"}, {"icon": "Network", "name": "Supply Solutions"}], "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	2026-09-01 06:33:37.001-07
79299a2f-2a54-47d8-a67d-9938ea56fcc6	00000000-0000-4000-8000-000000000001	UPDATE	ServiceExperience	560e3bfa-61b4-41c9-8294-ac09511c38dd	{"steps": [{"num": "01", "desc": "Understand customer and market requirements.", "title": "Understand"}, {"num": "02", "desc": "Identify appropriate products and supply channels.", "title": "Source"}, {"num": "03", "desc": "Manage import, export, and trading activities", "title": "Trade"}, {"num": "04", "desc": "Utilize warehousing and facilities where required.", "title": "Store"}, {"num": "05", "desc": "Connect products and solutions to customers and target markets.", "title": "Deliver"}], "heading": "From Source to Market", "created_at": "2026-08-31T09:14:07.021Z", "deleted_at": null, "subheading": "Our integrated approach ensures reliability at every step of the commercial supply chain.", "updated_at": "2026-08-31T09:14:07.021Z", "service_experience_id": "560e3bfa-61b4-41c9-8294-ac09511c38dd"}	{"steps": [{"num": "0111", "desc": "Understand customer and market requirements.", "title": "Understand"}, {"num": "02", "desc": "Identify appropriate products and supply channels.", "title": "Source"}, {"num": "03", "desc": "Manage import, export, and trading activities", "title": "Trade"}, {"num": "04", "desc": "Utilize warehousing and facilities where required.", "title": "Store"}, {"num": "05", "desc": "Connect products and solutions to customers and target markets.", "title": "Deliver"}], "heading": "From Source to Market", "created_at": "2026-08-31T09:14:07.021Z", "deleted_at": null, "subheading": "Our integrated approach ensures reliability at every step of the commercial supply chain.", "updated_at": "2026-08-31T09:14:07.021Z", "service_experience_id": "560e3bfa-61b4-41c9-8294-ac09511c38dd"}	2026-09-01 06:35:47.065-07
f5cf7813-c35c-4579-ab2e-accbe560cdcc	00000000-0000-4000-8000-000000000001	UPDATE	ServiceExperience	560e3bfa-61b4-41c9-8294-ac09511c38dd	{"steps": [{"num": "0111", "desc": "Understand customer and market requirements.", "title": "Understand"}, {"num": "02", "desc": "Identify appropriate products and supply channels.", "title": "Source"}, {"num": "03", "desc": "Manage import, export, and trading activities", "title": "Trade"}, {"num": "04", "desc": "Utilize warehousing and facilities where required.", "title": "Store"}, {"num": "05", "desc": "Connect products and solutions to customers and target markets.", "title": "Deliver"}], "heading": "From Source to Market", "created_at": "2026-08-31T09:14:07.021Z", "deleted_at": null, "subheading": "Our integrated approach ensures reliability at every step of the commercial supply chain.", "updated_at": "2026-08-31T09:14:07.021Z", "service_experience_id": "560e3bfa-61b4-41c9-8294-ac09511c38dd"}	{"steps": [{"num": "01", "desc": "Understand customer and market requirements.", "title": "Understand"}, {"num": "02", "desc": "Identify appropriate products and supply channels.", "title": "Source"}, {"num": "03", "desc": "Manage import, export, and trading activities", "title": "Trade"}, {"num": "04", "desc": "Utilize warehousing and facilities where required.", "title": "Store"}, {"num": "05", "desc": "Connect products and solutions to customers and target markets.", "title": "Deliver"}], "heading": "From Source to Market", "created_at": "2026-08-31T09:14:07.021Z", "deleted_at": null, "subheading": "Our integrated approach ensures reliability at every step of the commercial supply chain.", "updated_at": "2026-08-31T09:14:07.021Z", "service_experience_id": "560e3bfa-61b4-41c9-8294-ac09511c38dd"}	2026-09-01 06:35:57.031-07
850bb8a4-5232-4a8f-b86e-b89086b4d253	00000000-0000-4000-8000-000000000001	UPDATE	Service	0df774a1-a13b-48a8-9457-150c45f8682f	{"icon": "Network", "order": 0, "title": "Market & Supply Solutions", "content": "Solutions designed around market demand, customer needs, and supply gaps across multiple sectors, driving our role as a comprehensive multi-sector business.", "created_at": "2026-08-31T13:09:54.883Z", "service_id": "0df774a1-a13b-48a8-9457-150c45f8682f"}	{"icon": "Network", "order": 0, "title": "Market & Supply Solutionsss", "content": "Solutions designed around market demand, customer needs, and supply gaps across multiple sectors, driving our role as a comprehensive multi-sector business.", "created_at": "2026-08-31T13:09:54.883Z", "service_id": "0df774a1-a13b-48a8-9457-150c45f8682f"}	2026-09-01 06:36:44.83-07
7ad01456-d72a-4d51-9f6d-fa61aea57362	00000000-0000-4000-8000-000000000001	UPDATE	Service	0df774a1-a13b-48a8-9457-150c45f8682f	{"icon": "Network", "order": 0, "title": "Market & Supply Solutionsss", "content": "Solutions designed around market demand, customer needs, and supply gaps across multiple sectors, driving our role as a comprehensive multi-sector business.", "created_at": "2026-08-31T13:09:54.883Z", "service_id": "0df774a1-a13b-48a8-9457-150c45f8682f"}	{"icon": "Network", "order": 0, "title": "Market & Supply Solutions", "content": "Solutions designed around market demand, customer needs, and supply gaps across multiple sectors, driving our role as a comprehensive multi-sector business.", "created_at": "2026-08-31T13:09:54.883Z", "service_id": "0df774a1-a13b-48a8-9457-150c45f8682f"}	2026-09-01 06:39:29.813-07
69b6c14e-98ec-4f5d-8939-18a93c7ff76b	00000000-0000-4000-8000-000000000001	UPDATE	ServiceOverview	3c8cb6b1-76e9-49b8-9c3d-c2847248338e	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}, {"icon": "ArrowLeftRight", "name": "Trading"}, {"icon": "SearchCheckIcon", "name": "Sourcing"}, {"icon": "Warehouse", "name": "warehousing"}, {"icon": "Network", "name": "Supply Solutions"}], "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	{"cards": [{"icon": "ArrowDownToLineIcon", "name": "Import"}, {"icon": "ArrowUpFromLine", "name": "Export"}, {"icon": "ArrowLeftRight", "name": "Trading"}, {"icon": "SearchCheckIcon", "name": "Sourcing"}, {"icon": "Network", "name": "Supply Solutions"}, {"icon": "Warehouse", "name": "warehousing"}], "heading": "Integrated Business Services Built Around Your Needs", "created_at": "2026-08-31T09:11:57.205Z", "deleted_at": null, "subheading": "WHAT WE DO", "updated_at": "2026-08-31T09:11:57.205Z", "description": "Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.", "service_overview_id": "3c8cb6b1-76e9-49b8-9c3d-c2847248338e"}	2026-09-01 06:39:50.18-07
2bb3031f-0df1-4a94-bcb1-e3c953f0a781	00000000-0000-4000-8000-000000000001	UPDATE	Service	685a5dcf-98bd-4c09-8928-92d487a8373f	{"icon": "AArrowUpIcon", "order": 0, "title": "Export Services", "content": "Export solutions connecting Ethiopian products with international markets, specializing in Ethiopian Arabica coffee, oilseeds, and pulses.", "created_at": "2026-08-31T09:10:27.129Z", "service_id": "685a5dcf-98bd-4c09-8928-92d487a8373f"}	{"icon": "ArrowDownToLine", "order": 0, "title": "Export Services", "content": "Export solutions connecting Ethiopian products with international markets, specializing in Ethiopian Arabica coffee, oilseeds, and pulses.", "created_at": "2026-08-31T09:10:27.129Z", "service_id": "685a5dcf-98bd-4c09-8928-92d487a8373f"}	2026-09-01 06:40:18.428-07
f48de053-0404-410e-864e-986fd7d6d21a	00000000-0000-4000-8000-000000000001	UPDATE	Service	e5c800a3-ae36-4385-9382-276e1377ec87	{"icon": "AArrowDown", "order": 0, "title": "Import Services", "content": "Professional import and supply solutions across multiple categories, including agricultural inputs, construction materials, machinery, vehicles, electrical equipment, and other approved trading categories.", "created_at": "2026-08-31T09:10:08.267Z", "service_id": "e5c800a3-ae36-4385-9382-276e1377ec87"}	{"icon": "ArrowUpFromLineIcon", "order": 0, "title": "Import Services", "content": "Professional import and supply solutions across multiple categories, including agricultural inputs, construction materials, machinery, vehicles, electrical equipment, and other approved trading categories.", "created_at": "2026-08-31T09:10:08.267Z", "service_id": "e5c800a3-ae36-4385-9382-276e1377ec87"}	2026-09-01 06:40:41.238-07
22194100-0f97-4b87-9bc6-0c2c8cd23c9e	00000000-0000-4000-8000-000000000001	UPDATE	Service	685a5dcf-98bd-4c09-8928-92d487a8373f	{"icon": "ArrowDownToLine", "order": 0, "title": "Export Services", "content": "Export solutions connecting Ethiopian products with international markets, specializing in Ethiopian Arabica coffee, oilseeds, and pulses.", "created_at": "2026-08-31T09:10:27.129Z", "service_id": "685a5dcf-98bd-4c09-8928-92d487a8373f"}	{"icon": "ArrowUpFromLine", "order": 0, "title": "Export Services", "content": "Export solutions connecting Ethiopian products with international markets, specializing in Ethiopian Arabica coffee, oilseeds, and pulses.", "created_at": "2026-08-31T09:10:27.129Z", "service_id": "685a5dcf-98bd-4c09-8928-92d487a8373f"}	2026-09-01 06:41:11.766-07
fae8ba66-1d24-4f5d-a4e9-a560ff84b7ec	00000000-0000-4000-8000-000000000001	UPDATE	Service	e5c800a3-ae36-4385-9382-276e1377ec87	{"icon": "ArrowUpFromLineIcon", "order": 0, "title": "Import Services", "content": "Professional import and supply solutions across multiple categories, including agricultural inputs, construction materials, machinery, vehicles, electrical equipment, and other approved trading categories.", "created_at": "2026-08-31T09:10:08.267Z", "service_id": "e5c800a3-ae36-4385-9382-276e1377ec87"}	{"icon": "ArrowDownToLine", "order": 0, "title": "Import Services", "content": "Professional import and supply solutions across multiple categories, including agricultural inputs, construction materials, machinery, vehicles, electrical equipment, and other approved trading categories.", "created_at": "2026-08-31T09:10:08.267Z", "service_id": "e5c800a3-ae36-4385-9382-276e1377ec87"}	2026-09-01 06:41:25.282-07
544b7641-7029-42eb-a671-8f36bf6ac502	00000000-0000-4000-8000-000000000001	UPDATE	ServiceWhyUs	9b5759c1-b9a8-41be-b7df-995c7f01ec71	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": null, "cta_heading": null, "cta_subheading": null, "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	2026-09-01 06:51:39.697-07
f73c4ebd-07e2-451b-939c-c6fe278bea61	00000000-0000-4000-8000-000000000001	UPDATE	ServiceWhyUs	9b5759c1-b9a8-41be-b7df-995c7f01ec71	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}, {"desc": "", "icon": "CheckCircle", "title": ""}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	2026-09-01 06:55:46.029-07
8ed2d122-f244-44b4-92f0-1064664e9e3e	00000000-0000-4000-8000-000000000001	UPDATE	ServiceWhyUs	9b5759c1-b9a8-41be-b7df-995c7f01ec71	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [{"icon": "Box", "route": "/contact", "title": "Explore Our Products"}], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	2026-09-01 06:57:10.155-07
52308ae8-c8cb-4cd1-80a2-808f407e0640	00000000-0000-4000-8000-000000000001	UPDATE	ServiceWhyUs	9b5759c1-b9a8-41be-b7df-995c7f01ec71	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [{"icon": "Box", "route": "/contact", "title": "Explore Our Products"}], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [{"icon": "Box", "route": "/contact", "title": "Contact Jarra Holdings"}, {"icon": "ArrowRight", "route": ".products", "title": "Explore Our Products"}], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	2026-09-01 06:58:07.062-07
62216a15-9f33-4267-8124-a25a65f44386	00000000-0000-4000-8000-000000000001	UPDATE	ServiceWhyUs	9b5759c1-b9a8-41be-b7df-995c7f01ec71	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [{"icon": "Box", "route": "/contact", "title": "Contact Jarra Holdings"}, {"icon": "ArrowRight", "route": ".products", "title": "Explore Our Products"}], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [{"icon": "ArrowRight", "route": "/contact", "title": "Contact Jarra Holdings"}, {"icon": "BoxIcon", "route": ".products", "title": "Explore Our Products"}], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	2026-09-01 06:58:27.336-07
5e60e696-ab29-4836-999a-c3a7f560e78e	00000000-0000-4000-8000-000000000001	UPDATE	ServiceWhyUs	9b5759c1-b9a8-41be-b7df-995c7f01ec71	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [{"icon": "ArrowRight", "route": "/contact", "title": "Contact Jarra Holdings"}, {"icon": "BoxIcon", "route": ".products", "title": "Explore Our Products"}], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	{"points": [{"desc": "We give high priority to customer needs.", "icon": "UsersIcon", "title": "Customer"}, {"desc": "Quality Consistent quality is central to our approach.", "icon": "LucideBadgeCheck", "title": "Quality"}, {"desc": "We build relationships on trust and integrity.", "icon": "ShieldCheck", "title": "Integrity"}, {"desc": "We remain open to new ideas and evolving solutions.", "icon": "LucideLightbulb", "title": "Innovation"}, {"desc": "We engage with diverse business partners.", "icon": "HandshakeIcon", "title": "Collaboration"}, {"desc": "We rely on capability and experience across diverse sectors.", "icon": "BriefcaseBusinessIcon", "title": "Competency"}], "heading": "Why Partner With Jarra Holdings?", "created_at": "2026-08-31T13:31:32.551Z", "deleted_at": null, "subheading": "Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.", "updated_at": "2026-08-31T13:31:32.551Z", "cta_buttons": [{"icon": "ArrowRight", "route": "/contact", "title": "Contact Jarra Holdings"}, {"icon": "BoxIcon", "route": "/products", "title": "Explore Our Products"}], "cta_heading": "", "cta_subheading": "", "service_why_us_id": "9b5759c1-b9a8-41be-b7df-995c7f01ec71"}	2026-09-01 07:08:43.982-07
63b9d9fb-a216-40ae-9af0-fc176e5d0caf	\N	CREATE	Attachment	14cd36f5-5008-40fb-b0ef-0ec16308b1ec	\N	{"width": 2752, "height": 1536, "file_name": "facilities-section.jpg", "file_path": "uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/large.webp", "mime_type": "image/webp", "created_at": "2026-09-01T14:51:26.797Z", "uploaded_by": null, "attachment_id": "14cd36f5-5008-40fb-b0ef-0ec16308b1ec", "file_path_large": "uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/large.webp", "file_path_thumb": "uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/thumb.webp", "file_path_medium": "uploads/attachments/14cd36f5-5008-40fb-b0ef-0ec16308b1ec/medium.webp"}	2026-09-01 07:51:27.528-07
c6259a57-b3c3-45f4-a63d-5e744e45f870	\N	CREATE	Facility	d5c1d8cd-e497-4f80-b57e-9d4e2d6ea769	\N	{"name": "Addis Ababa", "image": "14cd36f5-5008-40fb-b0ef-0ec16308b1ec", "order": 0, "location": "Addis Ababa, Ethiopia", "created_at": "2026-09-01T14:51:32.097Z", "updated_at": "2026-09-01T14:51:32.097Z", "facility_id": "d5c1d8cd-e497-4f80-b57e-9d4e2d6ea769", "short_description": "Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response."}	2026-09-01 07:51:32.102-07
0c188d5f-8eb6-4e95-8e00-85d70c180449	\N	CREATE	Attachment	3791f78d-c57c-4f58-b94f-a292156a7e36	\N	{"width": 2752, "height": 1536, "file_name": "facilities-section.jpg", "file_path": "uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/large.webp", "mime_type": "image/webp", "created_at": "2026-09-01T14:52:10.679Z", "uploaded_by": null, "attachment_id": "3791f78d-c57c-4f58-b94f-a292156a7e36", "file_path_large": "uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/large.webp", "file_path_thumb": "uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/thumb.webp", "file_path_medium": "uploads/attachments/3791f78d-c57c-4f58-b94f-a292156a7e36/medium.webp"}	2026-09-01 07:52:11.535-07
ebee9fad-fb66-49cf-a4da-376e49c5c77e	\N	UPDATE	FacilityOverview	6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3	{"image": null, "heading": null, "created_at": "2026-09-01T14:12:12.186Z", "subheading": null, "updated_at": "2026-09-01T14:12:12.186Z", "description": null, "list_heading": null, "facility_overview_id": "6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3"}	{"image": "3791f78d-c57c-4f58-b94f-a292156a7e36", "heading": "The Foundation of Our Global Operations", "created_at": "2026-09-01T14:12:12.186Z", "subheading": "Our Physical Presence", "updated_at": "2026-09-01T14:12:12.186Z", "description": "Our facilities form part of the physical foundation of Jarra Holdings, providing the robust environments and infrastructure that support the company's wider organizational activities.\\n\\nFrom strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem.", "list_heading": "Featured Facilities", "facility_overview_id": "6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3"}	2026-09-01 07:52:23.405-07
491bf3ab-eb76-4224-afb2-1d281ba98654	\N	UPDATE	FacilityOverview	6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3	{"image": "3791f78d-c57c-4f58-b94f-a292156a7e36", "heading": "The Foundation of Our Global Operations", "created_at": "2026-09-01T14:12:12.186Z", "subheading": "Our Physical Presence", "updated_at": "2026-09-01T14:12:12.186Z", "description": "Our facilities form part of the physical foundation of Jarra Holdings, providing the robust environments and infrastructure that support the company's wider organizational activities.\\n\\nFrom strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem.", "list_heading": "Featured Facilities", "facility_overview_id": "6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3"}	{"image": "3791f78d-c57c-4f58-b94f-a292156a7e36", "heading": "The Foundation of Our Global Operationsss", "created_at": "2026-09-01T14:12:12.186Z", "subheading": "Our Physical Presences", "updated_at": "2026-09-01T14:12:12.186Z", "description": "Our facilities form part of the physical foundation of Jarra Holdings, providing the robust environments and infrastructure that support the company's wider organizational activities.\\n\\nFrom strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem....", "list_heading": "Featured Facilitiesss", "facility_overview_id": "6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3"}	2026-09-01 07:52:41.878-07
308a6416-46fc-4481-95bd-2dafb3573cfd	\N	UPDATE	FacilityOverview	6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3	{"image": "3791f78d-c57c-4f58-b94f-a292156a7e36", "heading": "The Foundation of Our Global Operationsss", "created_at": "2026-09-01T14:12:12.186Z", "subheading": "Our Physical Presences", "updated_at": "2026-09-01T14:12:12.186Z", "description": "Our facilities form part of the physical foundation of Jarra Holdings, providing the robust environments and infrastructure that support the company's wider organizational activities.\\n\\nFrom strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem....", "list_heading": "Featured Facilitiesss", "facility_overview_id": "6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3"}	{"image": "3791f78d-c57c-4f58-b94f-a292156a7e36", "heading": "The Foundation of Our Global Operations", "created_at": "2026-09-01T14:12:12.186Z", "subheading": "Our Physical Presence", "updated_at": "2026-09-01T14:12:12.186Z", "description": "Our facilities form part of the physical foundation of Jarra Holdings, providing the robust environments and infrastructure that support the company's wider organizational activities.\\n\\nFrom strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem.", "list_heading": "Featured Facilities", "facility_overview_id": "6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3"}	2026-09-01 07:53:10.192-07
7f8aa24a-8372-49a6-ad2d-500f6644a3b5	\N	UPDATE	FacilityFootprint	ea4fe27e-0e17-4a8f-9ed0-a545add37ef3	{"heading": null, "locations": null, "created_at": "2026-09-01T14:12:12.283Z", "updated_at": "2026-09-01T14:12:12.283Z", "description": null, "card_heading": null, "card_description": null, "facility_footprint_id": "ea4fe27e-0e17-4a8f-9ed0-a545add37ef3"}	{"heading": "Our Geographic Footprint", "locations": [{"id": "1788274427246", "name": "Addis Ababa, Ethiopia", "order": 0}, {"id": "1788274436336", "name": "Adama,  Oromia", "order": 1}, {"id": "1788274444409", "name": "Dire Dawa, Oromia", "order": 2}], "created_at": "2026-09-01T14:12:12.283Z", "updated_at": "2026-09-01T14:12:12.283Z", "description": "Jarra Holdings’s physical assets are strategically positioned across key regional zones to support our complex operations and ensure resilient infrastructure.", "card_heading": "Strategic Positioning", "card_description": "Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.", "facility_footprint_id": "ea4fe27e-0e17-4a8f-9ed0-a545add37ef3"}	2026-09-01 07:54:17.213-07
f4b1b350-fbb4-4a1f-807c-76be605c2209	\N	UPDATE	FacilityFootprint	ea4fe27e-0e17-4a8f-9ed0-a545add37ef3	{"heading": "Our Geographic Footprint", "locations": [{"id": "1788274427246", "name": "Addis Ababa, Ethiopia", "order": 0}, {"id": "1788274436336", "name": "Adama,  Oromia", "order": 1}, {"id": "1788274444409", "name": "Dire Dawa, Oromia", "order": 2}], "created_at": "2026-09-01T14:12:12.283Z", "updated_at": "2026-09-01T14:12:12.283Z", "description": "Jarra Holdings’s physical assets are strategically positioned across key regional zones to support our complex operations and ensure resilient infrastructure.", "card_heading": "Strategic Positioning", "card_description": "Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.", "facility_footprint_id": "ea4fe27e-0e17-4a8f-9ed0-a545add37ef3"}	{"heading": "Our Geographic Footprint", "locations": [{"id": "1788274427246", "name": "Addis Ababa, Ethiopia", "order": 0}, {"id": "1788274436336", "name": "Adama,  Oromia", "order": 1}, {"id": "1788274444409", "name": "Dire Dawa, Oromia", "order": 2}, {"id": "1788274468930", "name": "Bishoftu, Oromia", "order": 3}], "created_at": "2026-09-01T14:12:12.283Z", "updated_at": "2026-09-01T14:12:12.283Z", "description": "Jarra Holdings’s physical assets are strategically positioned across key regional zones to support our complex operations and ensure resilient infrastructure.", "card_heading": "Strategic Positioning is", "card_description": "Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.", "facility_footprint_id": "ea4fe27e-0e17-4a8f-9ed0-a545add37ef3"}	2026-09-01 07:54:50.566-07
e626dcc7-fb61-45f4-afa6-d81d1558d362	\N	UPDATE	FacilityFootprint	ea4fe27e-0e17-4a8f-9ed0-a545add37ef3	{"heading": "Our Geographic Footprint", "locations": [{"id": "1788274427246", "name": "Addis Ababa, Ethiopia", "order": 0}, {"id": "1788274436336", "name": "Adama,  Oromia", "order": 1}, {"id": "1788274444409", "name": "Dire Dawa, Oromia", "order": 2}, {"id": "1788274468930", "name": "Bishoftu, Oromia", "order": 3}], "created_at": "2026-09-01T14:12:12.283Z", "updated_at": "2026-09-01T14:12:12.283Z", "description": "Jarra Holdings’s physical assets are strategically positioned across key regional zones to support our complex operations and ensure resilient infrastructure.", "card_heading": "Strategic Positioning is", "card_description": "Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.", "facility_footprint_id": "ea4fe27e-0e17-4a8f-9ed0-a545add37ef3"}	{"heading": "Our Geographic Footprint", "locations": [{"id": "1788274427246", "name": "Addis Ababa, Ethiopia", "order": 0}, {"id": "1788274436336", "name": "Adama,  Oromia", "order": 1}, {"id": "1788274444409", "name": "Dire Dawa, Oromia", "order": 2}, {"id": "1788274468930", "name": "Bishoftu, Oromia", "order": 3}], "created_at": "2026-09-01T14:12:12.283Z", "updated_at": "2026-09-01T14:12:12.283Z", "description": "Jarra Holdings’s physical assets are strategically positioned across key regional zones to support our complex operations and ensure resilient infrastructure.", "card_heading": "Strategic Positioning", "card_description": "Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.", "facility_footprint_id": "ea4fe27e-0e17-4a8f-9ed0-a545add37ef3"}	2026-09-01 07:55:02.258-07
5b188721-2c19-481c-ab7a-a6c0e198bfbd	\N	CREATE	Attachment	89332444-f542-40ae-af48-05d211fa5c74	\N	{"width": 2752, "height": 1536, "file_name": "about-section.jpg", "file_path": "uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/large.webp", "mime_type": "image/webp", "created_at": "2026-09-01T14:55:55.813Z", "uploaded_by": null, "attachment_id": "89332444-f542-40ae-af48-05d211fa5c74", "file_path_large": "uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/large.webp", "file_path_thumb": "uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/thumb.webp", "file_path_medium": "uploads/attachments/89332444-f542-40ae-af48-05d211fa5c74/medium.webp"}	2026-09-01 07:55:56.547-07
00bd58bb-4ff3-4762-b772-6677ed706be9	\N	CREATE	Facility	3c71fd77-d8b1-4e4f-87f6-675ade10a140	\N	{"name": "Facility Two", "image": "89332444-f542-40ae-af48-05d211fa5c74", "order": 1, "location": "Dire Dawa, Ethiopia", "created_at": "2026-09-01T14:55:58.302Z", "updated_at": "2026-09-01T14:55:58.302Z", "facility_id": "3c71fd77-d8b1-4e4f-87f6-675ade10a140", "short_description": "Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response."}	2026-09-01 07:55:58.31-07
\.


--
-- Data for Name: background_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.background_attachments (background_attachment_id, background_id, attachment_id, created_at) FROM stdin;
\.


--
-- Data for Name: backgrounds; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.backgrounds (background_id, title, description, icon, content) FROM stdin;
233962f9-692c-4771-9216-d78f5f5a1eec	Connecting Ethiopia to the World	Jarra Holdings S.C. is a diversified import, export, and trading company committed to connecting Ethiopia with global markets through reliable trade and supply solutions.	Globe2Icon	
\.


--
-- Data for Name: canvases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.canvases (canvas_id, title_prefix, title_highlight, description, vision_title, vision_description, words, created_at, updated_at, deleted_at) FROM stdin;
d0bee8d4-e8b5-4ed7-85c0-3f52aa4871e9	Creating Value.	 Driving Sustainable Growth.	Jarra Holdings is a multi-sector company committed to sustainable investment, economic empowerment, market development, and creating lasting value for shareholders, customers, and communities.	Our Vision	To be a leading community-based conglomerate in Africa by 2030.	{"center":"IMPACTING"}	2026-08-31 00:22:31.363-07	2026-08-31 00:22:31.363-07	\N
\.


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cards (card_id, title, description, button_name, button_url, attachment_id, created_at, updated_at, deleted_at) FROM stdin;
4fd351d9-8ecb-4ff9-ab77-77b447dcc78d	One of the Best Performing Economies in Ethiopians	Ethiopia has seen astonishing growth in the last ten years. Growing at an average rate of 9.7% between 2009 and 2019, Ethiopia has consistently been one of Africa’s top performing economies.\n\n	Learn More	http://localhost:3000/en/about	7297df98-dd69-49e9-8139-208b4bc4b289	2026-08-21 01:21:35.905-07	2026-08-21 07:09:07.724-07	\N
\.


--
-- Data for Name: core_values; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.core_values (value_id, section_id, title, icon, content) FROM stdin;
aa2139f6-5e02-424b-9a41-496083b16d01	de20bd3a-f6b7-4388-aa5c-569f26e80602	Sustainability	\N	Sustainability
a50c1acd-4373-4f4d-ac99-e0c4e75178ef	de20bd3a-f6b7-4388-aa5c-569f26e80602	Integrity	\N	Integrity
b0bb8527-f7c2-4e8e-b96b-49f9b176da53	de20bd3a-f6b7-4388-aa5c-569f26e80602	Innovation	\N	Innovation
67feba92-b43e-414a-9de0-ce9ac5d30abd	de20bd3a-f6b7-4388-aa5c-569f26e80602	Empowerment	\N	Empowerment
1dbd5e49-f40b-41d9-9847-2c2f87917f67	de20bd3a-f6b7-4388-aa5c-569f26e80602	Excellence	\N	Excellence
\.


--
-- Data for Name: event_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.event_attachments (event_attachment_id, event_id, attachment_id, created_at) FROM stdin;
\.


--
-- Data for Name: event_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.event_categories (event_category_id, name, created_at) FROM stdin;
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events (event_id, title, event_category_id, description, start_time, end_time, location, virtual_link, organizer, content, status, publish_start, publish_end, published_at, approved_by, approved_at, created_by, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: facilities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facilities (facility_id, name, location, short_description, image, "order", created_at, updated_at) FROM stdin;
d5c1d8cd-e497-4f80-b57e-9d4e2d6ea769	Addis Ababa	Addis Ababa, Ethiopia	Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.	14cd36f5-5008-40fb-b0ef-0ec16308b1ec	0	2026-09-01 07:51:32.097-07	2026-09-01 07:51:32.097-07
3c71fd77-d8b1-4e4f-87f6-675ade10a140	Facility Two	Dire Dawa, Ethiopia	Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.	89332444-f542-40ae-af48-05d211fa5c74	1	2026-09-01 07:55:58.302-07	2026-09-01 07:55:58.302-07
\.


--
-- Data for Name: facility_footprint; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facility_footprint (facility_footprint_id, heading, description, locations, card_heading, card_description, created_at, updated_at) FROM stdin;
ea4fe27e-0e17-4a8f-9ed0-a545add37ef3	Our Geographic Footprint	Jarra Holdings’s physical assets are strategically positioned across key regional zones to support our complex operations and ensure resilient infrastructure.	[{"id":"1788274427246","name":"Addis Ababa, Ethiopia","order":0},{"id":"1788274436336","name":"Adama,  Oromia","order":1},{"id":"1788274444409","name":"Dire Dawa, Oromia","order":2},{"id":"1788274468930","name":"Bishoftu, Oromia","order":3}]	Strategic Positioning	Our facilities are positioned near major transit corridors and agricultural hubs. This physical positioning allows for streamlined logistics and rapid operational response.	2026-09-01 07:12:12.283-07	2026-09-01 07:12:12.283-07
\.


--
-- Data for Name: facility_overview; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facility_overview (facility_overview_id, heading, subheading, description, image, list_heading, created_at, updated_at) FROM stdin;
6ef3b1db-ff29-4f5e-8ba8-3a069fd1e3a3	The Foundation of Our Global Operations	Our Physical Presence	Our facilities form part of the physical foundation of Jarra Holdings, providing the robust environments and infrastructure that support the company's wider organizational activities.\n\nFrom strategic operational depots to large-scale industrial sites, each location is physically designed and equipped to ensure continuous capability across our ecosystem.	3791f78d-c57c-4f58-b94f-a292156a7e36	Featured Facilities	2026-09-01 07:12:12.186-07	2026-09-01 07:12:12.186-07
\.


--
-- Data for Name: federal_office_contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.federal_office_contacts (federal_office_id, office_address, phone, email, map_location, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: footer_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footer_sections (footer_section_id, footer_id, section_name, links, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: footers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footers (footer_id, title, text, attachment_id, content, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: gamestone_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gamestone_attachments (gamestone_attachment_id, gamestone_id, attachment_id, created_at) FROM stdin;
\.


--
-- Data for Name: gamestones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gamestones (gamestone_id, title, description, location, attachment_id, discovered_date, parent_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: investigate_ethiopia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigate_ethiopia (investigate_ethiopia_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: investigation_action; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigation_action (investigation_action_id, investigate_ethiopia_id, title, description, action, link, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: investigation_strategy; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigation_strategy (investigation_strategy_id, investigate_ethiopia_id, type, icon, title, description, content, tags, attachment_id, link, bg_color, fg_color, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: leadership; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.leadership (leadership_id, header, parent_id, name, title, description, level, is_active, created_at, updated_at, deleted_at) FROM stdin;
8c3626b8-92e4-4849-a26b-51ce29b3ac77	Jarra Holdings	\N	First Name Middle Name	Chief Executive Officer (CEO)	Leads Jarra Holdings' strategic direction and oversees the company's import, export, investment, and business development activities, with a focus on sustainable growth and long-term partnerships.	1	t	2026-08-11 05:08:21.648-07	2026-08-21 07:31:38.953-07	\N
7dc75fd4-0983-40fb-a369-5ce5d56ee1f5	Jarra Holdings	8c3626b8-92e4-4849-a26b-51ce29b3ac77	jhgfds	kjhgfd	,mnbvfcdvbnm	2	t	2026-08-11 10:44:28.934-07	2026-08-21 07:32:50.654-07	2026-08-21 07:32:50.653-07
8b0cd76e-b833-4721-ba80-c632c139908f	Jarra Holdings	8c3626b8-92e4-4849-a26b-51ce29b3ac77	asdfghjkl;	dfghjkl	sxdcfvgbhnjm,	2	t	2026-08-11 10:44:06.847-07	2026-08-21 07:32:51.921-07	2026-08-21 07:32:51.92-07
b4650450-c0db-4c57-9b5d-4f2dbe109d0c	Jarra Holdings	8c3626b8-92e4-4849-a26b-51ce29b3ac77	First Name_2 Middle Name	Director of Import & Export Operations	Oversees international sourcing, commodity exports, supplier relationships, logistics coordination, and trade compliance to ensure reliable and efficient execution across markets.	2	t	2026-08-21 07:35:00.757-07	2026-08-21 07:35:00.757-07	\N
cda67c27-a533-4568-b428-5f08a26cfad7	Jarra Holdings	8c3626b8-92e4-4849-a26b-51ce29b3ac77	[First Name] [Middle Name]	Director of Business Development & Investments	Drives new business opportunities, strategic partnerships, and investment initiatives while supporting Jarra Holdings' expansion across industrial, technology, energy, and trading sectors.	2	t	2026-08-21 07:35:45.633-07	2026-08-21 07:35:45.633-07	\N
\.


--
-- Data for Name: leadership_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.leadership_attachments (leadership_attachment_id, leadership_id, attachment_id, created_at) FROM stdin;
911d876b-e105-41f8-8f34-779299f7289f	8c3626b8-92e4-4849-a26b-51ce29b3ac77	522da8b9-d779-4874-ba2d-7840623d94dc	2026-08-21 07:34:00.972-07
fcf3a7b0-ffed-4c80-a593-dcf5f710f97a	b4650450-c0db-4c57-9b5d-4f2dbe109d0c	5101e8a0-1070-45a3-be01-78757125fdc8	2026-08-21 07:35:00.766-07
91cd767d-e12c-4655-9229-928526a6defb	cda67c27-a533-4568-b428-5f08a26cfad7	419ed9fb-2391-4e3f-a7fc-a4dacbe7f74a	2026-08-21 07:36:13.576-07
\.


--
-- Data for Name: licensing_contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.licensing_contacts (licensing_contact_id, regional_office_id, name, email, phone, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.messages (message_id, full_name, email_address, subject, message, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_application_process; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_application_process (mining_application_process_id, title, description, objectives, publish, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_application_process_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_application_process_attachments (mining_application_process_attachment_id, mining_application_process_id, attachment_id, overlay_text, overlay_icon, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mining_application_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_application_types (mining_application_types_id, mining_application_process_id, icon, title, requirements, steps, action_label, action_url, color, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_framework; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_framework (mining_framework_id, mining_regulation_process_id, title, description, objectives, attachment_id, attachment_overlay_text, attachment_overlay_color, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_guideline; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_guideline (mining_guideline_id, mining_regulation_process_id, icon, title, description, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_guideline_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_guideline_attachments (mining_guideline_attachment_id, mining_guideline_id, attachment_id, label, created_at) FROM stdin;
\.


--
-- Data for Name: mining_guideline_content; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_guideline_content (mining_guideline_content_id, mining_guideline_id, type, bg_color, icon, stamp, title, description, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_regulation_process; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_regulation_process (mining_regulation_process_id, title, description, publish, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_service; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_service (mining_service_id, mining_regulation_process_id, title, description, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: mining_service_card; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mining_service_card (mining_service_card_id, mining_service_id, title, sub_title, sub_title_color, icon, description, requirements, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news (news_id, title, content, author, status, published_at, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: news_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_attachments (news_attachment_id, news_id, attachment_id, category, created_at) FROM stdin;
\.


--
-- Data for Name: news_feedbacks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_feedbacks (news_feedback_id, news_id, fullname, thought, is_published, created_at) FROM stdin;
\.


--
-- Data for Name: news_metadata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_metadata (news_metadata_id, news_id, like_count, dislike_count, read_count, average_read_time, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: news_reactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_reactions (news_reaction_id, news_id, ip_address, reaction, created_at) FROM stdin;
\.


--
-- Data for Name: news_reads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_reads (news_read_id, news_id, ip_address, total_read_time, last_read_at) FROM stdin;
\.


--
-- Data for Name: news_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_tags (news_tag_id, news_id, tag_id, created_at) FROM stdin;
\.


--
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notifications (notification_id, recipient_id, recipient_type, title, message, related_entity_type, related_entity_id, is_read, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: objectives; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.objectives (objective_id, asm_id, type, icon, title, description, content, foot_note, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: page_headers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.page_headers (page_header_id, page_identifier, title, description, icon, attachment_id) FROM stdin;
2bf44f7f-96a7-4748-be6c-77adfa944ad2	about	About Jarra Holdings S.C.	Building trusted trade and sustainable opportunities from Ethiopia to global markets.	LucideQuote	865ca954-c1e2-41a1-a74c-b8010c02caa6
b86100fe-4a8c-4deb-8cbd-28e91126f889	services	Our Services	Reliable trade, supply, and logistics solutions built to connect businesses with global opportunities.	BriefcaseBusiness	15199c87-8d55-4893-943e-62d71e777183
e5756e8b-8156-4a24-b99a-5186c830c7fb	products	Our Products	Quality products and solutions sourced and supplied to meet the needs of diverse industries and markets.	LucidePackage	911834dc-ff4a-4717-a15a-4eed3f149860
d9bdb7f3-610e-4161-8ca5-2ba9a1169c97	facilities	Our Facilities	Strategic facilities and infrastructure that support Jarra Holdings’ growing business operations and long-term investments.	LucideBuilding2	ba5d60a6-bebd-4f79-961f-63e8e61cc867
b6d8540b-93c2-4689-a7fe-2b815a6735f0	news	News & Updates	Stay informed about Jarra Holdings’ latest developments, activities, achievements, and business updates.	LucideNewspaper	847beb6d-bcdc-4683-8149-c69f1f63b5f8
0ce1c1ea-a7ff-4543-a51d-2596ba9e5b8b	careers	Careers at Jarra Holdings	Join a growing organization where talent, innovation, and opportunity come together to create lasting impact.	LucideUsersRound	df8a536b-86ec-4136-98bb-1f2f909d0c95
48c3c849-a762-49da-8fe8-4b38888a4e13	contact	Contact Jarra Holdings	Connect with our team to explore partnerships, products, services, and business opportunities.	LucidePhoneCall	cda602f4-b6a0-402b-9426-d9ec20780eeb
b813fceb-4feb-4e02-8dc8-782ba0e9b598	businesses	Jarra Holdings Businesses	A diversified portfolio of businesses driving sustainable growth, investment, and economic opportunity across Ethiopia and beyond.	LucideBuilding2	5bf983e0-7734-4921-bf15-e027eabb1322
\.


--
-- Data for Name: partner_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.partner_attachments (partner_attachment_id, category, partner_id, attachment_id, created_at) FROM stdin;
cf155093-97fa-4f39-9ce8-238ab3c1e8a9	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	ef7f07c0-9d43-4cfe-bde9-cae4e05583cd	2026-08-21 02:29:14.46-07
ed730815-cf27-4c8d-bf06-6f236eb5edb7	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	dc4a48ec-5e51-423d-8cec-ee1aa1a05257	2026-08-21 02:29:14.463-07
89995331-73bd-4446-8c77-0566aa9e19b6	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	a5008742-7d5f-4532-8603-2045555f9211	2026-08-21 02:29:14.464-07
5cab2fde-02bf-4995-bc28-b597078d5bd8	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	609b7ed1-6514-49b0-a060-61f26f1350b8	2026-08-21 02:29:14.465-07
fb755705-37ba-4f59-963c-d3b81fc82432	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	4341324e-a551-4fdd-9079-b12bf5234221	2026-08-21 02:29:14.466-07
485e98e6-361f-49dd-9c2c-79e619e4e4d4	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	099417c5-996d-4008-b627-e4a60055204d	2026-08-21 02:29:14.467-07
0a671c37-b094-4083-99d1-535c3648cba6	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	bd662192-e8af-4919-b264-fb2a55548583	2026-08-21 02:29:14.468-07
7143dda5-454c-4f40-a756-4540de82cb02	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	9ea8d618-d0be-4246-8a52-07640d8ee09c	2026-08-21 02:29:14.47-07
5fa2dcb0-6e55-409b-8995-91b01e5c159b	logo	435ee576-1036-4b04-ae5c-a4d4a3a43938	c0029eee-422f-4c34-875f-f66877870f6d	2026-08-21 02:29:14.471-07
\.


--
-- Data for Name: partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.partners (partner_id, title, description, created_at, updated_at, deleted_at) FROM stdin;
435ee576-1036-4b04-ae5c-a4d4a3a43938	Our Partnering vahsbdhabnsd	We collaborate with trusted in national and international partners to support sustainable industrial and economic development.	2026-08-21 01:34:09.028-07	2026-08-21 02:29:14.452-07	\N
\.


--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permissions (permission_id, resource, action, is_active, created_at, updated_at) FROM stdin;
74e4943a-492d-4640-8c9e-945fe8409ed9	dashboard	view	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
62c04b49-f80c-47d7-90a4-634491f6f207	users	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
bd9ed478-9198-4705-ba2a-684482b99f02	users	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
25094473-0e9a-4809-9642-ebb874810817	users	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
141ef444-f11c-4499-8e53-9143590492dd	users	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
21f5277c-8437-4e60-a5fa-5217bb6c536f	users	assign_role	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
bd1eaf43-e27f-415d-b544-a9f0cb080a6a	roles	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
bc1387f0-84fd-4428-961e-dc45d0545433	roles	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
c5286bd0-0a60-48cb-86a0-082197a5c610	roles	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
c616c1f1-b1fb-46b2-8639-a1cb385e7a40	roles	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
9a0370aa-60c7-4bf4-bb0f-30d42936d590	roles	assign_permission	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
b95221c5-a1c8-4168-85af-0db19d28d20d	permissions	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
6aba027c-f4a2-44bb-9ebe-3a6ed4ac0869	permissions	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
5e92a65e-df2c-4d96-a2f2-02b15c09ff06	permissions	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
8e851741-2a33-40a3-9099-85d5f10bb712	permissions	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
86917883-1d9c-40b8-81ad-42ed21640d8e	news	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
7178216b-92c3-4563-97b0-4b450a4570b1	news	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
5c19a232-03c8-4d83-af45-3c74057b3220	news	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
cdcf54de-be35-447b-9df9-a8c15f04919d	news	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
e24d5261-9fbd-4363-8f2f-89b416c2561e	news	publish	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
59a74b36-f1f4-417c-97b7-94c038357329	events	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
6a11eb9a-fef5-4985-85d8-da7bb0e331fd	events	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
a8877adc-6be6-4b41-b21c-dcc201863677	events	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
6736291a-7ada-4b90-9b52-2ce85326e8f7	events	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
5a06c7d5-06d7-4bff-82be-b968b13fb7e8	events	publish	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
e2e65b55-d586-4d47-8d02-a356976505a2	event_categories	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
bc7e93e9-888b-4c2e-b4a9-bcddc43a3ed3	event_categories	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
67ae1fc7-55ae-4c48-87da-8ed9f1ab9248	event_categories	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
d5352ec4-474e-40c3-b24b-83ab55e41b50	event_categories	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
bf1b3a6f-9d96-4a80-a1ed-37102ec81a3b	tags	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
44d09880-d147-40fa-aaad-7db2199f7aee	tags	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
c2cdefae-05f6-41be-bbf8-0d359b216abf	tags	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
62c98b2c-2c05-4ccd-a413-f40aea8f78cc	tags	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
debbd851-16d3-447f-9a9c-c0cfcdc4c1ee	hero	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
4f32b538-aef7-403c-9854-2daa54bd0948	hero	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
d9b1b6e1-0f4e-47d1-a072-92aef5559a73	hero	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
6407549d-807a-4077-9eb4-bf82a80be45b	hero	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
cfd40d7e-962a-4350-a1c9-aca13c9a7587	about	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
4ef922b6-3edd-4bb8-aa6b-bf3a6c09a683	about	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
1d4f81aa-3bbe-47f5-9046-8c6a9c16980c	about	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
8398171e-a1dd-4301-9201-ba09edc00132	about	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
af59e6ba-78ca-4d1e-96b1-a6ba33713b32	contact	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
20ad449a-70f5-40f8-96a9-9059fcd59fca	contact	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
daed8b91-5f5c-428d-af22-aa2bce83010c	contact	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
059c8a31-0637-4f9e-84f0-d4b005ddd0b2	contact	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
3fd8f53d-1133-4580-a2ff-2e77f7919c1f	opportunities	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
67837d74-62be-459b-9a5e-9bbeef5b8024	opportunities	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
689614a8-8aaa-4ff4-8642-a2d664772b5b	opportunities	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
9c5612dc-c7d8-4d54-bc6f-a2a91e307b6a	opportunities	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
56e95a7f-6476-4a1b-9391-8ce08b1964a3	opportunities	publish	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
df902268-5acf-4f0b-bd0a-df46309bef6a	tenders	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
d053c8f9-a9ef-4bec-8a40-a70de9def0fd	tenders	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
c12f55ae-aaeb-4d3c-ad6a-332e6e700451	tenders	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
7dbf30d3-6d18-4aa5-b01a-91030384995f	tenders	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
59939b6a-b436-41e9-a6ef-d3915aa5e7ee	tenders	publish	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
0be33496-02c2-45b4-ac5a-d31323d7d948	vacancies	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
e1e74e1f-8836-46b9-b301-92cd81404b0f	vacancies	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
982db61f-05b2-47d0-95aa-70da5eb39f6b	vacancies	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
d18c97c8-5da8-462b-ac43-52cac0da5e76	vacancies	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
a84efe10-d5db-4e1f-adec-b834321a25d3	vacancies	publish	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
2f445064-a7ee-41fa-beda-00ab97569744	contact_messages	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
508f9831-17a0-4dce-8c1a-f8e94f92c127	contact_messages	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
f54861a4-f4c9-4a06-9f7a-1a3a00c33bf3	contact_messages	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
4857e59e-6736-486e-9239-3ee6a73b0fbc	footer	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
0e863844-6be7-4571-bc88-dab0ce74a9f5	footer	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
a3cd3909-d150-455c-89f3-f6f3253e3aa8	footer	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
a1c791f7-3e1c-434e-9a5d-009b066f58c8	footer	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
b900512f-f479-4200-bed0-cb2204ac903e	investigate_ethiopia	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
261ae5a0-0dcc-40ee-8191-db9d8aa2c847	investigate_ethiopia	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
c23b121f-c1ec-4a93-9f8c-24ede70e9e83	investigate_ethiopia	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
8eaf82b3-7a3f-4508-8969-eb40976747c9	investigate_ethiopia	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
667ce0fb-8707-4b9f-b756-69e3ba2b4521	services	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
d30273cd-47a4-4fe7-ad81-76c5e8a7c885	services	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
03232f5b-74cd-4e6b-8446-f70932a8dc66	services	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
1ddfdd56-4684-448a-b5e5-571cda1ea14c	services	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
953546f9-38d7-4103-9e82-725383eb9d9a	asm	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
d1bbf428-4ead-41ad-915e-ebd625d2e178	asm	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
3a0bafc8-e4d6-4174-ac03-36da2db263dc	asm	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
05a7738e-6c2f-4ffc-9b2f-2a9fa62d9246	asm	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
2218c075-e186-4d2c-a390-88c62ef0eebf	mining_snapshots	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
fe96feb7-d71a-4ca3-9f80-acc3ebd39a1f	mining_snapshots	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
b3dde117-4c88-4a8c-a352-db85df71d396	mining_snapshots	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
a5c93ba3-68f1-4c63-81a6-c4563937e1e8	mining_snapshots	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
8f27cc78-ded6-4007-a8c3-b73ebc07656d	mining_gamestones	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
889a9b88-9053-4259-9fa8-b819a5b5c900	mining_gamestones	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
5f52a990-363e-4cae-a81c-b7364fe7d661	mining_gamestones	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
0613921a-54a3-490b-ab03-bc7bec48c582	mining_gamestones	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
05f1bad7-5a7b-483d-b9a2-9e9e53100670	mining_resources	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
450aceb3-600a-4f3b-9c1a-7174492b3ae9	mining_resources	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
283e5abd-6473-448a-9660-41af573380a5	mining_resources	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
b382bc8b-a39b-4bbc-95fd-3a8e1449f224	mining_resources	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
414a11c5-84cb-431d-8ea8-85a9c62254ae	mining_application_processes	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
346100ca-dbc3-4cd0-9497-2599b89e5aa3	mining_application_processes	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
6052fc13-1133-4100-ac5d-6fb79f6d6a53	mining_application_processes	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
ae556b18-1297-4f76-9849-4021880ac0fd	mining_application_processes	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
1458223a-f23f-4f58-90e8-2e3b5c30af89	mining_regulation_processes	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
665d1f7d-481c-4723-8323-a0f46c17a58f	mining_regulation_processes	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
9093d661-f579-4d1a-9295-a1ccf3fb8a17	mining_regulation_processes	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
7fe5e4b9-3e25-495b-943a-57aac80e51c5	mining_regulation_processes	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
4ae56cd7-b1f8-4431-9915-bc444ca6364f	geothermal_snapshots	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
2abb9b2a-2789-478f-8984-45d4bd3878c3	geothermal_snapshots	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
de36751f-20f9-4d22-b403-142b3dde7adc	geothermal_snapshots	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
a1fa0bd1-9c63-4967-916b-26ddafd3ca9b	geothermal_snapshots	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
22ac8062-5859-4184-820b-3d3d0aeab25a	geothermal_resources	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
5024e11a-46be-4598-bc46-74eb440e252a	geothermal_resources	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
afbe526e-a540-4eb4-8954-56d64fea1815	geothermal_resources	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
3e82cac9-d56f-4802-9516-880d6228cf63	geothermal_resources	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
455daa1a-9e45-49f1-b021-8e5305f376fc	petroleum_snapshots	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
6570fbc4-c7d4-41c6-b182-98d6ed11308f	petroleum_snapshots	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
97ff2ec6-a9f3-4058-9ac0-c8a10b64ff3a	petroleum_snapshots	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
565fbbe1-972b-45e8-9284-6abc47ce0ffd	petroleum_snapshots	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
2d0d9ca0-70ac-4220-b23d-3052f864b291	petroleum_resources	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
ed6869a0-1e37-4141-aa03-d21ffc36c0e3	petroleum_resources	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
e3860b10-63a1-4eb5-995a-4abde56e6dd5	petroleum_resources	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
1177281b-715f-4d87-846b-2b5f8e0d6c35	petroleum_resources	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
618fdf9c-3e7f-4d1c-bcdd-b708cc4500b2	petroleum_processes	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
5aac0644-8163-4f45-8317-13513d096ecf	petroleum_processes	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
ef06c11c-e57f-4116-b951-e9ebe8948ac5	petroleum_processes	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
2c3988bc-3959-4a35-960b-94fd2014e535	petroleum_processes	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
0333c446-dcf4-4fb2-88f5-619df57e475a	petroleum_processes	publish	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
ef90e023-7bcf-491e-8b86-99757d0f70dd	petroleum_regulation_processes	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
7ad01d84-e841-4533-9ec2-696b0d2ff707	petroleum_regulation_processes	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
02c6c17d-e6f3-4adf-814e-47feadf77ddf	petroleum_regulation_processes	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
0f7492d8-9803-4c33-8a3f-f620f07241bb	petroleum_regulation_processes	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
ba4a88b6-dbdb-411b-9db5-e68772d83d73	attachments	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
0b6de18f-0509-4b13-8384-9fefe66d4251	attachments	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
ca61aa6f-93b8-4cc5-a2e0-5272cfae6af7	attachments	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
405eef0c-3a16-48e6-bb79-62a03337a7f0	audit_logs	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
60b2650e-342e-464c-9d72-960ed8ee8472	audit_logs	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
5e238440-7b53-4a27-b8a9-90d7b0af71a4	routes	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
bccd9bcf-6d1d-43c4-acdc-20dd15496ba9	routes	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
758381b2-83a6-401a-b8e2-ae9aca30aa4c	navigation	create	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
6c277acf-d9d1-4142-9419-8cdf791ac2f2	navigation	read	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
8171f719-5328-4863-ac0b-830aec30936c	navigation	update	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
bb23ce3d-420c-4f3d-a7c4-66ff4abe095a	navigation	delete	t	2026-08-09 03:30:44.927-07	2026-08-09 03:30:44.927-07
9b27eb49-5799-42ef-8b56-fb3cfb523ab6	page_headers	create	t	2026-08-23 21:56:40.697-07	2026-08-23 21:56:40.697-07
5bfee1f6-3604-4540-ae6d-ed4305591263	page_headers	read	t	2026-08-23 21:56:40.697-07	2026-08-23 21:56:40.697-07
e4749da3-6945-40a5-aa6f-771142329605	page_headers	update	t	2026-08-23 21:56:40.697-07	2026-08-23 21:56:40.697-07
bf370f10-cb67-4144-b52c-8e114821e89c	page_headers	delete	t	2026-08-23 21:56:40.697-07	2026-08-23 21:56:40.697-07
b6144ceb-8291-433b-8049-45cbdf9e67d7	productcategory	create	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
fba8e220-0ddf-40f5-baf6-60687870c2c5	productcategory	read	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
4dceead5-a741-4b60-b1b5-ce7f5186bf8f	productcategory	update	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
11b2b8ee-99f3-4560-89f3-07d9bbe550aa	productcategory	delete	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
6c218c0d-a27a-4aa0-847a-0c22fc94517e	product	create	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
2c545700-b9ba-454e-862b-878573a89742	product	read	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
ef3bfbb8-41eb-4391-9b0e-82b19a9dd8ea	product	update	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
688ac24f-d6d4-4b7e-aa91-e3882af99ef7	product	delete	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
52621d63-e641-4173-af2e-45d51c56ae1c	productinquiry	create	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
cf00faff-3d22-43fa-85ba-034dadaf7e46	productinquiry	read	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
717efccd-f485-436f-8ba9-5c755d406729	productinquiry	update	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
bc14788a-80c0-4831-8532-8955940f820f	productinquiry	delete	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
\.


--
-- Data for Name: petroleum_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petroleum_attachments (petroleum_attachment_id, label, petroleum_objective_id, attachment_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: petroleum_directive; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petroleum_directive (petroleum_directive_id, petroleum_regulation_process_id, "order", title, description, type, action_label, action, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: petroleum_objective; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petroleum_objective (petroleum_objective_id, type, title, description, content, objectives, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: petroleum_processes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petroleum_processes (petroleum_process_id, title, description, published, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: petroleum_regulation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petroleum_regulation (petroleum_regulation_id, petroleum_regulation_process_id, "order", title, description, content, objectives, bullet_points, steps, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: petroleum_regulation_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petroleum_regulation_attachments (petroleum_regulation_attachment_id, petroleum_regulation_process_id, attachment_id, label, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: petroleum_regulation_process; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petroleum_regulation_process (petroleum_regulation_process_id, published, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: process_block_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.process_block_attachments (process_block_attachment_id, label, process_block_id, attachment_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: process_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.process_blocks (process_block_id, petroleum_process_id, title, description, content, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: process_steps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.process_steps (process_step_id, petroleum_process_id, title, description, content, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: product_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_attachments (product_attachment_id, product_id, attachment_id, category, created_at) FROM stdin;
362bdd9f-3e38-451a-a3b2-ad8976ed2941	647410d2-4611-4fea-bc49-6afc1d7a377f	2ca16436-2e2a-49e6-8bee-56a33379cfaf	image	2026-08-25 02:33:05.255-07
fe8e9740-07e2-47a1-ba5e-924272cd4d5b	647410d2-4611-4fea-bc49-6afc1d7a377f	f68da443-9a32-461d-a0f1-cf552e15f17a	image	2026-08-25 02:33:05.255-07
8ab59c30-7637-4b3e-a556-d8223c85bd83	53f5a1df-5b52-456f-a415-8bab157f076f	b89ff03a-ad01-413a-9e6a-188151b2ab63	image	2026-08-26 06:45:15.007-07
ee9bc3b4-409d-4b0c-919d-860aed4b4475	53f5a1df-5b52-456f-a415-8bab157f076f	bb8e4235-880a-496b-8fe7-03f7e1e8c536	image	2026-08-26 06:45:15.008-07
485ea4b0-ba86-46e3-8e4e-474ba271f7fe	53f5a1df-5b52-456f-a415-8bab157f076f	74e942ac-3fa5-4767-b190-134358063d74	image	2026-08-26 06:45:15.008-07
81cd6154-2bc2-4c5d-9ec6-200debb922fe	ac7fa049-551e-49f5-81d1-212a2791e360	1d09bf35-62cf-42b1-8bf2-284c32710d7b	image	2026-08-26 06:53:28.342-07
\.


--
-- Data for Name: product_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_categories (category_id, name, slug, description, created_at, updated_at, deleted_at) FROM stdin;
5e09be95-af20-4a39-a2ec-2ffca4510ec3	Cars	car	\N	2026-08-24 06:49:07.298-07	2026-08-24 06:49:07.298-07	\N
05f0a9d4-c30c-4099-a53d-62510a630708	Electronics	electronics	\N	2026-08-24 06:49:16.697-07	2026-08-24 06:49:16.697-07	\N
8f352612-c4d6-4130-a466-a59c25d28bd2	Grain	grains	\N	2026-08-24 06:49:35.212-07	2026-08-24 06:49:35.212-07	\N
655deb2e-329b-4214-a8be-ff578febaaca	Agricultural Products	agricultural-products	\N	2026-08-25 02:28:50.418-07	2026-08-25 02:28:50.418-07	\N
\.


--
-- Data for Name: product_categories_map; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_categories_map (created_at, updated_at, product_id, category_id) FROM stdin;
2026-08-26 06:45:14.994-07	2026-08-26 06:45:14.994-07	53f5a1df-5b52-456f-a415-8bab157f076f	8f352612-c4d6-4130-a466-a59c25d28bd2
2026-08-26 06:45:14.994-07	2026-08-26 06:45:14.994-07	53f5a1df-5b52-456f-a415-8bab157f076f	655deb2e-329b-4214-a8be-ff578febaaca
2026-08-26 06:53:28.338-07	2026-08-26 06:53:28.338-07	ac7fa049-551e-49f5-81d1-212a2791e360	655deb2e-329b-4214-a8be-ff578febaaca
2026-08-26 06:53:28.338-07	2026-08-26 06:53:28.338-07	ac7fa049-551e-49f5-81d1-212a2791e360	8f352612-c4d6-4130-a466-a59c25d28bd2
\.


--
-- Data for Name: product_inquiries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_inquiries (inquiry_id, product_id, name, company, email, phone, quantity, message, status, created_at, updated_at, deleted_at) FROM stdin;
4c217b24-a878-493d-9ee7-06071bfbbb3e	ac7fa049-551e-49f5-81d1-212a2791e360	Amanuel Daniel	fghjkl;	2000amandanm@gmail.com	0919755719	knjjzndfn jsdf sjdkfnsdf sdijfnsdf	sdjfnjsdfnkjsndf sjkdjfnsjdn fskjdfnjnsjdnf jk sdfnsjdfnjnsdf	pending	2026-08-26 06:55:26.563-07	2026-08-26 06:55:26.563-07	\N
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (product_id, name, slug, short_description, full_description, status, specifications, applications, created_at, updated_at, deleted_at, publish_status) FROM stdin;
647410d2-4611-4fea-bc49-6afc1d7a377f	Ethiopian Arabica Coffee	ethiopian-arabica-coffee	Premium Ethiopian Arabica coffee sourced from renowned coffee-growing regions, selected and prepared to meet international quality and traceability standards.	<p>Premium&nbsp;Ethiopian&nbsp;Arabica&nbsp;coffee&nbsp;sourced&nbsp;from&nbsp;renowned&nbsp;coffee-growing&nbsp;regions,&nbsp;selected&nbsp;and&nbsp;prepared&nbsp;to&nbsp;meet&nbsp;international&nbsp;quality&nbsp;and&nbsp;traceability&nbsp;standards.</p>	Available	{"Origin": "Ethiopia", "Quality": "Export Grade", "Packaging": "Export-grade packaging", "Processing": "Washed & Natural", "Product Type": "Arabica Coffee"}	[]	2026-08-25 02:33:05.238-07	2026-08-25 02:33:05.238-07	\N	published
53f5a1df-5b52-456f-a415-8bab157f076f	Ethiopian Sesame Seeds	ethiopian-sesame-seeds	High-quality Ethiopian sesame seeds sourced through reliable farmer and aggregator networks, suitable for international food and processing markets.	<p><strong>High-quality&nbsp;Ethiopian</strong>&nbsp;<em>sesame&nbsp;seeds</em>&nbsp;sourced&nbsp;through&nbsp;reliable&nbsp;farmer&nbsp;and&nbsp;aggregator&nbsp;networks,&nbsp;suitable&nbsp;for&nbsp;international&nbsp;food&nbsp;and&nbsp;processing&nbsp;markets.</p>	Available	{"Origin": "Ethiopia", "Supply": "Bulk / Export", "Quality": "Graded", "Application": "Food & Oil Processing", "Product Type": "Sesame Seeds"}	[]	2026-08-26 06:18:50.503-07	2026-08-26 06:18:50.503-07	\N	published
ac7fa049-551e-49f5-81d1-212a2791e360	Soybeans	soybeans	Quality Ethiopian soybeans supplied for food processing, agricultural applications, and other commercial uses.	<p>Quality&nbsp;Ethiopian&nbsp;soybeans&nbsp;supplied&nbsp;for&nbsp;food&nbsp;processing,&nbsp;agricultural&nbsp;applications,&nbsp;and&nbsp;other&nbsp;commercial&nbsp;uses.</p>	Available	{"Origin": "Ethiopia", "Quality": "Graded", "Packaging": "Bulk", "Product Type": "Soybeans"}	[]	2026-08-26 06:53:28.328-07	2026-08-26 06:53:28.328-07	\N	published
\.


--
-- Data for Name: purposes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purposes (purpose_id, subtitle, title, description, quote, pillars, attachment_id, created_at, updated_at, deleted_at) FROM stdin;
2500950d-6c08-4a60-840a-086a209e7afb	Our Purpose	Creating Value Across Industries, Empowering Communities	Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of sustainable businesses and investments. Through import and export trading, strategic investments, and carefully selected business sectors, we work to address market needs, support economic development, create employment opportunities, and generate lasting value for our shareholders and stakeholders.	Delivering innovative and sustainable solutions across industries.	[{"title":"TEST PILLAR","description":"Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of","icon":"Star"},{"title":"asdfghj","description":"Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of","icon":"Star"},{"title":"asdfghjkl","description":"Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of","icon":"Star"},{"title":"lkjhgfd","description":"Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of","icon":"Star"},{"title":"poiuytr","description":"Jarra Holdings was established as a multi-sector holding company with the ambition to build a diversified portfolio of","icon":"Star"}]	efce5909-5e87-460d-82ef-99b24ae6ef4f	2026-08-31 00:27:44.497-07	2026-08-31 00:27:44.497-07	\N
\.


--
-- Data for Name: regional_office_contact_centers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regional_office_contact_centers (regional_office_id, region_id, bureau_name, address, director, email, phone, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regions (region_id, code, name, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: resource; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resource (resource_id, sector, title, description, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: resource_attachments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resource_attachments (resource_attachment_id, resource_id, attachment_id, label, created_at) FROM stdin;
\.


--
-- Data for Name: role_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role_permissions (role_permission_id, role_id, permission_id, is_active, created_at, updated_at) FROM stdin;
c7a0142f-085a-4b1d-84e1-c6f06834c430	00000000-0000-4000-8000-000000000002	74e4943a-492d-4640-8c9e-945fe8409ed9	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6289fa6a-c0fa-4594-ba2a-1b7b56b8a0e5	00000000-0000-4000-8000-000000000002	62c04b49-f80c-47d7-90a4-634491f6f207	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
84cec7df-b3ee-4c3b-a2c4-1e5fc4124b5d	00000000-0000-4000-8000-000000000002	bd9ed478-9198-4705-ba2a-684482b99f02	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3eb7cf37-2e32-437e-a001-c11e3bed7c41	00000000-0000-4000-8000-000000000002	25094473-0e9a-4809-9642-ebb874810817	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
960743d5-c39f-4809-af2c-6b327b2d60e3	00000000-0000-4000-8000-000000000002	141ef444-f11c-4499-8e53-9143590492dd	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
d5797473-ba07-4e0e-ba2f-e3ad96ec680a	00000000-0000-4000-8000-000000000002	21f5277c-8437-4e60-a5fa-5217bb6c536f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
20776d1a-4a4d-4033-b28e-036e6f92e82b	00000000-0000-4000-8000-000000000002	bd1eaf43-e27f-415d-b544-a9f0cb080a6a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
b31baad9-0295-4c77-866c-3965f842b85c	00000000-0000-4000-8000-000000000002	bc1387f0-84fd-4428-961e-dc45d0545433	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
39bf0c09-e6b8-4436-a059-4ba52757e452	00000000-0000-4000-8000-000000000002	c5286bd0-0a60-48cb-86a0-082197a5c610	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
08c91f11-a88a-48fe-a19d-de279b6aa960	00000000-0000-4000-8000-000000000002	c616c1f1-b1fb-46b2-8639-a1cb385e7a40	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
bfc8abed-bc3a-4c7c-afe8-af3d0f4e86c8	00000000-0000-4000-8000-000000000002	9a0370aa-60c7-4bf4-bb0f-30d42936d590	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
c9019b56-4818-4556-8ce9-9ffecc2004cd	00000000-0000-4000-8000-000000000002	b95221c5-a1c8-4168-85af-0db19d28d20d	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
1fb348c3-e8f5-474b-8583-8f48f7e301ff	00000000-0000-4000-8000-000000000002	6aba027c-f4a2-44bb-9ebe-3a6ed4ac0869	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
1cde1d8f-f80e-482f-99c8-546893818127	00000000-0000-4000-8000-000000000002	5e92a65e-df2c-4d96-a2f2-02b15c09ff06	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
442ba7f4-49e0-427b-b8cb-6c712c924c22	00000000-0000-4000-8000-000000000002	8e851741-2a33-40a3-9099-85d5f10bb712	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
a41acb9f-9364-462e-90ef-2dbbdc070abb	00000000-0000-4000-8000-000000000002	86917883-1d9c-40b8-81ad-42ed21640d8e	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
2f46cbf2-47e4-4629-a259-23e04e07412a	00000000-0000-4000-8000-000000000002	7178216b-92c3-4563-97b0-4b450a4570b1	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
40d58ebf-90d6-452c-8ba8-a3fd5a7f845c	00000000-0000-4000-8000-000000000002	5c19a232-03c8-4d83-af45-3c74057b3220	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
fb27aaa0-c28a-4113-b344-2f1bc68db54e	00000000-0000-4000-8000-000000000002	cdcf54de-be35-447b-9df9-a8c15f04919d	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
de4c8960-0ac8-4984-ad72-3f9c6a9073a0	00000000-0000-4000-8000-000000000002	e24d5261-9fbd-4363-8f2f-89b416c2561e	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
725d18d5-6457-4165-999c-68fd5ced57e2	00000000-0000-4000-8000-000000000002	59a74b36-f1f4-417c-97b7-94c038357329	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
a238dd4e-6d78-44d2-81d0-af6e1d2b1b29	00000000-0000-4000-8000-000000000002	6a11eb9a-fef5-4985-85d8-da7bb0e331fd	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3273b6f3-628b-4862-9fe6-d33db0f8ca86	00000000-0000-4000-8000-000000000002	a8877adc-6be6-4b41-b21c-dcc201863677	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
0a1c4a5d-6337-4396-bfc4-7a7c63fba028	00000000-0000-4000-8000-000000000002	6736291a-7ada-4b90-9b52-2ce85326e8f7	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
4d343aa5-eeb5-4e03-8ca5-ef9d6b2e50cf	00000000-0000-4000-8000-000000000002	5a06c7d5-06d7-4bff-82be-b968b13fb7e8	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6e90a742-b8f7-429f-8cf6-5056cd9d67ba	00000000-0000-4000-8000-000000000002	e2e65b55-d586-4d47-8d02-a356976505a2	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
7e2c01b2-91c5-4d66-b595-0eb9835ccf54	00000000-0000-4000-8000-000000000002	bc7e93e9-888b-4c2e-b4a9-bcddc43a3ed3	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ee4a0412-e1e2-4012-966a-0b7865f379db	00000000-0000-4000-8000-000000000002	67ae1fc7-55ae-4c48-87da-8ed9f1ab9248	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
b4308f39-2860-4385-9aa8-3f375c8b9beb	00000000-0000-4000-8000-000000000002	d5352ec4-474e-40c3-b24b-83ab55e41b50	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
42076e55-418e-41d8-9211-41c9e67f8800	00000000-0000-4000-8000-000000000002	bf1b3a6f-9d96-4a80-a1ed-37102ec81a3b	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ac9fcc57-f027-4a47-be9c-84b250e4bac5	00000000-0000-4000-8000-000000000002	44d09880-d147-40fa-aaad-7db2199f7aee	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
95ee723e-61c4-4cbb-85ff-ed3198dee12f	00000000-0000-4000-8000-000000000002	c2cdefae-05f6-41be-bbf8-0d359b216abf	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ea60e95d-e4db-4932-9426-0ed7e76ad954	00000000-0000-4000-8000-000000000002	62c98b2c-2c05-4ccd-a413-f40aea8f78cc	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3f4cfdbf-8636-416f-8b85-8af6e243556a	00000000-0000-4000-8000-000000000002	debbd851-16d3-447f-9a9c-c0cfcdc4c1ee	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
12008923-523f-4b9c-afbc-334e15c33f68	00000000-0000-4000-8000-000000000002	4f32b538-aef7-403c-9854-2daa54bd0948	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
614f5a05-70d5-4854-9071-b512dd508816	00000000-0000-4000-8000-000000000002	d9b1b6e1-0f4e-47d1-a072-92aef5559a73	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3549060a-55c7-4498-a798-f59adf54ac3c	00000000-0000-4000-8000-000000000002	6407549d-807a-4077-9eb4-bf82a80be45b	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
83b971a1-5a43-4e36-abb1-6eff879945e4	00000000-0000-4000-8000-000000000002	cfd40d7e-962a-4350-a1c9-aca13c9a7587	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
f16c5055-681c-498e-97f5-138d05ac5454	00000000-0000-4000-8000-000000000002	4ef922b6-3edd-4bb8-aa6b-bf3a6c09a683	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
286c11c4-c0f7-4326-a896-dfb2aace5e68	00000000-0000-4000-8000-000000000002	1d4f81aa-3bbe-47f5-9046-8c6a9c16980c	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
189719b8-bfe6-4894-a182-68f4ac2312b2	00000000-0000-4000-8000-000000000002	8398171e-a1dd-4301-9201-ba09edc00132	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
9effdd6a-c46d-4c5e-ba6b-cf2c4aa560b6	00000000-0000-4000-8000-000000000002	af59e6ba-78ca-4d1e-96b1-a6ba33713b32	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6b5f978a-8061-4317-b18e-63c289e6347c	00000000-0000-4000-8000-000000000002	20ad449a-70f5-40f8-96a9-9059fcd59fca	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
636611af-2b63-45ae-9e59-2c4b0847d2a9	00000000-0000-4000-8000-000000000002	daed8b91-5f5c-428d-af22-aa2bce83010c	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
94451810-4fb5-4cc3-bb67-10f4df15e511	00000000-0000-4000-8000-000000000002	059c8a31-0637-4f9e-84f0-d4b005ddd0b2	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
2fd5842c-c12b-4312-aa7c-f84bfc277cb2	00000000-0000-4000-8000-000000000002	3fd8f53d-1133-4580-a2ff-2e77f7919c1f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
614aece9-2ddb-4612-8248-3e32c5f58ff5	00000000-0000-4000-8000-000000000002	67837d74-62be-459b-9a5e-9bbeef5b8024	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
f0f4db2c-ab42-4312-be6b-29b53ef8949a	00000000-0000-4000-8000-000000000002	689614a8-8aaa-4ff4-8642-a2d664772b5b	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
97a3f402-6b22-4a9d-aec4-97312f9efecd	00000000-0000-4000-8000-000000000002	9c5612dc-c7d8-4d54-bc6f-a2a91e307b6a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
b8e46fbc-ab8f-4082-b033-52c46cf12b94	00000000-0000-4000-8000-000000000002	56e95a7f-6476-4a1b-9391-8ce08b1964a3	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6fcef87e-35ce-4f25-9b7a-7b0df963a2b6	00000000-0000-4000-8000-000000000002	df902268-5acf-4f0b-bd0a-df46309bef6a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
0b55306e-d028-4e09-b69a-f1bb6b7bbcaf	00000000-0000-4000-8000-000000000002	d053c8f9-a9ef-4bec-8a40-a70de9def0fd	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
4fad3b1f-a5d0-49be-b94d-a8033ce28c48	00000000-0000-4000-8000-000000000002	c12f55ae-aaeb-4d3c-ad6a-332e6e700451	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6ef9a3ec-f03f-48a9-9fea-9decdca81ef5	00000000-0000-4000-8000-000000000002	7dbf30d3-6d18-4aa5-b01a-91030384995f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ec065789-15a0-4a06-a26d-6d375ac23655	00000000-0000-4000-8000-000000000002	59939b6a-b436-41e9-a6ef-d3915aa5e7ee	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
f7497deb-1bc8-409c-8ead-4c187c3377be	00000000-0000-4000-8000-000000000002	0be33496-02c2-45b4-ac5a-d31323d7d948	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
1722df62-878b-425b-8575-e16b4f57cab5	00000000-0000-4000-8000-000000000002	e1e74e1f-8836-46b9-b301-92cd81404b0f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ad00e5e0-7e82-4247-a836-51437e4c40cd	00000000-0000-4000-8000-000000000002	982db61f-05b2-47d0-95aa-70da5eb39f6b	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
62f47933-3f6c-4364-be54-e0823355dca3	00000000-0000-4000-8000-000000000002	d18c97c8-5da8-462b-ac43-52cac0da5e76	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3837177d-d114-42a4-897c-e7b4d2dbe391	00000000-0000-4000-8000-000000000002	a84efe10-d5db-4e1f-adec-b834321a25d3	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
e768ed09-c307-4f69-8d50-648dfd12dde2	00000000-0000-4000-8000-000000000002	2f445064-a7ee-41fa-beda-00ab97569744	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
f597ecf2-4c56-42f8-93da-82965b6526b5	00000000-0000-4000-8000-000000000002	508f9831-17a0-4dce-8c1a-f8e94f92c127	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
28547829-7492-4939-8263-97fd6ddf5c95	00000000-0000-4000-8000-000000000002	f54861a4-f4c9-4a06-9f7a-1a3a00c33bf3	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
1f3d6bf2-f79f-4ff2-8e0d-f66c084f536d	00000000-0000-4000-8000-000000000002	4857e59e-6736-486e-9239-3ee6a73b0fbc	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
a0070768-d8c3-4ff5-838e-4d5067aebddd	00000000-0000-4000-8000-000000000002	0e863844-6be7-4571-bc88-dab0ce74a9f5	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
240c212c-c8d3-485a-917d-504121ff21b7	00000000-0000-4000-8000-000000000002	a3cd3909-d150-455c-89f3-f6f3253e3aa8	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
27f91937-e4c8-4cc2-8bb5-5fdfe1bbe670	00000000-0000-4000-8000-000000000002	a1c791f7-3e1c-434e-9a5d-009b066f58c8	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
042cfec8-8f44-4166-8b91-efd9d779d0ec	00000000-0000-4000-8000-000000000002	b900512f-f479-4200-bed0-cb2204ac903e	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
0b2dd163-a902-4a91-be16-610a477bcd7f	00000000-0000-4000-8000-000000000002	261ae5a0-0dcc-40ee-8191-db9d8aa2c847	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
d1c50b14-aa7e-41f2-9eae-56ff8fdef782	00000000-0000-4000-8000-000000000002	c23b121f-c1ec-4a93-9f8c-24ede70e9e83	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
b44494a9-0ff9-4fe9-9adf-e18064ee7351	00000000-0000-4000-8000-000000000002	8eaf82b3-7a3f-4508-8969-eb40976747c9	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
5645790e-de26-4f24-9fc0-933ff47ccf27	00000000-0000-4000-8000-000000000002	667ce0fb-8707-4b9f-b756-69e3ba2b4521	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3a5e0835-81b7-438a-bc8f-34b3930ebc3f	00000000-0000-4000-8000-000000000002	d30273cd-47a4-4fe7-ad81-76c5e8a7c885	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
0060bc84-93c9-4692-8ab7-fc4ad323a30a	00000000-0000-4000-8000-000000000002	03232f5b-74cd-4e6b-8446-f70932a8dc66	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
5bb893e7-8b8d-4cae-af85-5609560b1848	00000000-0000-4000-8000-000000000002	1ddfdd56-4684-448a-b5e5-571cda1ea14c	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
d5ded951-c257-4132-ab17-97db7fa24e0a	00000000-0000-4000-8000-000000000002	953546f9-38d7-4103-9e82-725383eb9d9a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
13e6fa96-7b0e-4f29-9723-f58f3c559fc4	00000000-0000-4000-8000-000000000002	d1bbf428-4ead-41ad-915e-ebd625d2e178	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
8f90426a-daec-45ec-b763-8f83a082716b	00000000-0000-4000-8000-000000000002	3a0bafc8-e4d6-4174-ac03-36da2db263dc	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
dad7e475-11b8-4575-b457-250e27ef1443	00000000-0000-4000-8000-000000000002	05a7738e-6c2f-4ffc-9b2f-2a9fa62d9246	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
400d2a7e-0b5e-47c5-8ef7-2da3e0daf6fe	00000000-0000-4000-8000-000000000002	2218c075-e186-4d2c-a390-88c62ef0eebf	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
f6058a7e-3fff-4eee-a084-dd1892015ea9	00000000-0000-4000-8000-000000000002	fe96feb7-d71a-4ca3-9f80-acc3ebd39a1f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ad62cd5e-7985-4ee3-b769-24e4bfdc6964	00000000-0000-4000-8000-000000000002	b3dde117-4c88-4a8c-a352-db85df71d396	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
15bb134d-a6e3-4843-8d3b-c94834befeb7	00000000-0000-4000-8000-000000000002	a5c93ba3-68f1-4c63-81a6-c4563937e1e8	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
917fbb95-cea2-42ac-b740-1c84968c18ef	00000000-0000-4000-8000-000000000002	8f27cc78-ded6-4007-a8c3-b73ebc07656d	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
b25c3271-cf0e-4dd9-9492-4a5759cf6314	00000000-0000-4000-8000-000000000002	889a9b88-9053-4259-9fa8-b819a5b5c900	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
f95cf976-06d6-4998-9afc-bac0fee078ed	00000000-0000-4000-8000-000000000002	5f52a990-363e-4cae-a81c-b7364fe7d661	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
2d7f675d-b74e-4d64-b610-265fab650eca	00000000-0000-4000-8000-000000000002	0613921a-54a3-490b-ab03-bc7bec48c582	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
afd889eb-3732-4afe-9bb5-9a3d5ef14bd1	00000000-0000-4000-8000-000000000002	05f1bad7-5a7b-483d-b9a2-9e9e53100670	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
e9f27ec7-f84d-4ffa-b13f-1740a85a6e39	00000000-0000-4000-8000-000000000002	450aceb3-600a-4f3b-9c1a-7174492b3ae9	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
4c8104ff-5b94-483e-814f-9089c7bdd6d2	00000000-0000-4000-8000-000000000002	283e5abd-6473-448a-9660-41af573380a5	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
a8cba698-a350-4121-944b-a140eb7542a6	00000000-0000-4000-8000-000000000002	b382bc8b-a39b-4bbc-95fd-3a8e1449f224	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ae6e7421-20ee-4d1b-a97a-f002f6b4a02a	00000000-0000-4000-8000-000000000002	414a11c5-84cb-431d-8ea8-85a9c62254ae	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3952061a-7165-4363-a408-92475f99b9ea	00000000-0000-4000-8000-000000000002	346100ca-dbc3-4cd0-9497-2599b89e5aa3	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
05c7e994-193a-4042-8e9c-64ff806dc006	00000000-0000-4000-8000-000000000002	6052fc13-1133-4100-ac5d-6fb79f6d6a53	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
94667194-4acf-4366-a6a4-177e38cac9b4	00000000-0000-4000-8000-000000000002	ae556b18-1297-4f76-9849-4021880ac0fd	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
b23bb223-b331-4af1-911a-ba28a81331f6	00000000-0000-4000-8000-000000000002	1458223a-f23f-4f58-90e8-2e3b5c30af89	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
89056188-6df0-491a-bf2d-aa55f3c9c9ed	00000000-0000-4000-8000-000000000002	665d1f7d-481c-4723-8323-a0f46c17a58f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
65b37843-60bc-47a6-9a56-2e1be511c07d	00000000-0000-4000-8000-000000000002	9093d661-f579-4d1a-9295-a1ccf3fb8a17	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
9707db5e-2a9c-41c3-acb7-b7f49808367e	00000000-0000-4000-8000-000000000002	7fe5e4b9-3e25-495b-943a-57aac80e51c5	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3a36c7d9-1c24-438a-b7a7-a9ea9cb7b131	00000000-0000-4000-8000-000000000002	4ae56cd7-b1f8-4431-9915-bc444ca6364f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
d37d2ad4-014a-4721-921e-2debb0ac359c	00000000-0000-4000-8000-000000000002	2abb9b2a-2789-478f-8984-45d4bd3878c3	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
22c844ab-6948-4dde-951a-76df089311d8	00000000-0000-4000-8000-000000000002	de36751f-20f9-4d22-b403-142b3dde7adc	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
d224369b-6649-4c91-aa72-29b40368b0ca	00000000-0000-4000-8000-000000000002	a1fa0bd1-9c63-4967-916b-26ddafd3ca9b	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
be649270-b42c-4b16-87e7-12f32b5ca9ac	00000000-0000-4000-8000-000000000002	22ac8062-5859-4184-820b-3d3d0aeab25a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
312f88b2-5bfa-4d7c-b8bd-50c9d325560e	00000000-0000-4000-8000-000000000002	5024e11a-46be-4598-bc46-74eb440e252a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
53ed3575-2a32-430a-accd-c42bb9125723	00000000-0000-4000-8000-000000000002	afbe526e-a540-4eb4-8954-56d64fea1815	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
865ed220-4a6a-4ed3-aec8-c5f65eb52de3	00000000-0000-4000-8000-000000000002	3e82cac9-d56f-4802-9516-880d6228cf63	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
870c1a0b-41e6-429f-b385-0be71cbcc45c	00000000-0000-4000-8000-000000000002	455daa1a-9e45-49f1-b021-8e5305f376fc	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
cb80388b-12e4-4a76-8b03-62d1105887d1	00000000-0000-4000-8000-000000000002	6570fbc4-c7d4-41c6-b182-98d6ed11308f	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
81650de5-2746-4f48-a9bd-67aa4be216c2	00000000-0000-4000-8000-000000000002	97ff2ec6-a9f3-4058-9ac0-c8a10b64ff3a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
5f94073e-a2fa-4f50-b297-0d3ec5fa2a6a	00000000-0000-4000-8000-000000000002	565fbbe1-972b-45e8-9284-6abc47ce0ffd	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
99efcf21-87f4-443a-9664-9d5ce2ceded6	00000000-0000-4000-8000-000000000002	2d0d9ca0-70ac-4220-b23d-3052f864b291	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
87b99007-15e2-4930-b453-cfbe2da7f884	00000000-0000-4000-8000-000000000002	ed6869a0-1e37-4141-aa03-d21ffc36c0e3	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
64309012-c063-40a9-9d3b-861d74a86793	00000000-0000-4000-8000-000000000002	e3860b10-63a1-4eb5-995a-4abde56e6dd5	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
64b15ae8-c286-4600-b4c1-8f7104417d84	00000000-0000-4000-8000-000000000002	1177281b-715f-4d87-846b-2b5f8e0d6c35	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
169a9a88-119b-4842-84f9-cc2b05c867dd	00000000-0000-4000-8000-000000000002	618fdf9c-3e7f-4d1c-bcdd-b708cc4500b2	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
bc6bfcd8-2d4f-4883-8619-9609db474229	00000000-0000-4000-8000-000000000002	5aac0644-8163-4f45-8317-13513d096ecf	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
19855e00-a463-4217-ab4e-df8d0a52bee8	00000000-0000-4000-8000-000000000002	ef06c11c-e57f-4116-b951-e9ebe8948ac5	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
015cda66-047b-439b-a095-1c98ded53e08	00000000-0000-4000-8000-000000000002	2c3988bc-3959-4a35-960b-94fd2014e535	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
30793b9f-d2b6-49e4-9497-3445721d7400	00000000-0000-4000-8000-000000000002	0333c446-dcf4-4fb2-88f5-619df57e475a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
0f1544bd-9736-4cc2-b813-36fee1c59c32	00000000-0000-4000-8000-000000000002	ef90e023-7bcf-491e-8b86-99757d0f70dd	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
72583b77-a688-476b-af1b-10f1f0dfa835	00000000-0000-4000-8000-000000000002	7ad01d84-e841-4533-9ec2-696b0d2ff707	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ea279d54-5e9b-42a0-9acb-44a9d0e218c9	00000000-0000-4000-8000-000000000002	02c6c17d-e6f3-4adf-814e-47feadf77ddf	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
4b5f1402-6f96-4aba-8332-9db354da8d91	00000000-0000-4000-8000-000000000002	0f7492d8-9803-4c33-8a3f-f620f07241bb	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
ffe74330-819b-4693-9dea-ce456e7a5e3c	00000000-0000-4000-8000-000000000002	ba4a88b6-dbdb-411b-9db5-e68772d83d73	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6f1e1dd3-e561-492d-ac01-2417dc202c6a	00000000-0000-4000-8000-000000000002	0b6de18f-0509-4b13-8384-9fefe66d4251	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
462ef43f-b2b5-4bd6-80b0-7a2e7b3c57fa	00000000-0000-4000-8000-000000000002	ca61aa6f-93b8-4cc5-a2e0-5272cfae6af7	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6b18b340-e154-42f5-a8d0-c0401aa8dab2	00000000-0000-4000-8000-000000000002	405eef0c-3a16-48e6-bb79-62a03337a7f0	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
1469765b-80b3-4670-aa33-528121252e2d	00000000-0000-4000-8000-000000000002	60b2650e-342e-464c-9d72-960ed8ee8472	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
8be5b3e7-3be9-486a-8cfc-f4d12e4b7176	00000000-0000-4000-8000-000000000002	5e238440-7b53-4a27-b8a9-90d7b0af71a4	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
c0522502-8ce9-4aa9-9f56-b3365532a98d	00000000-0000-4000-8000-000000000002	bccd9bcf-6d1d-43c4-acdc-20dd15496ba9	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
05ced13a-41b9-446d-8c1b-2f15e9274d97	00000000-0000-4000-8000-000000000002	758381b2-83a6-401a-b8e2-ae9aca30aa4c	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
5e2845b3-39ec-482c-aa3f-2720f606ba6f	00000000-0000-4000-8000-000000000002	6c277acf-d9d1-4142-9419-8cdf791ac2f2	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
6b6e0e25-2efa-4b26-90f8-65d0da51a61d	00000000-0000-4000-8000-000000000002	8171f719-5328-4863-ac0b-830aec30936c	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
3a1a11a8-0679-4182-a364-afab34df1293	00000000-0000-4000-8000-000000000002	bb23ce3d-420c-4f3d-a7c4-66ff4abe095a	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
f1db6042-c14d-40d4-a9a1-9de577422007	00000000-0000-4000-8000-000000000002	b6144ceb-8291-433b-8049-45cbdf9e67d7	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
5c406534-3eef-4f3f-a030-99e23dac240d	00000000-0000-4000-8000-000000000002	fba8e220-0ddf-40f5-baf6-60687870c2c5	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
a56904c2-3c2b-4786-86cb-73b7a235bc2b	00000000-0000-4000-8000-000000000002	4dceead5-a741-4b60-b1b5-ce7f5186bf8f	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
a115ee67-db4a-42d9-a40d-9960a7b428fb	00000000-0000-4000-8000-000000000002	11b2b8ee-99f3-4560-89f3-07d9bbe550aa	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
dc6f6e0e-89a4-48fd-8d7b-68877c829301	00000000-0000-4000-8000-000000000002	6c218c0d-a27a-4aa0-847a-0c22fc94517e	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
989d260a-d708-4946-ae0e-6c0cd0f3a5e5	00000000-0000-4000-8000-000000000002	2c545700-b9ba-454e-862b-878573a89742	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
d4457f84-8f89-42f2-89be-6c13671eb206	00000000-0000-4000-8000-000000000002	ef3bfbb8-41eb-4391-9b0e-82b19a9dd8ea	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
5567d7c4-c6a1-4381-8075-c381b7acc618	00000000-0000-4000-8000-000000000002	688ac24f-d6d4-4b7e-aa91-e3882af99ef7	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
391b7521-1b53-45ff-9a2e-1b164ba90734	00000000-0000-4000-8000-000000000002	52621d63-e641-4173-af2e-45d51c56ae1c	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
90ec2ed2-5a87-4d04-9804-c863d60dc7b0	00000000-0000-4000-8000-000000000002	cf00faff-3d22-43fa-85ba-034dadaf7e46	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
1e078c62-a941-46ea-a766-fc668f28551c	00000000-0000-4000-8000-000000000002	717efccd-f485-436f-8ba9-5c755d406729	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
ab44a068-cbf9-4de0-9226-c0df50228eb0	00000000-0000-4000-8000-000000000002	bc14788a-80c0-4831-8532-8955940f820f	t	2026-08-24 06:46:59.621-07	2026-08-24 06:46:59.621-07
943cc8f7-b509-443c-85c0-df61809180cb	00000000-0000-4000-8000-000000000002	9b27eb49-5799-42ef-8b56-fb3cfb523ab6	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
94190253-3b47-434a-9ef2-da2180672e7d	00000000-0000-4000-8000-000000000002	5bfee1f6-3604-4540-ae6d-ed4305591263	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
8423991e-df64-42c7-b39a-08f97c940820	00000000-0000-4000-8000-000000000002	e4749da3-6945-40a5-aa6f-771142329605	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
e9844fbc-86b8-4cda-9ce6-55924a0e7548	00000000-0000-4000-8000-000000000002	bf370f10-cb67-4144-b52c-8e114821e89c	t	2026-08-23 21:56:53.01-07	2026-08-23 21:56:53.01-07
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (role_id, name, description, is_active, created_at, updated_at, deleted_at) FROM stdin;
00000000-0000-4000-8000-000000000002	Super Admin	Full access to all resources and actions.	t	2026-08-23 21:56:53.004-07	2026-08-23 21:56:53.004-07	\N
\.


--
-- Data for Name: route_translations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.route_translations (route_translation_id, route_id, language_code, label, created_at, updated_at) FROM stdin;
e9bd6192-ae33-4100-964c-0e6c5752749e	7aba0967-3ba8-4913-97d1-7550272f68c4	en	Home	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
164fd310-21b3-493a-b42b-6419308a4e5c	7aba0967-3ba8-4913-97d1-7550272f68c4	am	መነሻ	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
5592097d-6791-4215-9d8b-aad02bbe137c	6ad1d948-8b15-44a1-b8f9-8d9c0a662c56	en	Sector	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
e09eaece-8494-4b14-a537-652aa61191f5	6ad1d948-8b15-44a1-b8f9-8d9c0a662c56	am	ዘርፍ	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
3e365358-7c8f-499d-9bff-f9b2ddcca0ce	5dfb0786-aebd-4427-9ef8-e62ef343ded4	en	Mining	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
eecda377-8910-497e-a542-b3ce8a0360ee	5dfb0786-aebd-4427-9ef8-e62ef343ded4	am	ማዕድን	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
37bb9428-c854-4d73-9b73-950170939f99	8cb1097d-0f61-4f9d-a3d3-133a55fadb5e	en	Geothermal	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
05b21344-340a-4780-ac6e-ca2a931656c6	8cb1097d-0f61-4f9d-a3d3-133a55fadb5e	am	ጂኦተርማል	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
5a94f553-32f8-4b67-8312-e46e5a3d9851	3ceddd33-008d-44d3-9952-0b30d5c5d099	en	Petroleum	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
a5fdb2c1-24fb-4546-b718-27621f028fb6	3ceddd33-008d-44d3-9952-0b30d5c5d099	am	ነዳጅ	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
9d8a7f15-70ae-4376-ae04-68119241cff8	d5310052-8e7a-48cf-8d7c-26f7250f1742	en	About	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
5efb234d-001c-4b08-bdc9-c736363a3632	d5310052-8e7a-48cf-8d7c-26f7250f1742	am	ስለ እኛ	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
3004a78e-99c2-4e03-87b6-6a589ff26f0f	ed4c4f03-5f90-4a9f-865e-f52274a6295f	en	ASM	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
3e159cf7-9eeb-4957-b731-eb93b22031da	ed4c4f03-5f90-4a9f-865e-f52274a6295f	am	ASM	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
f17230c4-9013-455f-9b04-2412744b9de7	0b9ee565-27e8-4a28-af88-f705e2698212	en	Investigating in Ethiopia	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
59ccaeb0-5540-4f65-ab22-3cfbeff6abcb	0b9ee565-27e8-4a28-af88-f705e2698212	am	በኢትዮጵያ ምርመራ	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
5ac6ab28-34cc-40d0-89de-53004ec77c1a	7774199b-b004-40fe-b222-9cd7d7be23e2	en	Services	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
9e93739b-a09c-4aa3-9f86-4c70db7debe9	7774199b-b004-40fe-b222-9cd7d7be23e2	am	አገልግሎቶች	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
fd670480-0482-4d87-8c9c-64a4e4386e5d	92747cef-600d-4d14-8e3d-51361ed24a28	en	News	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
f274e546-c452-42a7-ad0d-b014e8551b75	92747cef-600d-4d14-8e3d-51361ed24a28	am	ዜና	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
0422cfb7-f835-41ed-a703-bb464ee99805	11ed287a-c5cd-46e5-a592-cf4fc2fdccc4	en	Events	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
28f2f661-f79e-4589-a0df-21f60f362d46	11ed287a-c5cd-46e5-a592-cf4fc2fdccc4	am	ክስተቶች	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
fa473828-5804-4923-bb66-3efe6ac8e5ca	5ef294af-d5b5-4ec1-95eb-774cd7f7b60b	en	Contact	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
61df334c-7fcb-4884-8f7d-c0cdf93db9ce	5ef294af-d5b5-4ec1-95eb-774cd7f7b60b	am	አግኙን	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
\.


--
-- Data for Name: routes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.routes (route_id, path, parent_id, "order", is_active, show_in_navbar, created_at, updated_at) FROM stdin;
7aba0967-3ba8-4913-97d1-7550272f68c4	/	\N	1	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
6ad1d948-8b15-44a1-b8f9-8d9c0a662c56	\N	\N	2	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
5dfb0786-aebd-4427-9ef8-e62ef343ded4	/mining	6ad1d948-8b15-44a1-b8f9-8d9c0a662c56	1	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
8cb1097d-0f61-4f9d-a3d3-133a55fadb5e	/geothermal	6ad1d948-8b15-44a1-b8f9-8d9c0a662c56	2	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
3ceddd33-008d-44d3-9952-0b30d5c5d099	/petroleum	6ad1d948-8b15-44a1-b8f9-8d9c0a662c56	3	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
d5310052-8e7a-48cf-8d7c-26f7250f1742	/about	\N	3	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
ed4c4f03-5f90-4a9f-865e-f52274a6295f	/asm	\N	4	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
0b9ee565-27e8-4a28-af88-f705e2698212	/investigating-in-ethiopia	\N	5	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
7774199b-b004-40fe-b222-9cd7d7be23e2	/services	\N	6	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
92747cef-600d-4d14-8e3d-51361ed24a28	/news	\N	7	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
11ed287a-c5cd-46e5-a592-cf4fc2fdccc4	/events	\N	8	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
5ef294af-d5b5-4ec1-95eb-774cd7f7b60b	/contact	\N	9	t	t	2026-08-09 03:30:44.91-07	2026-08-09 03:30:44.91-07
\.


--
-- Data for Name: service_capability; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_capability (service_capability_id, heading, subheading, capabilities, created_at, updated_at, deleted_at) FROM stdin;
583a3cf3-2478-48cc-a20f-948f608c88b8	One Partner. Multiple Sectors.	Jarra Holdings operates as a multi-sector company with activities spanning import, export, trading, and supply across key economic pillars.	[{"id":"sector-1788181172885","name":" AGRICULTURE","desc":"Supplying essential agricultural inputs to support farming communities and boost productivity.","image":"9df5dfa3-c434-4016-a701-e34830b257fe"},{"id":"sector-1788182200753","name":" CONSTRUCTION","desc":"Providing reliable construction-related materials and heavy machinery for infrastructure development.","image":"193ad1d2-2f7e-4dae-b417-ecafc48a80fa"},{"id":"sector-1788182202317","name":"INDUSTRIAL","desc":"Sourcing and supplying factory raw materials to keep manufacturing lines operational.","image":"9b431b70-06f0-4ca9-a275-1157fc50ce29"},{"id":"sector-1788182203797","name":"AUTOMOTIVE","desc":"Importing vehicles and genuine spare parts for commercial and personal transport needs.","image":"7b5b3bbc-205a-49a0-93c3-fbc02cb27636"},{"id":"sector-1788182204781","name":"ELECTRICAL","desc":"Delivering certified electrical equipment for commercial, industrial, and residential projects.","image":"2b520271-5dea-42d5-97b8-9c1fe03f37cf"},{"id":"sector-1788182205403","name":"COMMODITY TRADE","desc":"Exporting premium Ethiopian Arabica coffee, oilseeds, and pulses to international markets.","image":"d65da17f-eeea-4c99-bdb5-b79376184927"}]	2026-08-31 06:04:54.991-07	2026-08-31 06:04:54.991-07	\N
\.


--
-- Data for Name: service_experience; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_experience (service_experience_id, heading, subheading, steps, created_at, updated_at, deleted_at) FROM stdin;
560e3bfa-61b4-41c9-8294-ac09511c38dd	From Source to Market	Our integrated approach ensures reliability at every step of the commercial supply chain.	[{"num":"01","title":"Understand","desc":"Understand customer and market requirements."},{"num":"02","title":"Source","desc":"Identify appropriate products and supply channels."},{"num":"03","title":"Trade","desc":"Manage import, export, and trading activities"},{"num":"04","title":"Store","desc":"Utilize warehousing and facilities where required."},{"num":"05","title":"Deliver","desc":"Connect products and solutions to customers and target markets."}]	2026-08-31 02:14:07.021-07	2026-08-31 02:14:07.021-07	\N
\.


--
-- Data for Name: service_overview; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_overview (service_overview_id, heading, subheading, description, created_at, updated_at, deleted_at, cards) FROM stdin;
3c8cb6b1-76e9-49b8-9c3d-c2847248338e	Integrated Business Services Built Around Your Needs	WHAT WE DO	Jarra Holdings operates across multiple sectors, providing premium import and export trading services that address critical commodity-market gaps. We focus on satisfying customers and stakeholders, reaching end users—particularly farming communities—and delivering innovative, sustainable solutions across industries.	2026-08-31 02:11:57.205-07	2026-08-31 02:11:57.205-07	\N	[{"name":"Import","icon":"ArrowDownToLineIcon"},{"name":"Export","icon":"ArrowUpFromLine"},{"name":"Trading","icon":"ArrowLeftRight"},{"name":"Sourcing","icon":"SearchCheckIcon"},{"name":"Supply Solutions","icon":"Network"},{"name":"warehousing","icon":"Warehouse"}]
\.


--
-- Data for Name: service_why_us; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_why_us (service_why_us_id, heading, subheading, points, created_at, updated_at, deleted_at, cta_heading, cta_subheading, cta_buttons) FROM stdin;
9b5759c1-b9a8-41be-b7df-995c7f01ec71	Why Partner With Jarra Holdings?	Our approach is defined by our core values. They guide every trading decision, supply solution, and partnership we build.	[{"title":"Customer","desc":"We give high priority to customer needs.","icon":"UsersIcon"},{"title":"Quality","desc":"Quality Consistent quality is central to our approach.","icon":"LucideBadgeCheck"},{"title":"Integrity","desc":"We build relationships on trust and integrity.","icon":"ShieldCheck"},{"title":"Innovation","desc":"We remain open to new ideas and evolving solutions.","icon":"LucideLightbulb"},{"title":"Collaboration","desc":"We engage with diverse business partners.","icon":"HandshakeIcon"},{"title":"Competency","desc":"We rely on capability and experience across diverse sectors.","icon":"BriefcaseBusinessIcon"}]	2026-08-31 06:31:32.551-07	2026-08-31 06:31:32.551-07	\N			[{"title":"Contact Jarra Holdings","icon":"ArrowRight","route":"/contact"},{"title":"Explore Our Products","icon":"BoxIcon","route":"/products"}]
\.


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.services (service_id, icon, title, content, created_at, "order") FROM stdin;
54cc067e-894e-4911-8c67-31c76a25ab90	Activity	Trading & Supply	Reliable trading and supply solutions designed to address market needs and connect customers with appropriate products and resources.	2026-08-31 02:10:42.455-07	0
34bf0e57-855e-4f46-ba80-67c36d738581	Building2	Warehousing & Storage	Professional warehousing capability supporting the company's supply and trading operations with our holistic-purpose facilities of approximately 6,850 m².	2026-08-31 02:11:02.071-07	0
9226368e-e5c9-4285-be5e-5c6e58d2511e	SearchCheck	Sourcing & Procurement	Business-oriented sourcing and procurement support for customers and partners seeking appropriate products and supply solutions across our operating sectors.	2026-08-31 06:09:29.227-07	0
0df774a1-a13b-48a8-9457-150c45f8682f	Network	Market & Supply Solutions	Solutions designed around market demand, customer needs, and supply gaps across multiple sectors, driving our role as a comprehensive multi-sector business.	2026-08-31 06:09:54.883-07	0
685a5dcf-98bd-4c09-8928-92d487a8373f	ArrowUpFromLine	Export Services	Export solutions connecting Ethiopian products with international markets, specializing in Ethiopian Arabica coffee, oilseeds, and pulses.	2026-08-31 02:10:27.129-07	0
e5c800a3-ae36-4385-9382-276e1377ec87	ArrowDownToLine	Import Services	Professional import and supply solutions across multiple categories, including agricultural inputs, construction materials, machinery, vehicles, electrical equipment, and other approved trading categories.	2026-08-31 02:10:08.267-07	0
\.


--
-- Data for Name: sliders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sliders (slider_id, title, description, attachment_id, button_name, button_url, button2_name, button2_url, created_at, updated_at, deleted_at, "order") FROM stdin;
de83de26-8467-4b68-b72e-dc3419d0f048	New Slide Title	New slide description goes here.	077d7252-78f1-41ac-a1b1-0a80e317a2da	Invest in Ethiopia	/investigating-in-ethiopia	Our Services	/services	2026-08-11 00:30:15.974-07	2026-08-11 10:40:31.373-07	2026-08-11 10:40:49.067-07	1
8a44d0fb-dd2a-4843-85b5-00ffc25b625b	New Slide Title	New slide description goes here.	\N	Invest in Ethiopia	/investigating-in-ethiopia	Our Services	/services	2026-08-11 00:42:04.904-07	2026-08-11 10:40:15.171-07	2026-08-11 10:40:45.931-07	2
bbb7b53c-a339-44e5-9ca7-cf4721c60ceb	New Slide Title	New slide description goes here.	05589cf9-4371-41ca-8d23-49ff4b1fd444	\N	\N	\N	\N	2026-08-11 11:11:49.89-07	2026-08-11 11:14:43.884-07	2026-08-21 01:44:18.441-07	3
b1c1b054-122f-49ea-b4d1-5b6ee9418c2c	Connecting Ethiopia to Global Markets	Jarra Holdings S.C. facilitates reliable international trade by connecting Ethiopian businesses and commodities with global markets through trusted import, export, logistics, and trade solutions.	bb080df1-b560-4fb4-97b4-7d016bf4d1ba	\N	\N	\N	\N	2026-08-11 11:13:41.923-07	2026-08-21 02:03:36.179-07	\N	4
c717452c-951a-48de-a740-5e4999b3d684	Bringing Ethiopia’s Finest Coffee to the World	We source and export premium Ethiopian coffee from renowned coffee-growing regions, with strong attention to quality, traceability, packaging, and international standards.	32362bc3-9e5b-41e3-8b1c-c335c4fa5a56	\N	\N	\N	\N	2026-08-21 01:51:35.69-07	2026-08-21 02:03:25.741-07	\N	5
899478a2-990d-41d2-9231-05b06ee264fb	Powering Industry Through Technology	From ICT and communication equipment to electrical systems, machinery, and industrial supplies, we provide solutions that support institutions, enterprises, and infrastructure development.	64cbc56c-a0b3-4c9b-b155-1cd06f260212	\N	\N	\N	\N	2026-08-21 02:11:47.327-07	2026-08-21 02:12:15.169-07	\N	6
b45b4a0e-134a-418a-b639-0764e4d9bd9f	Building Reliable Energy Solutions	We supply solar power systems and Battery Energy Storage Systems designed to support renewable energy projects, energy reliability, commercial operations, and industrial applications.	db6865ed-2a7c-4f61-8c8f-187b9298adfe	\N	\N	\N	\N	2026-08-21 02:20:08.3-07	2026-08-21 02:27:10.402-07	\N	7
3df07029-51db-4f17-a1c3-8db216fa77ea	Your Reliable Partner in Trade	With strong supplier networks, professional trade and logistics management, and a commitment to quality and long-term partnerships, Jarra delivers dependable solutions across diverse markets.	ed62cb1a-6bcc-4abe-a507-87ad6d09d3ce	\N	\N	\N	\N	2026-08-21 02:35:01.06-07	2026-08-21 02:36:01.919-07	\N	8
\.


--
-- Data for Name: snapshot; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.snapshot (snapshot_id, title, sector, description_one, description_two, attachment_id, attachment_description, is_published, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: snapshot_section; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.snapshot_section (section_id, snapshot_id, title, content, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: social_medias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.social_medias (social_media_id, platform_name, icon, url, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: steps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.steps (step_id, process_step_id, description, attachment_id, "order", created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: strategies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strategies (strategy_id, title, description, created_at, updated_at, deleted_at) FROM stdin;
f43df591-c2a9-47c2-ab68-992d46c8fdea	Our Mission, Vision & Core Values	The principles that guide Jarra Holdings S.C. as we build sustainable businesses, create opportunities, and contribute to Ethiopia’s economic development.	2026-08-21 07:53:20.848-07	2026-08-21 08:06:13.333-07	\N
\.


--
-- Data for Name: strategy_sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strategy_sections (section_id, strategy_id, type, title, attachment_id, content) FROM stdin;
b921d7c3-d72b-45e3-b04e-6fe345a2cc09	f43df591-c2a9-47c2-ab68-992d46c8fdea	mission	Our Mission	a05205d4-e169-408f-b17c-f79d5b30db46	To make socially responsible investments in sustainable portfolios that generate value for shareholders, empower citizens, create employment opportunities, and contribute to the socio-economic development of the country through a knowledgeable and innovative workforce
d25f2a33-23d4-49dd-908d-4aaa296d2095	f43df591-c2a9-47c2-ab68-992d46c8fdea	vision	Our Vision	aea2015b-5d2e-4378-846c-691f8c335397	To become the leading community-owned holding company in the country in terms of finance and private employment, with targeted operations and growth across Africa by 2030.
de20bd3a-f6b7-4388-aa5c-569f26e80602	f43df591-c2a9-47c2-ab68-992d46c8fdea	core_values	Core Values	89adb70b-a2ab-4f90-8b07-1c9953ba5c27	\N
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tags (tag_id, name, created_at) FROM stdin;
\.


--
-- Data for Name: tenders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tenders (tender_id, title, reference_number, description, published_date, closing_date, attachment_id, status, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_roles (user_role_id, user_id, role_id, assigned_by, assigned_at, is_active, created_at, updated_at) FROM stdin;
9b8ef55d-0134-43a8-933e-8d414b0d8c06	00000000-0000-4000-8000-000000000001	00000000-0000-4000-8000-000000000002	\N	2026-08-23 21:56:53.008356-07	t	2026-08-23 21:56:53.006-07	2026-08-23 21:56:53.006-07
\.


--
-- Data for Name: user_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_types (user_type_id, name, description, created_at, updated_at) FROM stdin;
c020435e-ce71-4b9f-b48d-76d722ae091d	test_one	Test user type one for development or testing purposes.	2026-08-09 03:30:44.902-07	2026-08-09 03:30:44.902-07
eada24c3-e003-493d-ac3e-a163ea439893	test_two	Test user type two for development or testing purposes.	2026-08-09 03:30:44.902-07	2026-08-09 03:30:44.902-07
ff09047d-4e5d-49ff-b2d4-52b6d466f2ee	test_three	Test user type three for development or testing purposes.	2026-08-09 03:30:44.902-07	2026-08-09 03:30:44.902-07
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, user_type_id, full_name, email, password, phone_number, profile_image, is_first_logged_in, last_login_at, password_changed_at, reset_password_otp, reset_password_otp_expires, is_active, created_at, updated_at, reset_password_attempts, reset_password_lock_until) FROM stdin;
00000000-0000-4000-8000-000000000001	\N	Admin Account	admin@gmail.com	$2b$10$7gqrigBbD/tSma03Z1VcTe0m74DKvC4WbqAfwtOwkdlHqSkk6JesK	251911000001	\N	f	2026-08-30 21:37:13.496-07	2026-08-24 01:35:04.23-07	\N	\N	t	2026-08-23 21:56:53-07	2026-08-24 01:35:04.23-07	0	\N
\.


--
-- Data for Name: vacancies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vacancies (vacancy_id, job_title, department, location, employment_type, positions, description, requirements, published_date, application_deadline, attachment_id, status, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: asm_attachments asm_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asm_attachments
    ADD CONSTRAINT asm_attachments_pkey PRIMARY KEY (asm_attachment_id);


--
-- Name: asm asm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asm
    ADD CONSTRAINT asm_pkey PRIMARY KEY (asm_id);


--
-- Name: asm_previews asm_previews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asm_previews
    ADD CONSTRAINT asm_previews_pkey PRIMARY KEY (preview_id);


--
-- Name: attachments attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attachments
    ADD CONSTRAINT attachments_pkey PRIMARY KEY (attachment_id);


--
-- Name: audit_logs audit_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.audit_logs
    ADD CONSTRAINT audit_logs_pkey PRIMARY KEY (audit_id);


--
-- Name: background_attachments background_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.background_attachments
    ADD CONSTRAINT background_attachments_pkey PRIMARY KEY (background_attachment_id);


--
-- Name: backgrounds backgrounds_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.backgrounds
    ADD CONSTRAINT backgrounds_pkey PRIMARY KEY (background_id);


--
-- Name: canvases canvases_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.canvases
    ADD CONSTRAINT canvases_pkey PRIMARY KEY (canvas_id);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (card_id);


--
-- Name: core_values core_values_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.core_values
    ADD CONSTRAINT core_values_pkey PRIMARY KEY (value_id);


--
-- Name: event_attachments event_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event_attachments
    ADD CONSTRAINT event_attachments_pkey PRIMARY KEY (event_attachment_id);


--
-- Name: event_categories event_categories_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event_categories
    ADD CONSTRAINT event_categories_name_key UNIQUE (name);


--
-- Name: event_categories event_categories_name_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event_categories
    ADD CONSTRAINT event_categories_name_key1 UNIQUE (name);


--
-- Name: event_categories event_categories_name_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event_categories
    ADD CONSTRAINT event_categories_name_key2 UNIQUE (name);


--
-- Name: event_categories event_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event_categories
    ADD CONSTRAINT event_categories_pkey PRIMARY KEY (event_category_id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (event_id);


--
-- Name: facilities facilities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pkey PRIMARY KEY (facility_id);


--
-- Name: facility_footprint facility_footprint_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facility_footprint
    ADD CONSTRAINT facility_footprint_pkey PRIMARY KEY (facility_footprint_id);


--
-- Name: facility_overview facility_overview_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facility_overview
    ADD CONSTRAINT facility_overview_pkey PRIMARY KEY (facility_overview_id);


--
-- Name: federal_office_contacts federal_office_contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.federal_office_contacts
    ADD CONSTRAINT federal_office_contacts_pkey PRIMARY KEY (federal_office_id);


--
-- Name: footer_sections footer_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer_sections
    ADD CONSTRAINT footer_sections_pkey PRIMARY KEY (footer_section_id);


--
-- Name: footers footers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers
    ADD CONSTRAINT footers_pkey PRIMARY KEY (footer_id);


--
-- Name: gamestone_attachments gamestone_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gamestone_attachments
    ADD CONSTRAINT gamestone_attachments_pkey PRIMARY KEY (gamestone_attachment_id);


--
-- Name: gamestones gamestones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gamestones
    ADD CONSTRAINT gamestones_pkey PRIMARY KEY (gamestone_id);


--
-- Name: investigate_ethiopia investigate_ethiopia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigate_ethiopia
    ADD CONSTRAINT investigate_ethiopia_pkey PRIMARY KEY (investigate_ethiopia_id);


--
-- Name: investigation_action investigation_action_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigation_action
    ADD CONSTRAINT investigation_action_pkey PRIMARY KEY (investigation_action_id);


--
-- Name: investigation_strategy investigation_strategy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigation_strategy
    ADD CONSTRAINT investigation_strategy_pkey PRIMARY KEY (investigation_strategy_id);


--
-- Name: leadership_attachments leadership_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership_attachments
    ADD CONSTRAINT leadership_attachments_pkey PRIMARY KEY (leadership_attachment_id);


--
-- Name: leadership leadership_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership
    ADD CONSTRAINT leadership_name_key UNIQUE (name);


--
-- Name: leadership leadership_name_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership
    ADD CONSTRAINT leadership_name_key1 UNIQUE (name);


--
-- Name: leadership leadership_name_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership
    ADD CONSTRAINT leadership_name_key2 UNIQUE (name);


--
-- Name: leadership leadership_name_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership
    ADD CONSTRAINT leadership_name_key3 UNIQUE (name);


--
-- Name: leadership leadership_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership
    ADD CONSTRAINT leadership_pkey PRIMARY KEY (leadership_id);


--
-- Name: licensing_contacts licensing_contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.licensing_contacts
    ADD CONSTRAINT licensing_contacts_pkey PRIMARY KEY (licensing_contact_id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (message_id);


--
-- Name: mining_application_process_attachments mining_application_process_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_application_process_attachments
    ADD CONSTRAINT mining_application_process_attachments_pkey PRIMARY KEY (mining_application_process_attachment_id);


--
-- Name: mining_application_process mining_application_process_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_application_process
    ADD CONSTRAINT mining_application_process_pkey PRIMARY KEY (mining_application_process_id);


--
-- Name: mining_application_types mining_application_types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_application_types
    ADD CONSTRAINT mining_application_types_pkey PRIMARY KEY (mining_application_types_id);


--
-- Name: mining_framework mining_framework_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_framework
    ADD CONSTRAINT mining_framework_pkey PRIMARY KEY (mining_framework_id);


--
-- Name: mining_guideline_attachments mining_guideline_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_guideline_attachments
    ADD CONSTRAINT mining_guideline_attachments_pkey PRIMARY KEY (mining_guideline_attachment_id);


--
-- Name: mining_guideline_content mining_guideline_content_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_guideline_content
    ADD CONSTRAINT mining_guideline_content_pkey PRIMARY KEY (mining_guideline_content_id);


--
-- Name: mining_guideline mining_guideline_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_guideline
    ADD CONSTRAINT mining_guideline_pkey PRIMARY KEY (mining_guideline_id);


--
-- Name: mining_regulation_process mining_regulation_process_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_regulation_process
    ADD CONSTRAINT mining_regulation_process_pkey PRIMARY KEY (mining_regulation_process_id);


--
-- Name: mining_service_card mining_service_card_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_service_card
    ADD CONSTRAINT mining_service_card_pkey PRIMARY KEY (mining_service_card_id);


--
-- Name: mining_service mining_service_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_service
    ADD CONSTRAINT mining_service_pkey PRIMARY KEY (mining_service_id);


--
-- Name: news_attachments news_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_attachments
    ADD CONSTRAINT news_attachments_pkey PRIMARY KEY (news_attachment_id);


--
-- Name: news_feedbacks news_feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_feedbacks
    ADD CONSTRAINT news_feedbacks_pkey PRIMARY KEY (news_feedback_id);


--
-- Name: news_metadata news_metadata_news_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_metadata
    ADD CONSTRAINT news_metadata_news_id_key UNIQUE (news_id);


--
-- Name: news_metadata news_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_metadata
    ADD CONSTRAINT news_metadata_pkey PRIMARY KEY (news_metadata_id);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (news_id);


--
-- Name: news_reactions news_reactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_reactions
    ADD CONSTRAINT news_reactions_pkey PRIMARY KEY (news_reaction_id);


--
-- Name: news_reads news_reads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_reads
    ADD CONSTRAINT news_reads_pkey PRIMARY KEY (news_read_id);


--
-- Name: news_tags news_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_tags
    ADD CONSTRAINT news_tags_pkey PRIMARY KEY (news_tag_id);


--
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (notification_id);


--
-- Name: objectives objectives_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.objectives
    ADD CONSTRAINT objectives_pkey PRIMARY KEY (objective_id);


--
-- Name: page_headers page_headers_page_identifier_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_headers
    ADD CONSTRAINT page_headers_page_identifier_key UNIQUE (page_identifier);


--
-- Name: page_headers page_headers_page_identifier_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_headers
    ADD CONSTRAINT page_headers_page_identifier_key1 UNIQUE (page_identifier);


--
-- Name: page_headers page_headers_page_identifier_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_headers
    ADD CONSTRAINT page_headers_page_identifier_key2 UNIQUE (page_identifier);


--
-- Name: page_headers page_headers_page_identifier_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_headers
    ADD CONSTRAINT page_headers_page_identifier_key3 UNIQUE (page_identifier);


--
-- Name: page_headers page_headers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_headers
    ADD CONSTRAINT page_headers_pkey PRIMARY KEY (page_header_id);


--
-- Name: partner_attachments partner_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partner_attachments
    ADD CONSTRAINT partner_attachments_pkey PRIMARY KEY (partner_attachment_id);


--
-- Name: partners partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pkey PRIMARY KEY (partner_id);


--
-- Name: permissions permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (permission_id);


--
-- Name: petroleum_attachments petroleum_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_attachments
    ADD CONSTRAINT petroleum_attachments_pkey PRIMARY KEY (petroleum_attachment_id);


--
-- Name: petroleum_directive petroleum_directive_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_directive
    ADD CONSTRAINT petroleum_directive_pkey PRIMARY KEY (petroleum_directive_id);


--
-- Name: petroleum_objective petroleum_objective_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_objective
    ADD CONSTRAINT petroleum_objective_pkey PRIMARY KEY (petroleum_objective_id);


--
-- Name: petroleum_processes petroleum_processes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_processes
    ADD CONSTRAINT petroleum_processes_pkey PRIMARY KEY (petroleum_process_id);


--
-- Name: petroleum_regulation_attachments petroleum_regulation_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_regulation_attachments
    ADD CONSTRAINT petroleum_regulation_attachments_pkey PRIMARY KEY (petroleum_regulation_attachment_id);


--
-- Name: petroleum_regulation petroleum_regulation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_regulation
    ADD CONSTRAINT petroleum_regulation_pkey PRIMARY KEY (petroleum_regulation_id);


--
-- Name: petroleum_regulation_process petroleum_regulation_process_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_regulation_process
    ADD CONSTRAINT petroleum_regulation_process_pkey PRIMARY KEY (petroleum_regulation_process_id);


--
-- Name: process_block_attachments process_block_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_block_attachments
    ADD CONSTRAINT process_block_attachments_pkey PRIMARY KEY (process_block_attachment_id);


--
-- Name: process_blocks process_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_blocks
    ADD CONSTRAINT process_blocks_pkey PRIMARY KEY (process_block_id);


--
-- Name: process_steps process_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_steps
    ADD CONSTRAINT process_steps_pkey PRIMARY KEY (process_step_id);


--
-- Name: product_attachments product_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_attachments
    ADD CONSTRAINT product_attachments_pkey PRIMARY KEY (product_attachment_id);


--
-- Name: product_categories_map product_categories_map_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories_map
    ADD CONSTRAINT product_categories_map_pkey PRIMARY KEY (product_id, category_id);


--
-- Name: product_categories product_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_pkey PRIMARY KEY (category_id);


--
-- Name: product_categories product_categories_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_slug_key UNIQUE (slug);


--
-- Name: product_categories product_categories_slug_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_slug_key1 UNIQUE (slug);


--
-- Name: product_categories product_categories_slug_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_slug_key2 UNIQUE (slug);


--
-- Name: product_inquiries product_inquiries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_inquiries
    ADD CONSTRAINT product_inquiries_pkey PRIMARY KEY (inquiry_id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- Name: products products_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_slug_key UNIQUE (slug);


--
-- Name: products products_slug_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_slug_key1 UNIQUE (slug);


--
-- Name: products products_slug_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_slug_key2 UNIQUE (slug);


--
-- Name: purposes purposes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purposes
    ADD CONSTRAINT purposes_pkey PRIMARY KEY (purpose_id);


--
-- Name: regional_office_contact_centers regional_office_contact_centers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regional_office_contact_centers
    ADD CONSTRAINT regional_office_contact_centers_pkey PRIMARY KEY (regional_office_id);


--
-- Name: regions regions_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_code_key UNIQUE (code);


--
-- Name: regions regions_code_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_code_key1 UNIQUE (code);


--
-- Name: regions regions_code_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_code_key2 UNIQUE (code);


--
-- Name: regions regions_code_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_code_key3 UNIQUE (code);


--
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (region_id);


--
-- Name: resource_attachments resource_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resource_attachments
    ADD CONSTRAINT resource_attachments_pkey PRIMARY KEY (resource_attachment_id);


--
-- Name: resource resource_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resource
    ADD CONSTRAINT resource_pkey PRIMARY KEY (resource_id);


--
-- Name: role_permissions role_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_pkey PRIMARY KEY (role_permission_id);


--
-- Name: roles roles_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key UNIQUE (name);


--
-- Name: roles roles_name_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key1 UNIQUE (name);


--
-- Name: roles roles_name_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key2 UNIQUE (name);


--
-- Name: roles roles_name_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key3 UNIQUE (name);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);


--
-- Name: route_translations route_translations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route_translations
    ADD CONSTRAINT route_translations_pkey PRIMARY KEY (route_translation_id);


--
-- Name: routes routes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.routes
    ADD CONSTRAINT routes_pkey PRIMARY KEY (route_id);


--
-- Name: service_capability service_capability_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_capability
    ADD CONSTRAINT service_capability_pkey PRIMARY KEY (service_capability_id);


--
-- Name: service_experience service_experience_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_experience
    ADD CONSTRAINT service_experience_pkey PRIMARY KEY (service_experience_id);


--
-- Name: service_overview service_overview_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_overview
    ADD CONSTRAINT service_overview_pkey PRIMARY KEY (service_overview_id);


--
-- Name: service_why_us service_why_us_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_why_us
    ADD CONSTRAINT service_why_us_pkey PRIMARY KEY (service_why_us_id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (service_id);


--
-- Name: services services_title_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_title_key UNIQUE (title);


--
-- Name: services services_title_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_title_key1 UNIQUE (title);


--
-- Name: services services_title_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_title_key2 UNIQUE (title);


--
-- Name: services services_title_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_title_key3 UNIQUE (title);


--
-- Name: sliders sliders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_pkey PRIMARY KEY (slider_id);


--
-- Name: snapshot snapshot_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snapshot
    ADD CONSTRAINT snapshot_pkey PRIMARY KEY (snapshot_id);


--
-- Name: snapshot_section snapshot_section_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snapshot_section
    ADD CONSTRAINT snapshot_section_pkey PRIMARY KEY (section_id);


--
-- Name: social_medias social_medias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_medias
    ADD CONSTRAINT social_medias_pkey PRIMARY KEY (social_media_id);


--
-- Name: social_medias social_medias_platform_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_medias
    ADD CONSTRAINT social_medias_platform_name_key UNIQUE (platform_name);


--
-- Name: social_medias social_medias_url_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_medias
    ADD CONSTRAINT social_medias_url_key UNIQUE (url);


--
-- Name: steps steps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.steps
    ADD CONSTRAINT steps_pkey PRIMARY KEY (step_id);


--
-- Name: strategies strategies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strategies
    ADD CONSTRAINT strategies_pkey PRIMARY KEY (strategy_id);


--
-- Name: strategy_sections strategy_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strategy_sections
    ADD CONSTRAINT strategy_sections_pkey PRIMARY KEY (section_id);


--
-- Name: tags tags_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_name_key UNIQUE (name);


--
-- Name: tags tags_name_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_name_key1 UNIQUE (name);


--
-- Name: tags tags_name_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_name_key2 UNIQUE (name);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (tag_id);


--
-- Name: tenders tenders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenders
    ADD CONSTRAINT tenders_pkey PRIMARY KEY (tender_id);


--
-- Name: route_translations unique_route_language; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route_translations
    ADD CONSTRAINT unique_route_language UNIQUE (route_id, language_code);


--
-- Name: permissions uq_permissions_resource_action; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT uq_permissions_resource_action UNIQUE (resource, action);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_role_id);


--
-- Name: user_types user_types_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_types
    ADD CONSTRAINT user_types_name_key UNIQUE (name);


--
-- Name: user_types user_types_name_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_types
    ADD CONSTRAINT user_types_name_key1 UNIQUE (name);


--
-- Name: user_types user_types_name_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_types
    ADD CONSTRAINT user_types_name_key2 UNIQUE (name);


--
-- Name: user_types user_types_name_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_types
    ADD CONSTRAINT user_types_name_key3 UNIQUE (name);


--
-- Name: user_types user_types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_types
    ADD CONSTRAINT user_types_pkey PRIMARY KEY (user_type_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_email_key1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key1 UNIQUE (email);


--
-- Name: users users_email_key2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key2 UNIQUE (email);


--
-- Name: users users_email_key3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key3 UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: vacancies vacancies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vacancies
    ADD CONSTRAINT vacancies_pkey PRIMARY KEY (vacancy_id);


--
-- Name: audit_logs_model_name_record_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX audit_logs_model_name_record_id ON public.audit_logs USING btree (model_name, record_id);


--
-- Name: audit_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX audit_logs_user_id ON public.audit_logs USING btree (user_id);


--
-- Name: news_reactions_news_id_ip_address; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX news_reactions_news_id_ip_address ON public.news_reactions USING btree (news_id, ip_address);


--
-- Name: news_reads_news_id_ip_address; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX news_reads_news_id_ip_address ON public.news_reads USING btree (news_id, ip_address);


--
-- Name: news_tags_news_id_tag_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX news_tags_news_id_tag_id ON public.news_tags USING btree (news_id, tag_id);


--
-- Name: resource_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX resource_created_at ON public.resource USING btree (created_at);


--
-- Name: resource_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX resource_deleted_at ON public.resource USING btree (deleted_at);


--
-- Name: resource_sector; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX resource_sector ON public.resource USING btree (sector);


--
-- Name: route_translations_language_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX route_translations_language_code ON public.route_translations USING btree (language_code);


--
-- Name: route_translations_route_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX route_translations_route_id ON public.route_translations USING btree (route_id);


--
-- Name: routes_is_active; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX routes_is_active ON public.routes USING btree (is_active);


--
-- Name: routes_order; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX routes_order ON public.routes USING btree ("order");


--
-- Name: routes_parent_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX routes_parent_id ON public.routes USING btree (parent_id);


--
-- Name: routes_path; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX routes_path ON public.routes USING btree (path);


--
-- Name: tenders_closing_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tenders_closing_date ON public.tenders USING btree (closing_date);


--
-- Name: tenders_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tenders_deleted_at ON public.tenders USING btree (deleted_at);


--
-- Name: tenders_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tenders_status ON public.tenders USING btree (status);


--
-- Name: vacancies_application_deadline; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX vacancies_application_deadline ON public.vacancies USING btree (application_deadline);


--
-- Name: vacancies_deleted_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX vacancies_deleted_at ON public.vacancies USING btree (deleted_at);


--
-- Name: vacancies_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX vacancies_status ON public.vacancies USING btree (status);


--
-- Name: asm_attachments asm_attachments_asm_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asm_attachments
    ADD CONSTRAINT asm_attachments_asm_id_fkey FOREIGN KEY (asm_id) REFERENCES public.asm(asm_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: asm_attachments asm_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asm_attachments
    ADD CONSTRAINT asm_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE;


--
-- Name: asm_previews asm_previews_asm_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asm_previews
    ADD CONSTRAINT asm_previews_asm_id_fkey FOREIGN KEY (asm_id) REFERENCES public.asm(asm_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: asm_previews asm_previews_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asm_previews
    ADD CONSTRAINT asm_previews_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: audit_logs audit_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.audit_logs
    ADD CONSTRAINT audit_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: background_attachments background_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.background_attachments
    ADD CONSTRAINT background_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE;


--
-- Name: background_attachments background_attachments_background_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.background_attachments
    ADD CONSTRAINT background_attachments_background_id_fkey FOREIGN KEY (background_id) REFERENCES public.backgrounds(background_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cards cards_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: core_values core_values_section_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.core_values
    ADD CONSTRAINT core_values_section_id_fkey FOREIGN KEY (section_id) REFERENCES public.strategy_sections(section_id) ON UPDATE CASCADE;


--
-- Name: event_attachments event_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event_attachments
    ADD CONSTRAINT event_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: event_attachments event_attachments_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event_attachments
    ADD CONSTRAINT event_attachments_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(event_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: events events_event_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_event_category_id_fkey FOREIGN KEY (event_category_id) REFERENCES public.event_categories(event_category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: footer_sections footer_sections_footer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer_sections
    ADD CONSTRAINT footer_sections_footer_id_fkey FOREIGN KEY (footer_id) REFERENCES public.footers(footer_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: footers footers_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers
    ADD CONSTRAINT footers_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: gamestone_attachments gamestone_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gamestone_attachments
    ADD CONSTRAINT gamestone_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: gamestone_attachments gamestone_attachments_gamestone_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gamestone_attachments
    ADD CONSTRAINT gamestone_attachments_gamestone_id_fkey FOREIGN KEY (gamestone_id) REFERENCES public.gamestones(gamestone_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: gamestones gamestones_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gamestones
    ADD CONSTRAINT gamestones_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: gamestones gamestones_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gamestones
    ADD CONSTRAINT gamestones_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.gamestones(gamestone_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: investigation_action investigation_action_investigate_ethiopia_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigation_action
    ADD CONSTRAINT investigation_action_investigate_ethiopia_id_fkey FOREIGN KEY (investigate_ethiopia_id) REFERENCES public.investigate_ethiopia(investigate_ethiopia_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: investigation_strategy investigation_strategy_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigation_strategy
    ADD CONSTRAINT investigation_strategy_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: investigation_strategy investigation_strategy_investigate_ethiopia_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigation_strategy
    ADD CONSTRAINT investigation_strategy_investigate_ethiopia_id_fkey FOREIGN KEY (investigate_ethiopia_id) REFERENCES public.investigate_ethiopia(investigate_ethiopia_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: leadership_attachments leadership_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership_attachments
    ADD CONSTRAINT leadership_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE;


--
-- Name: leadership_attachments leadership_attachments_leadership_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership_attachments
    ADD CONSTRAINT leadership_attachments_leadership_id_fkey FOREIGN KEY (leadership_id) REFERENCES public.leadership(leadership_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: leadership leadership_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leadership
    ADD CONSTRAINT leadership_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.leadership(leadership_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: licensing_contacts licensing_contacts_regional_office_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.licensing_contacts
    ADD CONSTRAINT licensing_contacts_regional_office_id_fkey FOREIGN KEY (regional_office_id) REFERENCES public.regional_office_contact_centers(regional_office_id) ON UPDATE CASCADE;


--
-- Name: mining_application_process_attachments mining_application_process_at_mining_application_process_i_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_application_process_attachments
    ADD CONSTRAINT mining_application_process_at_mining_application_process_i_fkey FOREIGN KEY (mining_application_process_id) REFERENCES public.mining_application_process(mining_application_process_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: mining_application_process_attachments mining_application_process_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_application_process_attachments
    ADD CONSTRAINT mining_application_process_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: mining_application_types mining_application_types_mining_application_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_application_types
    ADD CONSTRAINT mining_application_types_mining_application_process_id_fkey FOREIGN KEY (mining_application_process_id) REFERENCES public.mining_application_process(mining_application_process_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: mining_framework mining_framework_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_framework
    ADD CONSTRAINT mining_framework_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: mining_framework mining_framework_mining_regulation_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_framework
    ADD CONSTRAINT mining_framework_mining_regulation_process_id_fkey FOREIGN KEY (mining_regulation_process_id) REFERENCES public.mining_regulation_process(mining_regulation_process_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: mining_guideline_attachments mining_guideline_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_guideline_attachments
    ADD CONSTRAINT mining_guideline_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: mining_guideline_attachments mining_guideline_attachments_mining_guideline_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_guideline_attachments
    ADD CONSTRAINT mining_guideline_attachments_mining_guideline_id_fkey FOREIGN KEY (mining_guideline_id) REFERENCES public.mining_guideline(mining_guideline_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: mining_guideline_content mining_guideline_content_mining_guideline_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_guideline_content
    ADD CONSTRAINT mining_guideline_content_mining_guideline_id_fkey FOREIGN KEY (mining_guideline_id) REFERENCES public.mining_guideline(mining_guideline_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mining_guideline mining_guideline_mining_regulation_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_guideline
    ADD CONSTRAINT mining_guideline_mining_regulation_process_id_fkey FOREIGN KEY (mining_regulation_process_id) REFERENCES public.mining_regulation_process(mining_regulation_process_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: mining_service_card mining_service_card_mining_service_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_service_card
    ADD CONSTRAINT mining_service_card_mining_service_id_fkey FOREIGN KEY (mining_service_id) REFERENCES public.mining_service(mining_service_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: mining_service mining_service_mining_regulation_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mining_service
    ADD CONSTRAINT mining_service_mining_regulation_process_id_fkey FOREIGN KEY (mining_regulation_process_id) REFERENCES public.mining_regulation_process(mining_regulation_process_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: news_attachments news_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_attachments
    ADD CONSTRAINT news_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: news_attachments news_attachments_news_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_attachments
    ADD CONSTRAINT news_attachments_news_id_fkey FOREIGN KEY (news_id) REFERENCES public.news(news_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: news_feedbacks news_feedbacks_news_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_feedbacks
    ADD CONSTRAINT news_feedbacks_news_id_fkey FOREIGN KEY (news_id) REFERENCES public.news(news_id) ON UPDATE CASCADE;


--
-- Name: news_metadata news_metadata_news_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_metadata
    ADD CONSTRAINT news_metadata_news_id_fkey FOREIGN KEY (news_id) REFERENCES public.news(news_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: news_reactions news_reactions_news_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_reactions
    ADD CONSTRAINT news_reactions_news_id_fkey FOREIGN KEY (news_id) REFERENCES public.news(news_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: news_reads news_reads_news_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_reads
    ADD CONSTRAINT news_reads_news_id_fkey FOREIGN KEY (news_id) REFERENCES public.news(news_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: news_tags news_tags_news_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_tags
    ADD CONSTRAINT news_tags_news_id_fkey FOREIGN KEY (news_id) REFERENCES public.news(news_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: news_tags news_tags_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_tags
    ADD CONSTRAINT news_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags(tag_id) ON UPDATE CASCADE;


--
-- Name: objectives objectives_asm_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.objectives
    ADD CONSTRAINT objectives_asm_id_fkey FOREIGN KEY (asm_id) REFERENCES public.asm(asm_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: page_headers page_headers_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_headers
    ADD CONSTRAINT page_headers_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: partner_attachments partner_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partner_attachments
    ADD CONSTRAINT partner_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: partner_attachments partner_attachments_partner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partner_attachments
    ADD CONSTRAINT partner_attachments_partner_id_fkey FOREIGN KEY (partner_id) REFERENCES public.partners(partner_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: petroleum_attachments petroleum_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_attachments
    ADD CONSTRAINT petroleum_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: petroleum_attachments petroleum_attachments_petroleum_objective_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_attachments
    ADD CONSTRAINT petroleum_attachments_petroleum_objective_id_fkey FOREIGN KEY (petroleum_objective_id) REFERENCES public.petroleum_objective(petroleum_objective_id) ON UPDATE CASCADE;


--
-- Name: petroleum_directive petroleum_directive_petroleum_regulation_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_directive
    ADD CONSTRAINT petroleum_directive_petroleum_regulation_process_id_fkey FOREIGN KEY (petroleum_regulation_process_id) REFERENCES public.petroleum_regulation_process(petroleum_regulation_process_id) ON UPDATE CASCADE;


--
-- Name: petroleum_regulation_attachments petroleum_regulation_attachme_petroleum_regulation_process_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_regulation_attachments
    ADD CONSTRAINT petroleum_regulation_attachme_petroleum_regulation_process_fkey FOREIGN KEY (petroleum_regulation_process_id) REFERENCES public.petroleum_regulation_process(petroleum_regulation_process_id) ON UPDATE CASCADE;


--
-- Name: petroleum_regulation_attachments petroleum_regulation_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_regulation_attachments
    ADD CONSTRAINT petroleum_regulation_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: petroleum_regulation petroleum_regulation_petroleum_regulation_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petroleum_regulation
    ADD CONSTRAINT petroleum_regulation_petroleum_regulation_process_id_fkey FOREIGN KEY (petroleum_regulation_process_id) REFERENCES public.petroleum_regulation_process(petroleum_regulation_process_id) ON UPDATE CASCADE;


--
-- Name: process_block_attachments process_block_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_block_attachments
    ADD CONSTRAINT process_block_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: process_block_attachments process_block_attachments_process_block_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_block_attachments
    ADD CONSTRAINT process_block_attachments_process_block_id_fkey FOREIGN KEY (process_block_id) REFERENCES public.process_blocks(process_block_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: process_blocks process_blocks_petroleum_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_blocks
    ADD CONSTRAINT process_blocks_petroleum_process_id_fkey FOREIGN KEY (petroleum_process_id) REFERENCES public.petroleum_processes(petroleum_process_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: process_steps process_steps_petroleum_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_steps
    ADD CONSTRAINT process_steps_petroleum_process_id_fkey FOREIGN KEY (petroleum_process_id) REFERENCES public.petroleum_processes(petroleum_process_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_attachments product_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_attachments
    ADD CONSTRAINT product_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE;


--
-- Name: product_attachments product_attachments_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_attachments
    ADD CONSTRAINT product_attachments_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_categories_map product_categories_map_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories_map
    ADD CONSTRAINT product_categories_map_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.product_categories(category_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_categories_map product_categories_map_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories_map
    ADD CONSTRAINT product_categories_map_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_inquiries product_inquiries_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_inquiries
    ADD CONSTRAINT product_inquiries_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: purposes purposes_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purposes
    ADD CONSTRAINT purposes_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: regional_office_contact_centers regional_office_contact_centers_region_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regional_office_contact_centers
    ADD CONSTRAINT regional_office_contact_centers_region_id_fkey FOREIGN KEY (region_id) REFERENCES public.regions(region_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: resource_attachments resource_attachments_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resource_attachments
    ADD CONSTRAINT resource_attachments_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: resource_attachments resource_attachments_resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resource_attachments
    ADD CONSTRAINT resource_attachments_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES public.resource(resource_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: role_permissions role_permissions_permission_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_permission_id_fkey FOREIGN KEY (permission_id) REFERENCES public.permissions(permission_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: role_permissions role_permissions_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(role_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: route_translations route_translations_route_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route_translations
    ADD CONSTRAINT route_translations_route_id_fkey FOREIGN KEY (route_id) REFERENCES public.routes(route_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: routes routes_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.routes
    ADD CONSTRAINT routes_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.routes(route_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: sliders sliders_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: snapshot snapshot_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snapshot
    ADD CONSTRAINT snapshot_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: snapshot_section snapshot_section_snapshot_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snapshot_section
    ADD CONSTRAINT snapshot_section_snapshot_id_fkey FOREIGN KEY (snapshot_id) REFERENCES public.snapshot(snapshot_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: steps steps_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.steps
    ADD CONSTRAINT steps_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: steps steps_process_step_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.steps
    ADD CONSTRAINT steps_process_step_id_fkey FOREIGN KEY (process_step_id) REFERENCES public.process_steps(process_step_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: strategy_sections strategy_sections_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strategy_sections
    ADD CONSTRAINT strategy_sections_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: strategy_sections strategy_sections_strategy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strategy_sections
    ADD CONSTRAINT strategy_sections_strategy_id_fkey FOREIGN KEY (strategy_id) REFERENCES public.strategies(strategy_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tenders tenders_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenders
    ADD CONSTRAINT tenders_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: user_roles user_roles_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(role_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users users_user_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_type_id_fkey FOREIGN KEY (user_type_id) REFERENCES public.user_types(user_type_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: vacancies vacancies_attachment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vacancies
    ADD CONSTRAINT vacancies_attachment_id_fkey FOREIGN KEY (attachment_id) REFERENCES public.attachments(attachment_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict AGYxfMLrntF1Fhg79xp0kH5NwPcMsBMnoScq6igBqu7USsdtW7iWOCDQoiCazw6

