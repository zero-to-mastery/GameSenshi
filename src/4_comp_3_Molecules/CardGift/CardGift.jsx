import React, { useState, useCallback } from 'react'
import { Input } from 'reactstrap'
import Image from 'material-ui-image'
import { stopUndefined } from '1_utils'
import { Exports } from '4_comp_2_Atoms'

const {
	UncontrolledTooltip,
	Modal,
	Button,
	Col,
	Row,
	Container,
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
					<Row className='justify-content-center'>
						<Col xs='2' id={CARD_GIFT_MODAL}>
							<Image
								className='border border-dark rounded-0'
								src={iconSrc}
								alt={iconSrc}
								style={{ height: '38px', width: '38px', padding: '0' }}
								imageStyle={{ height: '38px', width: '38px' }}
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
			<Container>
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
								<Button
									onClick={onClick_}
									className='p-0 w-100'
									baseClass='w-100'
								>
									<Image
										className='border border-dark rounded-0'
										src={src}
										alt={src}
									/>
								</Button>
								<Tooltip id={id} name={name} price={price} />
							</Col>
						)
					})}
				</Row>
			</Container>
		</>
	)
}

export { CardGift, CARD_GIFT_IMAGE, CARD_GIFT_NAME, CARD_GIFT_PRICE }
