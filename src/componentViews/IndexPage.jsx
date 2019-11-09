import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// core components
import { Exports } from 'componentpMultiOrganisms'
// layout library
import { Container, Row, Col } from 'reactstrap'

const { Footer, IndexHeader, CarouselCommonPropedIndex } = stopUndefined(
	Exports
)

const IndexPage = props => {
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
			{/* <IndexHeader /> */}
			<div className='main'>
				<Container>
					<Row>
						<Col
							xs={{ size: 10, offset: 1 }}
							sm={{ size: 10, offset: 1 }}
							md={{ size: 10, offset: 1 }}
							lg={{ size: 10, offset: 1 }}>
							<CarouselCommonPropedIndex />
						</Col>
					</Row>
				</Container>
			</div>

			<Footer />
		</div>
	)
}

export { IndexPage }
