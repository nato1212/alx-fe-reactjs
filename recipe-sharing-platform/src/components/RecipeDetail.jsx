import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json"; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // To navigate back to the home page if needed
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center">
        <p className="text-2xl">Recipe not found!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Go back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md mb-4 md:mb-0"
        />
        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          {/* Ingredients Section */}
          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-6 mb-8">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          {/* Cooking Instructions Section */}
          <h2 className="text-2xl font-semibold mb-2">Cooking Instructions:</h2>
          <ol className="list-decimal pl-6">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Go back to Home
      </button>
    </div>
  );
};

export default RecipeDetail;
