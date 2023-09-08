import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
  blogPost: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const blogPost = ctx.params.slug;
    if (blogPost !== "ooo") {
      return ctx.renderNotFound({
        custom: "prop",
      });
    }
    return ctx.render({ blogPost });
  },
};

export default function BlogPostPage({ data }: PageProps<Data>) {
  return (
    <article>
      <h1>{data.blogPost}</h1>
    </article>
  );
}
