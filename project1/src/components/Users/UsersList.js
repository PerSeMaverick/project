import React from "react";
import styles from "./UsersList.module.css";

import Card from "../UI/Card";
import UserItem from "./UserItem";

function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((UserItems) => (
          <UserItem key={UserItems.id} id={UserItems.id}>
            {UserItems.text}
          </UserItem>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
