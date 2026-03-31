import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const fullPath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      content,
    };
  });
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    date: data.date,
    content,
  };
}
