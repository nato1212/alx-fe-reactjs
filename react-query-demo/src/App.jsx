import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent"; // Adjust the import if needed

// Create a React Query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
