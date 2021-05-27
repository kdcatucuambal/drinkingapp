import { SearchI } from "../models/drink.models";

export class UtilDrink {
  static isSearchValid = (search: SearchI) => {
    if (search.category === "" || search.name === "") {
      return false;
    }
    return true;
  };

  static isIdValid = (id: string) => {
    if (id.trim() === "") {
      return false;
    }
    return true;
  };
}
