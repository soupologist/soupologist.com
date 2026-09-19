import H1 from "./mdx/H1.astro";
import H2 from "./mdx/H2.astro";
import H3 from "./mdx/H3.astro";
import P from "./mdx/P.astro";
import Ul from "./mdx/Ul.astro";
import Ol from "./mdx/Ol.astro";
import Li from "./mdx/Li.astro";
import A from "./mdx/A.astro";
import Blockquote from "./mdx/Blockquote.astro";
import Hr from "./mdx/Hr.astro";
import Code from "./mdx/Code.astro";

export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: A,
  blockquote: Blockquote,
  hr: Hr,
  code: Code,
};
