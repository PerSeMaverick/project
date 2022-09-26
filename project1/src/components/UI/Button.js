import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.button} type="submit">
      Add User
    </button>
  );
}

export default Button;
