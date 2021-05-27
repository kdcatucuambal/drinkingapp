import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const Header = () => {
  return (
    <div className="bg-danger dr-header">
      <h1>Look up drink recipes</h1>
    </div>
  );
};

export default Header;
