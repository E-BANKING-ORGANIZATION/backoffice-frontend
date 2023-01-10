import axios, { AxiosRequestConfig } from "axios";

import { useMemo } from "react";
import { useState } from "react";
import { clientEnvVars } from "../config/client_env_var";
import useAuth from "./useAuth";

export const useAxios = (config?: AxiosRequestConfig) => {
  const { token, isAuthenticated: authInitialized } = useAuth();
  const [initialized, setInitialized] = useState(false);

  const expensiveAxios = (config?: AxiosRequestConfig) => {
    const instance = axios.create({
      headers: {
        ...(config?.headers || {}),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },

      baseURL: clientEnvVars().API_URL,
    });
    setInitialized(true);
    return { instance };
  };
  const axiosInstance = useMemo(
    () => expensiveAxios(),
    [token, authInitialized]
  );

  return { axios: axiosInstance.instance, initialized };
};

export default useAxios;
