import React from 'react'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Table,
	Container,
	Row,
	Col,
} from 'reactstrap'

// core components
import ColorNavbar from 'components/Navbars/ColorNavbar.jsx'
import DemoFooter from 'components/Footers/DemoFooter.jsx'

class InvoicePage extends React.Component {
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('invoice-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('invoice-page')
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='section'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='10'>
									<Card className='card-invoice'>
										<CardHeader
											className='text-center'
											data-color-icon='warning'>
											<Row className='justify-content-between'>
												<Col className='text-left' md='4'>
													<img
														alt='...'
														className='mb-2'
														src={require('assets/img/creative-tim-white-slim2.png')}
													/>
													<h4>
														St. Independence Embankment, 050105 Bucharest,
														Romania
													</h4>
													<small className='d-block text-muted'>
														tel: +4 (074) 1090873
													</small>
												</Col>
												<Col className='text-left mt-3' lg='3' md='5'>
													<h3 className='mb-1'>Billed to:</h3>
													<span className='d-block'>James Thompson</span>
													<p>
														Bld Mihail Kogalniceanu, nr. 8, <br />
														7652 Bucharest, <br />
														Romania
													</p>
												</Col>
											</Row>
											<br />
											<Row className='justify-content-md-between'>
												<Col className='mt-5' md='4'>
													<h2 className='mt-3 text-left'>
														Invoice no <br />
														<small className='mr-2'>#0453119</small>
													</h2>
												</Col>
												<Col className='mt-5' lg='4' md='5'>
													<Row className='mt-5'>
														<Col md='6'>Invoice date:</Col>
														<Col md='6'>06/03/2019</Col>
													</Row>
													<Row>
														<Col md='6'>Due date:</Col>
														<Col md='6'>11/03/2019</Col>
													</Row>
												</Col>
											</Row>
										</CardHeader>
										<CardBody>
											<Row>
												<Col className='mt-5' xs='12'>
													<Table className='text-right' responsive>
														<thead className='bg-default'>
															<tr>
																<th scope='col'>Item</th>
																<th className='text-right' scope='col'>
																	Qty
																</th>
																<th className='text-right' scope='col'>
																	Rate
																</th>
																<th className='text-right' scope='col'>
																	Amount
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>Premium Support</td>
																<td>1</td>
																<td>$ 9.00</td>
																<td>$ 9.00</td>
															</tr>
															<tr>
																<td>BLK Design System PRO</td>
																<td>3</td>
																<td>$ 100.00</td>
																<td>$ 300.00</td>
															</tr>
															<tr>
																<td>Parts for service</td>
																<td>1</td>
																<td>$ 89.00</td>
																<td>$ 89.00</td>
															</tr>
														</tbody>
														<tfoot>
															<tr>
																<th className='h4'>Total</th>
																<th className='text-right h4' colSpan='3'>
																	$ 750
																</th>
															</tr>
														</tfoot>
													</Table>
												</Col>
											</Row>
										</CardBody>
										<hr className='line-info ml-auto' />
										<CardFooter className='text-right'>
											<Col md='5'>
												<h4>Thank you!</h4>
												<p className='description'>
													If you encounter any issues related to the invoice you
													can contact us at:
												</p>
												<h5 className='d-block'>
													email:{' '}
													<small className='text-muted'>
														support@cretive-tim.com
													</small>
												</h5>
											</Col>
										</CardFooter>
									</Card>
								</Col>
								<Col className='ml-auto' md='3'>
									<Button
										className='btn-print mt-5'
										color='info'
										onClick={() => {
											window.print()
											return false
										}}
										type='button'>
										<i className='tim-icons icon-laptop' />
										Print
									</Button>
								</Col>
							</Row>
						</Container>
					</div>
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default InvoicePage
