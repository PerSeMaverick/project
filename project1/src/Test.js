import React, { useState } from "react";

function Test() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  function plus() {
    setCount(count + 1);
    if (count < 3) {
      setAge(age + 1);
    }
  }
  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button onClick={plus}>누르면한살먹기</button>
    </div>
  );
}

export default Test;
