import { useEffect } from "react";
import { useFetcher } from "./hooks/useFetcher";

export type LoadJsonProps = {
  src: string;
};
export const LoadJson: React.FC<LoadJsonProps> = ({ src }: LoadJsonProps) => {
  const { loading, request, response } = useFetcher({ src });

  useEffect(() => {
    request();
  }, [request]);

  return (
    <>
      {loading ? <div>Loading...</div> : <div>{JSON.stringify(response)}</div>}
    </>
  );
};
