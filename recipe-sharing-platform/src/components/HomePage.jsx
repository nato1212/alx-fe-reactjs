import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import recipeData from "../data.json"; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Set the recipes state to the data from the mock JSON
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>

            {/* Use the Link component to navigate to the RecipeDetail page */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              View Recipe Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
