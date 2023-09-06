import { RouteContext } from "$fresh/server.ts";

const loadFooValue = () => {
  return "redirect";
};

export default async function MyPage(_req: Request, ctx: RouteContext) {
  const value = await loadFooValue();

  if (value === null) {
    return ctx.renderNotFound();
  }

  if (value === "redirect") {
    const headers = new Headers();
    headers.set("location", "/some-other-page");
    return new Response(null, {
      status: 302,
      headers,
    });
  }

  return <p>foo is: {value}</p>;
}
