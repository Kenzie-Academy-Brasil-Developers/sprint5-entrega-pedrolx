import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IUserReq, IUserRes } from "../interfaces/users.interfaces";

const editUserService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserReq) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository
    .createQueryBuilder()
    .update(User)
    .set({
      name: name,
      email: email,
      password: password,
      age: age,
      updated_at: new Date(),
    })
    .where(`id = :id`, { id: id})
    .returning('*')
    .execute();

    return { message: "User updated",
  user: user.raw[0] };
};

export default editUserService;
