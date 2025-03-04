import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function to get posts
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Using React Query's useQuery hook with caching features
  const { data, error, isLoading, isError, refetch } = useQuery(
    ["posts"], // Query key
    fetchPosts, // Fetch function
    {
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
      staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch data when the window is focused
      keepPreviousData: true, // Keep previous data while new data is loading
    }
  );

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch Posts</button>
    </div>
  );
};

export default PostsComponent;
