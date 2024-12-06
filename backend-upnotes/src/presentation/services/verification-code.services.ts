import { CustomError } from "../../domain/errors/custom.error"

interface CodeGenerator {
  onlyNumbers: ( value: number ) => string;
}

interface VerificationCodeOptions {
  codeGenerator: CodeGenerator;
  codeDurationMin: number;
}

export class VerificationCodeService {

  public readonly codeGenerator: CodeGenerator
  public readonly codeDurationMin: number; 

  constructor( { codeGenerator, codeDurationMin }: VerificationCodeOptions ){
    this.codeGenerator = codeGenerator
    this.codeDurationMin = codeDurationMin
  }

  public generateVerificationNumberCode(): string {
    const verificationNumberCode = this.codeGenerator.onlyNumbers(5)

    if ( !verificationNumberCode ) 
      throw CustomError.internalServerError('No se pudo crear el codigo de verificacion')

    return verificationNumberCode
  }

}