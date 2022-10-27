import React from "react";

import Card from "./Card";
import Button from "./Button";

import erorrStyle from "./ErorrModule.module.css";

const ErorrModule = (props) => {
  return (
    <div>
      <div className={erorrStyle.backdrop} onClick={props.onCloseModal} />
      <Card className={erorrStyle.modal}>
        <header className={erorrStyle.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={erorrStyle.content}>
          <p>{props.message}</p>
        </div>
        <footer className={erorrStyle.actions}>
          <Button onClick={props.onCloseModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErorrModule;
