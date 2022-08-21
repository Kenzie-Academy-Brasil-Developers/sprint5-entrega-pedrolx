import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {

    const { id } = req.params;
    
    const userDeleted = await deleteUserService(id);

    return res.status(200).json({ message: `User ${userDeleted.name} was deleted` });

}

export default deleteUserController;