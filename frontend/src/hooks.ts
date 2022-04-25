const target =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://pgjones.dev";

export async function handle({ event, resolve }): Response {
  if (
    event.url.pathname.startsWith("/static") ||
    event.url.pathname.startsWith("/v0/")
  ) {
    const response = await fetch(`${target}${event.url.pathname}`);

    return new Response(await response.arrayBuffer(), {
      headers: {
        "Content-Type": response.headers.get("Content-Type"),
        "Content-Length": response.headers.get("Content-Length"),
      },
    });
  } else {
    return await resolve(event);
  }
}
