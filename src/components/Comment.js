import React from "react";

export default function Comment({ username, isAdmin }) {
  return (
    <div>
      <h1>Logged in as {username}</h1>
      <p>{isAdmin && <button>Edit Comment</button>}</p>
    </div>
  );
}
