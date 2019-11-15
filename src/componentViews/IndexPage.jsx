import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const {
	Footer,
	CardIndexPropedDefault,
	ButtonsIconImagePropedIndex,
	CarouselCommonPropedIndex,
	Section,
	WrapperPropedIndex,
} = stopUndefined(Exports)

const IndexPage = () => {
	return (
		<WrapperPropedIndex>
			<Section>
				<Container>
					<Row>
						<Col>
							<CarouselCommonPropedIndex />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>
							<h1>Catalogue</h1>
						</Col>
					</Row>
					<ButtonsIconImagePropedIndex />
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>
							<h1>Recommendations</h1>
						</Col>
					</Row>
					<Row>
						<CardIndexPropedDefault />
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>
							<h1>New</h1>
						</Col>
					</Row>
					<Row>
						<CardIndexPropedDefault />
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>
							<h1>Random</h1>
						</Col>
					</Row>
					<Row>
						<CardIndexPropedDefault />
					</Row>
				</Container>
			</Section>
			<Footer />
		</WrapperPropedIndex>
	)
}

export { IndexPage }
