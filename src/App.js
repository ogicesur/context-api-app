import logo from "./logo.svg";
import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import Post from "./components/Post";

function App() {
  const userInfo = {
    username: "Admin",
    isAdmin: true,
  };

  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <h1>Blog</h1>
        <Post></Post>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
