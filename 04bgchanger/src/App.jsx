import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')
  
  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed w-full  flex flex-wrap justify-center bottom-6 p-2 ">
        <div className="  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-full">
          <button
            onClick={() => setColor("red")}
            className="cursor-pointer outline-none  px-4 py-1 rounded-2xl font-bold"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="cursor-pointer outline-none  px-4 py-1 rounded-2xl font-bold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="cursor-pointer outline-none  px-4 py-1 rounded-2xl font-bold"
            style={{backgroundColor: "blue"}}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="cursor-pointer outline-none  px-4 py-1 rounded-2xl font-bold"
            style={{backgroundColor: "orange"}}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className="cursor-pointer outline-none  px-4 py-1 rounded-2xl font-bold"
            style={{backgroundColor: "pink"}}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("white")}
            className="cursor-pointer outline-none  px-4 py-1 rounded-2xl font-bold"
            style={{backgroundColor: "white"}}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
