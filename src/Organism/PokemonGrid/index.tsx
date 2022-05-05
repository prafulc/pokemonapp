import React from "react";
import { PokemonDetails } from "../../lib/usePokemonGetAPI";
import PokemonCard from "../PokemonCard";

function PokemonGrid({ data }: { data: PokemonDetails[] }): JSX.Element {
  return (
    <>
      {/* <input type="text" placeholder="serach" /> */}
      {data.map((pokemon: PokemonDetails) => (
        <PokemonCard key={pokemon.name} {...pokemon} />
      ))}
    </>
  );
}

export default PokemonGrid;
