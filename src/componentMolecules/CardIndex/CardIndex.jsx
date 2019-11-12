import React, { Fragment } from 'react'
// reactstrap components
import {
	Card,
	CardBody,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	Table,
	Col,
} from 'reactstrap'

const NAME = 'name'
const IMAGE = 'image'
const SKILLS = 'skills'
const HOBBIES = 'hobbies'
const LEVEL = 'level'

const CardIndex = props => {
	const { cards } = props
	return (
		<Fragment>
			{cards.map(card => {
				const {
					[NAME]: name,
					[IMAGE]: src,
					[SKILLS]: skills,
					[HOBBIES]: hobbies,
					[LEVEL]: level,
				} = card
				return (
					<Col>
						<Card className='card-profile'>
							<div className='card-image'>
								<h4 className='title'>{name}</h4>
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
								<img alt='...' className='img img-raised rounded' src={src} />
							</div>
							<CardBody>
								<hr className='line-primary' />
								<Table className='tablesorter' responsive>
									<tbody>
										<tr>
											<td className='text-left'>
												<i className='tim-icons icon-atom' /> Skills
											</td>
											<td className='text-right'>{skills}</td>
										</tr>
										<tr>
											<td className='text-left'>
												<i className='tim-icons icon-user-run' /> Hobbies
											</td>
											<td className='text-right'>{hobbies}</td>
										</tr>
										<tr>
											<td className='text-left'>
												<i className='tim-icons icon-chart-bar-32' /> Level
											</td>
											<td className='text-right'>{level}</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
				)
			})}
		</Fragment>
	)
}

export { CardIndex, NAME, IMAGE, HOBBIES, SKILLS, LEVEL }
