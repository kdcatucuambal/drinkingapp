import { CategoryI, DrinkI, RecipeI, SearchI } from "./drink.models";

export interface CategoryContextI {
  categories: CategoryI[];
  hello: string;
}

export interface RecipeContextI {
  recipes: DrinkI[];
  setSearch(search: SearchI): void;
}

export interface ModalContextI {
  setIdRecipe(id: string): void;
  recipeInfo: RecipeI;
  setRecipe(info: RecipeI | any): void;
}
