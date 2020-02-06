import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import animate from '0_assets/css/animate.module.css'
import Loader from 'react-loader-spinner'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_0'
const { Col, Row } = stopUndefined(Exports)

const Status = props => {
	const { on, bodyOn, bodyOff, className, loading, loader } = props
	return (
		<div className={clsx(className, 'd-flex align-items-center')}>
			{loading && loader && (
				<Loader type='Circles' color='#00BFFF' height='21px' width='21px' />
			)}
			{!loading && (
				<Row
					className={clsx('align-items-center', {
						'd-none': (!on && !bodyOff) || (on && !bodyOn),
					})}
				>
					<Col xs='3'>
						<div
							className={clsx(
								styles.dot,
								animate.animated,
								animate.infinite,
								{
									[animate.heartBeat]: on,
									[styles.on]: on,
									[styles.off]: !on,
								}
							)}
						/>
					</Col>
					<Col className='pl-1'>
						<p
							className={clsx('mb-0 pt-1', {
								'text-white': on,
								'text-muted': !on,
							})}
						>
							{on ? bodyOn : bodyOff}
						</p>
					</Col>
				</Row>
			)}
		</div>
	)
}

export { Status }
