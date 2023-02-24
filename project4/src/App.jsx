import React from "react";

import style from "./App.module.css";

import Sidebar from "./Component/Side/Sidebar";
import Contents from "./Component/Side/Contents";

function App() {
  return (
    <section className={style.content}>
      <Sidebar />
      <Contents />
    </section>
  );
}

export default App;
