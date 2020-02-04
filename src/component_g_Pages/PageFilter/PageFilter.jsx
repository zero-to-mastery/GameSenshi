import React from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from 'component_f_MultiOrganisms'
import { Container } from 'reactstrap'

const {
	ContainerSearchResultsPropedDefault,
	Section,
	WrapperStoreWrapperPropedIndex,
} = stopUndefined(Exports)

const PageFilter = () => {
	return (
		<WrapperStoreWrapperPropedIndex>
			<Section>
				<Container className='py-5' style={{ marginTop: 100 }}>
					<ContainerSearchResultsPropedDefault />
				</Container>
			</Section>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { PageFilter }
