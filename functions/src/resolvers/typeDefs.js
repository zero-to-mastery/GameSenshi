import { gql } from 'apollo-server-express'
import {
	FUNCTION_SIGN_UP,
	FUNCTION_SIGN_UP_EMAIL,
	FUNCTION_SIGN_UP_PASSWORD,
	FUNCTION_SIGN_UP_DISPLAY_NAME,
	FUNCTION_SIGN_UP_INPUT,
	FUNCTION_CODE,
	FUNCTION_DATA,
	FUNCTION_STATUS,
	FUNCTION_MESSAGE,
} from 'constantValues'

const typeDefs = gql`
  type Query {
    test: String
  }

	type Mutation {
		${FUNCTION_SIGN_UP}(${FUNCTION_DATA}: ${FUNCTION_SIGN_UP_INPUT}!): SignUpRespond!
  }
  
  input ${FUNCTION_SIGN_UP_INPUT}{
    ${FUNCTION_SIGN_UP_DISPLAY_NAME}:String!
    ${FUNCTION_SIGN_UP_EMAIL}:String!
    ${FUNCTION_SIGN_UP_PASSWORD}:String!
  }

  interface Respond{
    ${FUNCTION_STATUS}:Boolean!
    ${FUNCTION_CODE}: String!
    ${FUNCTION_MESSAGE}: String!
  }

  type SignUpData {
    ${FUNCTION_SIGN_UP_DISPLAY_NAME}:[String]
    ${FUNCTION_SIGN_UP_EMAIL}:[String]
    ${FUNCTION_SIGN_UP_PASSWORD}:[String]
  }

  type SignUpRespond implements Respond{
    ${FUNCTION_STATUS}:Boolean!
    ${FUNCTION_CODE}: String!
    ${FUNCTION_MESSAGE}: String!
    ${FUNCTION_DATA}: SignUpData!
  }
`

export { typeDefs }
