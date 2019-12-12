import React, { Fragment, useState, useCallback } from 'react'
import { Col, Input } from 'reactstrap'
import Image from 'material-ui-image'
import {
	ModalBodyWrapper,
	GridContainer,
	GradientContainer,
	ImageWrapper,
	GridItemWrapper,
} from './styled'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const { UncontrolledTooltip, ModalCommonPropedProfile } = stopUndefined(Exports)

const CARD_GIFT_IMAGE = 'image'
const CARD_GIFT_TOOLTIP = 'tooltip'

const CardGift = props => {
	const [isOpen, setIsOpen] = useState(false)
	const [modalId, setModalId] = useState('')
	const { icons } = props
	const onContinue = useCallback(e => {}, [])

	return (
		<Col>
			<GradientContainer>
				<GridContainer>
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
								<div onClick={toggleModal} id={id_}>
									<ImageWrapper>
										<Image src={src} alt={src} />
									</ImageWrapper>
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
				</GridContainer>
			</GradientContainer>
		</Col>
	)
}

export { CardGift, CARD_GIFT_IMAGE, CARD_GIFT_TOOLTIP }
