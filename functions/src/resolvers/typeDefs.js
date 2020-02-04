import { gql } from 'apollo-server-express'
import {
	FUNCTION_SIGN_IN,
	FUNCTION_EMAIL,
	FUNCTION_PASSWORD,
	FUNCTION_DISPLAY_NAME,
	FUNCTION_INPUT,
	FUNCTION_CODE,
	FUNCTION_DATA,
	FUNCTION_STATUS,
	FUNCTION_MESSAGE,
} from '0_constantValues'

const typeDefs = gql`
  type Query {
    test: String
  }

	type Mutation {
		${FUNCTION_SIGN_IN}(${FUNCTION_DATA}: ${FUNCTION_INPUT}!): SignUpRespond!
  }
  
  input ${FUNCTION_INPUT}{
    ${FUNCTION_DISPLAY_NAME}:String!
    ${FUNCTION_EMAIL}:String!
    ${FUNCTION_PASSWORD}:String!
  }

  interface Respond{
    ${FUNCTION_STATUS}:Boolean!
    ${FUNCTION_CODE}: String!
    ${FUNCTION_MESSAGE}: String!
  }

  type SignUpData {
    ${FUNCTION_DISPLAY_NAME}:[String]
    ${FUNCTION_EMAIL}:[String]
    ${FUNCTION_PASSWORD}:[String]
  }

  type SignUpRespond implements Respond{
    ${FUNCTION_STATUS}:Boolean!
    ${FUNCTION_CODE}: String!
    ${FUNCTION_MESSAGE}: String!
    ${FUNCTION_DATA}: SignUpData!
  }
`

export { typeDefs }
