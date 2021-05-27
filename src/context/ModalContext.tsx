import React, {
  createContext,
  ProviderProps,
  useEffect,
  useState,
} from "react";
import { ModalContextI } from "../models/drink.context";
import { RecipeI } from "../models/drink.models";
import { getRecipe } from "../services/drink.reactservice";
import { UtilDrink } from "../utils/drink.utils";

export const ModalContext = createContext<ModalContextI>(undefined!);

const ModalProvider = (props: any) => {
  const [idRecipe, setIdRecipe] = useState<string>("");
  const [recipeInfo, setRecipe] = useState<RecipeI>(undefined!);

  useEffect(() => {
    const _getRecipe = async () => {
      const recipe = await getRecipe(idRecipe);
      console.log(recipe);

      setRecipe(recipe);
    };
    if (UtilDrink.isIdValid(idRecipe)) _getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider
      value={{
        setIdRecipe,
        recipeInfo,
        setRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
