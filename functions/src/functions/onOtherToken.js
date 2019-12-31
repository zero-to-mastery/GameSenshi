import { getCustomToken } from 'functions/getCustomToken'
import { FUNCTION_EMAIL } from 'constantValues'

const onOtherToken = async data => {
	const { [FUNCTION_EMAIL]: email } = data
	return getCustomToken('', '', email)
}

export { onOtherToken }
