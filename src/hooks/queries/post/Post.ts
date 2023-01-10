import UsePost from "./usePost";

export const UseBloqueTransfer = (idTransfer: string) =>
  UsePost("/ws-backoffice/lock/" + idTransfer);

export const UseDebloqueTransfer = (idTransfer: string) =>
  UsePost("/ws-backoffice/unlock/" + idTransfer);

export const UseRestituteTransfer = (idTransfer: string) =>
  UsePost("/ws-backoffice/restitution/validate/" + idTransfer);
