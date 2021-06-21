import { listBooksClient } from '../services'

interface Author {
  id: number
  name: string
  age: number
}

export default async (root: any, params: any) => {
  console.log("Começo de requisição para o GRPC");
  console.log("params",params);
  console.log("root",root);
  const result = await listBooksClient.getAuthors().sendMessage()
  console.log("Fim de requisição para o GRPC");
  console.log(result);
  
  return result.authors.find((author: Author) => author.id === root.authorId)
}