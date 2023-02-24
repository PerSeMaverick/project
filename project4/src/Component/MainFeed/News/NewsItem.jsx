import React from "react";

import style from "./NewsItem.module.css";

const NewsItem = (props) => {
  const handleOpenArticle = () => {};
  return (
    <li className={style.item}>
      <button className={style.article} onClick={handleOpenArticle}>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          totam blanditiis optio, doloremque mollitia laudantium Lorem ipsum
          dolor sit amet consectetur adipisicing
        </p>
      </button>
      <div>
        <span>Upload Date</span>
        <button>Scrap</button>
      </div>
    </li>
  );
};

export default NewsItem;
