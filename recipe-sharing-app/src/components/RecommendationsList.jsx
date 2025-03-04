import { useRecipeStore } from "../store/recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommendations for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
