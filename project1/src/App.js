import React from "react";
import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";

import styles from "./components/UI/Card.module.css";

function App() {
  return (
    <div>
      <section>
        <Card className={styles.card}>
          <AddUser />
        </Card>
      </section>
      <section></section>
    </div>
  );
}

export default App;
