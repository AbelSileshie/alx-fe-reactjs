import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostsComponent from "./Component/PostsComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PostsComponent />
    </>
  );
}

export default App;
