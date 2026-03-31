import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-3xl mb-10">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="cursor-pointer">
              <h2 className="text-xl">{post.title}</h2>
              <p className="text-sm opacity-60">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
