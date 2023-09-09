import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

interface Project {
  id: number;
  name: string;
  stars: number;
}

const db = {
  projects: {
    findOne: ({ id }: { id: string }): Project => {
      return {
        id: Number(id),
        name: "sample",
        stars: 129,
      };
    },
  },
};

export const handler: Handlers<Project> = {
  async GET(_req: Request, ctx: HandlerContext<Project>) {
    const project = await db.projects.findOne({ id: ctx.params.id });
    if (!project) {
      return new Response("project not found", { status: 404 });
    }
    return ctx.render(project);
  },
};

export default function ProjectPage({ data }: PageProps<Project>) {
  const { id, name, stars } = data;
  return (
    <div>
      <h1>{`${id}:${name}`}</h1>
      <p>{stars} stars</p>
    </div>
  );
}
