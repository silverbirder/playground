import { render, screen } from "@testing-library/react";
import { useFetcherArgs } from "./hooks/useFetcher";
import { LoadJson } from "./LoadJson";

const globalFakeFetchedData = {
  loading: false,
  response: { hey: "you" },
  request: () => {},
};
jest.mock("./hooks/useFetcher", () => ({
  useFetcher: (args: useFetcherArgs) => globalFakeFetchedData,
}));

describe("LoadJson", () => {
  it("Loading中は、Loading...と表示される", () => {
    // Arrange
    globalFakeFetchedData.loading = true;

    // Act
    render(<LoadJson src="" />);

    // Assert
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("Loadingが終われば、読み込んだjsonが表示される", () => {
    // Arrange
    globalFakeFetchedData.loading = false;

    // Act
    render(<LoadJson src="" />);

    // Assert
    expect(screen.getByText('{"hey":"you"}')).toBeInTheDocument();
  });
});
