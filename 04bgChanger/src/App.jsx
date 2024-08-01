import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div
        className="fixed flex flex-wrap justify-center gap-3 inset-x-4 bottom-14 rounded-2xl"
        // style={{ backgroundColor: "white" }}
      >
        <div
          className="flex flex-wrap justify-center gap-2 p-2 outline-1 rounded-2xl"
          style={{ backgroundColor: "red" }}
        >
          <button
            className="flex flex-wrap justify-center rounded-md"
            onClick={() => setColor("red")}
          >
            red
          </button>
        </div>
        <div
          className="flex flex-wrap justify-center gap-2 p-2 outline-1 rounded-2xl"
          style={{ backgroundColor: "blue" }}
        >
          <button
            className="flex flex-wrap justify-center rounded-md"
            onClick={() => setColor("blue")}
          >
            blue
          </button>
        </div>
        <div
          className="flex flex-wrap justify-center gap-2 p-2 outline-1 rounded-2xl"
          style={{ backgroundColor: "green" }}
        >
          <button
            className="flex flex-wrap justify-center rounded-md"
            onClick={() => setColor("green")}
          >
            green
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 p-2 outline-1 rounded-2xl">
          <button onClick={() => setColor("gray")}></button>
        </div>
      </div>
    </div>
  );
}

export default App;
