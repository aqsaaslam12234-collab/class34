import  { useContext } from "react";
import { CounterContext } from "./CounterContext";

export function Buttons() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
  );
}
