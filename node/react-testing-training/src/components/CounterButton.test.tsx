import { render, screen, fireEvent } from "@testing-library/react";
import { CounterButton } from "./CounterButton";
it("a", () => {
  render(<CounterButton />);
  fireEvent.click(screen.getByText("count"));
});
