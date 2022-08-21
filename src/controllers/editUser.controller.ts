import { Request, Response } from "express";
import { IUserReq } from "../interfaces/users.interfaces";
import editUserService from "../services/editUser.service";

const editUserController = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { name, email, password, age }: IUserReq = req.body;

    const user = await editUserService({ id, name, email, password, age })

    return res.status(200).json(user)
}

export default editUserController;