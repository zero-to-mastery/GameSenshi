import { useState } from 'react'

const SignUpHook = (initialState = { maxHeight: undefined }) => {
	let [state, setState] = useState(initialState)
	return { state, setState }
}

export default SignUpHook
