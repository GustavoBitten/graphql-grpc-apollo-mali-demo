import listBooks from './listBooks'
import author from './author'
import peixe from './peixe'

const resolvers = {
  Query: {
    listBooks,
  },
  Books: {
    author,
    peixe
  }
}

export default resolvers