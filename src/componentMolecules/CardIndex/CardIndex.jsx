import React from 'react'
// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Table,
	Container,
	Row,
	Col,
} from 'reactstrap'
const CardIndex = props => {
	return (
		<div>
			<Card className='card-profile'>
				<div className='card-image'>
					<h4 className='title'>Dylan Wyatt</h4>
					<UncontrolledDropdown>
						<DropdownToggle
							aria-expanded={false}
							caret
							className='btn-icon'
							color='link'
							data-toggle='dropdown'
							type='button'>
							<i className='tim-icons icon-settings-gear-63' />
						</DropdownToggle>
						<DropdownMenu right x-placement='bottom-end'>
							<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
								Edit Profile
							</DropdownItem>
							<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
								Settings
							</DropdownItem>
							<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
								Log out
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						<img
							alt='...'
							className='img img-raised rounded'
							src={require('assets/img/christian.jpg')}
						/>
					</a>
				</div>
				<CardBody>
					<hr className='line-primary' />
					<Table className='tablesorter' responsive>
						<tbody>
							<tr>
								<td className='text-left'>
									<i className='tim-icons icon-atom' /> Skills
								</td>
								<td className='text-right'>Leadership</td>
							</tr>
							<tr>
								<td className='text-left'>
									<i className='tim-icons icon-user-run' /> Hobbies
								</td>
								<td className='text-right'>Skiing, Chess</td>
							</tr>
							<tr>
								<td className='text-left'>
									<i className='tim-icons icon-chart-bar-32' /> Level
								</td>
								<td className='text-right'>• • • • •</td>
							</tr>
						</tbody>
					</Table>
				</CardBody>
			</Card>
		</div>
	)
}

export { CardIndex }
