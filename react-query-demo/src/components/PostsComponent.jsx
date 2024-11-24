import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Typography, Button } from "@material-tailwind/react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 1, // 1 minute
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <p key={post.id}>
            <Typography variant="h1" className="capitalize">
              {post.title}
            </Typography>
            <Typography variant="lead" className="font-serif capitalize">
              {post.body}
            </Typography>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
