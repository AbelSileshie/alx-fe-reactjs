import React from "react";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center text-2xl font-semibold my-8">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
};

export default App;
