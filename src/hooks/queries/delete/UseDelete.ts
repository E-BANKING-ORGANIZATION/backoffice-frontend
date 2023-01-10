import { toast } from "react-toastify";

import { useMutation } from "react-query";
import useAxios from "../../useAxios";

export default function useDelete(path: string) {
  const { axios } = useAxios();
  const mutation = useMutation((id: string) =>
    axios.delete(`${path}${id}`).catch((error) => {
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
