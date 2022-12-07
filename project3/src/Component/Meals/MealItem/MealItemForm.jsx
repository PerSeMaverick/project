import { useRef, useState } from "react";
import Input from "../../UI/input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmonutIsValid] = useState(true);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmonutIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount(1~5).</p>}
    </form>
  );
};

export default MealItemForm;
