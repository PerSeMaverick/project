import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErorrModule from "../UI/ErorrModule";
import Card from "../UI/Card";

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

  let erorrModalContent = <></>;

  const closeModal = () => {
    setErorrModal(!erorrModal);
  };

  function formSubmitHandler(event) {
    event.preventDefault();
    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setIsValid(false);
      setErorrModal(true);
      if (!erorrModal) {
        erorrModalContent = (
          <Card className="card">
            <ErorrModule
              text="Please Enter a vaild name and age (non-empty value)"
              closeModal={closeModal}
            />
          </Card>
        );
      }
      return;
    } else if (!Number.isInteger(ageInput)) {
      setIsValid(false);
      setErorrModal(true);
      if (!erorrModal) {
        erorrModalContent = (
          <Card className="card">
            <ErorrModule text="Please enter a vaild age." closeModal={closeModal} />
          </Card>
        );
      }
      return;
    }
    props.onAddUser(usernameInput, ageInput);
    event.target.reset();
  }

  return (
    <div>
      {erorrModalContent}
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
