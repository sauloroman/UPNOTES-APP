import { Profile } from "./profile";

export enum GenderAccount {
  M = 'M',
  F = 'F'
}

export interface RegisterAccount {
  name: string;
  gender: GenderAccount;
  email: string;
  password: string;
}

export interface LoginAccount {
  email: string;
  password: string;
}

export interface ValidateAccount {
  code: string;
  email: string;
}

export interface NewVerificationCode {
  email: string
}

export interface ForgotPassword {
  email: string
}

export interface ChangePassword {
  password: string
}

export interface Account {
  id: string;
  name: string;
  email: string;
  gender: GenderAccount
  profile: Profile;
}

export interface AccountResponse {
  msg: string;
  user: Account;
  token: string;
}

export interface TokenResponse {
  token: string;
  user: Account;
}