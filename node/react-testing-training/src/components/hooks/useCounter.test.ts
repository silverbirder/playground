import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("incrementを実行したら、countが1増える", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
