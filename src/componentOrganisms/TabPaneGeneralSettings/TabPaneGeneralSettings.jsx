import React, { useCallback, useRef } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Row, Col, Form } from 'reactstrap'

import { ExportCompounds } from 'componentnCompounds'
const {
	FinalForm,
	ButtonSubmit,
	FinalTextNamePropedGeneraL,
	FINAL_TEXT_NAME,
	FinalSelectCountryPropedGeneraL,
	FINAL_SELECT_COUNTRY,
	FinalSelectGenderPropedGeneraL,
	FINAL_SELECT_GENDER,
	LabelFormSimple,
	FinalSelectLanguagesPropedGeneraL,
	FINAL_SELECT_LANGUAGES,
	FinalDateBirthDatePropedGeneraL,
	FINAL_DATE_BIRTH_DATE,
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
		BirthDate,
		onSuccessfulSubmission,
	} = props

	return (
		<FinalForm
			initialValues={{
				[FINAL_TEXT_NAME]: '',
				[FINAL_SELECT_GENDER]: '',
				[FINAL_SELECT_COUNTRY]: '',
				[FINAL_SELECT_LANGUAGES]: '',
				[FINAL_DATE_BIRTH_DATE]: '',
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
							<FinalTextNamePropedGeneraL
								value={username}
								submitRef={submitButton}
								onBlur={formReset}
							/>
							<FinalDateBirthDatePropedGeneraL
								value={BirthDate}
								submitRef={submitButton}
								onBlur={formReset}
							/>
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
