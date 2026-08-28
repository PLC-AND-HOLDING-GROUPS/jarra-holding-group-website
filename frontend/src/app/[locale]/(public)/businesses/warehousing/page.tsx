import React from 'react'
import WarehousingTrading from '@/components/pages/businesses-page-components/WarehousingTrading'
import WarehouseShowcase from '@/components/pages/businesses-page-components/WarehouseShowcase'

const WarehousingTradingPage = () => {
    return (
        <div className="flex flex-col w-full">
            <WarehousingTrading />
            <WarehouseShowcase />
        </div>
    )
}

export default WarehousingTradingPage