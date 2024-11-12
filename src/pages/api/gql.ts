import { makeExecutableSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'
import type { APIRoute } from 'astro'

import resolvers from '../../gql/resolvers'
import typeDefs from '../../gql/typeDefs'

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/gql',
  fetchAPI: { Request, Response }
})

export const POST: APIRoute = async (context) => {
  const { request } = context
  return handleRequest(request, context)
}
