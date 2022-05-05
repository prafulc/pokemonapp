import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./index";
import { PokemonDetails } from "../../lib/usePokemonGetAPI";

describe("Load Card Component", () => {
  const cardData: PokemonDetails = {
    abilities: ["illuminate", "natural-cure", "analytic"],
    height: 11,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    name: "starmie",
    url: "https://pokeapi.co/api/v2/pokemon/121/",
    weight: 800,
  };
  test("renders card data", () => {
    render(<Card {...cardData} />);
    const cardName = screen.getByText(cardData.name);
    expect(cardName).toBeInTheDocument();
    const cardWeight = screen.getByText('Weight: ' + cardData.weight);
    expect(cardWeight).toBeInTheDocument();
    const cardHeight = screen.getByText('Height: ' + cardData.height);
    expect(cardHeight).toBeInTheDocument();
    const cardAbilities = screen.getByText('Abilities: ' + cardData.abilities.join(', '));
    expect(cardAbilities).toBeInTheDocument();
  });
});
