import React from 'react'
import { Card, CardBody, Table, Col } from 'reactstrap'
import styles from './styles.module.css'
import classnames from 'classnames'
import Image from 'material-ui-image'

const CardProfile = props => {
	const { name, src, skills, hobbies } = props
	return (
		<Col sm='6' md='3'>
			<Card className='card-profile mt-0'>
				<div className={classnames('card-image', styles.clear)}>
					<Image
						alt={name}
						className='img img-raised rounded'
						color='transparent' //this is needed or else there is tiny white background even when OTHER image in carousel move, very weird behavior
						src={src}
					/>
					<h4 className='title'>{name}</h4>
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
									<i className='tim-icons icon-user-run' /> Hobbies
								</td>
								<td className='text-right'>{hobbies}</td>
							</tr>
						</tbody>
					</Table>
				</CardBody>
			</Card>
		</Col>
	)
}

export { CardProfile }
