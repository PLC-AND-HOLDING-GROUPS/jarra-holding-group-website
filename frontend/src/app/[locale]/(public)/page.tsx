import HeroSection from '@/components/pages/home-page-components/HeroSection'

import CardSection from '@/components/pages/home-page-components/CardSection'
import PartnersSection from '@/components/pages/home-page-components/PartnersSection'

const page = () => {
    return (
        <div className='flex flex-col items-center' >
            <HeroSection />

            <CardSection />
            <PartnersSection />
        </div>
    )
}

export default page