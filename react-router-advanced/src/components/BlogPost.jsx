// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  return (
    <div>
      <h2>Blog Post: {id}</h2>
      <p>Content of blog post {id}...</p>
    </div>
  );
};

export default BlogPost;
