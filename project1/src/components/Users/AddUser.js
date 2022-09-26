import React from "react";
import styles from "./AddUser.module.css";

function AddUser() {
  function usernameInputChangeHandler(event) {
    if (event.target.value) {
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={styles.input} onSubmit={formSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" required onChange={usernameInputChangeHandler} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" required />
    </form>
  );
}

export default AddUser;
