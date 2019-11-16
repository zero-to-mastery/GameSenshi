import React from 'react'
// reactstrap components
import {
	Card,
	CardBody,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	Table,
} from 'reactstrap'

const CardProfile = props => {
	const { name, src, skills, hobbies, level } = props
	return (
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
						<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
							See full profile
						</DropdownItem>
						<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
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
	)
}

export { CardProfile }
