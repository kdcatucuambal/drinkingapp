import { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/ListRecipes";
import CategoryProvider from "./context/CategoryContext";
import RecipeProvider from "./context/RecipeContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoryProvider value={{}}>
      <RecipeProvider value={undefined}>
        <ModalProvider>
          <Header></Header>
          <div className="container mt-5">
            <div className="row">
              <Form></Form>
            </div>
            <List />
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
