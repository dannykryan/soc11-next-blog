import Link from "next/link";
import blogData from "../../json/data.json";

const BlogList = () => {
  return (
    <div>
      {blogData.blogPosts.map((post) => (
        <Link key={post.id} href={`blogs/${post.id}`}>
          <h1>{post.heading}</h1>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
