import { React, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";
import { useDispatch } from "react-redux";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSubmitPost = () => {
    if (title && content) {
      dispatch(postAdded({ id: nanoid(), title, content }));
    }
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:{nanoid()}</label>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSubmitPost}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
