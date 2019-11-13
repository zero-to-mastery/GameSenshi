import React, { useRef, useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const { ContainerSearchResults, Footer } = stopUndefined(Exports)

const SearchedPage = () => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		return () => {
			document.body.classList.remove('index-page')
		}
	}, [])
	return (
		<div className='wrapper' ref={wrapper}>
			<div className='main'>
				<Container style={{ marginTop: 100 }}>
					<ContainerSearchResults />
				</Container>
			</div>
			<Footer />
		</div>
	)
}

export { SearchedPage }
