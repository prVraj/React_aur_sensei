import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// let counter = 10;

function App() {
  let [counter, setCounter] = useState(10);

  if (counter < 0) {
    setCounter(20);
  } else if (counter > 20) {
    setCounter(0);
  }

  let addValue = () => {
    // counter += 1;
    setCounter(counter + 1);
  };

  let removeValue = () => {
    // setCounter(--counter);
    // setCounter(counter--);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React aur Sensei {counter}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Subtract {counter}</button>
    </>
  );
}

export default App;
