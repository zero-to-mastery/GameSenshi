import React from 'react'
import { Label, Row, Col } from 'reactstrap'
import { Exports } from 'component_b_Atoms'
import { stopUndefined } from 'utils'
const { ImagesTooltipOptioned, Link, Button } = stopUndefined(Exports)

const BUTTONS_COMMON_IMAGE_ID = 'id'
const BUTTONS_COMMON_IMAGE_TEXT = 'text'
const BUTTONS_COMMON_IMAGE_ICON = 'icon'

const ButtonsImage = props => {
	const { buttons, to, className } = props

	return (
		<Row className={className}>
			{buttons.map(button => {
				const {
					[BUTTONS_COMMON_IMAGE_ID]: id,
					[BUTTONS_COMMON_IMAGE_TEXT]: text,
					[BUTTONS_COMMON_IMAGE_ICON]: icon,
				} = button

				return (
					<Col key={id}>
						<Row className='justify-content-center'>
							<Button
								tag={Link}
								className='btn-simple p-2'
								color='reddit'
								to={to}
							>
								<ImagesTooltipOptioned icons={icon} />
							</Button>
						</Row>
						<Row className='justify-content-center'>
							<Label>{text}</Label>
						</Row>
					</Col>
				)
			})}
		</Row>
	)
}

export {
	ButtonsImage,
	BUTTONS_COMMON_IMAGE_ID,
	BUTTONS_COMMON_IMAGE_TEXT,
	BUTTONS_COMMON_IMAGE_ICON,
}
