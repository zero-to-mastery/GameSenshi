import { auth } from 'firebaseInit'
import { simplerResponseHandling } from 'utils'
import { UNEXPECTED_ERROR_CODE_7 } from 'constantValues'

const provider = new auth.GoogleAuthProvider()

const handleSignInWithGoogle = () => {
	auth()
		.signInWithRedirect(provider)
		.catch(err => simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_7, err))
}

export default handleSignInWithGoogle
