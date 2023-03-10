import React from "react";

import Card from "../Card/Card";
import "./CampItem.css";

const CampItem = (props) => {
  return (
    <Card>
      <li className="item">
        <div>
          <div>캠핑장 이름: {props.placeName}</div>
          <div>주소: {props.addressJibun}</div>
          <div>카테고리: {props.category}</div>
        </div>
        <div>
          <a href={props.placeUrl}>지도 보기</a>
        </div>
      </li>
    </Card>
  );
};

export default CampItem;
