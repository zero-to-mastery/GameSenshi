import React, { useCallback, useRef } from 'react'
import { stopUndefined } from 'utils'
import ReactDatetime from 'react-datetime'
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
	FinalSelectLanguagesPropedGeneraL,
	FINAL_SELECT_LANGUAGES,
} = stopUndefined(ExportCompounds)

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

	return (
		<FinalForm
			initialValues={{
				[FINAL_TEXT_USERNAME]: '',
				[FINAL_SELECT_GENDER]: '',
				[FINAL_SELECT_COUNTRY]: '',
				[FINAL_SELECT_LANGUAGES]: '',
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
							<FinalSelectLanguagesPropedGeneraL
								value={languages}
								submitRef={submitButton}
								onBlur={formReset}
							/>
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
