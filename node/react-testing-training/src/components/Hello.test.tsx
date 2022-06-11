import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
it("renders with or without a name", () => {
  render(<Hello />);
  expect(screen.getByText("Hey, stranger")).toBeInTheDocument();

  render(<Hello name="Jenny" />);
  expect(screen.getByText("Hello, Jenny!")).toBeInTheDocument();
});
