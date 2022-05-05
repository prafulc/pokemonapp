import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./index";
import { PokemonListResponse } from "../../lib/usePokemonGetAPI";

const mockResponse: PokemonListResponse = {
  data: { count: 0, next: "next-url", previous: "previous-url", results: [] },
  loading: false,
};

jest.mock("../../lib/usePokemonGetAPI", () => {
  return {
    usePokemonGetAPI: () => {
      return mockResponse;
    },
  };
});

describe("TEST HOMEPAGE", () => {
  test("DISPLAY HOMEPAGE WITH SORRY MESSAGE", () => {
    render(<HomePage />);

    const PokemonNotFound = screen.getByText("Sorry! Pokemon Not Found");
    expect(PokemonNotFound).toBeInTheDocument();
  });
});
