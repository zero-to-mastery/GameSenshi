import React, { useMemo } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const {
	TabPanelService,
	Tab,
	TAB_NAME,
	TAB_CONTENT,
	TAB_PRODUCT_DESCRIPTION,
	TAB_PRODUCT_NUM_ORDERS,
	TAB_PRODUCT_PRICE,
} = stopUndefined(Exports)

const TabServices = props => {
	const { services } = props
	const tabs = useMemo(
		() =>
			services.map(services_ => {
				const service = Object.keys(services_)[0]
				const {
					[TAB_PRODUCT_DESCRIPTION]: description,
					[TAB_PRODUCT_NUM_ORDERS]: orders,
					[TAB_PRODUCT_PRICE]: price,
				} = services_[service]
				return {
					[TAB_NAME]: service,
					[TAB_CONTENT]: (
						<TabPanelService
							price={price}
							description={description}
							icon={service}
							orders={orders}
						/>
					),
				}
			}),
		[services]
	)

	return <Tab tabs={tabs} />
}

export { TabServices }
