import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./index";

describe("TEST PAGINATION COMPONENT", () => {
  test("HANDLE PREVIOUS AND NEXT BUTTON CLICK", () => {
    const handleChange = jest.fn();
    render(<Pagination limit={10} handleChange={handleChange} />);

    const previousPageButton = screen.getByText(/previous page/i);
    fireEvent.click(previousPageButton);

    expect(handleChange).toHaveBeenLastCalledWith("PREVIOUSPAGE");

    const nextPageButton = screen.getByText(/next page/i);
    fireEvent.click(nextPageButton);

    expect(handleChange).toHaveBeenLastCalledWith("NEXTPAGE");
  });

  test("CHECK INITIAL LIMIT SELECTION", () => {
    const handleChange = jest.fn();
    render(<Pagination limit={20} handleChange={handleChange} />);
    const limit = screen.getByTestId("limit") as HTMLInputElement;
    expect(limit.value).toBe("20");
  });

  test("HANDLE LIMIT CHANGE", () => {
    const handleChange = jest.fn();
    render(<Pagination limit={50} handleChange={handleChange} />);

    const limit = screen.getByTestId("limit") as HTMLInputElement;
    fireEvent.change(limit, { target: { value: 10 } });
    expect(limit.value).toBe("50");
  });
});
