import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AddPostForm from "./features/posts/AddPostForm";
import { PostsList } from "./features/posts/postsList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
}

export default App;
