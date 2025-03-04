import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid gap-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                {recipe.title}
              </h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
