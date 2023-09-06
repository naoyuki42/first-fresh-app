import { defineRoute } from "$fresh/src/server/defines.ts";

const loadData = () => {
  return { name: "nao!" };
};

export default defineRoute(async (_req, _ctx) => {
  const { name } = await loadData();

  return (
    <div class="page">
      <h1>Hello {name}</h1>
    </div>
  );
});
