import React from 'react'
import { Card, CardHeader, CardBody, Col } from 'reactstrap'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'
const { ButtonsSocialPropedStreams } = stopUndefined(ExportAtoms)

const AvatarProfile = props => {
	return (
		<Col className='ml-auto mr-auto' lg='4' md='6'>
			<Card className='card-coin card-plain'>
				<CardHeader>
					<img
						alt='...'
						className='img-center img-fluid rounded-circle'
						src={require('assets/img/mike.jpg')}
					/>
					<h3 className='title'>Mike Scheinder</h3>
					<p className='text-muted text-center'>@mighty_mike</p>
					{/*badges like female,verified,pro,highest rating,new member,highest rating*/}
					{/* Social icons */}
					<ButtonsSocialPropedStreams className='pt-2' />
				</CardHeader>
				<CardBody>
					{/* Signature */}
					<p className='pl-2'>
						A veteran in MOBA and FPS games, I can give you a significant boost
						in ranking mode.
					</p>
				</CardBody>
			</Card>
		</Col>
	)
}

export { AvatarProfile }
