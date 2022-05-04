import React from "react";
import { useParams } from "react-router-dom";
import { usePokemonDetail } from "../../lib/usePokemonDetail";

const DetailPage = (): JSX.Element => {
  let { id } = useParams();
  const {data, loading } = usePokemonDetail(`pokemon/${id}`);
  
  return <div className="container">
    <div className="row">
      <div className="col-6 col-sm-6 col-md-4">
        <img src={data?.image} className="card-img-top" alt={data?.name} loading="lazy" />
      </div>
      <div className="col-6 col-sm-6 col-md-8">
        <h2>{data?.name}</h2>
        <div><strong>Weight: </strong>{data?.weight}</div>
        <div><strong>Height: </strong>{data?.height}</div>
        <div><strong>Abilities: </strong>{data?.abilities?.join(", ")}</div>
      </div>
    </div>
  </div>;
};

export default DetailPage;
