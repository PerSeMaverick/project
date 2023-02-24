import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./btn.module.css";

const HeaderProfileIcon = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faUser} />
    </button>
  );
};

export default HeaderProfileIcon;
