import { prisma } from '../../data';
import { CustomError } from '../../domain/errors/custom.error';
import { EmailService, TokenService } from '../services';
import { CreateVerificationCodeDto } from '../../domain/dtos';

interface GeneratorCode {
  durationMin: number,
  onlyNumbers: ( quantityOfNumbers: number ) => string
}

interface DateFormatter {
  convertToLocalTime: ( UTCDate: string, timeZone?: string ) => string
}

interface VerificationCodeOptions {
  dateFormatter: DateFormatter,
  generatorCode: GeneratorCode,
  tokenService?: TokenService,
  emailService?: EmailService,
}

export class VerificationCodeService {

  private readonly generatorCode: GeneratorCode 
  private readonly dateFormatter: DateFormatter 
  private readonly tokenService?: TokenService 
  private readonly emailService?: EmailService 

  constructor( { generatorCode, dateFormatter, tokenService, emailService }: VerificationCodeOptions ){
    this.generatorCode = generatorCode
    this.dateFormatter = dateFormatter
    this.tokenService = tokenService
    this.emailService = emailService
  }

  private async getVerificationCode( code: string, userId: string ) {
    const codeByUser = await prisma.verificacionCode.findFirst({ where: { userId, code } }) 
    return codeByUser
  } 

  public async generateVerificationCode( token: string, createVerificationCodeDto: CreateVerificationCodeDto ) {
    const { id } = await this.tokenService?.decodeToken( token )
    const verificationCode = await this.postVerificationCode( id )
    const newToken = await this.tokenService?.generateToken({ id })
    const { email } = createVerificationCodeDto

    await this.emailService?.sendEmailWithVerificationCode({
      email: email,
      code: verificationCode,
      token: newToken!
    })

    return {
      msg: `El nuevo código ha sido enviado al correo. ${email}`,
    }
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
      throw CustomError.notFound(`No existe el codigo ${code} para el usuario actual`)
    }

    const currentDate = this.dateFormatter.convertToLocalTime( new Date().toString() )
    const currentTime = new Date( currentDate ).getTime()

    const localExpireDate = this.dateFormatter.convertToLocalTime( `${verificationCode.expiresAt}` )
    const localExpireTime = new Date( localExpireDate ).getTime()

    return localExpireTime > currentTime
  }

} 