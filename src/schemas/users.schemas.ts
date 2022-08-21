import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IUserSchema } from '../interfaces/users.interfaces';


const userSchema: SchemaOf<IUserSchema> = yup.object().shape({
     name: yup.string().required(),
     email: yup.string().email().required(),
     password: yup.string().required(),
     age: yup.number().required()
})

export default userSchema;