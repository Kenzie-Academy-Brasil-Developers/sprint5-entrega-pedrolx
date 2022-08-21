import { Request, Response } from "express";
import oneUserService from "../services/oneUser.service";

const oneUserController = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await oneUserService(id)
    const { name, email, age, created_at, updated_at } = user[0]

    return res.status(200).json({ id, name, email, age, created_at, updated_at })
}

export default oneUserController;