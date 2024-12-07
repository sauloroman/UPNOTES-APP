import { CustomError } from "../../domain/errors/custom.error"

interface JWTGenerator {
  generateToken: ( payload: any ) => Promise<null | string>;
  validateToken: ( token: string ) => Promise<any | null>
}

interface TokenServiceOptions {
  jwtGenerator: JWTGenerator
}

export class TokenService {

  public readonly jwtGenerator: JWTGenerator

  constructor( {jwtGenerator}: TokenServiceOptions ) {
    this.jwtGenerator = jwtGenerator
  }

  public async generateToken( payload: any ): Promise<string> {
    const token = await this.jwtGenerator.generateToken({ payload })

    if ( !token ) {
      throw CustomError.internalServerError('Error creando el Token. Intente de nuevo más tarde')
    }

    return token
  }

  public async decodeToken( token: string ) {
    const decode = await this.jwtGenerator.validateToken( token )

    if ( !decode ) {
      throw CustomError.unauthorized('El Token es invalido')
    }

    return decode.payload
  }

} 