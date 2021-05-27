import { useContext, useState } from "react";
import { DrinkI, RecipeI } from "../models/drink.models";
import { ModalContext } from "../context/ModalContext";
import { ModalContextI } from "../models/drink.context";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: any) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

interface Props {
  recipe: DrinkI;
}

const Recipe = ({ recipe }: Props) => {
  const { setIdRecipe, recipeInfo, setRecipe } = useContext(ModalContext);
  console.log(recipeInfo);

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(!open);
  };

  const showIngredients = (info: any) => {
    let ingredients = [];
    for (let index = 1; index < 16; index++) {
      if (info[`strIngredient${index}`]) {
        ingredients.push(
          <li>
            {info[`strIngredient${index}`]} {info[`strMeasure${index}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="card">
      <img src={recipe.strDrinkThumb} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title text-center">{recipe.strDrink}</h5>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            setIdRecipe(recipe.idDrink);
            handleOpen();
          }}
        >
          View Recipe
        </button>
        {recipeInfo ? (
          <Modal
            open={open}
            onClose={() => {
              setIdRecipe("");
              setRecipe({});
              handleOpen();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeInfo.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>{recipeInfo.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={recipeInfo.strDrinkThumb}
                alt=""
              />
              <h3>Ingredients && quantities</h3>
              <ul>{showIngredients(recipeInfo)}</ul>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Recipe;
