import { hash } from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IUserReq } from "../interfaces/users.interfaces";

const createUserService = async ({name, email, password, age}: IUserReq): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    if(!password){
        throw new Error("Password is a required field")
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        age,
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date()
    })

    await userRepository.save(user)

    return user
}

export default createUserService;