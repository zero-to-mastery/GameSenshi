import React from 'react'
import { Button, Label, Row, Col } from 'reactstrap'

import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { IconsImageOptioned } = stopUndefined(Exports)

const BUTTONS_ICON_IMAGE_ID = 'id'
const BUTTONS_ICON_IMAGE_TEXT = 'text'

const ButtonsIconImage = props => {
	const { buttons } = props
	return (
		<Row>
			{buttons.map(button => {
				const {
					[BUTTONS_ICON_IMAGE_ID]: id,
					[BUTTONS_ICON_IMAGE_TEXT]: text,
				} = button
				return (
					<Col key={id}>
						<Row className='justify-content-center'>
							<Button className='btn-simple' color='reddit'>
								<IconsImageOptioned icons={id} />
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

export { ButtonsIconImage, BUTTONS_ICON_IMAGE_ID, BUTTONS_ICON_IMAGE_TEXT }
