import React from "react";
import BackgroundPage from "@/components/pages/about-page-components/BackgroundSection";
import LeadershipSection from "@/components/pages/about-page-components/LeadershipSection";
import VisionMissionValues from "@/components/pages/about-page-components/MissionVisionSection";
import OrganizationStructure from "@/components/pages/about-page-components/OrganizationStructure";
import CompanyCertifications from "@/components/pages/about-page-components/CompanyCertifications";

const AboutPage = () => {
    return (
        <>
            <BackgroundPage />
            <LeadershipSection />
            <VisionMissionValues />
            <CompanyCertifications />
            {/* <OrganizationStructure /> */}
        </>
    );
};

export default AboutPage;
