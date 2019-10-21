import React, { useEffect, useRef } from 'react'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components
import { Exports } from 'componentpMultiOrganisms'

const { Footer } = stopUndefined(Exports)

const PrivacyPolicy = props => {
	const wrapper = useRef(null)

	useEffect(() => {
		// document.body.classList.add('index-page')
		// document.documentElement.scrollTop = 0
		// document.scrollingElement.scrollTop = 0
		// wrapper.current.scrollTop = 0
		// return () => {
		// 	document.body.classList.remove('index-page')
		// }
	}, [])

	return <div>hello</div>
}

export { PrivacyPolicy }
