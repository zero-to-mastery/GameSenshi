//import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import ApolloClient from 'apollo-client'
import localForage from 'localforage'

// need extra setting on apollo-server-express side in order for persistent query to work
// const link = createPersistedQueryLink().concat(
// 	createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })
// )

const link = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })

const cache = new InMemoryCache()

const initApollo = async () => {
	await persistCache({
		cache,
		storage: localForage,
	})

	const client = new ApolloClient({
		cache,
		link,
	})

	return client
}

const tempClient = new ApolloClient({
	cache,
	link,
})

export { tempClient, initApollo }
