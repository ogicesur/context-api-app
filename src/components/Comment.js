import React from "react";
import { useContext } from "react";
import { UserInfoContext } from "../context/UserInfoContext";

export default function Comment() {

    const { username, isAdmin } = useContext(UserInfoContext);

    return (
        <div>
            <h1>Logged in as {username}</h1>
            <p>{isAdmin && <button>Edit Comment</button>}</p>
        </div>
    );
}
