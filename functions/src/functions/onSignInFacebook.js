import { getCustomToken } from 'functions/getCustomToken'
import { FUNCTION_EMAIL } from 'constantValues'

const onSignInFacebook = async data => {
	const { [FUNCTION_EMAIL]: email } = data
	return getCustomToken('', '', email)
}

export { onSignInFacebook }
