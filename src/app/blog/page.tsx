import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="px-4 md:px-6">
      {/* Top spacing */}
      <div className="pt-20 md:pt-24" />

      {/* Main panel */}
      <section className="mx-auto max-w-3xl border border-(--border) bg-(--surface) px-5 py-6 md:px-7 md:py-8">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between border-b border-(--border) pb-4">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-foreground opacity-60">
              archive
            </p>

            <h1 className="text-2xl md:text-3xl font-head tracking-widest leading-none">
              blog
            </h1>
          </div>

        </div>

        {/* Posts */}
        <div className="divide-y divide-(--border)">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group grid grid-cols-[28px_1fr] gap-4 py-4 transition-all duration-200 hover:translate-x-0.5">
                {/* Number */}
                <div className="pt-0.5 text-xs text-foreground opacity-35 group-hover:opacity-80 transition-opacity">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-lg md:text-xl tracking-tight text-(--text) transition-colors group-hover:text-[var(--foreground)]">
                    {post.title}
                  </h2>

                  <p className="mt-1 text-xs text-(--text) opacity-45">
                    {post.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20 md:h-24" />
    </main>
  );
}