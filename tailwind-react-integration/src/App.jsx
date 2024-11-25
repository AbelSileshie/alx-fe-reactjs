import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <div className="flex text-blue-500">
        <p className=" font-extrabold mt-12 p-12">
          this is an example of tailwindcss
        </p>
      </div>
      <UserProfile />
    </>
  );
}

export default App;
