import React from "react";

function UserItem(props) {
  function itemDeletehandler() {
    props.onDelete(props.id);
  }
  return <li onClick={itemDeletehandler}>{props.children}</li>;
}

export default UserItem;
