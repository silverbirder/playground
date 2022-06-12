import { useCounter } from "./hooks/useCounter";

export type CounterButtonProps = {};
export const CounterButton: React.FC<CounterButtonProps> = () => {
  const { count, increment } = useCounter();
  return (
    <>
      <button onClick={increment}>count</button>
      <p>{count}</p>
    </>
  );
};
