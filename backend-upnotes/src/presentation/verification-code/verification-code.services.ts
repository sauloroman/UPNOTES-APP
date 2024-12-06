import { prisma } from '../../data';
import { RegenerateVerificationCodeDto } from '../../domain/dtos/verification-code/regenerate-verification-code.dto';
import { CustomError } from '../../domain/errors/custom.error';

interface GeneratorCode {
  durationMin: number,
  onlyNumbers: ( quantityOfNumbers: number ) => string
}

interface DateFormatter {
  convertToLocalTime: ( UTCDate: string, timeZone?: string ) => string
}

interface VerificationCodeOptions {
  dateFormatter: DateFormatter,
  generatorCode: GeneratorCode
}

export class VerificationCodeService {

  private readonly generatorCode: GeneratorCode 
  private readonly dateFormatter: DateFormatter 

  constructor( { generatorCode, dateFormatter }: VerificationCodeOptions ){
    this.generatorCode = generatorCode
    this.dateFormatter = dateFormatter
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

    const currentDate = this.dateFormatter.convertToLocalTime( new Date().toString() )
    const currentTime = new Date( currentDate ).getTime()

    const localExpireDate = this.dateFormatter.convertToLocalTime( `${verificationCode.expiresAt}` )
    const localExpireTime = new Date( localExpireDate ).getTime()

    return localExpireTime > currentTime
  }

} 