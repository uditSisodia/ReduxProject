import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const showCounter = useSelector((store) => store.showCounter);
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const incHandler = () => {
    dispatch({ type: "increment", amount: 5 });
  };
  const decHandler = () => {
    dispatch({ type: "decrement", amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incHandler}>increment</button>
      <button onClick={decHandler}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
