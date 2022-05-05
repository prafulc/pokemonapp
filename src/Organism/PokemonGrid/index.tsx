import React, { useMemo, useState } from "react";
import { PokemonDetails } from "../../lib/usePokemonGetAPI";
import PokemonCard from "../PokemonCard";

import style from "./index.module.scss";

function PokemonGrid({
  data = [],
  loading,
}: {
  data: PokemonDetails[];
  loading: boolean;
}): JSX.Element {
  const [search, setSearch] = useState("");
  const [sortby, setSortby] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((pokemon: PokemonDetails) => {
      if (search) {
        const match1 = String(pokemon.name)
          .toLocaleLowerCase()
          .split(String(search).toLocaleLowerCase());
        if (match1.length > 1) return true;

        for (const ability in pokemon.abilities) {
          const match2 = String(ability)
            .toLocaleLowerCase()
            .split(String(search).toLocaleLowerCase());
          if (match2.length > 1) return true;
        }
        return false;
      }
      return true;
    }).sort((a: PokemonDetails, b: PokemonDetails): number => {
      enum SortingKeys {
        name = 'name',
        height = 'height',
        weight = 'weight',
      };
      enum SortingOrder {
        asc = 'asc',
        desc = 'desc',
      };

      let sortReturn: number = 0;
      if (sortby) {
        const [sortKey, sortOrder]: [SortingKeys, SortingOrder] = sortby.split(':', 2) as [SortingKeys, SortingOrder];
        
        if (a[sortKey] > b[sortKey]) {
          sortReturn = 1;
        }
        if (a[sortKey] < b[sortKey]) {
          sortReturn = -1;
        }

        if (sortOrder === 'desc') {
          sortReturn = -(sortReturn);
        }

        return sortReturn;
      }
      return sortReturn;
    });
  }, [data, search, sortby]);

  const handleSearch = (e: any) => setSearch((e.target as HTMLInputElement).value);
  const handleSort = (e: any) => setSortby((e.target as HTMLInputElement).value)

  return (
    <>
      <div className={`row ${style.searchRow}`}>
        <div className="col text-start">
          <input
            type="text"
            placeholder="serach"
            value={search}
            className="form-control"
            data-testid="searchbox"
            onChange={handleSearch}
          />
        </div>
        <div className="col"></div>
        <div className="col text-end">
          <select
            className="form-select"
            data-testid="selectsort"
            value={sortby}
            onChange={handleSort}
          >
            <option>Sort by</option>
            <option value="name:asc">Name ASC</option>
            <option value="name:desc">Name DESC</option>
            <option value="height:asc">Height ASC</option>
            <option value="height:desc">Height DESC</option>
            <option value="weight:asc">Weight ASC</option>
            <option value="weight:desc">Weight DESC</option>
          </select>
        </div>
      </div>
      {!!!loading ? (
        filteredData && filteredData.length ? (
          filteredData.map((pokemon: PokemonDetails) => (
            <PokemonCard key={pokemon.name} {...pokemon} />
          ))
        ) : (
          <>Sorry! Pokemon Not Found</>
        )
      ) : (
        <>L O A D I N G . . . </>
      )}
    </>
  );
}

export default PokemonGrid;
