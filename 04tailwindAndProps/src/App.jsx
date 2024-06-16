import "./App.css";
import Card from "./components/Card";

function App() {
	let myobj = {
		username:"akshat",
		age:21
	}
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind </h1>
      <Card channel="akshat" obj ={myobj}/>
      <Card/>
    </>
  );
}

export default App;
