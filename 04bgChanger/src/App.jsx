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
          className="flex flex-wrap p-2 outline-1 rounded-2xl justify-centergap-2"
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
            className="flex flex-wrap p-2 outline-1 rounded-2xl justify-centergap-2"
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
              className="flex flex-wrap p-2 outline-1 rounded-2xl justify-centergap-2"
              style={{ backgroundColor: "green" }}
            >
              <button
                className="flex flex-wrap justify-center rounded-md"
                onClick={() => setColor("green")}
              >
                green
              </button>
            
          
        </div>
      </div>
    </div>
  );
}

export default App;
