import useDelete from "./UseDelete";

export const useDeleteSharedProduct = () =>
  useDelete("http://localhost:9090/produit/deleteProduitFromEntrepot/");
export const useDeleteMessage = () =>
  useDelete("http://localhost:9090/message/delete/");
export const useDeleteCommande = () =>
  useDelete("http://localhost:9090/commande/delete/");
