export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const endpoint = url.searchParams.get("endpoint");

    if (!endpoint) {
      return new Response("Missing endpoint parameter", { status: 400 });
    }

    const apiUrl = `https://www.myfxbook.com${endpoint}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.text();
      return new Response(data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",         // 🔥 Fix CORS disini bro!
          "Access-Control-Allow-Methods": "GET, OPTIONS",
        },
      });
    } catch (err) {
      return new Response("Error: " + err.message, { status: 500 });
    }
  }
}
