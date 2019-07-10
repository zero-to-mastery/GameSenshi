import { SIGN_UP } from 'constantValues'

import { handleSignUpWithEmailAndPassword } from 'api'

const Mutation = {
	[SIGN_UP]: handleSignUpWithEmailAndPassword,
}
