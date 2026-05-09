import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-4xl sm:text-5xl font-neue font-medium text-text mt-16 mb-6 tracking-tight"
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className="text-2xl sm:text-3xl font-medium text-primary mt-12 mb-4 tracking-tight"
      {...props}
    />
  ),

  h3: (props) => (
    <h3
      className="text-lg sm:text-xl font-head font-medium text-primary mt-8 mb-3"
      {...props}
    />
  ),

  p: (props) => (
    <p
      className="text-base font-sans leading-relaxed text-secondary mb-5 max-w-[65ch]"
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className="list-disc ml-6 mb-6 space-y-2 text-secondary max-w-[65ch]"
      {...props}
    />
  ),

  ol: (props) => (
    <ol
      className="list-decimal ml-6 mb-6 space-y-2 text-secondary max-w-[65ch]"
      {...props}
    />
  ),

  li: (props) => <li className="leading-relaxed" {...props} />,

  a: (props) => (
    <a
      className="relative text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent hover:text-primary transition-all duration-200"
      {...props}
    />
  ),

  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-accent pl-4 italic text-secondary my-6 max-w-[65ch]"
      {...props}
    />
  ),

  hr: () => <hr className="my-10 border-t border-border" />,

  code: (props) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
  ),
};
