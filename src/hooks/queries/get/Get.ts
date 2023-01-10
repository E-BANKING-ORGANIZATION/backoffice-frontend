import { useGet } from "./useGet";
export const UsegetBlockedTransfers = () =>
  useGet<any>("/ws-backoffice/unlock/getAllBlockedTransfers");

export const UsegetToServeTransfers = () =>
  useGet<any>("/ws-backoffice/lock/getAllToServeTransfers");

export const UsegetTransfers = () =>
  useGet<any>("/ws-backoffice/restitution/getTransfer");
