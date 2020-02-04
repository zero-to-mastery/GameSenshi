import React, { useState, useEffect } from 'react'
import { tempClient, initApollo, setClient } from '0_apolloInit'
import { ApolloProvider } from 'react-apollo'
import { Router } from 'component_g_Pages/Router'
import {
	Provider,
	Subscribe,
	storeUser,
	STORE_USER_STATE_SIGNED_IN,
	STATE,
	STORE_USER_STATE_SIGNING_IN,
} from '2_state'

const App = () => {
	const [apolloClient, setApolloClient] = useState(tempClient)

	useEffect(() => {
		const initApolloClient = async () => {
			const apolloClient = await initApollo()
			setApolloClient(apolloClient)
			setClient(apolloClient)
		}
		initApolloClient()
	}, [])

	return (
		<ApolloProvider client={apolloClient}>
			<Provider>
				<Subscribe to={[storeUser]}>
					{storeUser => {
						const {
							[STATE]: {
								[STORE_USER_STATE_SIGNED_IN]: isUserSignedIn,
								[STORE_USER_STATE_SIGNING_IN]: isUserSigningIn,
							},
						} = storeUser
						return <Router isUserSignedIn={isUserSignedIn || isUserSigningIn} />
					}}
				</Subscribe>
			</Provider>
		</ApolloProvider>
	)
}

export default App
