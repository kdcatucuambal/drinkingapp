import React, { useContext, useState } from "react";

import { CategoryContext } from "../context/CategoryContext";
import { RecipeContext } from "../context/RecipeContext";
import { CategoryContextI, RecipeContextI } from "../models/drink.context";
import { SearchI } from "../models/drink.models";

const Form = () => {
  const { categories } = useContext<CategoryContextI>(CategoryContext);
  const [lookUp, setLookUp] = useState<SearchI>({
    category: "",
    name: "",
  });
  const { setSearch } = useContext<RecipeContextI>(RecipeContext);

  //functio to read
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setLookUp({ ...lookUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(lookUp);
  };

  return (
    <form onSubmit={handleSubmit} className="col-12">
      <fieldset className="text-center">
        <legend>Look up drinks by category or ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Look up by ingredient"
            onChange={handleChange}
            value={lookUp.name}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            id="category"
            className="form-control"
            onChange={handleChange}
            value={lookUp.category}
          >
            <option value="">-- Select category --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Look up drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
