import React from 'react'
import { ButtonsIconImage, GAME_NAME, GAME_TEXT } from './ButtonsIconImage'
import { games } from './utils'

const ButtonsIconImagePropedIndex = props => {
	return <ButtonsIconImage games={games} {...props} />
}

export { ButtonsIconImagePropedIndex, GAME_NAME, GAME_TEXT }
