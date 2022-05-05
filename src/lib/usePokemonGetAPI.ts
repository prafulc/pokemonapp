import axios from "axios";
import { useEffect, useState } from "react";

export interface PokemonDetails {
  image: string;
  name: string;
  weight: number;
  height: number;
  abilities: string[];
  url: string;
}

export interface PokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonDetails[];
}

export type PokemonListResponse = {
  data: PokemonData | undefined;
  loading: boolean;
};

function usePokemonGetAPI(url: string) {
  const [data, setData] = useState<PokemonData>();
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setloading(true);
    axios.get(url).then((response) => {
      Promise.all(
        response.data.results.map((res: any) => axios.get(res.url))
      ).then(function (respSet) {
        const results = respSet.map(({ status, data }, index) => {
          if (status === 200) {
            return {
              url: response.data.results[index].url,
              abilities: data?.abilities?.map(
                (a: any): string => a?.ability?.name
              ),
              weight: data?.weight,
              height: data?.height,
              name: data?.name,
              image: data?.sprites?.other?.["official-artwork"]?.front_default,
            };
          }
          return null;
        }).filter(data => data);

        setData({...response.data, results});
        setloading(false);
      });
    });

    return () => cancelToken.cancel("CANCELLING API CALL");
  }, [url]);

  return { data, loading };
}

export { usePokemonGetAPI };
