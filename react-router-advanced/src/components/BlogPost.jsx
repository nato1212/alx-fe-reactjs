// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic 'id' parameter from the URL

  // Here you could fetch the blog post data based on the 'id' or use static data for now
  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the blog post with ID: {id}</p>
      {/* You can implement logic to fetch and display the post data based on the ID */}
    </div>
  );
};

export default BlogPost;
