/*Write a test that verifies that the AddItem component shows the user:
an input with an "Add item:" label
a button containing the value of the buttonText prop*/

// import react-testing methods
import { render, screen } from "@testing-library/react";

import { expect, jest, test } from "@jest/globals";

// import the component
import AddItem from "./index.js";
const mockAddToList = jest.fn();

test("shows input with label and add button", () => {
  const buttonText = "Add To List";
  // render the component
  render(<AddItem addToList={mockAddToList} buttonText={buttonText} />);
  // get the label for 'Add Item:'
  // const addItemLabel = screen.getByLabelText('Add item:');
  const addItemLabel = screen.getByRole("textbox", { name: "Add item:" });
  console.log(addItemLabel);
  expect(addItemLabel).toBeInTheDocument();
  // get button to add items to list
  const addButton = screen.getByRole("button", { name: buttonText });
  expect(addButton).toBeInTheDocument();
});
