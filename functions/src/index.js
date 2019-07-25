// https://firebase.google.com/docs/functions/write-firebase-functions
import '@babel/polyfill' // https://stackoverflow.com/questions/49253746/error-regeneratorruntime-is-not-defined-with-babel-7

import {
	functions,
	corsWhitelist,
	playgroundEnabled,
	apolloEngineApiKey,
} from 'firebaseInit'

import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { MemcachedCache } from 'apollo-server-cache-memcached'
import express from 'express'

import { typeDefs, resolvers } from 'resolvers'

const app = express()

app.use(
	cors({
		origin: corsWhitelist.split(','),
		credentials: true,
	})
)

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: playgroundEnabled, //https://github.com/apollographql/apollo-server/issues/1112
	playground: playgroundEnabled,
	persistedQueries: {
		//https://www.apollographql.com/docs/apollo-server/whats-new/#automatic-persisted-queries
		cache: new MemcachedCache(
			['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
			{ retries: 10, retry: 10000 } // Options
		),
	},
	engine: {
		//https://www.apollographql.com/docs/apollo-server/whats-new/#performance-monitoring
		apiKey: apolloEngineApiKey,
	},
	onHealthCheck: () =>
		//https://www.apollographql.com/docs/apollo-server/whats-new/#health-checks
		new Promise((resolve, reject) => {}),
})

server.applyMiddleware({
	app,
	path: '/',
})

// unable to use property accessor in es6 non default export, revert to es5 exports statement
exports['endpoint'] = functions.https.onRequest(app)
