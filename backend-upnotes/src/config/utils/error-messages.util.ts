export const errorMessages = {
  
  user: {
    notFoundByEmail: (email: string) => `El usuario con email ${email} no existe.`, 
    emailExists: (email: string) => `El usuario con email ${email} ya existe. Intente con otro correo electrónico.`, 
  }
  
}