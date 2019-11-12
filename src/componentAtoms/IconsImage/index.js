import React, { useMemo } from 'react'
import { IconsImage } from './IconsImage'
import { getIconsImage } from './utils'
import styles from './styles.module.css'

const IconsImageOptioned = props => {
	const { icons, ...otherProps } = props
	const icons_ = useMemo(() => getIconsImage(icons), [icons])
	return <IconsImage className={styles.games} icons={icons_} {...otherProps} />
}

const IconsImagePropedGameIcons = props => {
	return <IconsImageOptioned className={styles.games} {...props} />
}

export { IconsImagePropedGameIcons, IconsImageOptioned, IconsImage }
