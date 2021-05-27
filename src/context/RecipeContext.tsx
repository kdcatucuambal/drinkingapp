import React, { createContext, useEffect, useState } from "react";
import { RecipeContextI } from "../models/drink.context";
import { DrinkI, SearchI } from "../models/drink.models";
import { getRecipes } from "../services/drink.reactservice";
import { UtilDrink } from "./../utils/drink.utils";
export const RecipeContext = createContext<RecipeContextI>(undefined!);
const RecipeProvider = (
  props: React.ProviderProps<RecipeContextI | undefined>
) => {
  const [search, setSearch] = useState<SearchI>({
    category: "",
    name: "",
  });
  const [recipes, setRecipes] = useState<DrinkI[]>([]);

  useEffect(() => {
    const _getRecipes = async () => {
      const recipes = await getRecipes(search);
      setRecipes(recipes);
    };

    if (UtilDrink.isSearchValid(search)) _getRecipes();
  }, [search]);
  return (
    <RecipeContext.Provider value={{ recipes,setSearch }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
