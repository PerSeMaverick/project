import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";

import styles from "./components/UI/Card.module.css";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  function onAddUserHandler(enteredValue) {
    setUserInfo((prevValue) => {
      const updatedValue = [...prevValue];
      updatedValue.unshift({ text: enteredValue, id: Math.random().toString() });
      return updatedValue;
    });
  }

  let content = (
    <p style={{ textAlign: "center", color: "white" }}>Please Add Users Infomation</p>
  );

  if (userInfo.length > 0) {
    content = <UsersList items={userInfo} />;
  }
  return (
    <div>
      <section>
        <Card className={styles.card}>
          <AddUser onAddUser={onAddUserHandler} />
        </Card>
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
