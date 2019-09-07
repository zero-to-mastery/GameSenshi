import React, { useCallback, useRef } from 'react'
import { stopUndefined } from 'utils'
import Select from 'react-select'
import ReactDatetime from 'react-datetime'
import { storeUser } from 'state'
// reactstrap components
import { FormGroup, Row, Col, Form } from 'reactstrap'

import { ExportCompounds } from 'componentnCompounds'
const {
	FinalForm,
	ButtonSubmit,
	FinalTextUsernamePropedGeneraL,
	FINAL_TEXT_USERNAME,
	FinalSelectCountryPropedGeneraL,
	FINAL_SELECT_COUNTRY,
	FinalSelectGenderPropedGeneraL,
	FINAL_SELECT_GENDER,
	LabelFormSimple,
} = stopUndefined(ExportCompounds)

const languageOptions = [
	{ value: '1', label: 'English', color: '#00B8D9' },
	{ value: '2', label: 'French', color: '#0052CC' },
	{ value: '3', label: 'Spanish', color: '#5243AA' },
	{ value: '4', label: 'Deutsche', color: '#FF5630' },
	{ value: '5', label: 'Russian', color: '#FF8B00' },
]

const LANGUAGES = 'languages_'

const TabPaneGeneralSettings = props => {
	const submitButton = useRef(null)

	const {
		uid,
		username,
		gender,
		country,
		languages,
		onSubmit,
		onSuccessfulSubmission,
	} = props

	const languages_ = languages || []

	return (
		<FinalForm
			initialValues={{
				[FINAL_TEXT_USERNAME]: '',
				[FINAL_SELECT_GENDER]: '',
				[FINAL_SELECT_COUNTRY]: '',
			}}
			onSubmit={onSubmit}
			onSuccessfulSubmission={onSuccessfulSubmission}>
			{({ handleSubmit, submitting, submitError, form }) => {
				const formReset = useCallback(() => {
					form.reset()
				}, [])
				return (
					<Form className='form'>
						<div>
							<header>
								<h2 className='text-uppercase'>General information</h2>
							</header>
							<hr className='line-info' />
							<br />
							<LabelFormSimple htmlFor='uid' label='UID'>
								{uid}
							</LabelFormSimple>
							<FinalTextUsernamePropedGeneraL
								value={username}
								submitRef={submitButton}
								onBlur={formReset}
							/>
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
							<FinalSelectGenderPropedGeneraL
								value={gender}
								submitRef={submitButton}
								onBlur={formReset}
							/>
							<FinalSelectCountryPropedGeneraL
								value={country}
								submitRef={submitButton}
								onBlur={formReset}
							/>
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
											value={languages_.reduce((acc, language) => {
												const found = languageOptions.find(
													languageObj => languageObj.label === language
												)
												acc.push(found)
												return acc
											}, [])}
											onChange={languages_ =>
												storeUser.setState(state => {
													state[LANGUAGES] = languages_.map(
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
									{submitError && !submitting && `Error: ${submitError}`}
									<ButtonSubmit
										color='info'
										type='button'
										submitRef={submitButton}
										disabled={submitting}
										onClick={handleSubmit}>
										{submitting ? 'Saving Changes' : 'Save Changes'}
									</ButtonSubmit>
								</Col>
							</Row>
						</div>
					</Form>
				)
			}}
		</FinalForm>
	)
}

export { TabPaneGeneralSettings }
