import { RouteContext } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

const loadFooValue = () => {
  return "a";
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

  return (
    <div>
      <p>foo is: {value}</p>
      <p>
        <a href={asset("/brochure.pdf")}>View brochure</a>
      </p>
    </div>
  );
}
