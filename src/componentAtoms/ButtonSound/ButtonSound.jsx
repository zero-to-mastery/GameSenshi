import React, { useState, useCallback, useRef, useEffect } from 'react'
import Sound from 'react-sound'
import { Row, Col, Container } from 'reactstrap'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import Loader from 'react-loader-spinner'
import styles from './styles.module.css'
import classnames from 'classnames'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button } = stopUndefined(Exports)

const { PLAYING: playing, STOPPED: stopped } = Sound.status
const DELAY = 1000
const convertToMinutes = duration => {
	const time = Math.round(duration / 1000)
	const minutes = ('0' + Math.floor(time / 60)).slice(-2)
	const seconds = ('0' + (time - minutes * 60)).slice(-2)
	return minutes + ':' + seconds
}

const ButtonSound = props => {
	const [playStatus, setPlayStatus] = useState(stopped)
	const [position, setPosition] = useState('loading')
	const [duration, setDuration] = useState('Play')
	const [loading, setLoading] = useState(false)
	const [Icon, setIcon] = useState(() => VolumeUpIcon)
	const delay = useRef(0)
	const icon = useRef(Icon)
	const intervalId = useRef(-1)
	const { url, color, simplify } = props

	useEffect(() => {
		icon.current = Icon
	}, [Icon])

	const onPlaying = useCallback(
		sound => {
			setLoading(false)
			if (!delay.current) {
				setTimeout(() => {
					setPosition(convertToMinutes(sound.position))
					const { current: icon_ } = icon
					if (icon_ === VolumeMuteIcon) {
						setIcon(() => VolumeDownIcon)
					} else if (icon_ === VolumeDownIcon) {
						setIcon(() => VolumeUpIcon)
					} else if (icon_ === VolumeUpIcon) {
						setIcon(() => VolumeMuteIcon)
					}
				}, delay.current)
				intervalId.current = setInterval(() => {
					setPosition(convertToMinutes(sound.position))
					const { current: icon_ } = icon
					if (icon_ === VolumeMuteIcon) {
						setIcon(() => VolumeDownIcon)
					} else if (icon_ === VolumeDownIcon) {
						setIcon(() => VolumeUpIcon)
					} else if (icon_ === VolumeUpIcon) {
						setIcon(() => VolumeMuteIcon)
					}
				}, DELAY)
			}
			delay.current = DELAY
		},
		[loading]
	)

	const onLoading = useCallback(
		sound => {
			setLoading(true)
			setDuration(convertToMinutes(sound.duration))
		},
		[loading]
	)

	const reset = useCallback(() => {
		setPlayStatus(stopped)
		clearInterval(intervalId.current)
		setTimeout(() => {
			setIcon(() => VolumeUpIcon)
		}, DELAY)
		delay.current = 0
	}, [])

	const onFinishedPlaying = useCallback(() => {
		reset()
	}, [])

	const onClick = useCallback(() => {
		if (playStatus === stopped) {
			setPlayStatus(playing)
		} else if (playStatus === playing) {
			reset()
		}
	}, [playStatus])

	const onLoad = useCallback(() => {
		// ! sometime this is not working, so we do it again in onPlaying
		setLoading(false)
	}, [])

	return (
		<>
			<Button
				baseClass='w-100 justify-content-start'
				baseStyle={{ maxWidth: 100 }}
				className='btn-round btn p-1 w-100'
				color={color}
				type='button'
				onClick={onClick}
			>
				<Container>
					<Row className='align-items-center'>
						<Col
							xs='4'
							className={classnames('p-0', { [styles.hide]: simplify })}
						>
							<Icon />
						</Col>
						<Col className={classnames('p-0', { [styles.play]: simplify })}>
							{loading ? (
								<Loader type='Oval' height={24} width={24} color='#fff' />
							) : playStatus === stopped ? (
								duration
							) : (
								position
							)}
						</Col>
					</Row>
				</Container>
			</Button>
			<Sound
				url={url}
				playStatus={playStatus}
				onLoading={onLoading}
				onLoad={onLoad}
				onPlaying={onPlaying}
				onFinishedPlaying={onFinishedPlaying}
			/>
		</>
	)
}

export { ButtonSound }
