
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users_database")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 240 })
    name: string

    @Column({ unique: true, length: 240 })
    email: string

    @Column()
    password: string

    @Column()
    age: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export default User;