import { Client } from "./Clients";
import { Produit } from "./Produit";

export type Commande = {
  id?: string;
  produits: Produit[];
  client: Client;
  idVendeur?: String;
};
