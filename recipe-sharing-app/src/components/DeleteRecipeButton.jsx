import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ id, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
