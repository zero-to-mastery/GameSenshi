import React from 'react'
import {
	ButtonOutlineCommon,
	GAME_NAME,
	GAME_TEXT,
} from './ButtonOutlineCommon'
import { games } from './utils'

const ButtonOutlineCommonPropedIndex = props => {
	return <ButtonOutlineCommon games={games} {...props} />
}

export { ButtonOutlineCommonPropedIndex, GAME_NAME, GAME_TEXT }
