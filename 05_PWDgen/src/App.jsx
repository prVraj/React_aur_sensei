import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setLength] = useState(13);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //ref hook
  const passRef = useRef(null);

  const passwordGenarator = useCallback(() => {
    
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numAllowed) str += "0123456789";
    if (specialCharAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?*/~";
    

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pwd += str.charAt(char);
    }
    setPassword(pwd);
    console.log(pwd);
  }, [length, specialCharAllowed, numAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenarator()
  }, [numAllowed, specialCharAllowed, length, passwordGenarator]);

  // ------------------------  return  ---------------------------------

  return (
    <>
      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 bg-gray-700 rounded-lg shadow-lg text-cyan-400">
        <h1 className="my-4 text-lg text-center ">
          Password Genarator
        </h1>
        <div className="flex my-4 mb-4 overflow-hidden rounded-lg shadow">
          <input 
          type="text" 
          value={password} 
          className="w-full p-2 text-black outline-none"
          placeholder="Type Password"
          readOnly
          ref={passRef}
          />
          <button
          onClick={copyToClipboard}
          className="px-2 text-white bg-blue-500 outline-non py-2.5 shrink-0 hover:bg-blue-600"
          // className="px-2 text-white bg-blue-500 outline-non py-2.5 shrink-0"
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1 ">
            <input 
            type="range" 
            min={8}
            max={30}
            value={length}
            className="mouse-pointer"
            onChange={(e) => setLength(e.target.value)}
            />
          <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={specialCharAllowed}
              id="characterInput"
              onChange={() => {
                  setSpecialCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  );
}

export default App;
