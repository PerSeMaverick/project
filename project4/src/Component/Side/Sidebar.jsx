import React from "react";

import style from "./Sidebar.module.css";

import HeaderProfileIcon from "../UI/Asset/HeaderProfileIcon";
import HeaderScrapIcon from "../UI/Asset/HeaderScrapIcon";
import HeaderSettingIcon from "../UI/Asset/HeaderSettingIcon";

const handleOpenNews = () => {};
const handleOpenRealEstate = () => {};
const handleOpenStock = () => {};
const handleOpenBooks = () => {};

const Sidebar = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <HeaderProfileIcon />
        <HeaderScrapIcon />
        <HeaderSettingIcon />
      </header>
      <nav className={style.menu}>
        <ul>
          <li>
            <button onClick={handleOpenNews}>News</button>
          </li>
          <li>
            <button onClick={handleOpenRealEstate}>Real Estate</button>
          </li>
          <li>
            <button onClick={handleOpenStock}>Stock</button>
          </li>
          <li>
            <button onClick={handleOpenBooks}>Books</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
