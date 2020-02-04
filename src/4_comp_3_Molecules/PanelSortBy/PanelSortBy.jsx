import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Select from 'react-select'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Button } = stopUndefined(Exports)

const PanelSortBy = () => {
	const [selectGame, setSelectGame] = useState('')
	const [selectPrice, setSelectPrice] = useState('')
	return (
		<Row className='pt-4'>
			<Col md={{ size: 2 }}>
				<h5 className='text-capitalize py-3'>sort by</h5>
			</Col>
			<Col md={{ size: 10 }}>
				<Row className='d-flex flex-row justify-content-center align-items-baseline'>
					<Col md={{ size: 6 }}>
						<Button type='button' className='btn-simple mx-1' color='twitter'>
							Top sales{' '}
						</Button>
						<Button className='btn-simple mx-1' color='twitter' type='button'>
							Latest{' '}
						</Button>
					</Col>
					<Col md={{ size: 3 }}>
						<Select
							className='react-select react-select-primary mb-2'
							classNamePrefix='react-select'
							name='singleSelect'
							value={selectGame}
							onChange={value => setSelectGame(value)}
							options={[
								{
									value: '',
									label: 'Game',
									isDisabled: true,
								},
								{ value: '2', label: 'Dota 2' },
								{ value: '3', label: 'Fortnite' },
								{ value: '4', label: 'Apex Legends' },
							]}
							placeholder='Game'
						/>
					</Col>
					<Col md={{ size: 3 }}>
						<Select
							className='react-select react-select-primary mb-2'
							classNamePrefix='react-select'
							name='singleSelect'
							value={selectPrice}
							onChange={value => setSelectPrice(value)}
							options={[
								{
									value: '',
									label: 'Price',
									isDisabled: true,
								},
								{ value: '2', label: 'Highest to lowest' },
								{ value: '3', label: 'Lowest to highest' },
							]}
							placeholder='Price'
						/>
					</Col>
				</Row>
			</Col>
		</Row>
	)
}

export { PanelSortBy }
