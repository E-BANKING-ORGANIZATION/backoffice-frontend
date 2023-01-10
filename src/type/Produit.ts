import { EntrepotDto } from "./Entrepot";

export type Produit = {
  id: string;
  name: string;
  quantite: number;
  nameCatgorie: string;
  reference: string;
  detail: string;
  sharedProducts: SharedProducts[];
};

export type SharedProducts = {
  id: string;
  entrepot: EntrepotDto;
  capacite: Number;
};
