import { useIncrement } from "./hooks/useIncrement";

export type IncrementButtonProps = {};
export const IncrementButton: React.FC<IncrementButtonProps> = () => {
  const { num, increment } = useIncrement();
  return (
    <>
      <button onClick={increment}>Increment</button>
      <p>{num}</p>
    </>
  );
};
