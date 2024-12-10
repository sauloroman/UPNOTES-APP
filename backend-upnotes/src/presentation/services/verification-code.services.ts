import { prisma } from '../../data';

interface CodeGenerator {
  durationMin: number,
  onlyNumbers: ( quantityOfNumbers: number ) => string
}

interface DateFormatter {
  convertToLocalTime: ( UTCDate: string, timeZone?: string ) => string
}

interface VerificationCodeOptions {
  dateFormatter: DateFormatter,
  codeGenerator: CodeGenerator,
}

export class VerificationCodeService {

  private readonly codeGenerator: CodeGenerator 
  private readonly dateFormatter: DateFormatter  

  constructor( { codeGenerator, dateFormatter}: VerificationCodeOptions ){
    this.codeGenerator = codeGenerator
    this.dateFormatter = dateFormatter
  }

  public async getVerificationCode( code: string, userId: string ) {
    const codeByUser = await prisma.verificacionCode.findFirst({ where: { userId, code } }) 
    return codeByUser
  } 

  public async postVerificationCode( userId: string ) {
    let code = ''

    do {
      code = this.codeGenerator.onlyNumbers(5)
    } while ( await this.getVerificationCode( code, userId ) )

    const verificationCode = await prisma.verificacionCode.create({
      data: { 
        code: code,
        expiresAt: new Date( Date.now() + this.codeGenerator.durationMin * 60 * 1000 ),
        userId: userId
      }
    })

    return verificationCode.code
  }

  public async isValidationCodeActive( verificationCode: any ): Promise<boolean> {
    const currentDate = this.dateFormatter.convertToLocalTime( new Date().toString() )
    const currentTime = new Date( currentDate ).getTime()

    const localExpireDate = this.dateFormatter.convertToLocalTime( `${verificationCode.expiresAt}` )
    const localExpireTime = new Date( localExpireDate ).getTime()

    return localExpireTime > currentTime
  }

} 