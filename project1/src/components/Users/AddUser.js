import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErorrModule from "../UI/ErorrModule";

import errorStyle from "../UI/ErorrModule.module.css";

function AddUser(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [erorrModal, setErorrModal] = useState(false);

  function usernameInputChangeHandler(event) {
    if (event.target.value) {
      setIsValid(true);
      setUsernameInput(event.target.value);
    }
  }

  function ageInputChangeHandler(event) {
    if (event.target.value) {
      setIsValid(true);
      setAgeInput(event.target.value);
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (usernameInput.trim().length === 0) {
      setIsValid(false);
      setErorrModal(true);
      return;
    } else if (ageInput.trim().length === 0) {
      setIsValid(false);
      setErorrModal(true);
      return;
    }
    props.onAddUser(usernameInput, ageInput);
    event.target.reset();
  }

  return (
    <div>
      {erorrModal && <ErorrModule className={errorStyle.backdrop} />}
      <form
        className={`${styles.input} ${!isValid && styles.inValid}`}
        onSubmit={formSubmitHandler}
      >
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameInputChangeHandler} />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageInputChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
}

export default AddUser;
