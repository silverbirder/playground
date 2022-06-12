import { render, screen, fireEvent } from "@testing-library/react";
import { CounterButton } from "./CounterButton";
describe("CounterButton", () => {
  it("countボタンを押したら、表示されている数字が1増える", () => {
    render(<CounterButton />);
    expect(screen.getByText("0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("count"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
