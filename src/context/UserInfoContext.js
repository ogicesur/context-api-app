import { createContext } from "react";

export const UserInfoContext = createContext(
    {
        username: "Guest",
        isAdmin: false,
    }
);

export default UserInfoContext;