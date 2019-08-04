import React from 'react'

// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	NavItem,
	NavLink,
	Nav,
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
} from 'reactstrap'

class Pricing extends React.Component {
	state = {
		firstTabs: '1',
		secondTabs: '2',
		thirdTabs: '1',
	}
	toggle = (tabName, tab) => {
		if (this.state.activeTab !== tab) {
			this.setState({
				[tabName]: tab,
			})
		}
	}
	render() {
		return (
			<>
				<div className='cd-section' id='pricing'>
					{/* ********* PRICING 1 ********* */}
					<div className='pricing-1' id='pricing-1'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>Pick the best plan for you</h2>
									<h4 className='description'>
										You have Free Unlimited Updates and Premium Support on each
										package.
									</h4>
									<div className='section-space' />
								</Col>
							</Row>
							<div className='space-100' />
							<Row>
								<Nav
									className='nav-tabs-primary ml-auto mb-4'
									role='tablist'
									tabs>
									<NavItem>
										<NavLink
											className={this.state.firstTabs === '1' ? 'active' : ''}
											onClick={() => {
												this.toggle('firstTabs', '1')
											}}>
											Monthly
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={this.state.firstTabs === '2' ? 'active' : ''}
											onClick={() => {
												this.toggle('firstTabs', '2')
											}}>
											Yearly
										</NavLink>
									</NavItem>
								</Nav>
							</Row>
							<Row>
								<Col md='4'>
									<Card className='card-pricing'>
										<CardHeader className='bg-info'>
											<Badge className='badge-default'>Starter</Badge>
											<CardTitle tag='h1'>
												<small>$</small>
												22
											</CardTitle>
											<h5>per month</h5>
										</CardHeader>
										<CardBody>
											<ul>
												<li>
													<i className='tim-icons icon-check-2' /> 1000 MB
												</li>
												<li>
													<i className='tim-icons icon-email-85' /> 3 email
												</li>
												<li>
													<i className='tim-icons icon-chart-bar-32' /> 5
													Databases
												</li>
												<li>
													<i className='tim-icons icon-alert-circle-exc' /> No
													Support
												</li>
											</ul>
											<Button
												className='mt-4'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Get started
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing'>
										<CardHeader className='bg-danger'>
											<Badge className='badge-default'>Pro</Badge>
											<CardTitle tag='h1'>
												<small>$</small>
												45
											</CardTitle>
											<h5>per month</h5>
										</CardHeader>
										<CardBody>
											<ul>
												<li>
													<i className='tim-icons icon-check-2' /> 2000 MB
												</li>
												<li>
													<i className='tim-icons icon-email-85' /> 100 email
												</li>
												<li>
													<i className='tim-icons icon-chart-bar-32' /> 10
													Databases
												</li>
												<li>
													<i className='tim-icons icon-alert-circle-exc' />{' '}
													Support
												</li>
											</ul>
											<Button
												className='mt-4'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Get started
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing'>
										<CardHeader className='bg-warning'>
											<Badge className='badge-default'>Enterprise</Badge>
											<CardTitle tag='h1'>
												<small>$</small>
												68
											</CardTitle>
											<h5>per month</h5>
										</CardHeader>
										<CardBody>
											<ul>
												<li>
													<i className='tim-icons icon-check-2' /> 10.000 MB
												</li>
												<li>
													<i className='tim-icons icon-email-85' /> Unlimited
													emails
												</li>
												<li>
													<i className='tim-icons icon-chart-bar-32' /> 50
													Databases
												</li>
												<li>
													<i className='tim-icons icon-alert-circle-exc' />{' '}
													Premium Support
												</li>
											</ul>
											<Button
												className='mt-4'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Get started
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PRICING 1 ********* */}
					{/* ********* PRICING 2 ********* */}
					<div className='pricing-2' id='pricing-2'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>Pick the best plan for you</h2>
									<h4 className='description'>
										You have Free Unlimited Updates and Premium Support on each
										package.
									</h4>
									<div className='section-space' />
								</Col>
							</Row>
							<div className='space-100' />
							<Row>
								<Nav
									className='nav-pills-primary ml-auto mr-auto mb-4'
									pills
									role='tablist'>
									<NavItem>
										<NavLink
											className={this.state.secondTabs === '1' ? 'active' : ''}
											onClick={() => {
												this.toggle('secondTabs', '1')
											}}>
											Monthly
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={this.state.secondTabs === '2' ? 'active' : ''}
											onClick={() => {
												this.toggle('secondTabs', '2')
											}}>
											Yearly
										</NavLink>
									</NavItem>
								</Nav>
							</Row>
							<Row>
								<Col md='4'>
									<Card className='card-pricing'>
										<CardHeader
											className='card-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/bg8.jpg') + ')',
											}}>
											<Badge color='info'>Starter</Badge>
											<CardTitle tag='h1'>
												<small>$</small>
												199
											</CardTitle>
											<h5>per year</h5>
										</CardHeader>
										<CardBody>
											<ul>
												<li>
													<i className='tim-icons icon-check-2' /> 1000 MB
												</li>
												<li>
													<i className='tim-icons icon-email-85' /> 3 email
												</li>
												<li>
													<i className='tim-icons icon-chart-bar-32' /> 5
													Databases
												</li>
												<li>
													<i className='tim-icons icon-alert-circle-exc' /> No
													Support
												</li>
											</ul>
											<Button
												className='mt-4'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Get started
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing'>
										<CardHeader
											className='card-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/bg4.jpg') + ')',
											}}>
											<Badge color='warning'>Pro</Badge>
											<CardTitle tag='h1'>
												<small>$</small>
												399
											</CardTitle>
											<h5>per year</h5>
										</CardHeader>
										<CardBody>
											<ul>
												<li>
													<i className='tim-icons icon-check-2' /> 2000 MB
												</li>
												<li>
													<i className='tim-icons icon-email-85' /> 100 email
												</li>
												<li>
													<i className='tim-icons icon-chart-bar-32' /> 10
													Databases
												</li>
												<li>
													<i className='tim-icons icon-alert-circle-exc' />{' '}
													Support
												</li>
											</ul>
											<Button
												className='mt-4'
												color='warning'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Get started
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing'>
										<CardHeader
											className='card-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/bg7.jpg') + ')',
											}}>
											<Badge color='primary'>Enterprise</Badge>
											<CardTitle tag='h1'>
												<small>$</small>
												599
											</CardTitle>
											<h5>per year</h5>
										</CardHeader>
										<CardBody>
											<ul>
												<li>
													<i className='tim-icons icon-check-2' /> 10.000 MB
												</li>
												<li>
													<i className='tim-icons icon-email-85' /> Unlimited
													emails
												</li>
												<li>
													<i className='tim-icons icon-chart-bar-32' /> 50
													Databases
												</li>
												<li>
													<i className='tim-icons icon-alert-circle-exc' />{' '}
													Premium Support
												</li>
											</ul>
											<Button
												className='mt-4'
												color='primary'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Get started
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PRICING 2 ********* */}
					{/* ********* PRICING 3 ********* */}
					<div className='pricing-3' id='pricing-3'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>Pick the best plan for you</h2>
								</Col>
							</Row>
							<div className='space-50' />
							<Row>
								<Container>
									<Card>
										<Row>
											<Col className='pr-0' md='4'>
												<Card className='card-pricing card-plain'>
													<CardHeader>
														<h4 className='title'>Team</h4>
														<p className='description'>
															All core features you need to track your expenses
														</p>
														<CardTitle tag='h1'>$299</CardTitle>
														<h5 className='mt-2'>billed annually</h5>
													</CardHeader>
													<CardBody>
														<ul>
															<li>
																<i className='tim-icons icon-check-2' /> 1000 MB
															</li>
															<li>
																<i className='tim-icons icon-email-85' /> 5
																emails
															</li>
															<li>
																<i className='tim-icons icon-chart-bar-32' /> 5
																Databases
															</li>
															<li>
																<i className='tim-icons icon-alert-circle-exc' />{' '}
																No Support
															</li>
														</ul>
														<Button
															className='mt-4'
															color='primary'
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Get started
														</Button>
													</CardBody>
												</Card>
											</Col>
											<Col className='p-0' md='4'>
												<Card className='card-pricing card-plain'>
													<CardHeader>
														<h4 className='title'>Growth</h4>
														<p className='description'>
															Create your perfect plan for your business or
															project
														</p>
														<CardTitle tag='h1'>$499</CardTitle>
														<h5 className='mt-2'>billed annually</h5>
													</CardHeader>
													<CardBody>
														<ul>
															<li>
																<i className='tim-icons icon-check-2' /> 5000 MB
															</li>
															<li>
																<i className='tim-icons icon-email-85' /> 50
																emails
															</li>
															<li>
																<i className='tim-icons icon-chart-bar-32' /> 10
																Databases
															</li>
															<li>
																<i className='tim-icons icon-alert-circle-exc' />{' '}
																Premium Support
															</li>
														</ul>
														<Button
															className='mt-4'
															color='primary'
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Get started
														</Button>
													</CardBody>
												</Card>
											</Col>
											<Col className='pl-0' md='4'>
												<Card className='card-pricing card-plain'>
													<CardHeader>
														<h4 className='title'>Enterprises</h4>
														<p className='description'>
															Go to the next level and add value to your
															customers
														</p>
														<CardTitle tag='h1'>$599</CardTitle>
														<h5 className='mt-2'>billed annually</h5>
													</CardHeader>
													<CardBody>
														<ul>
															<li>
																<i className='tim-icons icon-check-2' /> 10.000
																MB
															</li>
															<li>
																<i className='tim-icons icon-email-85' />{' '}
																Unlimited emails
															</li>
															<li>
																<i className='tim-icons icon-chart-bar-32' /> 50
																Databases
															</li>
															<li>
																<i className='tim-icons icon-alert-circle-exc' />{' '}
																Premium Support
															</li>
														</ul>
														<Button
															className='mt-4'
															color='primary'
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Get started
														</Button>
													</CardBody>
												</Card>
											</Col>
										</Row>
									</Card>
								</Container>
							</Row>
						</Container>
					</div>
					{/* ********* END PRICING 3 ********* */}
					{/* ********* PRICING 4 ********* */}
					<div
						className='pricing-4 section-image'
						id='pricing-4'
						style={{
							backgroundImage: 'url(' + require('assets/img/light.jpeg') + ')',
						}}>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>Pick the best plan for you</h2>
									<h4 className='description'>
										You have Free Unlimited Updates on each package.
									</h4>
									<div className='section-space' />
								</Col>
							</Row>
							<div className='space-50' />
							<Row>
								<Col md='4'>
									<Card className='card-pricing card-plain'>
										<CardBody>
											<h2 className='title'>Free</h2>
											<h5 className='description'>
												$0.00 <small>/Monthly</small>
											</h5>
											<ul>
												<li>1 GB of space</li>
												<li>Limited Support</li>
												<li>Support at $25/hour</li>
												<li>Limited cloud access</li>
											</ul>
											<Button
												className='btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Choose plan
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing card-plain'>
										<CardBody>
											<h2 className='title'>
												Premium <Badge color='warning'>Best choice</Badge>
											</h2>
											<h5 className='description'>
												$8.99 <small>/Monthly</small>
											</h5>
											<ul>
												<li>5 GB of space</li>
												<li>UnLimited Support</li>
												<li>Unlimited Downloads</li>
												<li>Full cloud access</li>
											</ul>
											<Button
												className='btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Choose plan
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing card-plain'>
										<CardBody>
											<h2 className='title'>Exclusive</h2>
											<h5 className='description'>
												$13.99 <small>/Monthly</small>
											</h5>
											<ul>
												<li>5 GB of space</li>
												<li>UnLimited Support</li>
												<li>Unlimited Downloads</li>
												<li>Full cloud access</li>
											</ul>
											<Button
												className='btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Choose plan
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PRICING 4 ********* */}
					{/* ********* PRICING 5 ********* */}
					<div className='pricing-5' id='pricing-5'>
						<div className='space-50' />
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>Pick the best plan for you</h2>
									<h4 className='description'>
										You have Free Unlimited Updates and Premium Support on each
										package.
									</h4>
									<div className='section-space' />
								</Col>
							</Row>
							<div className='space-50' />
							<Row>
								<Col md='4'>
									<Card className='card-pricing card-plain card-primary'>
										<CardBody>
											<h2 className='title'>Free</h2>
											<h5 className='description'>
												$0.00 <small>/Monthly</small>
											</h5>
											<ul>
												<li>1 GB of space</li>
												<li>Limited Support</li>
												<li>Support at $25/hour</li>
												<li>Limited cloud access</li>
											</ul>
											<Button
												className='btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Choose plan
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing card-plain card-primary'>
										<CardBody>
											<h2 className='title'>
												Premium <Badge color='warning'>Best choice</Badge>
											</h2>
											<h5 className='description'>
												$8.99 <small>/Monthly</small>
											</h5>
											<ul>
												<li>5 GB of space</li>
												<li>UnLimited Support</li>
												<li>Unlimited Downloads</li>
												<li>Full cloud access</li>
											</ul>
											<Button
												className='btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Choose plan
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-pricing card-plain card-primary'>
										<CardBody>
											<h2 className='title'>Exclusive</h2>
											<h5 className='description'>
												$13.99 <small>/Monthly</small>
											</h5>
											<ul>
												<li>5 GB of space</li>
												<li>UnLimited Support</li>
												<li>Unlimited Downloads</li>
												<li>Full cloud access</li>
											</ul>
											<Button
												className='btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Choose plan
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PRICING 5 ********* */}
					{/* ********* PRICING 6 ********* */}
					<div
						className='pricing-6 section-pricing-6 section-image'
						id='pricing-6'
						style={{
							backgroundImage: 'url(' + require('assets/img/bg31.jpg') + ')',
						}}>
						<Container>
							<Row>
								<Col md='4'>
									<h2 className='title'>Choose a plan for your next project</h2>
									<Nav className='nav-pills-primary' pills role='tablist'>
										<NavItem>
											<NavLink
												className={this.state.thirdTabs === '1' ? 'active' : ''}
												onClick={() => {
													this.toggle('thirdTabs', '1')
												}}>
												Expensive
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={this.state.thirdTabs === '2' ? 'active' : ''}
												onClick={() => {
													this.toggle('thirdTabs', '2')
												}}>
												Cheaper
											</NavLink>
										</NavItem>
									</Nav>
									<p className='description'>
										You have Free Unlimited Updates and Premium Support on each
										package. You also have 20 days to request a refund if you're
										not happy with your purchase.
									</p>
								</Col>
								<Col className='ml-auto mr-auto' md='7'>
									<TabContent
										className='tab-space'
										activeTab={'thirdTabs' + this.state.thirdTabs}>
										<TabPane tabId='thirdTabs1'>
											<Row>
												<Col md='6'>
													<Card className='card-pricing card-raised'>
														<CardBody>
															<h6 className='category'>Plus</h6>
															<CardTitle tag='h1'>
																<small>$</small>
																100
															</CardTitle>
															<ul>
																<li>
																	<b>15</b> Projects
																</li>
																<li>
																	<b>5GB</b> Storage
																</li>
																<li>
																	<b>Unlimited</b> users
																</li>
																<li>
																	<b>No time</b> tracking
																</li>
															</ul>
															<Button
																className='btn-round'
																color='primary'
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Buy Now!
															</Button>
														</CardBody>
													</Card>
												</Col>
												<Col md='6'>
													<Card className='card-pricing card-plain'>
														<CardBody>
															<h6 className='category'>Maximum</h6>
															<CardTitle tag='h1'>
																<small>$</small>
																120
															</CardTitle>
															<ul>
																<li>
																	<b>25</b> Projects
																</li>
																<li>
																	<b>15GB</b> Storage
																</li>
																<li>
																	<b>Unlimited</b> users
																</li>
																<li>
																	<b>No time</b> tracking
																</li>
															</ul>
															<Button
																className='btn-round'
																color='primary'
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Buy Now!
															</Button>
														</CardBody>
													</Card>
												</Col>
											</Row>
										</TabPane>
										<TabPane tabId='thirdTabs2'>
											<Row>
												<Col md='6'>
													<Card className='card-pricing card-raised'>
														<CardBody>
															<h6 className='category'>Standard</h6>
															<CardTitle tag='h1'>
																<small>$</small>
																20
															</CardTitle>
															<ul>
																<li>
																	<b>5</b> Projects
																</li>
																<li>
																	<b>2GB</b> Storage
																</li>
																<li>
																	<b>Unlimited</b> users
																</li>
																<li>
																	<b>No time</b> tracking
																</li>
															</ul>
															<Button
																className='btn-round'
																color='primary'
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Buy Now!
															</Button>
														</CardBody>
													</Card>
												</Col>
												<Col md='6'>
													<Card className='card-pricing card-plain'>
														<CardBody>
															<h6 className='category'>Premium</h6>
															<CardTitle tag='h1'>
																<small>$</small>
																60
															</CardTitle>
															<ul>
																<li>
																	<b>7</b> Projects
																</li>
																<li>
																	<b>3GB</b> Storage
																</li>
																<li>
																	<b>Unlimited</b> users
																</li>
																<li>
																	<b>No time</b> tracking
																</li>
															</ul>
															<Button
																className='btn-round'
																color='primary'
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Buy Now!
															</Button>
														</CardBody>
													</Card>
												</Col>
											</Row>
										</TabPane>
									</TabContent>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PRICING 6 ********* */}
				</div>
			</>
		)
	}
}

export default Pricing
