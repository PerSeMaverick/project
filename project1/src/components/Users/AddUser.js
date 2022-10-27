import React, { useState } from "react";

import Button from "../UI/Button";
import ErorrModule from "../UI/ErorrModule";

import styles from "./AddUser.module.css";

function AddUser(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [erorrModal, setErorrModal] = useState();

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

  const closeModal = () => {
    setErorrModal(null);
  };

  function formSubmitHandler(event) {
    event.preventDefault();
    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setIsValid(!isValid);
      setErorrModal({
        title: "An error ocurred!",
        message: "Please Enter a vaild name and age (non-empty value)",
      });
    } else if (+ageInput < 1) {
      setIsValid(!isValid);
      setErorrModal({
        title: "An error ocurred!",
        message: "Please enter a vaild age.",
      });
    } else if (usernameInput.trim().length !== 0 || ageInput.trim().length !== 0) {
      props.onAddUser(usernameInput, ageInput);
    }
    setUsernameInput("");
    setAgeInput("");
  }

  return (
    <div>
      {erorrModal && (
        <ErorrModule
          title={erorrModal.title}
          message={erorrModal.message}
          onCloseModal={closeModal}
        />
      )}
      <form
        className={`${styles.input} ${!isValid && styles.inValid}`}
        onSubmit={formSubmitHandler}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={usernameInput}
          onChange={usernameInputChangeHandler}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={ageInput}
          onChange={ageInputChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
}

export default AddUser;
