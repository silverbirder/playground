import { useCallback, useState } from "react";

export type useFetcherArgs = {
  src: string;
};

export type useFetcherType = {
  loading: boolean;
  request: () => void;
  response: any;
};

export const useFetcher = (args: useFetcherArgs): useFetcherType => {
  const { src } = args;
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const request = useCallback(async () => {
    setLoading(true);
    try {
      const result = await (await fetch(src)).json();
      setResponse(result);
    } finally {
      setLoading(false);
    }
  }, [src]);
  return { loading, request, response };
};
