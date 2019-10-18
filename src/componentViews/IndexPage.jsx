import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// core components
import { Exports } from 'componentpMultiOrganisms'

const { Footer, IndexHeader } = stopUndefined(Exports)

const IndexPage = props => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		return () => {
			document.body.classList.remove('index-page')
		}
	}, [])

	return (
		<div className='wrapper' ref={wrapper}>
			<IndexHeader />
			<div className='main'>{/* include stuff here in future */}</div>
			<Footer />
		</div>
	)
}

export { IndexPage }
