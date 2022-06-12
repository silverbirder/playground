import { waitFor } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useFetcher } from "./useFetcher";

describe("useFetcher", () => {
  let globalFetch = global.fetch;
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ test: 1 }),
      })
    ) as jest.Mock;
  });
  afterEach(() => {
    global.fetch = globalFetch;
  });
  it("requestしたら、loadingがtrueからfalseになり、responseにデータが入っていること", async () => {
    const { result } = renderHook(() => useFetcher({ src: "" }));
    act(() => {
      result.current.request();
    });
    await waitFor(() => {
      expect(result.current.loading).toBeTruthy();
    });

    expect(result.current.response).toStrictEqual({ test: 1 });
    expect(result.current.loading).toBeFalsy();
  });
});
