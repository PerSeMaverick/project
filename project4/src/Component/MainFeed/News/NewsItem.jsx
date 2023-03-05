import React from "react";

import style from "./NewsItem.module.css";

const NewsItem = (props) => {
  const handleOpenArticle = () => {
    // 클릭하면 해당 기사 오픈
  };

  return (
    <li className={style.item} key={props.type}>
      <button className={style.article} onClick={handleOpenArticle}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </button>
      <div>
        <span>{props.pubDate}</span>
        <button>Scrap</button>
      </div>
    </li>
  );
};

export default NewsItem;
