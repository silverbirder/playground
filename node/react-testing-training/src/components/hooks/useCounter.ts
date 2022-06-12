import { useCallback, useState } from "react";

export type useCounterType = {
  count: number;
  increment: () => void;
};
export const useCounter = (): useCounterType => {
  const [count, setNum] = useState<number>(0);
  const increment = useCallback(() => setNum(count + 1), [count]);
  return { count, increment };
};
