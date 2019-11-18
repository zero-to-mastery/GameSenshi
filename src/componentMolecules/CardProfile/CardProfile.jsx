import React from 'react'
// reactstrap components
import { Card, CardBody, Table } from 'reactstrap'
import './CardProfile.styles.scss'

const CardProfile = props => {
	const { name, src, skills, level } = props
	return (
		<Card className='card-profile'>
			<div className='card-image'>
				<h4 className='title-overwritten'>{name}</h4>
				<img alt='...' className='img img-raised rounded' src={src} />
			</div>
			<CardBody>
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
