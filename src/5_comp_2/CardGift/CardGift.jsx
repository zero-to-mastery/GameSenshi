import React, { useState, useCallback } from 'react'
import { Input } from 'reactstrap'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_1'
import { ButtonBase } from '@material-ui/core'

const {
	UncontrolledTooltip,
	Modal,
	Col,
	Row,
	Container,
	Image,
} = stopUndefined(Exports)

const CARD_GIFT_IMAGE = 'image'
const CARD_GIFT_NAME = 'tooltip'
const CARD_GIFT_PRICE = 'price'
const CARD_GIFT_MODAL = 'cardGiftModal'

const Tooltip = props => {
	const { id, name, price } = props
	return (
		<UncontrolledTooltip delay={0} target={id} innerClassName='text-left'>
			{name}
			<br />
			{price}
		</UncontrolledTooltip>
	)
}

const CardGift = props => {
	const [isOpen, setIsOpen] = useState(false)
	const [iconSrc, setIconSrc] = useState('')
	const [number, setNumber] = useState('1')
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const { icons } = props

	const onContinue = useCallback(() => {}, [])

	const toggleModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	const onChange_ = useCallback(e => {
		setNumber(e.target.value)
	}, [])

	return (
		<>
			<Modal
				title='Show Your Player Some Love!'
				isOpen={isOpen}
				toggle={toggleModal}
				onContinue={onContinue}
				footer='Send Gifts'
				size='sm'
			>
				<Container className='my-3'>
					<Row className='justify-content-center align-items-center'>
						<Col xs='3' id={CARD_GIFT_MODAL}>
							<Image
								className='position-static'
								style={{ padding: 0 }}
								src={iconSrc}
								alt={iconSrc}
							/>
						</Col>
						<Col xs='4'>
							<Input
								label='No of gifts'
								value={number}
								type='number'
								onChange={onChange_}
								min='1'
								max='99'
							/>
						</Col>
					</Row>
				</Container>
				<Tooltip id={CARD_GIFT_MODAL} name={name} price={price} />
			</Modal>
			<Row xs='7' sx='8' sm='10' md='12' lg='6' className='m-2 p-0'>
				{icons.map(icon => {
					const {
						[CARD_GIFT_IMAGE]: src,
						[CARD_GIFT_NAME]: name,
						[CARD_GIFT_PRICE]: price,
					} = icon
					const id = `cardGift${name}`
					const onClick_ = useCallback(() => {
						setIsOpen(true)
						setIconSrc(src)
						setNumber(1)
						setName(name)
						setPrice(price)
					}, [src])
					return (
						<Col className='p-1' id={id} key={id}>
							<ButtonBase className='w-100'>
								<button
									onClick={onClick_}
									className='p-0 bg-transparent w-100'
									style={{
										borderColor: 'transparent',
									}}
								>
									<Image src={src} alt={src} />
								</button>
							</ButtonBase>
							<Tooltip id={id} name={name} price={price} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export { CardGift, CARD_GIFT_IMAGE, CARD_GIFT_NAME, CARD_GIFT_PRICE }
