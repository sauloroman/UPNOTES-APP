import { prisma } from '../../data';
import { RegenerateVerificationCodeDto } from '../../domain/dtos/verification-code/regenerate-verification-code.dto';

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

  private async isCodeInDataBase( code: string, userId: string ): Promise<boolean> {
    const codeByUser = await prisma.verificacionCode.findFirst({ where: { userId, code } }) 
    if ( codeByUser ) return true
    return false    
  }

  public async regenerateVerificationCode( regenerateVerificationCodeDto: RegenerateVerificationCodeDto ) {


  }

  public async postVerificationCode( userId: string ) {
    let code = ''

    do {
      code = this.generatorCode.onlyNumbers(5)
    } while ( await this.isCodeInDataBase( code, userId ) )

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

}