import Link from 'next/link';
import blogData from '../../json/data.json';

const BlogList = () => {
  return (
    <div>
    <navbar>
        <Link href="/">Home</Link> <br />
        <Link href="/about">About Page</Link> <br />
        <Link href="./blogs/">Blogs</Link>
    </navbar>
      <h1>ALL THE BLOGS</h1>
      <h2>Blog Posts:</h2>
      <ul>
        {blogData.blogPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blogs/${post.id}`}>
              <p>{post.heading}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;