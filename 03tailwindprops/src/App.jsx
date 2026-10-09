import  Card from './components/card.jsx'
function App() {
  let obj = {
    username: "hitesh",
    age: 21,
  };
  let arr = [3,4,1]
  return (

    
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">
      <h1 className="bg-green-400 text-black p-4 rounded-2xl">Tailwind Test</h1>

    <Card username="chaicode"/>
    <Card username="bruce"/>
    <Card/>
    </div>
  );
}

export default App;
