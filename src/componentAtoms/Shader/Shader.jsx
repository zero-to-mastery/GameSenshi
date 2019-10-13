import React, { Fragment } from 'react'
import styles from './styles.module.css'

const SHADE_STATE_IS_OPEN = 'isOpen'

const comp1 = props => <div className={styles.shader} {...props} />
const comp2 = props => <Fragment {...props} />

const Shader = props => {
	const { [SHADE_STATE_IS_OPEN]: isOpen, ...otherProps } = props
	const Component = isOpen ? comp1 : comp2

	return <Component {...otherProps} />
}

export { Shader, SHADE_STATE_IS_OPEN }
