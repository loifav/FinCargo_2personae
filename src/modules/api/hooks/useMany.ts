import { useQuery } from "@tanstack/react-query";
import { fetchMany } from "../requests/resources";

type UseManyResult<TData> = {
  entities: TData[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
};

export function useMany<TData>(
  resource: string,
  params?: { page?: number; limit?: number }
): UseManyResult<TData> {
  const { data, isLoading, isError, error } = useQuery<TData[], Error>({
    queryKey: [resource, params],
    queryFn: () => fetchMany<TData>(resource, params),
    staleTime: 5000,
  });

  return {
    entities: data ?? [],
    isLoading,
    isError,
    error: isError ? error : null,
  };
}
