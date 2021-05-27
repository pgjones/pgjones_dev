import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "fallback.html",
    }),
    ssr: false,
    target: "#svelte",
    vite: {
      optimizeDeps: {
        include: ["highlight.js"],
      },
    },
  },
};

export default config;
