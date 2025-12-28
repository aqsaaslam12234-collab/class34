import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Display() {
  const { count } = useContext(CounterContext);
  return <span>Count: {count}</span>;
}