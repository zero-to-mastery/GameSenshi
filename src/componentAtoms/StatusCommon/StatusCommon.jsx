import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
const StatusCommon = props => {
	const { on, bodyOn, bodyOff } = props
	return (
		<div className='d-flex align-items-center'>
			<span
				className={classNames(styles.dot, 'mr-1', {
					[styles.on]: on,
					[styles.off]: !on,
				})}
			/>
			<p
				className={classNames('mb-0', {
					'text-muted': on,
				})}>
				{on ? bodyOn : bodyOff}
			</p>
		</div>
	)
}

export { StatusCommon }
