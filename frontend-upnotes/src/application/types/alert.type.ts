export enum AlertType {
  success = 'success',
  warn = 'warn',
  error = 'error'
}

export interface Alert {
  title: string;
  description: string;
  type: AlertType;
}