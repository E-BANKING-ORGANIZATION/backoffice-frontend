import { useMutation } from "react-query";
import { toast } from "react-toastify";
import useAuth from "../../useAuth";
import useAxios from "../../useAxios";

export default function UsePut<T>(path: string) {
  const { token, isAuthenticated: authInitialized } = useAuth();
  const { axios } = useAxios();

  const mutation = useMutation((id: string) =>
    axios
      .put(`${path}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        toast.error("there was an error when deleting data");
        throw error;
      })
  );
  const error = mutation.error as any;

  return {
    data: mutation.data,
    isError: mutation.isError,
    error: error?.response?.data,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isLoading,
    mutate: mutation.mutate,
  };
}
