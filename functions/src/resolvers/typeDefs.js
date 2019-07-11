import { gql } from 'apollo-server-express'
import {
	SIGN_UP,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	SIGN_UP_USERNAME,
	STATUS,
	CODE,
	MESSAGE,
	DATA,
} from 'constantValues'

const typeDefs = gql`
  type Query {
    test: String
  }

	type Mutation {
		${SIGN_UP}(${DATA}: signUpInput!): SignUpRespond!
  }
  
  input signUpInput{
    ${SIGN_UP_USERNAME}:String!
    ${SIGN_UP_EMAIL}:String!
    ${SIGN_UP_PASSWORD}:String!
  }

  interface Respond{
    ${STATUS}:Boolean!
    ${CODE}: String!
    ${MESSAGE}: String!
  }

  type SignUpData {
    ${SIGN_UP_USERNAME}:[String]
    ${SIGN_UP_EMAIL}:[String]
    ${SIGN_UP_PASSWORD}:[String]
  }

  type SignUpRespond implements Respond{
    ${STATUS}:Boolean!
    ${CODE}: String!
    ${MESSAGE}: String!
    ${DATA}: SignUpData!
  }
`

export default typeDefs
