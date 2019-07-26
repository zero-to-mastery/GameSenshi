import React, { useState, useEffect } from 'react'
// Apollo
import { tempClient, initApollo } from 'apolloInit'
import { ApolloProvider } from 'react-apollo'
// routing
import { Router } from 'routes'
// state management
import { Provider } from 'state'
//modal
import { FormSignInPropedDefaultStoreSignIn } from 'componentOrganisms'
import { ModalAuthStoreAuthModal } from 'componentMolecules'

const App = props => {
	const [apolloClient, setApolloClient] = useState(tempClient)

	useEffect(() => {
		const initApolloClient = async () => {
			const apolloClient = await initApollo()
			setApolloClient(apolloClient)
		}
		initApolloClient()
	}, [])

	return (
		<ApolloProvider client={apolloClient}>
			<Provider>
				<Router>
					<FormSignInPropedDefaultStoreSignIn modal passwordOnly />
					<ModalAuthStoreAuthModal />
				</Router>
			</Provider>
		</ApolloProvider>
	)
}

export default App
