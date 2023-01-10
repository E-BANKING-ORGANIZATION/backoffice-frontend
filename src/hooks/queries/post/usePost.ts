import { useMutation } from "react-query";
import useAuth from "../../useAuth";
import useAxios from "../../useAxios";

//import { toast } from "react-toastify";
//import { ErrorMessage } from 'types/interfaces/errorMessage';
//import { isOfTypeErrorMessageArray } from './../../../types/interfaces/errorMessage';

export default function UsePost<T>(path: string) {
  const { roles, token, isAuthenticated: authInitialized } = useAuth();
  const { axios } = useAxios();
  const mutation = useMutation((values: T) =>
    axios.post(path, values, {}).catch((error: { response: { data: any } }) => {
      //   if (!isOfTypeErrorMessageArray(error.response.data)) {
      //     toast.error('there was an error when posting data');
      //   }
      throw error?.response?.data;
    })
  );

  return {
    data: mutation.data,
    isError: mutation.isError,
    // error: isOfTypeErrorMessageArray(mutation.error)
    //   ? (mutation.error as ErrorMessage[])
    //   : undefined,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isLoading,
    mutate: mutation.mutate,
  };
}
