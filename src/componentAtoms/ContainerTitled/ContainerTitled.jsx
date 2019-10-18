import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styles from './styles.module.css'

const ContainerTitled = props => {
	const { title, children } = props
	return (
		<Container className={styles.container}>
			<Row>
				<Col
					xs={{ size: 12, offset: 1 }}
					sm={{ size: 12, offset: 1 }}
					md={{ size: 12, offset: 1 }}>
					<h1 className={`text-capitalize ${styles.headingPrimary}`}>
						{title}
					</h1>
				</Col>
			</Row>
			{children}
		</Container>
	)
}

export { ContainerTitled }
