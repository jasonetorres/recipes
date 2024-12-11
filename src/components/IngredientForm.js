import React, { useState } from 'react';
import './IngredientForm.css'; // Import the CSS file

const IngredientForm = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [recipes, setRecipes] = useState([]); // Add state to store recipes

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchedRecipes = await onSearch(keyword);
    setRecipes(fetchedRecipes || []); // Ensure fetchedRecipes is an array
  };

  return (
    <div className="form-container">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Christmas Cookie Recipe Finder</h1>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for a cookie recipe"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>{recipe.name}</div> // Example of displaying recipes
        ))}
      </div>
    </div>
  );
};

export default IngredientForm; 