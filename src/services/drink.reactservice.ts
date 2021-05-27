import axios from "axios";
import { CategoryI, DrinkI, RecipeI, SearchI } from "../models/drink.models";

const CATEGORY_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
const RECIPE_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
const INGREDIENT_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

export const getCategories = async () => {
  const response = await axios(CATEGORY_URL);
  const categories: CategoryI[] = response.data.drinks;
  return categories;
};

export const getRecipes = async (search: SearchI) => {
  const url = `${RECIPE_URL}i=${search.name}&c=${search.category}`;
  const response = await axios(url);
  const recipes: DrinkI[] = response.data.drinks;
  return recipes;
};

export const getRecipe = async (id: string) => {
  const response = await axios(`${INGREDIENT_URL}i=${id}`);
  const recipe: RecipeI = response.data.drinks[0]; 
  return recipe;
};
