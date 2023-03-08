import React from "react";

import style from "./Fluctuation.module.css";

const Fluctuation = () => {
  return (
    <div>
      <h2>시세 변동</h2>
      <label htmlFor="sido">시/도:</label>
      <select
        id="sido"
        value={sidoCode}
        onChange={(e) => setSidoCode(e.target.value)}
      >
        <option value="11">서울특별시</option>
        <option value="26">부산광역시</option>
        <option value="27">대구광역시</option>
        <option value="28">인천광역시</option>
        <option value="29">광주광역시</option>
        <option value="30">대전광역시</option>
        <option value="31">울산광역시</option>
        <option value="36">세종특별자치시</option>
        <option value="41">경기도</option>
        <option value="42">강원도</option>
      </select>
    </div>
  );
};

export default Fluctuation;
