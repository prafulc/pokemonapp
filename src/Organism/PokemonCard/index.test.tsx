import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import PokemonCard from "./index";
import { PokemonDetails } from "../../lib/usePokemonGetAPI";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("TEST POKEMON CARD", () => {
  test("HANDLE CARD CLICK TO NAVIGATE /:id", () => {
    const cardData: PokemonDetails = {
      abilities: ["illuminate", "natural-cure", "analytic"],
      height: 11,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
      name: "starmie",
      url: "https://pokeapi.co/api/v2/pokemon/121/",
      weight: 800,
    };
    
    render(
      <BrowserRouter>
        <PokemonCard {...cardData} />
      </BrowserRouter>
    );

    const cardbox = screen.getByTestId("cardBox");
    fireEvent.click(cardbox);

    const URLArr = cardData.url.replace(/\/$/,"").split('/');
    const navigateURL = '/' + URLArr[URLArr.length - 1];

    expect(mockedUsedNavigate).toHaveBeenLastCalledWith(navigateURL);
  });
});
