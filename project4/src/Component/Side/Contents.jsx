import React from "react";
import { useReducer } from "react";

import News from "../MainFeed/News";
import RealEstate from "../MainFeed/RealEstate";
import Stock from "../MainFeed/Stock";
import Books from "../MainFeed/Books";

// sidebar에서 뉴스를 누르면 뉴스만 렌더링

const news = "NEWS";
const realEstate = "REAL ESTATE";
const stock = "STOCK";
const books = "BOOKS";

const Contents = (props) => {
  const initialFeedState = {
    initialFeed: <News />,
    type: news,
  };

  const feedActionReducer = (oldFeed, action) => {
    if (action.type === news) {
      oldFeed.type = action.type;
      return <News onClick={showNews} />;
    } else if (action.type === realEstate) {
      oldFeed.type = action.type;
      return <RealEstate onClick={showRealEstate} />;
    } else if (action.type === stock) {
      oldFeed.type = action.type;
      return <Stock onClick={showStock} />;
    } else if (action.type === books) {
      oldFeed.type = action.type;
      return <Books onClick={showBooks} />;
    }
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
  const showStock = () => {
    feedActionDispatch({ type: stock });
  };
  const showBooks = () => {
    feedActionDispatch({ type: books });
  };

  return (
    <div>
      <h1>{feedState.type}</h1>
      <div>{feedState.initialFeed}</div>
    </div>
  );
};

export default Contents;
