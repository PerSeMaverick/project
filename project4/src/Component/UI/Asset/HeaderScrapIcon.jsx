import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./btn.module.css";

const HeaderScrapIcon = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faBookmark} />
    </button>
  );
};

export default HeaderScrapIcon;
