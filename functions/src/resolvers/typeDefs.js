import { gql } from 'apollo-server-express'
import {
	SIGN_UP,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	SIGN_UP_USERNAME,
	STATUS,
	CODE,
	MESSAGE,
} from 'constantValues'

const typeDefs = gql`
	type Mutation {
		${SIGN_UP}(data: signUpInput!): Respond!
  }
  
  input signUpInput{
    ${SIGN_UP_USERNAME}:String!
    ${SIGN_UP_EMAIL}:String!
    ${SIGN_UP_PASSWORD}:String!
  }

  type Respond{
    ${STATUS}:Boolean!
    ${CODE}: String!
    ${MESSAGE}: String!
  }
`

export default typeDefs
