import { prisma } from '../../data';
import { ValidateUserDto, CreateUserDto, LonginUserDto } from '../../domain/dtos';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';

import { EmailService, EncriptionService, TokenService } from '../services';
import { VerificationCodeService } from '../verification-code/verification-code.services';
import { ProfileService } from '../profile/profile.services';
import { User } from '@prisma/client';

interface UserServiceOption {
  emailService?: EmailService;
  verificationCodeService?: VerificationCodeService;
  tokenService?: TokenService;
  profileService?: ProfileService;
  encripterService?: EncriptionService;
}

export class UserService {
  private readonly tokenService?: TokenService;
  private readonly emailService?: EmailService;
  private readonly verificationCodeService?: VerificationCodeService;
  private readonly encripterService?: EncriptionService;
  private readonly profileService?: ProfileService;

  constructor(userOptions: UserServiceOption) {
    const {
      emailService,
      verificationCodeService,
      encripterService,
      profileService,
      tokenService,
    } = userOptions;
    this.emailService = emailService;
    this.verificationCodeService = verificationCodeService;
    this.encripterService = encripterService;
    this.profileService = profileService;
    this.tokenService = tokenService;
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { email } });
  }

  public async postUser(createUserDto: CreateUserDto) {
    if (await this.getUserByEmail(createUserDto.email)) 
      throw CustomError.badRequest(`El correo ${createUserDto.email} ya existe. Intente con otro.`);

    try {
      const passwordHashed = this.encripterService?.hashPassword( createUserDto.password );
      
      const userCreated = await prisma.user.create({
        data: {
          ...createUserDto,
          password: passwordHashed!,
        },
      });

      await this.profileService?.postProfile(userCreated.id);
      const verificationCode = await this.verificationCodeService?.postVerificationCode(userCreated.id);
      const token = await this.tokenService?.generateToken({ id: userCreated.id });

      await this.emailService?.sendEmailWithVerificationCode({
        email: userCreated.email,
        code: verificationCode!,
        token: token!,
      });

      return {
        msg: `Se ha enviado un correo con tu código de verificación a: ${userCreated.email}. 
        El código es válido por 10 minutos. Revisa tu correo e ingresa el código.`,
      };
    } catch (error) {
      throw CustomError.internalServerError(`${error}`);
    }
  }

  public async validateUser(validateUserDto: ValidateUserDto) {
    const { code, email } = validateUserDto;
    const user = await this.getUserByEmail(email);

    if (!user) throw CustomError.notFound(`El usuario con correo ${email} no existe`);
    if (!user.isActive) throw CustomError.badRequest('El usuario no está activo');
    if (user.isAccountVerified) throw CustomError.badRequest('El usuario ya está verificado. Inicie sesión');
    
    const isCodeActive = await this.verificationCodeService?.isValidationCodeActive(code, user!.id);

    if (!isCodeActive) throw CustomError.badRequest(`El codigo ya ha expirado. Vuelva a generar uno`);
    
    const userUpdated = await prisma.user.update({
      where: { email },
      data: { isAccountVerified: true },
    });

    const profileId = await this.profileService?.getProfileByUserId( user.id )
    const token = await this.tokenService?.generateToken({ id: user.id })

    const { password, ...restUserEntity } = UserEntity.fromObject({ ...userUpdated, profileId });

    return {
      msg: 'El usuario ha sido validado exitosamente',
      user: restUserEntity,
      token,
    };
  }

  public async loginUserByEmailAndPassword( loginUserDto: LonginUserDto ) {
    const { email, password } = loginUserDto
    
    const user = await this.getUserByEmail( email )
    if ( !user ) throw CustomError.notFound('El usuario o la contraseña no es correctos')
  
    const isPasswordCorrect = this.encripterService?.comparePaassword( password, user.password )
    if (!isPasswordCorrect) throw CustomError.badRequest('El usuario o la contraseña no es correctos')

    const token = await this.tokenService?.generateToken({ id: user.id })
    
    const profile = await this.profileService?.getProfileByUserId( user.id )

    const { password: passwordUser, ...restUserEntity } = UserEntity.fromObject({ ...user, profileId: profile?.id })

    return {
      msg: `Bienvenido ${user.name}`,
      user: restUserEntity,
      token: token
    }
  }

}
