// https://firebase.google.com/docs/functions/write-firebase-functions
import '@babel/polyfill' // https://stackoverflow.com/questions/49253746/error-regeneratorruntime-is-not-defined-with-babel-7
import {
	functions,
	CORS_WHITE_LIST,
	PLAYGROUND_ENABLED,
	APOLLO_ENGINE_API_KEY,
} from '1_fire_init'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { MemcachedCache } from 'apollo-server-cache-memcached'
import express from 'express'
import { typeDefs, resolvers } from 'resolvers'
import { FUNCTION_ON_TWITCH_SIGN_IN, FUNCTION_ON_DATA_SEED } from '0_constants'
import {
	onTwitchSignIn,
	onUserCreate,
	onDocCreate,
	onDocSubCreate,
	onBillingAlert,
	onDocUpdate,
	onDocSubUpdate,
	onSellerSeed,
	onCommentCreate,
} from '3_fire_funct'

const app = express()

app.use(
	cors({
		origin: CORS_WHITE_LIST.split(','),
		credentials: true,
	})
)

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: PLAYGROUND_ENABLED, //https://github.com/apollographql/apollo-server/issues/1112
	playground: PLAYGROUND_ENABLED === 'true',
	persistedQueries: {
		//https://www.apollographql.com/docs/apollo-server/whats-new/#automatic-persisted-queries
		cache: new MemcachedCache(
			['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
			{ retries: 10, retry: 10000 } // Options
		),
	},
	engine: {
		//https://www.apollographql.com/docs/apollo-server/whats-new/#performance-monitoring
		apiKey: APOLLO_ENGINE_API_KEY,
	},
	onHealthCheck: () =>
		//https://www.apollographql.com/docs/apollo-server/whats-new/#health-checks
		new Promise(resolve => {
			resolve()
		}),
})

server.applyMiddleware({
	app,
	path: '/',
})

// unable to use property accessor in es6 non export, revert to es5 exports statement
// es5 export also have cleaner name
module.exports = {
	api: functions.https.onRequest(app),
	onUserCreate,
	onDocCreate,
	onDocSubCreate,
	[FUNCTION_ON_TWITCH_SIGN_IN]: onTwitchSignIn,
	onBillingAlert,
	onDocUpdate,
	onDocSubUpdate,
	[FUNCTION_ON_DATA_SEED]: onSellerSeed,
	onCommentCreate,
}
