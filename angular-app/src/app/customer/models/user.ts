export interface User {
  userId: string;
  name: string;
  surname: string;
  jti: string;
  email: string;
  role: string;
  exp: number;
  iss: string;
  aud: string;
}
