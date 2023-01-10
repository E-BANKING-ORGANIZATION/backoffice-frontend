import UsePut from "./UsePut";

export const useUpdateToCheckedMessage = () =>
  UsePut("http://localhost:9090/message/changeTochecked/");
