import axios from "axios";
import { useEffect, useState } from "react";

export interface PokemonDetails {
  image: string;
  name: string;
  weight: number;
  height: number;
  abilities: string[];
}

export interface PokemonDetailResponse {
  data: PokemonDetails | undefined;
  loading: boolean;
}

type APIResponseData = {
  abilities: any[];
  weight: number;
  height: number;
  name: string;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
};

// type APIResopnse = {
//   data: APIResponseData;
// };

function usePokemonDetail(url: string) {
  const [data, setData] = useState<PokemonDetails>();
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setloading(true);
    axios.get(url).then((response) => {
            const apiData:APIResponseData = response?.data;
            setData({
                  abilities: apiData?.abilities?.map(
                    (a: any): string => a?.ability?.name
                  ),
                  weight: apiData?.weight,
                  height: apiData?.height,
                  name: apiData?.name,
                  image: apiData?.sprites?.other?.["official-artwork"]?.front_default,
                });
            setloading(false);
    });

    return () => cancelToken.cancel("CANCELLING API CALL");
  }, [url]);

  return { data, loading };
}

export { usePokemonDetail };
