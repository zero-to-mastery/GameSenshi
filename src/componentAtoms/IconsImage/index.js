import React, { useMemo } from 'react'
import { IconsImage } from './IconsImage'
import { getIcons } from './utils'
import styles from './styles.module.css'

const IconsImageOptioned = props => {
	const { icons, ...otherProps } = props
	const icons_ = useMemo(() => getIcons(icons), [icons])
	return <IconsImage className={styles.games} icons={icons_} {...otherProps} />
}

const IconsImageOptionedPropedGameIcons = props => {
	return <IconsImageOptioned className={styles.games} {...props} />
}

export { IconsImageOptionedPropedGameIcons, IconsImageOptioned }
