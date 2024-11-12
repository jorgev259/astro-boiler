import { mergeTypeDefs } from '@graphql-tools/merge'

const typeDefs = mergeTypeDefs([
  `
    type User {
  id: ID!
  email: String!
  name: String
}

type Query {
  users: [User]
}
 
    `
])

export default typeDefs
