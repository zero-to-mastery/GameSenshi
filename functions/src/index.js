// https://firebase.google.com/docs/functions/write-firebase-functions
import '@babel/polyfill' // https://stackoverflow.com/questions/49253746/error-regeneratorruntime-is-not-defined-with-babel-7
import { functions, env } from 'firebaseInit'
import { ApolloServer, gql } from 'apollo-server-express'
import { MemcachedCache } from 'apollo-server-cache-memcached'
import express from 'express'
import {
	ENDPOINT,
	ENABLE_PLAYGROUND,
	APOLLO_ENGINE_API_KEY,
} from 'constantValues'

import { typeDefs, resolvers } from 'resolvers'

const app = express()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	//https://github.com/apollographql/apollo-server/issues/1112
	introspection: env[ENABLE_PLAYGROUND],
	playground: env[ENABLE_PLAYGROUND],
	persistedQueries: {
		//https://www.apollographql.com/docs/apollo-server/whats-new/#automatic-persisted-queries
		cache: new MemcachedCache(
			['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
			{ retries: 10, retry: 10000 } // Options
		),
	},
	engine: {
		//https://www.apollographql.com/docs/apollo-server/whats-new/#performance-monitoring
		apiKey: env[APOLLO_ENGINE_API_KEY],
	},
	onHealthCheck: () =>
		new Promise((resolve, reject) => {
			//https://www.apollographql.com/docs/apollo-server/whats-new/#health-checks
		}),
})

server.applyMiddleware({ app, path: '/', cors: true })

// unable to use property accessor in es6 non default export, revert to es5 exports statement
exports[ENDPOINT] = functions.https.onRequest(app)
