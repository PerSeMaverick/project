import React from "react";

import erorrStyle from "./ErorrModule.module.css";

const ErorrModule = (props) => {
  function closeModal(props) {
    props.closeModal();
  }
  return (
    <div className={erorrStyle.backdrop} onClick={closeModal}>
      <div className={erorrStyle.modal}>
        <div className={erorrStyle.header}>
          <h2>Invaild Input</h2>
        </div>
        <div className={erorrStyle.content}>{props.text}</div>
        <div className={erorrStyle.actions} onClick={closeModal}>
          Okay
        </div>
      </div>
    </div>
  );
};

export default ErorrModule;
