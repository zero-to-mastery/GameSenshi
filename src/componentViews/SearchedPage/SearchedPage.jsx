import React from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container } from 'reactstrap'

const { ContainerSearchResultsPropedDefault, Section } = stopUndefined(Exports)

const SearchedPage = () => {
	return (
		<Section>
			<Container className='py-5' style={{ marginTop: 100 }}>
				<ContainerSearchResultsPropedDefault />
			</Container>
		</Section>
	)
}

export { SearchedPage }
