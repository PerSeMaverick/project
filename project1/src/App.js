import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";
import UsersList from "./components/Users/UsersList";

import cardStyles from "./components/UI/Card.module.css";
import userListStyles from "./components/Users/UsersList.module.css";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  function onAddUserHandler(enteredUserName, enteredAge) {
    setUserInfo((prevValue) => {
      const updatedValue = [...prevValue];
      updatedValue.unshift({
        text: enteredUserName,
        age: enteredAge,
        id: Math.random().toString(),
      });
      return updatedValue;
    });
  }

  let content = (
    <p style={{ textAlign: "center", color: "white" }}>Please Add Users Infomation.</p>
  );

  if (userInfo.length > 0) {
    content = (
      <Card className={`${cardStyles.card} ${userListStyles.users}`}>
        <UsersList items={userInfo} />
      </Card>
    );
  }
  return (
    <div>
      <section>
        <Card className={cardStyles.card}>
          <AddUser onAddUser={onAddUserHandler} />
        </Card>
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
