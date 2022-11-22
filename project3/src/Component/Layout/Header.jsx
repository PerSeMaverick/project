import React from "react";
import HeaderCartBtn from "./HeaderCartBtn";

import classes from "./Header.module.css";

import foodImg from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meal order</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImg} alt="A table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
