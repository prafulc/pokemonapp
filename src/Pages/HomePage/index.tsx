import React, { useState } from "react";

import Pagination from "../../Organism/Pagination";
import {
  PokemonListResponse,
  PokemonURLDetail,
  usePokemonGetAPI,
} from "../../lib/usePokemonGetAPI";
import PokemonCard from "../../Organism/PokemonCard";

const HomePage = (): JSX.Element => {
  const [limit, setLimit] = useState(20);
  const [url, setUrl] = useState("pokemon?limit=20&offset=0");
  const { data, loading }: PokemonListResponse = usePokemonGetAPI(url);

  const handlePaginationAction = (type: string, value: number) => {
    if (type === "SETLIMIT") {
      setLimit(value);
      setUrl(`pokemon?limit=${value}&offset=0`);
    }
    if (type === "PREVIOUSPAGE") {
      if (data?.previous) {
        setUrl(data.previous);
      }
    }
    if (type === "NEXTPAGE") {
      if (data?.next) {
        setUrl(data.next);
      }
    }
  };
  return (
    <>
      <div className="col-12">
        <Pagination limit={limit} handleChange={handlePaginationAction} />
      </div>
      {!!!loading ? (
        data ? (
          data.results.map((pokemon: PokemonURLDetail) => (
            <PokemonCard key={pokemon.name} {...pokemon} />
          ))
        ) : (
          <>Sorry! Pokemon Not Found</>
        )
      ) : (
        <>L O A D I N G . . . </>
      )}
      <div className="col-12" style={{ marginBottom: 20 }}>
        <Pagination limit={limit} handleChange={handlePaginationAction} />
      </div>
    </>
  );
};
export default HomePage;
