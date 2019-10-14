import React, { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// ReactJS plugin for a nice carousel
import Slick from 'react-slick'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	Media,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'
// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const { Footer } = stopUndefined(ExportMultiOrganisms)

const ProfilePage = props => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('profile-page')
		return () => {
			document.body.classList.remove('profile-page')
		}
	}, [])

	// const onExiting = () => {
	// 	animating.value = true
	// }

	// const onExited = () => {
	// 	animating.value = false
	// }

	// const next = () => {
	// 	if (animating.value) return
	// 	// const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
	// 	// setActiveIndex(nextIndex)
	// }

	// const previous = () => {
	// 	if (animating.value) return
	// 	// const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
	// 	// setActiveIndex(nextIndex)
	// }

	// const goToIndex = newIndex => {
	// 	if (animating.value) return
	// 	setActiveIndex(newIndex)
	// }
	return (
		<div className='wrapper' ref={wrapper}>
			<div className='page-header'>
				<img alt='...' className='dots' src={require('assets/img/dots.png')} />
				<img alt='...' className='path' src={require('assets/img/path4.png')} />
				<Container className='align-items-center'>
					<Row>
						<Col className='ml-auto mr-auto' lg='4' md='6'>
							<Card className='card-coin card-plain'>
								<CardHeader>
									<img
										alt='...'
										className='img-center img-fluid rounded-circle'
										src={require('assets/img/mike.jpg')}
									/>
									<h3 className='title'>Mike Scheinder</h3>
									<p className='text-muted text-center'>@mighty_mike</p>
									{/* Social icons */}
									<Row className='btn-wrapper profile justify-content-center pt-3'>
										<Button
											className='btn-icon btn-round'
											color='twitch'
											href='https://twitch.tv/#my_channel'
											id='tooltip_twitch_icon'
											target='_blank'>
											<i className='fab fa-twitch' />
										</Button>
										<UncontrolledTooltip delay={0} target='tooltip_twitch_icon'>
											Subscribe to us
										</UncontrolledTooltip>
										<Button
											className='btn-icon btn-round'
											color='youtube'
											href='https://youtube.com/channel/#my_channel'
											id='tooltip_youtube_icon'
											target='_blank'>
											<i className='fab fa-youtube' />
										</Button>
										<UncontrolledTooltip
											delay={0}
											target='tooltip_youtube_icon'>
											Subscribe to us
										</UncontrolledTooltip>
									</Row>
								</CardHeader>
								<CardBody>
									{/* Biography */}
									<p className='profile-description'>
										A veteran in MOBA and FPS games, I can give you a
										significant boost in ranking mode.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6' md='6'>
							<h1 className='text-left'>Favorite Games</h1>
							<Row className='btn-wrapper profile justify-content-center pt-3'></Row>
						</Col>
					</Row>
				</Container>
			</div>
			<section className='section'>
				<Container>
					<Row>
						<h1>Images</h1>
					</Row>
					<Row>
						<Col md='12'></Col>
					</Row>
				</Container>
			</section>

			<Footer />
		</div>
	)
}

export { ProfilePage }
