import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { React, useEffect } from "react";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
        </article>
      ))}
    </div>
  );
};
