import { auth } from 'firebaseInit'
import { simplerResponseHandling } from 'utils'
import { UNEXPECTED_ERROR_CODE_6 } from 'constantValues'

const provider = new auth.FacebookAuthProvider()

const handleSignInWithFacebook = () => {
	auth()
		.signInWithRedirect(provider)
		.catch(err => simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_6, err))
}

export default handleSignInWithFacebook
