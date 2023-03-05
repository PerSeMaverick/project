import React, { useContext } from "react";

import ContentsContext from "../../Context/contents-context";

const Contents = () => {
  const contentsCtx = useContext(ContentsContext);
  return (
    <div>
      <h1>{contentsCtx.type}</h1>
      <div>{contentsCtx.content}</div>
    </div>
  );
};

export default Contents;
