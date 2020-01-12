import React from 'react'
import Loader from 'react-loader-spinner'
import {
	Popover as PopoverRS,
	PopoverHeader,
	PopoverBody,
	Row,
	Col,
} from 'reactstrap'

const Popover = props => {
	const { isOpen, target, spinner, header, children } = props

	return (
		<PopoverRS
			placement='top-end'
			isOpen={isOpen}
			target={target}
			className='popover-primary'
		>
			<PopoverHeader>
				<Row>
					<Col xs='1'>
						{spinner && (
							<Loader
								type={spinner}
								color='#00BFFF'
								height='15px'
								width='15px'
							/>
						)}
					</Col>
					<Col className='pl-2'>{header} </Col>
				</Row>
			</PopoverHeader>
			<PopoverBody className='pl-0 pb-0'>{children}</PopoverBody>
		</PopoverRS>
	)
}

export { Popover }
