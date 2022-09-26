import React from "react";
import AddUser from "./components/Users/AddUser";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";

import styles from "./components/UI/Card.module.css";

function App() {
  return (
    <div>
      <section>
        <Card className={styles.card}>
          <AddUser />
          <Button />
        </Card>
      </section>
      <secion></secion>
    </div>
  );
}

export default App;
