import { UserDto } from "../type/User";

export const mapToUserDto = (data: any): UserDto => {
  const user: UserDto = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    role: data.role,
    entrepot: data.nameEntrepot,
    phone: data.phone,
    about: "c est parmis les meilleur dans l'equipe",
    vendeurs: data.vendeurs,
  };
  return user;
};
