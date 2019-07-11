import React from 'react'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		// You can also log the error to an error reporting service
		//logErrorToMyService(error, info)
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <small className='text-muted'>Something went wrong.</small>
		}

		return this.props.children
	}
}

export default ErrorBoundary
