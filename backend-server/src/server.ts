// A minimalistic gRPC microservice framework.
// https://www.npmjs.com/package/mali
import Mali from 'mali'
import path from 'path'

// Serviços que serão expostos
import getBooks from './services/getBooks'
import getAuthors from './services/getAuthors'

// apenas para logar
import { logger } from './middlewares'

// caminho para os protos que estão separados
const PROTO_PATH = path.resolve(__dirname, '../../', 'protos/books.proto')

// criação do serviço
const main = () => {

  // para instanciar o server devemos passar os protos
  const app = new Mali(PROTO_PATH)

  // acionando os serviços e log
  app.use(logger)
  app.use({ getBooks, getAuthors })

  // Start!!!!!
  app.start('0.0.0.0:50051')
  console.log("🚀 server GRPC online");
  
}

main()