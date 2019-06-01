import React from 'react'

// core components
import { IndexHeader, Footer, IndexNavbar } from 'components'

class Index extends React.Component {
	componentDidMount() {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
	}
	componentWillUnmount() {
		document.body.classList.remove('index-page')
	}
	render() {
		return (
			<>
				<IndexNavbar />
				<div className='wrapper' ref='wrapper'>
					<IndexHeader />
					<div className='main'>{/* include stuff here in future */}</div>
					<Footer />
				</div>
			</>
		)
	}
}

export default Index
