import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/FavoritesList';


function App() {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<RecipeDetails />} />
        <Route path="/recipe" element={<EditRecipeForm/>} />
        <Route path="/recipe.id" element={<DeleteRecipeButton />} />
      
        
      </Routes>
    </BrowserRouter>
    
     <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <SearchBar/>
      <FavoritesList/>
      <RecommendationsList/>
      </div>
      </>
      
    
  );
}

export default App;