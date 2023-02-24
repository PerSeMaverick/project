import React from "react";

import "./News.module.css";

import NewsItem from "./News/NewsItem";

// .map 이용해서 NewsItem 여러개 띄우기

const News = () => {
  return (
    <ul>
      <NewsItem />
    </ul>
  );
};

export default News;
