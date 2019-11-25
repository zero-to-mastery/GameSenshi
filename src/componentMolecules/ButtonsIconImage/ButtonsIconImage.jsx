import React from 'react'
import { Label, Row, Col } from 'reactstrap'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { IconsImageOptioned, Link, Button } = stopUndefined(Exports)

const BUTTONS_ICON_IMAGE_ID = 'id'
const BUTTONS_ICON_IMAGE_TEXT = 'text'
const BUTTONS_ICON_IMAGE_ICON = 'icon'

const ButtonsIconImage = props => {
	const { buttons, to, className } = props

	return (
		<Row className={className}>
			{buttons.map(button => {
				const {
					[BUTTONS_ICON_IMAGE_ID]: id,
					[BUTTONS_ICON_IMAGE_TEXT]: text,
					[BUTTONS_ICON_IMAGE_ICON]: icon,
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
								<IconsImageOptioned icons={icon} />
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
	ButtonsIconImage,
	BUTTONS_ICON_IMAGE_ID,
	BUTTONS_ICON_IMAGE_TEXT,
	BUTTONS_ICON_IMAGE_ICON,
}
