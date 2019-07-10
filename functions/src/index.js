// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
import { functions, env } from 'firebaseInit'
import '@babel/polyfill' // https://stackoverflow.com/questions/49253746/error-regeneratorruntime-is-not-defined-with-babel-7
import { ENDPOINT, PLAYGROUND } from 'constantValues'
import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
	{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
	},
	{
		title: 'Jurassic Park',
		author: 'Michael Crichton',
	},
]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
	# Comments in GraphQL are defined with the hash (#) symbol.

	# This "Book" type can be used in other type declarations.
	type Book {
		title: String
		author: String
	}

	# The "Query" type is the root of all GraphQL queries.
	# (A "Mutation" type will be covered later on.)
	type Query {
		books: [Book]
	}
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
	Query: {
		books: () => books,
	},
}

const app = express()

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
	typeDefs,
	resolvers,
	//https://github.com/apollographql/apollo-server/issues/1112
	introspection: env[PLAYGROUND],
	playground: env[PLAYGROUND],
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.applyMiddleware({ app, path: '/', cors: true })

// unable to use property accessor in es6 non default export, revert to es5 exports statement
exports[ENDPOINT] = functions.https.onRequest(app)
