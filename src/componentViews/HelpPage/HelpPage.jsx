import React, { useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

const { WrapperStoreWrapperPropedIndex } = stopUndefined(Exports)

const HelpPage = () => {
	useEffect(() => {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		return () => {
			document.body.classList.remove('index-page')
		}
	}, [])
	return (
		<WrapperStoreWrapperPropedIndex>
			<Container>
				<Row style={{ height: '100vh' }} className='py-5'>
					<Col md={{ size: 7, offset: 5 }}>
						<h1 className='py-5'>Help Page</h1>
					</Col>
				</Row>
			</Container>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { HelpPage }
