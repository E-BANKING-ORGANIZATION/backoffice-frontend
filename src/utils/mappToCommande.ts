import { Commande } from "../type/Commande";
import { Produit } from "../type/Produit";

export const mappToCommande = (data: Produit[], user: any): Commande => {
  const commande: Commande = {
    produits: data,
    client: {
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      adresse: user.adresse,
    },
    idVendeur: "2a0a3add-89ef-4a2a-87d2-3ac6c8410979",
  };
  return commande;
};
