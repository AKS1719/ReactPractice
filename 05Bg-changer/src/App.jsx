import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >

        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-xl px-3 py-2">
            <button
             className="outline-none px-4 rounded-full text-white shadow-xl"
             style={{backgroundColor:"red"}}
             onClick={()=>setColor("red")}
             >Red</button>
            <button
             className="outline-none px-4 rounded-full text-white shadow-xl"
             style={{backgroundColor:"Green"}}
             onClick={()=>setColor("Green")}
             >Green</button>
            <button
             className="outline-none px-4 rounded-full text-white shadow-xl"
             style={{backgroundColor:"blue"}}
             onClick={()=>setColor("Blue")}
             >Blue</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
