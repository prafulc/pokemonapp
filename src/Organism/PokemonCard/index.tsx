import React from "react";
import {
  PokemonDetailResponse,
  usePokemonDetail,
} from "../../lib/usePokemonDetail";
import { PokemonURLDetail } from "../../lib/usePokemonGetAPI";
import Card from "../../Molecule/Card";

function PokemonCard({ name, url }: PokemonURLDetail): JSX.Element {
  const { data, loading }: PokemonDetailResponse = usePokemonDetail(url);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      {loading ? (
        <>LOADING...</>
      ) : data ? (
        <Card
          name={data.name}
          image={data.image}
          height={data.height}
          weight={data.weight}
          abilities={data.abilities}
        ></Card>
      ) : null}
    </div>
  );
}

export default PokemonCard;
