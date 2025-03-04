import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe Sharing App
      </h1>
      <AddRecipeForm />
      <div className="mt-8">
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
