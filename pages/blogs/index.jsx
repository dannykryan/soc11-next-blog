import Link from "next/link";
import blogData from "../../json/data.json";
const BlogList = () => {
  return (
    <div>
      <navbar>
        <Link href="/">Home</Link> <br />
        <Link href="/about">About Page</Link> <br />
        <Link href="./blogs/">Blogs</Link>
      </navbar>
      <div className="blogBoard">
      <h1 className="centerHeader">Blogs</h1>
      <h3>Have a browse through my blogposts.</h3>
      <ul className="ul">
        {blogData.blogPosts.map((post) => (
          <li className="blogListItem" key={post.id}>
            <Link href={`/blogs/${post.id}`}>
            <p className="previewHeader">{post.heading}</p>
              <div className="previewContainer">
                <img className="blogThumb" src={post.imageUrl} alt="blog-image" />
                <p className="previewText">{post.content}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default BlogList;
