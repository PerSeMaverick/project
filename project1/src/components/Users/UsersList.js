import React from "react";
import styles from "./UserList.module.css";

import UserItem from "./UserItem";

function UserList() {
  return (
    <Card className={styles.users}>
      <ul>
        <UserItem />
      </ul>
    </Card>
  );
}

export default UserList;
