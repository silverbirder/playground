import { render } from "@testing-library/react";
import { IncrementButton } from "./IncrementButton";
it("a", () => {
  render(<IncrementButton />);
  expect(1).toBe(1);
});
