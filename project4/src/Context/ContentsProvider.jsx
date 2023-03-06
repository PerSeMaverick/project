import React, { useReducer } from "react";

import News from "../Component/MainFeed/News";
// import RealEstate from "../MainFeed/RealEstate";
// import Stock from "../MainFeed/Stock";
// import Books from "../MainFeed/Books";

const news = "NEWS";
// const realEstate = "REAL ESTATE";
// const stock = "STOCK";
// const books = "BOOKS";

const ContentsProvider = (props) => {
  const initialFeedState = (
    <News
      originallink={props.data.news.originallink}
      title={props.data.news.title}
      description={props.data.news.description}
      pubDate={props.data.news.pubDate}
    />
  );

  const feedActionReducer = (oldFeed, action) => {
    if (action.type === news) {
      oldFeed.type = action.type;
      return {
        type: oldFeed.type,
        content: (
          <News
            originallink={props.data.news.originallink}
            title={props.data.news.title}
            description={props.data.news.description}
            pubDate={props.data.news.pubDate}
          />
        ),
      };
    } else if (action.type === realEstate) {
      oldFeed.type = action.type;
      return <RealEstate onClick={showRealEstate} />;
    }
    // } else if (action.type === stock) {
    //   oldFeed.type = action.type;
    //   return <Stock onClick={showStock} />;
    // } else if (action.type === books) {
    //   oldFeed.type = action.type;
    //   return <Books onClick={showBooks} />;
    // }
  };

  const [feedState, feedActionDispatch] = useReducer(
    feedActionReducer,
    initialFeedState
  );

  const showNews = () => {
    feedActionDispatch({ type: news });
  };
  const showRealEstate = () => {
    feedActionDispatch({ type: realEstate });
  };
  // const showStock = () => {
  //   feedActionDispatch({ type: stock });
  // };
  // const showBooks = () => {
  //   feedActionDispatch({ type: books });
  // };

  const feedStateContext = {
    type: feedState.type,
    content: feedState.content,
    showNews: showNews,
    showRealEstate: showRealEstate,
  };
  return (
    <ContentsProvider value={feedStateContext}>
      {props.children}
    </ContentsProvider>
  );
};

export default ContentsProvider;
