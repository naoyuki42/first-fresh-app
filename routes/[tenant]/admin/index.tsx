import { RouteContext } from "$fresh/server.ts";

export default async function TenantPage(_req: Request, ctx: RouteContext) {
  const paramTenantName = await ctx.params.tenant;
  const middlewareTenantName = await ctx.state.tenant;
  return (
    <div>
      <p>{paramTenantName} & {middlewareTenantName}</p>
    </div>
  );
}
