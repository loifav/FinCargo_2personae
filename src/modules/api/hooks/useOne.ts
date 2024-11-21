import { useQuery } from "@tanstack/react-query";
import { fetchOne } from "../requests/resources";

type UseOne<TData> = {
  entity: TData | undefined;
  isLoading: boolean;
  isError: boolean;
};

export function useOne<TData>(resource: string, id: string): UseOne<TData> {
  const { isLoading, isError, data } = useQuery<TData, Error>({
    queryKey: [resource, id],
    queryFn: () => fetchOne<TData>(resource, id),
    staleTime: 5000,
  });

  return {
    entity: data,
    isLoading,
    isError,
  };
}
