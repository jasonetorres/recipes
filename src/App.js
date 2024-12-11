import React, { useState } from 'react';
import IngredientForm from './components/IngredientForm';
import RecipeCard from './components/RecipeCard';
import astraClient from './api/astraClient';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async (keyword) => {
    try {
      const response = await astraClient.get('/recipes', {
        params: { keyword },
      });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
    }
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      {!selectedRecipe ? (
        <IngredientForm onSearch={fetchRecipes} recipes={recipes} onRecipeSelect={handleRecipeSelect} />
      ) : (
        <RecipeCard recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default App;