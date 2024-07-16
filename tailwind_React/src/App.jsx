import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    userName: "John Doe",
    age: 31,
  };
  let c1Details = "I am a Front-end Developer";
  let c2Details = "I am a Back-end Developer";
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-5">Hello world!</h1>

      <Card userName="Babita" details={c1Details} btn={"click me"}/>
      <Card userName="Lappu" details={c2Details}/>
    </>
  );
}

export default App;
