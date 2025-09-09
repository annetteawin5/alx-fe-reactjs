 // RecipeList component
  import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
       <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
    );
  };
  export default RecipeList;