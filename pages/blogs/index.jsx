import Link from "next/link";
import blogData from "../../json/data.json";
const BlogList = () => {
  return (
    <div>
      <div className="blogBoard">
      <h1 className="centerHeader">Blogs</h1>
      <h3>Have a browse through my blogposts.</h3>
      <ul className="ul">
        {blogData.blogPosts.map((post) => (
          <li className="blogListItem" key={post.id}>
            <Link href={`/blogs/${post.id}`}>
            <p className="previewHeader">{post.heading}</p>
              <div className="previewContainer">
              <div className="blogThumb" style={{
    backgroundImage: `url(${post.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '200px',
    height: '200px',
    paddingTop: '10px', // This maintains a 1:1 aspect ratio for a square container
  }} />
                <div className="previewTextContainer">
                  <p className="previewText">{post.content}</p>
                  <p className="authorPreview">Written by: {post.author}</p>
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
