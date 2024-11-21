import qs from "qs";
import apiClient from "@utils/http";

export type FetchOnePayload = string;

export type FetchManyPayload = {
  page?: number;
  limit?: number;
};

export const fetchOne = async <TData>(
  resource: string,
  id: string
): Promise<TData> => {
  if (!id) throw new Error("An ID is required to fetch a resource.");
  const response = await apiClient.get<TData>(`/api/v1/${resource}/${id}`);
  return response.data;
};

export const fetchMany = async <TData>(
  resource: string,
  params?: { page?: number; limit?: number }
): Promise<TData[]> => {
  const query = qs.stringify({
    count: params?.limit,
    offset: params?.page ? params.page * (params.limit || 10) : undefined,
  });
  const response = await apiClient.get<TData[]>(`/api/v1/${resource}?${query}`);
  return response.data || [];
};
