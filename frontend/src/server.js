import polka from "polka";
import { createProxyMiddleware } from "http-proxy-middleware";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const target = NODE_ENV === "development" ? "http://localhost:5000" : "https://pgjones.dev";

polka() // You can also use Express
  .use(
	sapper.middleware({
      ignore: [
        "/blog/atom.xml",
        "/blog/rss20.xml",
        uri => uri.startsWith("/static"),
        uri => uri.startsWith("/v0"),
      ],
    }),
    createProxyMiddleware({ target }),
  )
  .listen(PORT, err => {
	if (err) console.log("error", err);
  });
