import React from 'react'
import { FinalEmail } from 'componentnCompounds/FinalEmail/FinalEmail'
// api
import { handleIsEmailNotExist } from 'api'
// validation
import { signUpEmailValidation } from 'utils'

const FinalEmailPropedSignUp = props => {
	return (
		<FinalEmail
			validation={signUpEmailValidation}
			serverValidation={handleIsEmailNotExist}
			{...props}
		/>
	)
}

export { FinalEmailPropedSignUp }
