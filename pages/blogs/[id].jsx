import { useRouter } from 'next/router';
import blogData from '../../json/data.json'; // Update the path accordingly

const YourComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post based on the id
  const blogPost = blogData.blogPosts.find((post) => post.id === parseInt(id, 10));

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