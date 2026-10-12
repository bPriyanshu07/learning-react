import { useState ,useCallback, useEffect , useRef} from 'react'

function App() {
  const [length , setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password,setPassword]= useState('')

  //use ref
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3);
  }
    const passwordGenerator = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAllowed) str+="0123456789"
      if(charAllowed) str += "!@#$%^&*()-_=+[]{}|";

      for (let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1) // rand index
        pass += str.charAt(char)
      }

      setPassword(pass)
    } ,[length,numAllowed,charAllowed])

    useEffect(() => {
      passwordGenerator()
    } , [passwordGenerator])


  return (
    <>
      <div className=" w-full max-w-md  px-6 py-4  mx-auto my-6 bg-gray-800  rounded-2xl">
        <h1 className="text-white  text-center mb-1 ">Password Generator</h1>
        <div className=" flex shadow rounded-lg   overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="bg-white text-orange-500  outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="bg-blue-600 py-1 px-3  cursor-pointer">
            Copy
          </button>
        </div>
        <div className="flex  text-sm text-orange-400 gap-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length={length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
