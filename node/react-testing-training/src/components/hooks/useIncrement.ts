import { useCallback, useState } from "react";

export type useIncrementType = {
  num: number;
  increment: () => void;
};
export const useIncrement = (): useIncrementType => {
  const [num, setNum] = useState<number>(0);
  const increment = useCallback(() => setNum(num + 1), [num]);
  return { num, increment };
};
