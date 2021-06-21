import { ApolloServer } from 'apollo-server'

import { schema } from './graphql'


// criação do Apollo
const app = new ApolloServer({
  schema,
  formatError: error => {
    console.log(error)
    return error
  },
})
//Execução do Apollo
app.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})