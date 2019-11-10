import React, { Fragment } from 'react'
import { Button, Label } from 'reactstrap'

import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { IconsCommonOptioned } = stopUndefined(Exports)

const GAME_NAME = 'name'
const GAME_TEXT = 'text'

const ButtonOutlineCommon = props => {
	const { games } = props
	return (
		<div className='btn-wrapper d-flex flex-row'>
			{games.map(game => {
				const { [GAME_NAME]: name, [GAME_TEXT]: text } = game
				return (
					<div
						key={name}
						style={{ marginLeft: '30px' }}
						className='d-flex flex-column justify-content-center align-items-center'>
						<Button className='btn-simple' color='reddit'>
							<IconsCommonOptioned icons={name} />
						</Button>
						<Label>{text}</Label>
					</div>
				)
			})}
		</div>
	)
}

export { ButtonOutlineCommon, GAME_NAME, GAME_TEXT }
