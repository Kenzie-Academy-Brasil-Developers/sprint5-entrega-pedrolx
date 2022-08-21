import { AppDataSource } from "../data-source";
import User from "../entities/user.entities";

const deleteUserService = async (id: string) => {

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", { id: id })
    .returning('*')
    .execute()

    return user.raw[0];
}

export default deleteUserService;