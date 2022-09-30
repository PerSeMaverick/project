import React from "react";

import errorStyle from "./ErorrModule.module.css";

const ErorrModule = (props) => {
  return (
    <div className={errorStyle.modal}>
      <div className={errorStyle.header}>
        <h2>Invaild Input</h2>
      </div>
      <div className={errorStyle.content}>{props}</div>
      <div className={errorStyle.actions}>Okay</div>
    </div>
  );
};

export default ErorrModule;
