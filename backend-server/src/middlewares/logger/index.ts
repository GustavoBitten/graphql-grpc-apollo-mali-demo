import { Context } from 'mali'

export const logger = async (ctx: Context, next: any) => {
  await next()
  console.log(JSON.stringify(ctx.fullName));
  console.log(JSON.stringify(ctx.req))
  console.log(JSON.stringify(ctx.res,null,2))

 
}