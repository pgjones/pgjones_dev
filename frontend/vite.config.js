import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    port: 3000,
    proxy: {
      "/static": "http://127.0.0.1:5050",
      "/v0": "http://127.0.0.1:5050",
    },
  },
};

export default config;
