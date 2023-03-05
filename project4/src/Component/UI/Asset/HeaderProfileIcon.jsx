import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./btn.module.css";

const HeaderProfileIcon = () => {
  const personalSettingsHandler = () => {};
  return (
    <button>
      <FontAwesomeIcon icon={faUser} onClick={personalSettingsHandler} />
    </button>
  );
};

export default HeaderProfileIcon;
