import { RegisterAccount, ValidateAccountDto, LonginAccountDto } from "../../domain/dtos"
import { UserService } from "../users/users.services";
import { VerificationCodeService } from "../verification-code/verification-code.services";
import { EmailService } from "../services";
import { bcryptAdapter, jwtGenerator } from "../../config";
import { CustomError } from "../../domain/errors/custom.error";
import { NewVerificationCodeAccountDto } from "../../domain/dtos/auth/new-verification-code-account.dto";

interface ServiceOption {
  emailService: EmailService
  userService: UserService
  verificationCodeService: VerificationCodeService
}

export class AuthService {

  private readonly emailService: EmailService
  private readonly userService: UserService
  private readonly verificationCodeService: VerificationCodeService

  constructor( { emailService, userService, verificationCodeService }: ServiceOption){
    this.emailService = emailService
    this.userService = userService
    this.verificationCodeService = verificationCodeService
  }

  public async postAccount( registerAccount: RegisterAccount ) {
    
    try {

      if ( await this.userService.getUserByEmail( registerAccount.email ) )
        throw CustomError.badRequest(`El usuario con correo ${registerAccount.email} ya existe. Intente con otro nuevamente.`)

      const hashPassword = bcryptAdapter.hash( registerAccount.password )
      const accountCreated = await this.userService.postUser({ ...registerAccount, password: hashPassword })
      
      const verificationCode = await this.verificationCodeService.postVerificationCode( accountCreated.id )
      const token = await jwtGenerator.generateToken({ id: accountCreated.id })
      await this.emailService.sendEmailWithVerificationCode({
        code: verificationCode,
        email: accountCreated.email,
        token: token
      })

      return {
        msg: `Se ha enviado un correo con tu código de verificación a: ${accountCreated.email}. 
        El código es válido por 10 minutos. Revisa tu correo e ingresa el código.`,
      }

    } catch (error) {
      throw CustomError.internalServerError(`Problemas en el servidor registrando cuenta: ${error}`)
    }
  }

  public async validateAccount( validateAccount: ValidateAccountDto ) {
    const { code, email } = validateAccount
    
    try {
      const user = await this.userService.getUserByEmail( email )

      if (!user) throw CustomError.notFound(`El usuario con correo ${email} no existe`)
      if (user.isAccountVerified) throw CustomError.badRequest('El usuario ya está verificado. Inicie sesión')
      if (!user.isActive) throw CustomError.badRequest('El usuario no esta activo')
  
      const verificationCode = await this.verificationCodeService.getVerificationCode( code, user.id )
      if (!verificationCode) throw CustomError.notFound(`No existe el codigo ${code} para el usuario actual`)
      
      const isCodeActive = await this.verificationCodeService.isValidationCodeActive( verificationCode )
      if (!isCodeActive) throw CustomError.badRequest(`El código de verificación ya ha expirado. Vuelva a generar uno`)
  
      const userUpdated = await this.userService.updateUser( user.id, { isAccountVerified: true } )
  
      const token = await jwtGenerator.generateToken({ id: user.id })
  
      return {
        msg: 'El usuario ha sido validado exitosamente',
        user: userUpdated,
        token,
      }; 
    } catch (error) {
      throw CustomError.internalServerError(`Problemas en el servidor validando cuenta: ${error}`)
    }
  }

  public async loginAccount( loginUser: LonginAccountDto ) {

    const { email, password } = loginUser

    const user = await this.userService.getUserByEmail( email )
    if ( !user ) throw CustomError.notFound('El usuario o la contraseña no son correctos')

    const isPasswordCorrect = bcryptAdapter.compare( password, user.password )
    if ( !isPasswordCorrect ) throw CustomError.badRequest('El usuario o la contraseña no son correctos')

    const token = await jwtGenerator.generateToken({ id: user.id })

    return {
      msg: `Bienvenido ${user.name}`,
      user: user,
      token: token
    }

  } 

  public async newVerificationCodeAccount( 
    newVerificationCodeAccountDto: NewVerificationCodeAccountDto, 
    token: string 
  ) {

    const { id } = await jwtGenerator.validateToken( token )    
    

  }

}