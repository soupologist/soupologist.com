import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl sm:text-4xl font-head text-(--text)2 mb-5 tracking-tight leading-[0.98] max-w-[72ch]"
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className="text-2xl font-neue font-medium text-foreground mt-10 mb-3 tracking-tight max-w-[72ch]"
      {...props}
    />
  ),

  h3: (props) => (
    <h3
      className="text-lg font-neue text-foreground mt-7 mb-2 tracking-wide max-w-[72ch]"
      {...props}
    />
  ),

  p: (props) => (
    <p
      className="text-[15px] md:text-[16px] leading-[1.85] text-(--text)/90 mb-5 max-w-[72ch]"
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className="list-disc ml-5 mb-5 space-y-2 text-[var(--text)]/90 max-w-[72ch]"
      {...props}
    />
  ),

  ol: (props) => (
    <ol
      className="list-decimal ml-5 mb-5 space-y-2 text-(--text)/90 max-w-[72ch]"
      {...props}
    />
  ),

  li: (props) => (
    <li className="leading-[1.85]" {...props} />
  ),

  a: (props) => (
    <a
      className="text-foreground underline underline-offset-4 decoration-[var(--foreground)]/30 hover:decoration-foreground transition-all duration-200"
      {...props}
    />
  ),

  blockquote: (props) => (
    <blockquote
      className="border-l border-(--border) pl-4 italic text-[var(--text)]/65 my-6 max-w-[72ch]"
      {...props}
    />
  ),

  hr: () => (
    <hr className="my-8 border-t border-[var(--border)] max-w-[72ch]" />
  ),

  code: (props) => (
    <code
      className="bg-[var(--surface)] border border-[var(--border)] px-1.5 py-0.5 rounded-md text-sm text-[var(--foreground)]"
      {...props}
    />
  ),
};