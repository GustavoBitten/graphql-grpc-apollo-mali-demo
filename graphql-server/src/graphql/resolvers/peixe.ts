export default async (root: any, params: any) => {
  console.log("Começo de requisição para o GRPC");
  console.log("params",params);
  console.log("root",root);
  const result = "Auto preenchido"
  console.log("Fim de requisição para o GRPC");
  console.log(result);
  
  return result
}