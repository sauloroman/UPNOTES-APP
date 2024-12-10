import { NextFunction, Request, Response } from "express";
import { prisma } from "../../data";
import { jwtGenerator } from '../../config/plugins/jwt.plugin';

export class UserMiddleware {

  public static async validateUserEmailToken( req: Request, res: Response, next: NextFunction ): Promise<any | undefined> {

    const { email } = req.body
    const { token } = req.params

    const decode = await jwtGenerator.validateToken( token )
    const { id } = decode

    const user = await prisma.user.findUnique({ where: { id } } )

    if ( !user ) {
      return res.status(404).json({ error: 'El usuario no existe' })
    }

    if ( user.email !== email ) {
      return res.status(403).json({ error: 'El correo proporcionado no es el mismo que se registró'})
    }

    next()

  } 

}