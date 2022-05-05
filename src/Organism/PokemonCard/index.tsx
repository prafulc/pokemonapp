import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonDetails } from "../../lib/usePokemonGetAPI";
import Card from "../../Molecule/Card";
import style from './index.module.scss';

function PokemonCard({ name, image, height, weight, abilities, url }: PokemonDetails): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    const URLArr = url.replace(/\/$/,"").split('/');
    navigate('/' + URLArr[URLArr.length - 1]);
  }

  return (
    <div 
      className={`col-12 col-sm-6 col-md-4 col-lg-3 ${style.cardBox}`} 
      onClick={handleClick}
      data-testid="cardBox"
    >
      <Card
        name={name}
        image={image}
        height={height}
        weight={weight}
        abilities={abilities}
      ></Card>
    </div>
  );
}

export default PokemonCard;
