import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
