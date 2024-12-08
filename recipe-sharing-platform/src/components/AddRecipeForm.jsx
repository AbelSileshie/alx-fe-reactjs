import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const validateForm = () => {
    const newErrors = {
      title: title === "" ? "Title is required" : "",
      ingredients: ingredients === "" ? "Ingredients are required" : "",
      steps: steps === "" ? "Preparation steps are required" : "",
    };

    if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Ingredients should include at least two items.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"),
        steps: steps.split("\n"),
      };

      console.log("New Recipe Submitted:", newRecipe);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-lg ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-2">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 border rounded-lg ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter ingredients, one per line"
            rows="4"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-3 border rounded-lg ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter preparation steps, one per line"
            rows="4"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-2">{errors.steps}</p>
          )}
        </div>
        ={" "}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
