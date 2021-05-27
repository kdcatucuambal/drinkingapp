import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Recipe from "../components/Recipe";
const ListRecipes = () => {
  const { recipes } = useContext(RecipeContext);
  console.log(recipes);
  
  return (
    <div className="card-columns mt-5">
      {recipes.map((recipe) => (
        <Recipe key={recipe.idDrink} recipe={recipe} />
      ))}
    </div>
  );
};

export default ListRecipes;
