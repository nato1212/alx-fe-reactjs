import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} onDeleted={() => navigate("/")} />
    </div>
  );
};

export default RecipeDetails;
