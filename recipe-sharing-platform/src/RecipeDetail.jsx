import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center p-4">
        <h2 className="text-xl">Recipe Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-blue-500 hover:underline"
        >
          Go back to the Home Page
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 hover:underline mb-4"
      >
        &lt; Back to Home
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        {/* Recipe Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients && recipe.ingredients.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <p>No ingredients provided.</p>
            )}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions && recipe.instructions.length > 0 ? (
              recipe.instructions.map((step, index) => (
                <li key={index} className="mb-2">
                  {step}
                </li>
              ))
            ) : (
              <p>No instructions provided.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
