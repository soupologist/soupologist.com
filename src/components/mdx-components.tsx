import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-5xl font-head mt-12 mb-6" {...props} />,
  h2: (props) => <h2 className="text-3xl mt-10 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl mt-8 mb-3" {...props} />,
  p: (props) => (
    <p className="text-base leading-relaxed mb-4 opacity-90" {...props} />
  ),
  ul: (props) => <ul className="list-disc ml-6 mb-4 space-y-2" {...props} />,
  a: (props) => (
    <a className="underline underline-offset-4 hover:opacity-70" {...props} />
  ),
};
