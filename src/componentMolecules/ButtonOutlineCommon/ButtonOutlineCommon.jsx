import React, { Fragment } from 'react'
import { Button, Label } from 'reactstrap'

import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { IconsCommonOptioned } = stopUndefined(Exports)

const GAME_NAME = 'name'
const GAME_TEXT = 'text'

const ButtonOutlineCommon = props => {
	const { games } = props
	return games.map(game => {
		const { [GAME_NAME]: name, [GAME_TEXT]: text } = game
		return (
			<Fragment key={name}>
				<div className='d-flex flex-column'>
					<Button className='btn-simple' color='reddit'>
						<IconsCommonOptioned icons={name} />
					</Button>
					<Label>{text}</Label>
				</div>
			</Fragment>
		)
	})
}

export { ButtonOutlineCommon, GAME_NAME, GAME_TEXT }
