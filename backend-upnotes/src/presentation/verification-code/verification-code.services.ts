import { prisma } from '../../data';
import { RegenerateVerificationCodeDto } from '../../domain/dtos/verification-code/regenerate-verification-code.dto';
import { CustomError } from '../../domain/errors/custom.error';

interface GeneratorCode {
  durationMin: number,
  onlyNumbers: ( quantityOfNumbers: number ) => string
}

interface VerificationCodeOptions {
  generatorCode: GeneratorCode
}

export class VerificationCodeService {

  private readonly generatorCode: GeneratorCode 

  constructor( { generatorCode }: VerificationCodeOptions ){
    this.generatorCode = generatorCode
  }

  private async getVerificationCode( code: string, userId: string ) {
    const codeByUser = await prisma.verificacionCode.findFirst({ where: { userId, code } }) 
    return codeByUser
  } 

  public async regenerateVerificationCode( regenerateVerificationCodeDto: RegenerateVerificationCodeDto ) {


  }

  public async postVerificationCode( userId: string ) {
    let code = ''

    do {
      code = this.generatorCode.onlyNumbers(5)
    } while ( await this.getVerificationCode( code, userId ) )

    const verificationCode = await prisma.verificacionCode.create({
      data: { 
        code: code,
        createdAt: new Date(),
        expiresAt: new Date( Date.now() + this.generatorCode.durationMin * 60 * 1000 ),
        userId: userId
      }
    })

    return verificationCode.code
  }

  public async isValidationCodeActive( code: string, userId: string ): Promise<boolean> {
    const verificationCode = await this.getVerificationCode( code, userId ) 

    if (!verificationCode) {
      throw CustomError.notFound(`No existe el codigo ${code} para el usuario ${userId}`)
    }

    return Date.now() > new Date(verificationCode.expiresAt).getTime() 
  }

}