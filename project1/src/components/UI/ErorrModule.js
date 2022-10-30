import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import erorrStyle from "./ErorrModule.module.css";

const Backdrop = (props) => {
  return <div className={erorrStyle.backdrop} onClick={props.onClick} />;
};

const Overlay = (props) => {
  return (
    <Card className={erorrStyle.modal}>
      <header className={erorrStyle.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={erorrStyle.content}>
        <p>{props.message}</p>
      </div>
      <footer className={erorrStyle.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErorrModule = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onClick={props.onCloseModal}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErorrModule;
