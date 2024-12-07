export enum AlertType {
  success = 'sucess',
  warn = 'warn',
  error = 'error'
}

export interface Alert {
  title: string;
  description: string;
  type: AlertType;
}