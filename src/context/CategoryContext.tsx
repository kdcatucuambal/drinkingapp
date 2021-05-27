import { createContext, useState, ProviderProps, useEffect } from "react";
import { CategoryContextI } from "../models/drink.context";
import { CategoryI } from "../models/drink.models";

import { getCategories } from "../services/drink.reactservice";

export const CategoryContext = createContext<CategoryContextI>({
  categories: [],
  hello: "",
});
//Provider: This is where the functions and status are located
const CategoryProvider = (props: ProviderProps<{}>) => {
  //Create a context state

  const [hello, setHello] = useState("Hello");

  const [categories, setCategories] = useState<CategoryI[]>([]);

  useEffect(() => {
    const _getCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    _getCategories();
  }, []);

  return (
    //value: What we want to be available in the other components
    <CategoryContext.Provider value={{ hello, categories }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
