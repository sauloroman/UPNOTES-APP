import { CustomError } from "../../domain/errors/custom.error"

interface TokenServiceOptions {
  jwtGenerator: any
}

export class TokenService {

  public readonly jwtGenerator: any

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

} 