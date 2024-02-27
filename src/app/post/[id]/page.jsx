export const metadata = {
  title: "Post page",
  description: "An empty page using dynamic routing",
};

export default function PostsPage({ params }) {
  console.log(params);
  return (
    <div>
      <h1>A page full of posts............maybe</h1>
      <h2>Post page {params.id}</h2>
      <p>This is a dynamic route page!</p>
    </div>
  );
}
