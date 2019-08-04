import { API_SIGN_UP } from 'constantValues'

import { handleSignUpWithEmailAndPassword } from 'api'

const Mutation = {
	[API_SIGN_UP]: handleSignUpWithEmailAndPassword,
}

export default Mutation
