import { Router } from "express";
import createUserController from '../controllers/createUser.controller'
import deleteUserController from "../controllers/deleteUser.controller";
import editUserController from "../controllers/editUser.controller";
import listUserController from "../controllers/listUser.controller";
import oneUserController from "../controllers/oneUser.controller";
import schemaValidationMiddleware from "../middlewares/schemaValidation.middleware";
import userSchema from "../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post('', schemaValidationMiddleware(userSchema), createUserController);
userRoutes.get('', listUserController);
userRoutes.get('/:id', oneUserController);
userRoutes.patch('/:id', editUserController);
userRoutes.delete('/:id', deleteUserController);

export default userRoutes;