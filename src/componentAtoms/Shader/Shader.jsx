import React, { Fragment } from 'react'
import styles from './styles.css'

const SHADE_STATE_IS_OPEN = 'isOpen'

const comp1 = props => <div className={styles.shader} {...props} />
const comp2 = props => <Fragment {...props} />

const Shader = props => {
	const { children, [SHADE_STATE_IS_OPEN]: isOpen } = props
	const Component = isOpen ? comp1 : comp2
	return <Component>{children}</Component>
}

export { Shader, SHADE_STATE_IS_OPEN }
