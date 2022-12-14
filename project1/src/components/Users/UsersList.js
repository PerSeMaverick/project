import React from "react";

import UserItem from "./UserItem";

function UserList(props) {
  return (
    <ul>
      {props.items.map((UserItems) => (
        <UserItem key={UserItems.id} id={UserItems.id} onDelete={props.onDelete}>
          {UserItems.text}, {UserItems.age}
        </UserItem>
      ))}
    </ul>
  );
}

export default UserList;
