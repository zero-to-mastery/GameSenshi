import React, { useEffect, useRef } from 'react'

// state management
import { signUp } from 'state'

const ErrorTexts = ({ name, errorList, meta: { touched }, meta }) => {
	const ref = useRef(null)

	useEffect(() => {
		console.log('ref height', (ref.current && ref.current.clientHeight) || 0)
		signUp.setState(state => ({
			...state,
			[name + 'ExtraHeight']: ref.current.clientHeight,
		}))
	}, [(ref.current && ref.current.clientHeight) || 0])

	return <div ref={ref}>{touched && errorList}</div>
}

export default ErrorTexts
