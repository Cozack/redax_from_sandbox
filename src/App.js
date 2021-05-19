import "./styles.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  return (
    <>
      <h1>counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        dec
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        reset
      </button>

      <input
        type="number"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "INC_CUSTOM", payload: Number(value) });
        }}
      >
        INC CUSTOM
      </button>
    </>
  );
};
export default function App() {
  return (
    <div className="App">
      <Counter />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
