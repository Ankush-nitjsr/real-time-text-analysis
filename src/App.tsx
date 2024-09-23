import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <h2 className="border border-black">Display Count : {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
}

export default App;
