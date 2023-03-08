import React from "react";

import style from "./Fallen.module.css";

const Fallen = (props) => {
  const aptTopInfo = {
    aptDong: props.data.법정동,
    aptName: props.data.아파트,
    aptFloor: props.data.층,
    aptDeposit: props.data.보증금액,
    aptConstructionYear: props.data.건축년도,
  };
  const aptBottomInfo = {
    aptDong: props.data.b법정동,
    aptName: props.data.b아파트,
    aptFloor: props.data.b층,
    aptDeposit: props.data.b보증금액,
    aptConstructionYear: props.data.b건축년도,
  };
  return (
    <div>
      <h3>오늘의 아파트</h3>
      <h2>
        오늘 전국에서 가격이 가장 많이 오른 아파트는 {aptTopInfo.aptName}
        입니다.
      </h2>
      <div>
        건물 정보:
        <span>아파트:{aptTopInfo.aptName}</span>
        <span>법정동:{aptTopInfo.aptDong}</span>
        <span>층:{aptTopInfo.aptFloor}</span>
        <span>보증금액:{aptTopInfo.aptDeposit}</span>
        <span>건축년도:{aptTopInfo.aptConstructionYear}</span>
      </div>
      <h2>
        오늘 전국에서 가격이 가장 많이 떨어진 아파트는 {aptBottomInfo.aptName}
        입니다.
      </h2>
      <div>
        건물 정보:
        <span>아파트:{aptBottomInfo.aptName}</span>
        <span>법정동:{aptBottomInfo.aptDong}</span>
        <span>층:{aptBottomInfo.aptFloor}</span>
        <span>보증금액:{aptBottomInfo.aptDeposit}</span>
        <span>건축년도:{aptBottomInfo.aptConstructionYear}</span>
      </div>
    </div>
  );
};

export default Fallen;
