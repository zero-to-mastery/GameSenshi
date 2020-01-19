import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'
import animate from 'assets/css/animate.module.css'
import Loader from 'react-loader-spinner'

const Status = props => {
	const { on, bodyOn, bodyOff, className, loading } = props
	return (
		<div className={classnames(className, 'd-flex align-items-center')}>
			{loading ? (
				<Loader type='Circles' color='#00BFFF' height='30px' width='30px' />
			) : (
				<>
					<span
						className={classnames(
							styles.dot,
							'mr-1',
							animate.animated,
							animate.infinite,
							{
								[animate.heartBeat]: on,
								[styles.on]: on,
								[styles.off]: !on,
							}
						)}
					/>
					<p
						className={classnames('mb-0', {
							'text-muted': !on,
							'text-white': on,
						})}
					>
						{on ? bodyOn : bodyOff}
					</p>
				</>
			)}
		</div>
	)
}

export { Status }
