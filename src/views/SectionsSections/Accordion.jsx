import React from 'react'

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	Collapse,
	Container,
	Row,
	Col,
} from 'reactstrap'

class Accordion extends React.Component {
	state = {
		collapse: 1,
	}
	openCollapse = collapse => {
		this.setState({
			collapse: this.state.collapse === collapse ? -1 : collapse,
		})
	}
	render() {
		return (
			<>
				<div className='cd-section' id='accordion'>
					{/* ********* Accordion 1 ********* */}
					<div className='accordion-1'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title mb-4 mt-5'>Frequently asked question</h2>
									<div className='section-space' />
								</Col>
							</Row>
							<Row>
								<Col className='ml-auto' md='12'>
									<div className='accordion'>
										<Card>
											<CardHeader>
												<h5 className='mb-0'>
													<Button
														className='w-100 text-left'
														color='link'
														aria-expanded={this.state.collapse === 1}
														onClick={() => this.openCollapse(1)}>
														How do I order?{' '}
														<i className='tim-icons icon-minimal-down float-right' />
													</Button>
												</h5>
											</CardHeader>
											<Collapse isOpen={this.state.collapse === 1}>
												<CardBody>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</CardBody>
											</Collapse>
										</Card>
										<Card>
											<CardHeader>
												<h5 className='mb-0'>
													<Button
														className='w-100 text-left '
														color='link'
														aria-expanded={this.state.collapse === 2}
														onClick={() => this.openCollapse(2)}>
														How can i make the payment?{' '}
														<i className='tim-icons icon-minimal-down float-right' />
													</Button>
												</h5>
											</CardHeader>
											<Collapse isOpen={this.state.collapse === 2}>
												<CardBody>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</CardBody>
											</Collapse>
										</Card>
										<Card>
											<CardHeader>
												<h5 className='mb-0'>
													<Button
														className='w-100 text-left '
														color='link'
														aria-expanded={this.state.collapse === 3}
														onClick={() => this.openCollapse(3)}>
														How much time does it take to receive the order?{' '}
														<i className='tim-icons icon-minimal-down float-right' />
													</Button>
												</h5>
											</CardHeader>
											<Collapse isOpen={this.state.collapse === 3}>
												<CardBody>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</CardBody>
											</Collapse>
										</Card>
										<Card>
											<CardHeader>
												<h5 className='mb-0'>
													<Button
														className='w-100 text-left'
														color='link'
														aria-expanded={this.state.collapse === 4}
														onClick={() => this.openCollapse(4)}>
														Can I resell the products?{' '}
														<i className='tim-icons icon-minimal-down float-right' />
													</Button>
												</h5>
											</CardHeader>
											<Collapse isOpen={this.state.collapse === 4}>
												<CardBody>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</CardBody>
											</Collapse>
										</Card>
										<Card>
											<CardHeader>
												<h5 className='mb-0'>
													<Button
														className='w-100 text-left'
														color='link'
														aria-expanded={this.state.collapse === 5}
														onClick={() => this.openCollapse(5)}>
														Where do I find the shipping details?{' '}
														<i className='tim-icons icon-minimal-down float-right' />
													</Button>
												</h5>
											</CardHeader>
											<Collapse isOpen={this.state.collapse === 5}>
												<CardBody>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</CardBody>
											</Collapse>
										</Card>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END Accordion 1 ********* */}
				</div>
			</>
		)
	}
}

export default Accordion
