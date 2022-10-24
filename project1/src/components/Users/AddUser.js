import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErorrModule from "../UI/ErorrModule";

import styles from "./AddUser.module.css";

function AddUser(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [erorrModal, setErorrModal] = useState(false);

  function usernameInputChangeHandler(event) {
    if (event.target.value) {
      setIsValid(true);
      setErorrModal(false);
      setUsernameInput(event.target.value);
    }
  }

  function ageInputChangeHandler(event) {
    if (event.target.value) {
      setIsValid(true);
      setErorrModal(false);
      setAgeInput(event.target.value);
    }
  }

  let erorrModalContent;

  const closeModal = () => {
    setErorrModal(!erorrModal);
  };

  function formSubmitHandler(event) {
    event.preventDefault();
    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setIsValid(!isValid);
      setErorrModal(!erorrModal);
      erorrModalContent = (
        <Card className="card">
          <ErorrModule
            text="Please Enter a vaild name and age (non-empty value)"
            closeModal={closeModal}
          />
        </Card>
      );
    } else if (+ageInput < 0) {
      setIsValid(!isValid);
      setErorrModal(!erorrModal);
      erorrModalContent = (
        <Card className="card">
          <ErorrModule text="Please enter a vaild age." closeModal={closeModal} />
        </Card>
      );
    } else if (usernameInput.trim().length !== 0 || ageInput.trim().length !== 0) {
      props.onAddUser(usernameInput, ageInput);
    }
    setUsernameInput("");
    setAgeInput("");
  }

  return (
    <div>
      {erorrModalContent}
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
