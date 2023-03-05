import React from "react";

import "./News.module.css";

import NewsItem from "./News/NewsItem";

// .map 이용해서 NewsItem 여러개 띄우기 .map 사용하려면 배열이어야 함

const News = (props) => {
  const NewsItems = (
    <ul>
      {props.map(() => {
        <NewsItem
          key={props.originallink + props.pubDate}
          originallink={props.originallink}
          title={props.title}
          description={props.description}
          pubDate={props.pubDate}
        />;
      })}
    </ul>
  );

  return { NewsItems };
};

export default News;
