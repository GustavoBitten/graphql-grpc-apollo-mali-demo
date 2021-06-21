import { listBooksClient } from '../services'

interface Params {
  title: string
}

interface Book {
  id: number
  title: string
  price: number
  categories: string[]
  authorId: number
}

export default async (root: any, params: Params) => {
  console.log("Começo de requisição para o GRPC");
  console.log(params);
  console.log(root);
  
  const result = await listBooksClient.getBooks().sendMessage()
  if(params.title) {
    return result.books.filter((book: Book) => book.title.includes(params.title))
  }
  console.log("Fim de requisição para o GRPC");
  console.log(result);
  
  return result.books
}