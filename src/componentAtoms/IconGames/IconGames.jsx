import React from 'react'
import classNames from 'classnames'
const IconGames = props => {
	const { games } = props

	return games.map((game, i) => (
		<img
			src={require(`assets/icons/games/${game}.ico`)}
			style={{ width: '48px', height: '48px' }}
			alt={game}
			className={classNames({ 'mr-2': i !== games.length - 1 })}
		/>
	))
}

export { IconGames }
