import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [isValid, setIsValid] = useState(true);

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
    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddUser(usernameInput, ageInput);
  }

  return (
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
  );
}

export default AddUser;
