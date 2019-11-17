import React from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container } from 'reactstrap'

const { ContainerSearchResultsPropedDefault, Section, WrapperStoreWrapperPropedIndex } = stopUndefined(Exports)

const SearchedPage = () => {
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

export { SearchedPage }
