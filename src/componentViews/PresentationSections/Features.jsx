import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

class Features extends React.Component {
	render() {
		return (
			<>
				<div className='section features-7'>
					<Container fluid>
						<Row>
							<Col className='px-0' md='6'>
								<Col sm='12'>
									<div className='info info-horizontal'>
										<div className='icon text-warning'>
											<i className='tim-icons icon-coins' />
										</div>
										<div className='description'>
											<h3 className='info-title'>Save Time &amp; Money</h3>
											<p className='description'>
												Creating your design from scratch with dedicated
												designers can be very expensive.Using BLK• Design System
												PRO React you don't have to worry about customising the
												basic Bootstrap 4 design or its components.
											</p>
										</div>
									</div>
									<div className='info info-horizontal'>
										<div className='icon text-info'>
											<i className='tim-icons icon-bold' />
										</div>
										<div className='description'>
											<h3 className='info-title'>Bootstrap 4 &amp; Flexbox</h3>
											<p className='description'>
												It is built over Bootstrap 4, it's fully responsive and
												has all the benefits of the flexbox for the layout, grid
												system and components. This is a huge advantage when you
												work with columns.
											</p>
										</div>
									</div>
									<div className='info info-horizontal'>
										<div className='icon text-danger'>
											<i className='tim-icons icon-paper' />
										</div>
										<div className='description'>
											<h3 className='info-title'>Fast Prototype</h3>
											<p className='description'>
												Using BLK• Design System PRO React you can create
												hundreds of components combinations within seconds and
												present them to your client. You just need to change
												some classes and colors.
											</p>
										</div>
									</div>
								</Col>
							</Col>
							<Col md='6'>
								<div className='image-container'>
									<img alt='...' src={require('assets/img/ipad3.png')} />
								</div>
							</Col>
						</Row>
					</Container>
				</div>{' '}
			</>
		)
	}
}

export default Features
