import React, { useState, useCallback, useEffect } from "react";
import "./App.css";

import CampList from "./Component/CampList";

function App() {
  const [jsonData, setJsondata] = useState([]);

  const jejuCaping = useCallback(async () => {
    try {
      const response = await fetch(
        "https://open.jejudatahub.net/api/proxy/a11801tD1bttatDttD1b0t1Dt80b011a/_8o8c_o1j19c8t19oo_pe11ot1jppccr?{params(key=value)}"
      );
      if (!response.ok) {
        throw new Error("Someting went wrong!");
      }
      const data = await response.json();
      console.log(data.data);
      setJsondata(data.data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    jejuCaping();
  }, [jejuCaping]);

  return (
    <div className="App">
      <h1>* 제주도 캠핑 가능 장소 알림이 *</h1>
      <CampList data={jsonData} />
    </div>
  );
}

export default App;
