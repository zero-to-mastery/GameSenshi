import React, { useState } from 'react'
// reactstrap components
import {
	Container,
	Row,
	Col,
	Label,
	Input,
	FormGroup,
	Button,
	Card,
	Table,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
	UncontrolledDropdown,
	CardBody,
} from 'reactstrap'

import { stopUndefined } from 'utils'
import { Exports } from 'componentMolecules'

const { PanelSortBy } = stopUndefined(Exports)

const SEARCH_RESULT_CARD_NAME = 'name'
const SEARCH_RESULT_CARD_IMAGE = 'image'
const SEARCH_RESULT_CARD_SKILLS = 'skills'
const SEARCH_RESULT_CARD_HOBBIES = 'hobbies'
const SEARCH_RESULT_CARD_LEVEL = 'level'

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']
const ratings = ['5 stars', '4 stars', '3 stars', '2 stars', '1 star']

const ContainerSearchResults = props => {
	const { results } = props

	return (
		<Container>
			<Row>
				<Col style={{ marginTop: '35px' }} md={{ size: 3 }}>
					<Row className='d-flex flex-row justify-content-center align-items-baseline'>
						<Col md={{ size: 2 }}>
							<i style={{ fontSize: '16px' }} class='fas fa-filter'></i>
						</Col>
						<Col md={{ size: 10 }}>
							<h4 className='text-uppercase'>Search filter</h4>
						</Col>
					</Row>
					<Row>
						<Col>
							<h5 className='text-capitalize py-3'>By game</h5>
							{games.map(game => {
								return (
									<FormGroup check>
										<Label check>
											<Input type='checkbox' />
											<span className='form-check-sign' />
											{game}
										</Label>
									</FormGroup>
								)
							})}
						</Col>
					</Row>
					<Row>
						<Col>
							<h5 className='text-capitalize py-3'>By rating</h5>
							{ratings.map(rating => {
								return (
									<FormGroup check>
										<Label check>
											<Input type='checkbox' />
											<span className='form-check-sign' />
											{rating}
										</Label>
									</FormGroup>
								)
							})}
						</Col>
					</Row>
					<Row className='py-3 d-flex flex-row justify-content-center'>
						<Col>
							<Button className='btn-round ml-2' color='danger' type='button'>
								Apply
							</Button>
						</Col>
					</Row>
					<Row className='d-flex flex-row justify-content-center'>
						<Col>
							<Button className='btn-round ml-1' color='danger' type='button'>
								Clear All
							</Button>
						</Col>
					</Row>
				</Col>
				<Col md={{ size: 8 }}>
					<PanelSortBy />
					<Row>
						<Col md={{ size: 4 }}>
							<Card className='card-profile'>
								<div className='card-image'>
									<h4 className='title'>Olivia Smith</h4>
									<UncontrolledDropdown>
										<DropdownToggle
											aria-expanded={false}
											caret
											className='btn-icon'
											color='link'
											data-toggle='dropdown'
											type='button'
										>
											<i className='tim-icons icon-settings-gear-63' />
										</DropdownToggle>
										<DropdownMenu right x-placement='bottom-end'>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												See full profile
											</DropdownItem>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												Send message
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
									<img
										alt='...'
										className='img img-raised rounded'
										src={require('assets/img/olivia.jpg')}
									/>
								</div>
								<CardBody>
									<hr className='line-primary' />
									<Table className='tablesorter' responsive>
										<tbody>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-atom' /> Skills
												</td>
												<td className='text-right'>fortnite</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-user-run' /> Hobbies
												</td>
												<td className='text-right'>sport</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-chart-bar-32' /> Level
												</td>
												<td className='text-right'>3</td>
											</tr>
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
						<Col md={{ size: 4 }}>
							<Card className='card-profile'>
								<div className='card-image'>
									<h4 className='title'>Olivia Smith</h4>
									<UncontrolledDropdown>
										<DropdownToggle
											aria-expanded={false}
											caret
											className='btn-icon'
											color='link'
											data-toggle='dropdown'
											type='button'
										>
											<i className='tim-icons icon-settings-gear-63' />
										</DropdownToggle>
										<DropdownMenu right x-placement='bottom-end'>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												See full profile
											</DropdownItem>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												Send message
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
									<img
										alt='...'
										className='img img-raised rounded'
										src={require('assets/img/olivia.jpg')}
									/>
								</div>
								<CardBody>
									<hr className='line-primary' />
									<Table className='tablesorter' responsive>
										<tbody>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-atom' /> Skills
												</td>
												<td className='text-right'>fortnite</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-user-run' /> Hobbies
												</td>
												<td className='text-right'>sport</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-chart-bar-32' /> Level
												</td>
												<td className='text-right'>3</td>
											</tr>
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
						<Col md={{ size: 4 }}>
							<Card className='card-profile'>
								<div className='card-image'>
									<h4 className='title'>Olivia Smith</h4>
									<UncontrolledDropdown>
										<DropdownToggle
											aria-expanded={false}
											caret
											className='btn-icon'
											color='link'
											data-toggle='dropdown'
											type='button'
										>
											<i className='tim-icons icon-settings-gear-63' />
										</DropdownToggle>
										<DropdownMenu right x-placement='bottom-end'>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												See full profile
											</DropdownItem>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												Send message
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
									<img
										alt='...'
										className='img img-raised rounded'
										src={require('assets/img/olivia.jpg')}
									/>
								</div>
								<CardBody>
									<hr className='line-primary' />
									<Table className='tablesorter' responsive>
										<tbody>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-atom' /> Skills
												</td>
												<td className='text-right'>fortnite</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-user-run' /> Hobbies
												</td>
												<td className='text-right'>sport</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-chart-bar-32' /> Level
												</td>
												<td className='text-right'>3</td>
											</tr>
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={{ size: 4 }}>
							<Card className='card-profile'>
								<div className='card-image'>
									<h4 className='title'>Olivia Smith</h4>
									<UncontrolledDropdown>
										<DropdownToggle
											aria-expanded={false}
											caret
											className='btn-icon'
											color='link'
											data-toggle='dropdown'
											type='button'
										>
											<i className='tim-icons icon-settings-gear-63' />
										</DropdownToggle>
										<DropdownMenu right x-placement='bottom-end'>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												See full profile
											</DropdownItem>
											<DropdownItem
												href='#pablo'
												onClick={e => e.preventDefault()}
											>
												Send message
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
									<img
										alt='...'
										className='img img-raised rounded'
										src={require('assets/img/olivia.jpg')}
									/>
								</div>
								<CardBody>
									<hr className='line-primary' />
									<Table className='tablesorter' responsive>
										<tbody>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-atom' /> Skills
												</td>
												<td className='text-right'>fortnite</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-user-run' /> Hobbies
												</td>
												<td className='text-right'>sport</td>
											</tr>
											<tr>
												<td className='text-left'>
													<i className='tim-icons icon-chart-bar-32' /> Level
												</td>
												<td className='text-right'>3</td>
											</tr>
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export {
	ContainerSearchResults,
	SEARCH_RESULT_CARD_NAME,
	SEARCH_RESULT_CARD_IMAGE,
	SEARCH_RESULT_CARD_SKILLS,
	SEARCH_RESULT_CARD_HOBBIES,
	SEARCH_RESULT_CARD_LEVEL,
}
