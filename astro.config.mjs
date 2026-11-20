import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    // links to other sites open in a new tab; /relative links stay put.
    // mdx inherits this from the markdown config
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener"] }],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
