import React from 'react'
import styles from './styles.css'

const Shader = props => {
	const { children } = props
	return <div className={styles.shader}>{children}</div>
}

export { Shader }
