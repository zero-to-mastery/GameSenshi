import React, { useRef, useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container } from 'reactstrap'

const { ContainerSearchResultsPropedDefault } = stopUndefined(Exports)

const SearchedPage = () => {
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
			<div className='main'>
				<Container className='py-5' style={{ marginTop: 100 }}>
					<ContainerSearchResultsPropedDefault />
				</Container>
			</div>
		</div>
	)
}

export { SearchedPage }
