import React from "react";
import { Route, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return <h1>Blog Post ID: {id}</h1>;
};

export default BlogPost;

<Route path="/blog/:id" element={<BlogPost />} />;
