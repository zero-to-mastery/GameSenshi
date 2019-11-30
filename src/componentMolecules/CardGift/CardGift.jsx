import React, { Fragment } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'
import Image from 'material-ui-image'
import styles from './styles.module.css'

const IMAGE = 'image'

const CardGift = props => {
	const { icons } = props
	return (
		<Row>
			<Col md='5'>
				<Card className='card card-raised' color='secondary'>
					<CardBody>
						<div className={styles.gridContainer}>
							{icons.map((icon, index) => {
								const { [IMAGE]: src } = icon
								return (
									<Fragment key={index}>
										<div className={`grid-item-${index + 1}`}>
											<div className={styles.imgWrapper}>
												<Image src={src} alt={src} />
											</div>
										</div>
									</Fragment>
								)
							})}
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export { CardGift, IMAGE }
