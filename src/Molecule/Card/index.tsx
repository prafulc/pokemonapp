import React from "react";
import { PokemonDetails } from "../../lib/usePokemonDetail";

import style from './index.module.scss';

function Card({
  name,
  image,
  abilities,
  weight,
  height,
}: PokemonDetails): JSX.Element {
  return (
    <div className={`card ${style.cardBlock}`}>
        <img src={image} className="card-img-top" alt={name} loading="lazy" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text" style={{ fontSize: "small" }}>
            <div className="row">
              <div className="col">Height: {height}</div>
              <div className="col">Weight: {weight}</div>
            </div>
            <div className="row">
              <div className="col">Abilities: {abilities?.join(", ")}</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card;
