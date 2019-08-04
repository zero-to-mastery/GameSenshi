import React from 'react'
import { Link } from 'react-router-dom'
// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap'

class Sections extends React.Component {
	render() {
		return (
			<>
				<div className='section section-sections' data-background-color='gray'>
					<Container>
						<Col className='ml-auto mr-auto' md='8'>
							<div className='section-description text-center'>
								<h2 className='title'>Sections you will love</h2>
								<p className='description'>
									Build pages in no time using pre-made sections! From headers
									to footers, you will be able to choose the best combination
									for your project. We have created multiple sections for you to
									put together and customise into pixel perfect example pages.
								</p>
								<Button
									className='btn-round'
									color='primary'
									to='/sections'
									tag={Link}>
									View All Sections
								</Button>
							</div>
						</Col>
					</Container>
					<Container fluid>
						<div className='section-cols'>
							<Row className='mt-5'>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/header1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/header2.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/header3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/header4.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/header5.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/header6.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/features1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/features2.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/features3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/features4.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/features5.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/features6.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/blogpost1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/blogpost2.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/blogpost3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/blogpost4.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/blogpost5.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/blogpost6.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/blogpost7.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/team1.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/team2.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/team3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/team4.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/team5.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/projects1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/projects2.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/projects3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/projects4.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/pricing1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/pricing2.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/pricing3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/pricing4.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/pricing5.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/pricing6.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/testimonials1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/testimonials2.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/testimonials3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/testimonials4.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/contact1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/contact2.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/contact3.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/contact4.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/table1.png')}
									/>
								</Col>
								<Col md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/table2.png')}
									/>
								</Col>
							</Row>
							<Row>
								<Col className='mx-auto' md='3'>
									<img
										alt='...'
										src={require('assets/img/presentation-page/accordion.png')}
									/>
								</Col>
							</Row>
						</div>
					</Container>
				</div>{' '}
			</>
		)
	}
}

export default Sections
