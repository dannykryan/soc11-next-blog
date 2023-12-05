import Link from "next/link";
import blogData from "../../json/data.json";
const BlogList = () => {
  return (
    <div>
      <div className="blogBoard">
      <h1 className="centerHeader">Blogs</h1>
      <ul className="ul">
        {blogData.blogPosts.map((post) => (
          <li className="blogListItem" key={post.id}>
            <Link href={`/blogs/${post.id}`}>
              <div className="previewContainer">
              <div className="blogThumb" style={{
                backgroundImage: `url(${post.imageUrl})`
              }} />
                <div className="previewTextContainer">
                <p className="previewHeader">{post.heading}</p>
                  <p className="previewText">{post.content}</p>
                </div>
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
