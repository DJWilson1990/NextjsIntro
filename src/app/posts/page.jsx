import Link from "next/link";

export const metadata = {
  title: "Next.js - Blogs and dynamic routes",
  description: "A simple blog page displaying numerous blogs to be viewed",
  openGraph: {
    title: "Posts route for blog",
    type: "website",
  },
};

export default async function PostsPage() {
  // calling the API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // parse the response as JSON
  const posts = await response.json();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <Link href={`posts/${post.id}`}>Read more...</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
