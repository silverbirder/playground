interface UseQueryArgs<Variables = object, Data = any> {
  query: string | Document;
}
export interface UseQueryState<Data = any, Variables = object> {
  fetching: boolean;
  stale: boolean;
  data?: Data;
}
export interface OperationContext {
  [key: string]: any;
  readonly _instance?: [] | undefined;
  additionalTypenames?: string[];
  url: string;
  suspense?: boolean;
  preferGetMethod?: boolean;
}
declare type UseQueryResponse<Data = any, Variables = object> = [
  UseQueryState<Data, Variables>,
  (opts?: Partial<OperationContext>) => void
];

type useQuery = <Data = any, Variables = object>(
  args: UseQueryArgs<Variables, Data>
) => UseQueryResponse<Data, Variables>;

export type { useQuery as useQueryIF };
