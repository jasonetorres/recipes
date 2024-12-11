import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onBack }) => {
  return (
    <div className="recipe-card">
      <button onClick={onBack}>Back to Search</button>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;
