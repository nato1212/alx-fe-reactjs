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
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
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
