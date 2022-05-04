import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PokemonDetailResponse,
  usePokemonDetail,
} from "../../lib/usePokemonDetail";
import { PokemonURLDetail } from "../../lib/usePokemonGetAPI";
import Card from "../../Molecule/Card";
import style from './index.module.scss';

function PokemonCard({ name, url }: PokemonURLDetail): JSX.Element {
  const { data, loading }: PokemonDetailResponse = usePokemonDetail(url);
  const navigate = useNavigate();

  const handleClick = () => {
    const URLArr = url.replace(/\/$/,"").split('/');
    console.log(data, ' < < < ')
    navigate('/' + URLArr[URLArr.length - 1]);
  }

  return (
    <div className={`col-12 col-sm-6 col-md-4 col-lg-3 ${style.cardBox}`} onClick={handleClick}>
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
