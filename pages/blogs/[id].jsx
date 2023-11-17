import blogData from "../../json/data.json"; // Update the path accordingly

const YourComponent = ({ blogPost }) => {
  // Find the blog post based on the id
  if (!blogPost) {
    return <p>Blog post not found</p>;
  }

  return (
    <>
      <h1>{blogPost.heading}</h1>
      <p>{blogPost.content}</p>
      <p>Author: {blogPost.author}</p>
      <img src={blogPost.imageUrl} alt="Blog Post Image" />
      <div>
        <a href="http://localhost:3000/blogs/5"></a>
      </div>
    </>
  );
};

export default YourComponent;

export async function getServerSideProps({ params }) {
  const { id } = params;

  const blogPost = blogData.blogPosts.find(
    (post) => post.id === parseInt(id, 10)
  );

  if (!blogPost) {
    return {
      props: {
        blogPost: null,
      },
    };
  }

  return {
    props: {
      blogPost,
    },
  };
}
