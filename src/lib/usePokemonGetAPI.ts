import axios from "axios";
import { useEffect, useState } from "react";

export interface PokemonURLDetail {
  name: string;
  url: string;
}

export interface PokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonURLDetail[];
}

export type PokemonListResponse = {
  data: PokemonData | undefined,
  loading: boolean
}

function usePokemonGetAPI(url: string) {
  const [data, setData] = useState<PokemonData>();
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setloading(true);
    axios.get(url).then((response) => {
      setData(response.data);
      setloading(false);
    });

    return () => cancelToken.cancel("CANCELLING API CALL");
  }, [url]);

  return { data, loading };
}

export { usePokemonGetAPI };
