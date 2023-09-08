import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(_req: Request, ctx: MiddlewareHandlerContext) {
  const currentTenant = ctx.params.tenant;
  ctx.state.tenant = `your tenant name is ${currentTenant}`;
  const resp = await ctx.next();
  return resp;
}
