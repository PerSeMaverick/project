import React from "react";

function UserItem(props) {
  return <li onClick={deleteHandler}>{props.children}</li>;
}

export default UserItem;
