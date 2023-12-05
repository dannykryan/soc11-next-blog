import blogData from "../../json/data.json";

//create a functional component called BlogPostComponent
//destructures the 'blogPost' prop from the props object.
const BlogPostComponent = ({ blogPost }) => {
  // checks if 'blogPost' is false (returns blog post not found)
  if (!blogPost) {
    return <p>Blog post not found</p>;
  }

  //if true, the component returns the JSX for rendering the blog post content.
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

export default BlogPostComponent;

//get data from the JSON file
export async function getServerSideProps({ params }) {
  const { id } = params;

  //use the find array method to iterate through the blogPosts array and "find" the post based on the id.
  //parseInt here parses the id (if its a string) into an integer. This is precautionary.
  const blogPost = blogData.blogPosts.find(
    (post) => post.id === parseInt(id, 10)
  );

  //if id not found, return null
  if (!blogPost) {
    return {
      props: {
        blogPost: null,
      },
    };
  }

  //if found, return the data as a prop
  return {
    props: {
      blogPost,
    },
  };
}
