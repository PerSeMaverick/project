import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import "./btn.module.css";

const HeaderSettingIcon = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faGear} />
    </button>
  );
};

export default HeaderSettingIcon;
