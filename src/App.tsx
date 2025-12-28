



import { CounterContext } from "./contexts/CounterContext";
import { useState } from "react";
import Display from "./contexts/Display";
import { Buttons } from "./contexts/Button";


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CounterContext.Provider value={{ count: count, setCount: setCount }}>
        <Display />
        <Buttons />
      </CounterContext.Provider>
    </div>
  );
}
