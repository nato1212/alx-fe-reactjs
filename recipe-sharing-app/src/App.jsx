import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />

                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
