import { useFetcher } from "./hooks/useFetcher";

export type LoadJsonProps = {
  src: string;
};
export const LoadJson: React.FC<LoadJsonProps> = ({ src }: LoadJsonProps) => {
  const { loading, response } = useFetcher({ src });

  return (
    <>
      {loading ? <div>Loading...</div> : <div>{JSON.stringify(response)}</div>}
    </>
  );
};
