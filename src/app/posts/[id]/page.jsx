import Link from "next/link";

export async function generateMetadata({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await result.json();

  return {
    title: `Blog: ${post.title}`,
    description: `This is an article about ${post.title}`,
  };
}

export default async function PostsPage({ params }) {
  // calling the API
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  // parse the response as JSON
  const postInfo = await response.json();

  return (
    <div>
      <h1>Posts</h1>
      <p>Post_Id: {postInfo.id}</p>
      <p>Title: {postInfo.title}</p>
      <p>Body: {postInfo.body}</p>

      {/* <Link href={`posts/${params.id}`}>{post.title}</Link> */}
    </div>
  );
}
