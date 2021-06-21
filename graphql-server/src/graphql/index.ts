import { makeExecutableSchema } from 'apollo-server-express'
import * as path from 'path'
import * as fs from 'fs'

import resolvers from './resolvers'

const schemaPublic = fs.readFileSync(path.resolve(__dirname, './schema/book.graphql')).toString('utf8')


// os dois principais componentes para o GraphQl
export const schema = makeExecutableSchema({
  // Funções que irão executar as as requisições
  resolvers,
  // Definição dos tipos e funções ()
  typeDefs: [schemaPublic],
})