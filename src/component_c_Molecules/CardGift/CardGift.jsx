import React, { useState, useCallback } from 'react'
import { Input, Col, Row, Container } from 'reactstrap'
import Image from 'material-ui-image'
import { ModalBodyWrapper } from './styled'
import { stopUndefined } from 'utils'
import { Exports } from 'component_b_Atoms'

const { UncontrolledTooltip, Modal } = stopUndefined(Exports)

const CARD_GIFT_IMAGE = 'image'
const CARD_GIFT_TOOLTIP = 'tooltip'

const CardGift = props => {
	const [isOpen, setIsOpen] = useState(false)
	const [modalId, setModalId] = useState('')
	const { icons, ...otherProps } = props

	const onContinue = useCallback(e => {}, [])

	const toggleModal = useCallback((e, id) => {
		e.preventDefault()
		setIsOpen(isOpen => !isOpen)
		setModalId(id)
	}, [])

	return (
		<span {...otherProps}>
			<Modal
				title='You have selected a gift'
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
					<Input label='No of gifts' placeholder='Select number of gifts' />
				</ModalBodyWrapper>
			</Modal>
			<Container className='bg-purple-gradient-2 rounded-lg'>
				<Row xs='2' sm='3' md='4' lg='5' xl='6' className='p-2'>
					{icons.map((icon, index) => {
						const { [CARD_GIFT_IMAGE]: src } = icon
						const id_ = `Id${index + 1}`
						return (
							<Col onClick={toggleModal} className='p-1' id={id_} key={id_}>
								<Image
									className='border border-dark rounded-0'
									src={src}
									alt={src}
								/>
								<UncontrolledTooltip placement='bottom' delay={0} target={id_}>
									Gift number {index + 1}
								</UncontrolledTooltip>
							</Col>
						)
					})}
				</Row>
			</Container>
		</span>
	)
}

export { CardGift, CARD_GIFT_IMAGE, CARD_GIFT_TOOLTIP }
