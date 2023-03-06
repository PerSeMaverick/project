import React, { useContext } from "react";
import ContentsContext from "../../Context/contents-context";

import style from "./RealEstate.module.css";

import Fallen from "./RealEstate/Fallen";
import Fluctuation from "./RealEstate/Fluctuation";

const RealEstate = (props) => {
  const ContentsCtx = useContext(ContentsContext);
  return (
    <div>
      <Fallen />
      <Fluctuation />
    </div>
  );
};

export default RealEstate;
