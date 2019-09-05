import React from 'react'
import { stopUndefined } from 'utils'
import Select from 'react-select'
import ReactDatetime from 'react-datetime'
import { userStore } from 'state'
// reactstrap components
import { FormGroup, Row, Col, Form } from 'reactstrap'

import { ExportCompounds } from 'componentnCompounds'
const {
	FinalForm,
	ButtonSubmit,
	FinalTextUsernamePropedSetting,
	FINAL_TEXT_USERNAME,
	FinalSelectCountry,
	FINAL_SELECT_COUNTRY,
	FinalSelectGender,
	FINAL_SELECT_GENDER,
} = stopUndefined(ExportCompounds)

const languageOptions = [
	{ value: '1', label: 'English', color: '#00B8D9' },
	{ value: '2', label: 'French', color: '#0052CC' },
	{ value: '3', label: 'Spanish', color: '#5243AA' },
	{ value: '4', label: 'Deutsche', color: '#FF5630' },
	{ value: '5', label: 'Russian', color: '#FF8B00' },
]

const USERNAME = 'username'
const LANGUAGES = 'languages'

const TabPaneGeneralSettings = props => {
	const { uid, gender, country, languages } = props

	return (
		<FinalForm
			initialValues={{
				[USERNAME]: '',
			}}
			onSubmit={values => {
				//
			}}>
			{({ handleSubmit, submitting, submitError, form }) => (
				<Form className='form'>
					<div>
						<header>
							<h2 className='text-uppercase'>General information</h2>
						</header>
						<hr className='line-info' />
						<br />
						<Row>
							<Col className='align-self-center' md='3'>
								<label className='labels' htmlFor='uid'>
									UID
								</label>
							</Col>
							<Col className='align-self-center' md='9'>
								<FormGroup>
									<label className='labels' id='uid' name='uid'>
										{uid}
									</label>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='align-self-center' md='3'>
								<label className='labels' htmlFor={FINAL_TEXT_USERNAME}>
									Name
								</label>
							</Col>
							<Col
								className='align-self-center'
								md='9'
								style={{ marginBottom: 10 }}>
								<FinalTextUsernamePropedSetting />
							</Col>
						</Row>
						<Row>
							<Col className='align-self-center' md='3'>
								<label className='labels' htmlFor={FINAL_SELECT_GENDER}>
									I’m
								</label>
							</Col>
							<Col className='align-self-center' md='4'>
								<FormGroup>
									<FinalSelectGender value={gender} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='align-self-center' md='3'>
								<label className='labels' htmlFor='birthDate'>
									Birth Date
								</label>
							</Col>
							<Col className='align-self-center' md='4'>
								<FormGroup>
									<ReactDatetime
										id='birthDate'
										name='birthDate'
										inputProps={{
											className: 'form-control',
											placeholder: 'BirthDate',
										}}
										timeFormat={false}
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='align-self-center' md='3'>
								<label className='labels' htmlFor={FINAL_SELECT_COUNTRY}>
									Country
								</label>
							</Col>
							<Col className='align-self-center' md='4'>
								<FinalSelectCountry value={country} />
							</Col>
						</Row>
						<Row>
							<Col className='align-self-center' md='3'>
								<label className='labels'>Language</label>
							</Col>
							<Col className='align-self-center' md='9'>
								<FormGroup>
									<Select
										isMulti
										className='react-select react-select-info'
										classNamePrefix='react-select'
										placeholder='Languages'
										value={languages.reduce((acc, language) => {
											const found = languageOptions.find(
												languageObj => languageObj.label === language
											)
											acc.push(found)
											return acc
										}, [])}
										onChange={languages =>
											userStore.setState(state => {
												state[LANGUAGES] = languages.map(
													language => language.label
												)
												return state
											})
										}
										options={languageOptions}
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row className='mt-4'>
							<Col md='6'>
								<ButtonSubmit color='info' type='button'>
									Save Changes
								</ButtonSubmit>
							</Col>
						</Row>
					</div>
				</Form>
			)}
		</FinalForm>
	)
}

export { TabPaneGeneralSettings }
