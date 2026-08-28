import HeroSection from '@/components/pages/home-page-components/HeroSection'

import PurposeSection from '@/components/pages/home-page-components/PurposeSection'
import CardSection from '@/components/pages/home-page-components/CardSection'
import PartnersSection from '@/components/pages/home-page-components/PartnersSection'
import PurposeAndImpact from '@/components/pages/home-page-components/PurposeAndImpact'

const page = () => {
    return (
        <div className='flex flex-col items-center' >
            <HeroSection />
            <PurposeSection />
            <PurposeAndImpact />
            <CardSection />
            <PartnersSection />
        </div>
    )
}

export default page