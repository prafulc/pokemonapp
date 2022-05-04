import React, { useState } from "react";

import Pagination from "../../Organism/Pagination";
import { usePokemonGetAPI } from "../../lib/usePokemonGetAPI";

const HomePage = (): JSX.Element => {
  const [limit, setLimit] = useState(20);
  const [url, setUrl] = useState("pokemon?limit=20&offset=0");
  let { data, loading } = usePokemonGetAPI(url);

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
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        {!!!loading ? (
          <div className="card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
              className="card-img-top"
              alt="..."
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ) : (
          <>L O A D I N G . . . </>
        )}
      </div>
      <div className="col-12">
        <Pagination limit={limit} handleChange={handlePaginationAction} />
      </div>
    </>
  );
};
export default HomePage;
