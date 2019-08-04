import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

class Info extends React.Component {
	render() {
		return (
			<>
				<Container>
					<Row>
						<Col md='4'>
							<div className='info info-hover'>
								<div className='icon icon-primary'>
									<img
										alt='...'
										className='bg-blob'
										src={require('assets/img/feature-blob/primary.png')}
									/>
									<i className='tim-icons icon-user-run' />
								</div>
								<h2 className='info-title'>Huge number of components</h2>
								<h4 className='description'>
									Every element that you need in a product comes built in as a
									component. All components fit perfectly with each other and
									can take variations in colour.
								</h4>
							</div>
						</Col>
						<Col md='4'>
							<div className='info info-hover' style={{ marginTop: '-50px' }}>
								<div className='icon icon-warning'>
									<img
										alt='...'
										className='bg-blob'
										src={require('assets/img/feature-blob/warning.png')}
									/>
									<i className='tim-icons icon-atom' />
								</div>
								<h2 className='info-title'>Multi-Purpose Sections</h2>
								<h4 className='description'>
									Putting together a page has never been easier than matching
									together sections. From team presentation to pricing options,
									you can easily customise and built your pages.
								</h4>
							</div>
						</Col>
						<Col md='4'>
							<div className='info info-hover'>
								<div className='icon icon-success'>
									<img
										alt='...'
										className='bg-blob'
										src={require('assets/img/feature-blob/success.png')}
									/>
									<i className='tim-icons icon-gift-2' />
								</div>
								<h2 className='info-title'>Multiple Example Pages</h2>
								<p className='description'>
									If you want to get inspiration or just show something directly
									to your clients, you can jump start your development with our
									pre-built example pages.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default Info
