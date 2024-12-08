import { NextFunction, Request, Response } from "express";
import { jwtGenerator } from "../../config";
import { prisma } from "../../data";
import { UserEntity } from "../../domain/entities/user.entity";

export class AuthMiddleware {

  public static async validateJWT( req: Request, res: Response, next: NextFunction ) {

    const authorization = req.header('Authorization')

    if ( !authorization ) {
      return res.status(401).json({ error: 'No hay token' })
    }

    if ( !authorization.startsWith('Bearer ') ) {
      return res.status(401).json({ error: 'No hay token - Inicia sesión' })
    }

    const token = authorization.split(' ').at(1) || ''

    try {

      const payload = await jwtGenerator.validateToken( token )

      if ( !payload ) {
        return res.status(401).json({error: 'El token no es valido'})
      }

      const user = await prisma.user.findUnique({ where: { id: payload.id } })

      if ( !user ) {
        return res.status(404).json({ error: 'Token Invalido - Usuario no existe' })
      }
      
      if ( !user.isActive ) {
        return res.status(401).json({ error: 'Token Invalido - Usuario no activo' })
      }

      if ( !user.isAccountVerified ) {
        return res.status(401).json({ error: 'Token Invalido - Usuario no verificado' })
      }

      const profile = await prisma.profile.findUnique({ where: { userId: user.id } })
      const { password, ...restUserEntity } = UserEntity.fromObject({ ...user, profileId: profile?.id })

      req.body.user = restUserEntity

      next();

    } catch (error) {
      console.log(`${error}`)
      return res.status(500).json({ error: 'Internal Server Error'} )
    }

  }

}