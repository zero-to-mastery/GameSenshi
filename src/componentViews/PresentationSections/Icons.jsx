import React from 'react'

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap'

class Icons extends React.Component {
	render() {
		return (
			<>
				<div className='section section-icons'>
					<Container fluid>
						<Row>
							<Col lg='3' sm='2'>
								<div className='icons-nucleo'>
									<i className='first-left-icon tim-icons icon-send text-primary' />
									<i className='second-left-icon tim-icons icon-alert-circle-exc text-warning' />
									<i className='third-left-icon tim-icons icon-cart text-info' />
									<i className='fourth-left-icon tim-icons icon-bold text-default' />
									<i className='fifth-left-icon tim-icons icon-headphones text-danger' />
									<i className='sixth-left-icon tim-icons icon-satisfied text-success' />
									<i className='seventh-left-icon tim-icons icon-cart text-default' />
									<i className='eighth-left-icon tim-icons icon-spaceship text-info' />
									<i className='ninth-left-icon tim-icons icon-sound-wave text-warning' />
									<i className='tenth-left-icon tim-icons icon-heart-2 text-danger' />
								</div>
							</Col>
							<Col className='text-center' lg='6' sm='8'>
								<h1 className='title'>Custom Icons</h1>
								<p className='description'>
									BLK• Design System PRO React comes with 100 custom demo icons
									made by our friends from{' '}
									<a
										href='https://nucleoapp.com/?ref=1712'
										target='_blank'
										rel='noopener noreferrer'>
										NucleoApp
									</a>
									. The official package contains over 20.729 icons which are
									looking great in combination with BLK• Design System PRO
									React. Make sure you check all of them and use those that you
									like the most.
								</p>
								<br />
								<Button
									className='btn-round'
									color='warning'
									href='https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/alert?ref=blkdspr-presentation'
									size='lg'
									target='_blank'>
									View Demo Icons
								</Button>
								<Button
									className='btn-round ml-1'
									color='primary'
									href='https://nucleoapp.com/?ref=1712'
									outline
									size='lg'
									target='_blank'>
									View All Icons
								</Button>
							</Col>
							<Col lg='3' sm='2'>
								<div className='icons-nucleo icons-nucleo-right text-success'>
									<i className='first-right-icon tim-icons icon-palette text-warning' />
									<i className='second-right-icon tim-icons icon-tie-bow text-primary' />
									<i className='third-right-icon tim-icons icon-pin text-info' />
									<i className='fourth-right-icon tim-icons icon-key-25 text-default' />
									<i className='fifth-right-icon tim-icons icon-istanbul text-danger' />
									<i className='sixth-right-icon tim-icons icon-bus-front-12 text-warning' />
									<i className='seventh-right-icon tim-icons icon-image-02 text-success' />
									<i className='eighth-right-icon tim-icons icon-world text-info' />
									<i className='ninth-right-icon tim-icons icon-puzzle-10 text-primary' />
									<i className='tenth-right-icon tim-icons icon-atom text-default' />
								</div>
							</Col>
						</Row>
					</Container>
				</div>{' '}
			</>
		)
	}
}

export default Icons
