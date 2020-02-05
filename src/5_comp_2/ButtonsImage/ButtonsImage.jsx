import React from 'react'
import { Label } from 'reactstrap'
import { ButtonStyled, ColStyled } from './styled'
import { Exports } from '5_comp_1'
import { stopUndefined } from '1_utils'
const { ImagesTooltipOptioned, Link, Row, Col } = stopUndefined(Exports)

const BUTTONS_COMMON_IMAGE_ID = 'id'
const BUTTONS_COMMON_IMAGE_TEXT = 'text'
const BUTTONS_COMMON_IMAGE_ICON = 'icon'

const ButtonsImage = props => {
	const { buttons, to, className, buttonFlex } = props

	return (
		<Row className={className}>
			{buttons.map(button => {
				const {
					[BUTTONS_COMMON_IMAGE_ID]: id,
					[BUTTONS_COMMON_IMAGE_TEXT]: text,
					[BUTTONS_COMMON_IMAGE_ICON]: icon,
				} = button

				return (
					<ColStyled {...buttonFlex} key={id}>
						<Row xs='1'>
							<Col>
								<ButtonStyled
									tag={Link}
									baseClass='w-100'
									className='btn-simple'
									color='reddit'
									to={to}
								>
									<ImagesTooltipOptioned icons={icon} />
								</ButtonStyled>
							</Col>
							<Col align='center'>
								<Label className='text-nowrap'>{text}</Label>
							</Col>
						</Row>
					</ColStyled>
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
