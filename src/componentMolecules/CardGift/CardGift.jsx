import React, { Fragment, useState, useCallback } from 'react'
import { Col, Input, InputGroup } from 'reactstrap'
import Image from 'material-ui-image'
import styles from './styles.module.css'
import { ModalBodyWrapper } from './styled'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const { UncontrolledTooltip, ModalCommonPropedProfile, Button } = stopUndefined(
	Exports
)

const CARD_GIFT_IMAGE = 'image'
const CARD_GIFT_TOOLTIP = 'tooltip'

const CardGift = props => {
	const [isOpen, setIsOpen] = useState(false)
	const [modalId, setModalId] = useState('')
	const { icons } = props

	const onContinue = useCallback(e => {}, [])

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

						const toggleModal = useCallback(() => {
							setIsOpen(isOpen => !isOpen)
							setModalId(id_)
						}, [isOpen])
						return (
							<Fragment key={index}>
								<ModalCommonPropedProfile
									title={modalId}
									isOpen={isOpen}
									toggle={toggleModal}
									onContinue={onContinue}
									backdrop='static'
									modalClassName='modal-black'
									size='sm'
									footer='Send a gift'
								>
									<ModalBodyWrapper>
										Icon with : {modalId}
										<Input
											label='No of gifts'
											placeholder='Select number of gifts'
										/>
									</ModalBodyWrapper>
								</ModalCommonPropedProfile>
								<div
									onClick={toggleModal}
									id={id_}
									className={`grid-item-${index + 1}`}
								>
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
