import React, { Fragment } from 'react'
import { Col } from 'reactstrap'
import Image from 'material-ui-image'
import styles from './styles.module.css'

import { stopUndefined } from 'utils'
import { Exports } from 'componentaProton'

const { UncontrolledTooltip } = stopUndefined(Exports)

const CARD_GIFT_IMAGE = 'image'
const CARD_GIFT_TOOLTIP = 'tooltip'

const CardGift = props => {
	const { icons } = props
	return (
		<Col>
			<div className={styles.bgGradient} style={{ zIndex: 99 }}>
				<div className={styles.gridContainer}>
					{icons.map((icon, index) => {
						const {
							[CARD_GIFT_IMAGE]: src,
							[CARD_GIFT_TOOLTIP]: tooltip,
						} = icon
						const id_ = `Id${index + 1}`
						return (
							<Fragment key={index}>
								<div id={id_} className={`grid-item-${index + 1}`}>
									<div className={styles.imgWrapper}>
										<Image src={src} alt={src} />
									</div>
									<UncontrolledTooltip
										placement='bottom'
										delay={0}
										target={id_}
									>
										{tooltip}
									</UncontrolledTooltip>
								</div>
							</Fragment>
						)
					})}
				</div>
			</div>
		</Col>
	)
}

export { CardGift, CARD_GIFT_IMAGE, CARD_GIFT_TOOLTIP }
