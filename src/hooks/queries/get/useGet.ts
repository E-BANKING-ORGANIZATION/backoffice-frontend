import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useAuth } from "../../useAuth";
import useAxios from "../../useAxios";

export const useGet = <T>(path: string) => {
  const { token, isAuthenticated: authInitialized } = useAuth();
  const { axios } = useAxios();
  const result = useQuery("get:" + path, async () => {
    try {
      const { data } = await axios.get<T>(path, {});
      return data;
    } catch {
      toast.error("There was an error");
      return null;
    }
  });

  return {
    data: result.data ?? [],
    error: result.error,
    isError: result.isError,
    isFetching: result.isFetching,
    status: result.status,
    isLoading: result.isLoading,
    isSuccess: result.isSuccess,
    refetch: result.refetch,
  };
};
