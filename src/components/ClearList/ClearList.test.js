// // import react-testing methods
import { render, screen } from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";

// // import the component
import ClearList from "./index.js";
const mockClearList = jest.fn();

test("Verify that clear List works", () => {
  //check button text prop contains value
  const buttonText = "Clear List";
  // render the component
  render(<ClearList clearList={mockClearList} buttonText={buttonText} />);
  // get the label for 'clear list:'
  const clearListButton = screen.getByRole("button", { name: "Clear List" });
  expect(clearListButton).toBeInTheDocument();
});
