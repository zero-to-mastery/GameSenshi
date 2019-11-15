import React, { useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'

// reactstrap components
import { Container, Row } from 'reactstrap'

const { Footer } = stopUndefined(Exports)

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
		<>
			<Container>
				<Row>
					<h1>hello</h1>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export { HelpPage }
