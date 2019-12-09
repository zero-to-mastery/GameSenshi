import React, { Fragment } from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'
import Image from 'material-ui-image'
import styles from './styles.module.css'

import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'

const IMAGE = 'image'

const CardGift = props => {
	const { icons } = props
	return (
		<Col>
			<div className={styles.bgGradient} style={{ zIndex: 99 }}>
				<div className={styles.gridContainer}>
					{icons.map((icon, index) => {
						const { [IMAGE]: src } = icon
						return (
							<Fragment key={index}>
								<div className={`grid-item grid-item-${index + 1}`}>
									<div className={styles.imgWrapper}>
										<Image src={src} alt={src} />
									</div>
								</div>
							</Fragment>
						)
					})}
				</div>
			</div>
		</Col>
	)
}

export { CardGift, IMAGE }
