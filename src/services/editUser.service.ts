import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IUserReq } from "../interfaces/users.interfaces";
import bcrypt from "bcrypt";

const editUserService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserReq): Promise<Object> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository
    .createQueryBuilder()
    .update(User)
    .set({
      name: name,
      email: email,
      password: await bcrypt.hash(password, 10),
      age: age,
      updated_at: new Date(),
    })
    .where(`id = :id`, { id: id })
    .returning("*")
    .execute();

  return { message: "User updated", user: user.raw[0] };
};

export default editUserService;
