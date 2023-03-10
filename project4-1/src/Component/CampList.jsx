import React from "react";
import CampItem from "./CampItem";

import "./CampList.css";

const CampList = (props) => {
  const campList = props.data.map((data) => {
    return (
      <CampItem
        key={data.latitude}
        addressJibun={data.addressJibun}
        category={data.category}
        placeName={data.placeName}
        placeUrl={data.placeUrl}
      />
    );
  });
  return <ul>{campList}</ul>;
};

export default CampList;
