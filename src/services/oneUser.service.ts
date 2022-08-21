import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";

const oneUserService = async (id: string): Promise<User[]> => {

    const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.find({ where: { id: id } });

    return user;
}

export default oneUserService;