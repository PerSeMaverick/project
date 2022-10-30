import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import ErorrModule from "../UI/ErorrModule";

import styles from "./AddUser.module.css";

function AddUser(props) {
  const usernameInputRef = useRef();
  const userAgeInputRef = useRef();

  const [erorrModal, setErorrModal] = useState();

  const closeModal = () => {
    setErorrModal(null);
  };

  function formSubmitHandler(event) {
    event.preventDefault();

    const enteredName = usernameInputRef.current.value;
    const enteredAge = userAgeInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErorrModal({
        title: "An error ocurred!",
        message: "Please Enter a vaild name and age (non-empty value)",
      });
    } else if (+enteredAge < 1) {
      setErorrModal({
        title: "An error ocurred!",
        message: "Please enter a vaild age.",
      });
    } else if (enteredName.trim().length !== 0 || enteredAge.trim().length !== 0) {
      props.onAddUser(enteredName, enteredAge);
    }
    usernameInputRef.current.value = "";
    userAgeInputRef.current.value = "";
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
      <form className={`${styles.input}`} onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={usernameInputRef} />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={userAgeInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
}

export default AddUser;
