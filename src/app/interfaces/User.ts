export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phone?: string;
  address?: string;
  image?: string;
  role?: string;
  token?: string;
  refrechToken?: string;
}
