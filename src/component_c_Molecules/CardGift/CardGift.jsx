import React, { useState, useCallback } from 'react'
import { Input, Col, Row, Container } from 'reactstrap'
import Image from 'material-ui-image'
import { stopUndefined } from 'utils'
import { Exports } from 'component_b_Atoms'

const { UncontrolledTooltip, Modal, Button } = stopUndefined(Exports)

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
	const { icons, ...otherProps } = props

	const onContinue = useCallback(() => {}, [])

	const toggleModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	const onChange_ = useCallback(e => {
		setNumber(e.target.value)
	}, [])

	return (
		<span {...otherProps}>
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
			<Container className='bg-purple-gradient-2 rounded-lg'>
				<Row xs='6' className='p-2'>
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
		</span>
	)
}

export { CardGift, CARD_GIFT_IMAGE, CARD_GIFT_NAME, CARD_GIFT_PRICE }
