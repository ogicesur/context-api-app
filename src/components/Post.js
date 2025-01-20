import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete</button>}

      <h1>Post Title</h1>
      <p>Lorem Ipsum</p>
      <p>{username}</p>

      <Comment username={username} isAdmin={isAdmin}></Comment>
    </div>
  );
}
