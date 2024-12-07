export enum UserGender {
  M = 'M',
  F = 'F'
}

export interface ValidateUser {
  code: string;
  email: string;
}

export interface RegisterUser {
  name: string;
  gender: UserGender
  email: string;
  password: string;
}

export interface User {
  id: string;
	name: string;
	email: string;
	gender: UserGender;
	profileId: string;
}