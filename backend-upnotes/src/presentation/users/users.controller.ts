import { Request, Response } from "express";
import { UserService } from "./users.services";

export class UsersController {
  
  constructor(
    private readonly userService: UserService
  ){}

  public registerUser = ( req: Request, res: Response ) => {
    res.json({msg: 'Registering user'})
  }

}