import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [charachters, setCharachters] = useState(false);
  const [password, setPassword] = useState("");


  //useRef hook 

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (charachters) str += "~!@#$%^&*()_-+{}{}:?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, charachters,setPassword]);


  const copyPasswordToClipboard = useCallback(()=>{
    // window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,charachters,passwordGenerator])
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 p-4">
        <h1 className="text-white text-center py-3">Passowrd Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px3"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label>Length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={() => {
                setCharachters((prev) => !prev);
              }}
            />
            <label>Charachters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
