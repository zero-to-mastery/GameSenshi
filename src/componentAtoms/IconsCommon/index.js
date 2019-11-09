import React, { useMemo } from 'react'
import { IconsCommon } from './IconsCommon'
import { getIcons } from './utils'
import styles from './styles.module.css'

const IconsCommonOptioned = props => {
	const { icons, ...otherProps } = props
	const icons_ = useMemo(() => getIcons(icons), [icons])
	return <IconsCommon icons={icons_} {...otherProps} />
}

const IconsCommonOptionedPropedGameIcons = props => {
	return <IconsCommonOptioned className={styles.games} {...props} />
}

export { IconsCommonOptionedPropedGameIcons }
