import { Request, Response } from "express";
import { IUserReq } from "../interfaces/users.interfaces";
import createUserService from "../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {

    const { name, email, password, age  }: IUserReq = req.body

    const user = await createUserService({email, name, password, age})

    return res.status(201).json(user)
}

export default createUserController;