/**
 * Oversized serif interruption in an otherwise all-mono page. Used sparingly —
 * the contrast only works if there is one of these per post, maybe two.
 */
export default function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 max-w-[24ch] border-l border-(--border) pl-5 font-serif text-3xl leading-[1.15] text-(--foreground) md:text-4xl">
      {children}
    </blockquote>
  );
}
