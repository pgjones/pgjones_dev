// Replace with serverFetch if this merges,
// https://github.com/sveltejs/kit/pull/1465

const target = process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://pgjones.dev";

export async function handle({ request, render }): Response {
  if (request.path.startsWith("/static") || request.path.startsWith("/v0/")) {
    const response = await fetch(`${target}${request.path}`);

    return {
      body: new Uint8Array(await response.arrayBuffer()),
      headers: {
        "Content-Type": response.headers.get("Content-Type"),
        "Content-Length": response.headers.get("Content-Length"),
      },
      status: response.status,
    };
  } else {
    return await render(request);
  }
}
