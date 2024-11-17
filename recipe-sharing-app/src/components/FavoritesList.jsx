import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    if (favorites.length > 0) {
      generateRecommendations();
    }
  }, [favorites, generateRecommendations]);

  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
