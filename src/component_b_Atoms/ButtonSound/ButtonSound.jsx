import React, { useState, useCallback, useRef, useEffect } from 'react'
import Sound from 'react-sound'
import { Container } from 'reactstrap'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import Loader from 'react-loader-spinner'
import classnames from 'classnames'
import uuidV4 from 'uuid/v4'
import { Exports } from 'component_a_Protons'
import { stopUndefined } from 'utils'
import { ColStyledPlay } from './styled'
const { Button, Col, Row } = stopUndefined(Exports)

const BUTTON_SOUND_SET_UUID = 'setUuid'
const BUTTON_SOUND_STATE_UUID = 'uuid'

const { PLAYING, STOPPED } = Sound.status
const Spinner = <Loader type='Oval' height={24} width={24} color='#fff' />
const DELAY = 1000
const convertToMinutes = duration => {
	const time = Math.round(duration / 1000)
	const minutes = ('0' + Math.floor(time / 60)).slice(-2)
	const seconds = ('0' + (time - minutes * 60)).slice(-2)
	return minutes + ':' + seconds
}

const ButtonSound = props => {
	const [playStatus, setPlayStatus] = useState(STOPPED)
	const [position, setPosition] = useState(Spinner)
	const [duration, setDuration] = useState('Play')
	const [loading, setLoading] = useState(false)
	const [Icon, setIcon] = useState(() => VolumeUpIcon)
	const ref = useRef(uuidV4())
	const delay = useRef(0)
	const icon = useRef(Icon)
	const intervalId = useRef(-1)
	const {
		url,
		color,
		[BUTTON_SOUND_STATE_UUID]: uuid,
		[BUTTON_SOUND_SET_UUID]: setUuid,
	} = props

	useEffect(() => {
		icon.current = Icon
	}, [Icon])

	const onPlaying = useCallback(
		sound => {
			setLoading(false) // * this line is needed because sometime onLoading doesn't work correctly
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
		setPlayStatus(STOPPED)
		setLoading(false)
		clearInterval(intervalId.current)
		setTimeout(() => {
			setIcon(() => VolumeUpIcon)
		}, DELAY)
		delay.current = 0
	}, [])

	const onFinishedPlaying = useCallback(() => {
		reset()
	}, [])

	useEffect(() => {
		if (ref.current !== uuid && uuid !== null) {
			reset()
		}
	}, [uuid])

	const onClick = useCallback(
		e => {
			e.preventDefault()
			e.stopPropagation()
			if (playStatus === STOPPED) {
				setUuid(ref.current)
				setPlayStatus(PLAYING)
			} else {
				reset()
			}
		},
		[playStatus]
	)

	const onLoad = useCallback(() => {
		setLoading(false)
	}, [])

	return (
		<Button
			baseClass='w-100 justify-content-start'
			baseStyle={{ maxWidth: 100 }}
			className='btn-round p-1 w-100'
			color={color}
			type='button'
			onClick={onClick}
		>
			<Container>
				<Row className='align-items-center'>
					<Col xs='0' sm='4' className={classnames('p-0')}>
						<Icon />
					</Col>
					<ColStyledPlay className={classnames('p-0')}>
						{loading ? Spinner : playStatus === STOPPED ? duration : position}
					</ColStyledPlay>
				</Row>
			</Container>
			<Sound
				url={url || ''}
				ignoreMobileRestrictions
				playStatus={playStatus}
				onLoading={onLoading}
				onLoad={onLoad}
				onPlaying={onPlaying}
				onFinishedPlaying={onFinishedPlaying}
			/>
		</Button>
	)
}

export { ButtonSound, BUTTON_SOUND_STATE_UUID, BUTTON_SOUND_SET_UUID }
