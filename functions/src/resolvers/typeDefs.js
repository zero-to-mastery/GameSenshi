import { gql } from 'apollo-server-express'
import {
	API_SIGN_UP,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_USERNAME,
	API_SIGN_UP_INPUT,
	API_CODE,
	API_DATA,
	API_STATUS,
	API_MESSAGE,
} from 'constantValues'

const typeDefs = gql`
  type Query {
    test: String
  }

	type Mutation {
		${API_SIGN_UP}(${API_DATA}: ${API_SIGN_UP_INPUT}!): SignUpRespond!
  }
  
  input ${API_SIGN_UP_INPUT}{
    ${API_SIGN_UP_USERNAME}:String!
    ${API_SIGN_UP_EMAIL}:String!
    ${API_SIGN_UP_PASSWORD}:String!
  }

  interface Respond{
    ${API_STATUS}:Boolean!
    ${API_CODE}: String!
    ${API_MESSAGE}: String!
  }

  type SignUpData {
    ${API_SIGN_UP_USERNAME}:[String]
    ${API_SIGN_UP_EMAIL}:[String]
    ${API_SIGN_UP_PASSWORD}:[String]
  }

  type SignUpRespond implements Respond{
    ${API_STATUS}:Boolean!
    ${API_CODE}: String!
    ${API_MESSAGE}: String!
    ${API_DATA}: SignUpData!
  }
`

export default typeDefs
