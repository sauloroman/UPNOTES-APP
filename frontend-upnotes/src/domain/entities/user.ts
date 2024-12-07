export enum UserGender {
  M = 'M',
  F = 'F'
}

export interface RegisterUser {
  name: string;
  gender: UserGender
  email: string;
  password: string;
}