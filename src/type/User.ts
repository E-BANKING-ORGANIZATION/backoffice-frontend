export type UserDto = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  about?: string;
  entrepot?: string;
  vendeurs?: UserDto[];
};
