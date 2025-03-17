import React, { useState, useEffect } from "react";
import recipeData from "../data.json"; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="text-blue-500 mt-4 inline-block"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
