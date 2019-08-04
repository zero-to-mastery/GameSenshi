import React from 'react'

// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardTitle,
	Table,
	Container,
	Row,
	Col,
} from 'reactstrap'

class Tables extends React.Component {
	render() {
		return (
			<>
				<div className='cd-section' id='tables'>
					{/* ********* Table 1 ********* */}
					<div className='tables-1'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title mb-4'>Find out more details</h2>
									<div className='section-space' />
								</Col>
							</Row>
							<Row>
								<Col className='mx-auto' md='12'>
									<div>
										<Card className='card-plain'>
											<CardBody>
												<Table className='table-pricing' responsive>
													<thead className='text-primary'>
														<tr>
															<th>
																<h3 className='mb-0'>Space individual</h3>
															</th>
															<th>
																<h6>Team</h6>
																<h4 className='desc'>$39/mo</h4>
																<Button
																	className='btn-simple'
																	color='success'
																	href='#pablo'
																	onClick={e => e.preventDefault()}
																	size='sm'>
																	Choose Plan
																</Button>
															</th>
															<th>
																<h6>Growth</h6>
																<h4 className='desc'>$79/mo</h4>
																<Button
																	color='success'
																	href='#pablo'
																	onClick={e => e.preventDefault()}
																	size='sm'>
																	Choose Plan
																</Button>
															</th>
															<th>
																<h6>Enterprise</h6>
																<h4 className='desc'>$99/mo</h4>
																<Button
																	color='success'
																	href='#pablo'
																	onClick={e => e.preventDefault()}
																	size='sm'>
																	Choose Plan
																</Button>
															</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																Community support{' '}
																<i className='tim-icons icon-alert-circle-exc' />
															</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
														</tr>
														<tr>
															<td>100+ Example Pages</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
														</tr>
														<tr>
															<td>50+ Section Examples</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
														</tr>
														<tr>
															<td>Multiple use</td>
															<td>
																<i className='tim-icons icon-simple-remove' />
															</td>
															<td>upon request</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
														</tr>
														<tr>
															<td>Custom messages</td>
															<td>
																<i className='tim-icons icon-check-2 text-success' />
															</td>
															<td>
																<i className='tim-icons icon-simple-remove' />
															</td>
															<td>
																<i className='tim-icons icon-simple-remove' />
															</td>
														</tr>
														<tr>
															<td>Multiple requests</td>
															<td>
																<i className='tim-icons icon-simple-remove' />
															</td>
															<td>
																<i className='tim-icons icon-simple-remove' />
															</td>
															<td>
																<i className='tim-icons icon-simple-remove' />
															</td>
														</tr>
													</tbody>
												</Table>
											</CardBody>
										</Card>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END Table 1 ********* */}
					{/* ********* Table 2 ********* */}
					<div className='tables-2'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title mb-4'>
										The best solution you can choose
									</h2>
									<div className='section-space' />
								</Col>
							</Row>
							<Row>
								<Col className='mx-auto' md='12'>
									<div>
										<Card>
											<CardBody>
												<div className='table-responsive mb-0'>
													<Table className='table-pricing'>
														<thead className='text-primary'>
															<tr>
																<th className='p-5'>
																	<img
																		alt='...'
																		className='background'
																		src={require('assets/img/bg4.png')}
																	/>
																	<img
																		alt='...'
																		className='man'
																		src={require('assets/img/man-up.png')}
																	/>
																	<img
																		alt='...'
																		className='girl'
																		src={require('assets/img/girl-up.png')}
																	/>
																</th>
																<th className='text-center'>
																	<CardTitle tag='h3'>FindMe</CardTitle>
																	<h5 className='desc'>
																		Quick and easy online crowdfunding
																	</h5>
																	<Button
																		color='info'
																		href='#pablo'
																		onClick={e => e.preventDefault()}
																		size='sm'>
																		Get started
																	</Button>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Learn more
																	</a>
																</th>
																<th className='text-center'>
																	<CardTitle tag='h3'>Essential</CardTitle>
																	<h5 className='desc'>
																		All the basic components to make your work
																		easier
																	</h5>
																	<Button
																		color='info'
																		href='#pablo'
																		onClick={e => e.preventDefault()}
																		size='sm'>
																		Get started
																	</Button>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Learn more
																	</a>
																</th>
																<th className='text-center'>
																	<CardTitle tag='h3'>Premium</CardTitle>
																	<h5 className='desc'>
																		Everything you need to break the rulesmof
																		success
																	</h5>
																	<Button
																		color='info'
																		href='#pablo'
																		onClick={e => e.preventDefault()}
																		size='sm'>
																		Get started
																	</Button>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Learn more
																	</a>
																</th>
																<th className='text-center'>
																	<CardTitle tag='h3'>Enterprise</CardTitle>
																	<h5 className='desc'>
																		Advanced option to get the best version of
																		you
																	</h5>
																	<Button
																		color='info'
																		href='#pablo'
																		onClick={e => e.preventDefault()}
																		size='sm'>
																		Get started
																	</Button>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Learn more
																	</a>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr className='bg-primary'>
																<td className='text-white'>
																	<b>Pricing</b>
																</td>
																<td />
																<td />
																<td />
																<td />
															</tr>
															<tr>
																<td>
																	Plan cost
																	<i className='tim-icons icon-alert-circle-exc ml-1' />
																</td>
																<td>Free</td>
																<td>Free</td>
																<td>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Contact us
																	</a>
																</td>
																<td>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Contact us
																	</a>
																</td>
															</tr>
															<tr>
																<td>
																	Platform fee
																	<i className='tim-icons icon-alert-circle-exc ml-1' />
																</td>
																<td>0%</td>
																<td>3%</td>
																<td>5%</td>
																<td>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Contact us
																	</a>
																</td>
															</tr>
															<tr>
																<td>Payment processing</td>
																<td>4% + 5c</td>
																<td>5.5% + 5c</td>
																<td>6.2% + 5c</td>
																<td>
																	<a
																		href='#pablo'
																		onClick={e => e.preventDefault()}>
																		Contact us
																	</a>
																</td>
															</tr>
															<tr className='bg-primary'>
																<td className='text-white'>
																	<b>Features</b>
																</td>
																<td />
																<td />
																<td />
																<td />
															</tr>
															<tr>
																<td>Custom messages</td>
																<td>
																	<i className='tim-icons icon-check-2 text-success' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
															</tr>
															<tr>
																<td>Multiple requests</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
															</tr>
															<tr>
																<td>Team fundraising</td>
																<td>
																	<i className='tim-icons icon-check-2 text-success' />
																</td>
																<td>
																	<i className='tim-icons icon-check-2 text-success' />
																</td>
																<td>
																	<i className='tim-icons icon-check-2 text-success' />
																</td>
																<td>
																	<i className='tim-icons icon-check-2 text-success' />
																</td>
															</tr>
															<tr>
																<td>Basic donor data</td>
																<td>
																	<i className='tim-icons icon-check-2 text-success' />
																</td>
																<td>
																	<i className='tim-icons icon-check-2 text-success' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
																<td>
																	<i className='tim-icons icon-simple-remove text-danger' />
																</td>
															</tr>
														</tbody>
													</Table>
												</div>
											</CardBody>
										</Card>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END Table 2 ********* */}
				</div>{' '}
			</>
		)
	}
}

export default Tables
