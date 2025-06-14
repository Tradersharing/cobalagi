
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const target = url.searchParams.get("url");

    if (!target) {
      return new Response("No URL provided!", { status: 400 });
    }

    const resp = await fetch(target);
    const data = await resp.text();

    return new Response(data, {
      headers: { "Content-Type": "application/json" },
    });
  },
};
