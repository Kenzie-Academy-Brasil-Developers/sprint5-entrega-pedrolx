export interface IUserReq {
    id?: string
    name: string
    email: string
    password: string 
    age: number
}


export interface IUserRes {
    id: string
    name: string
    email: string
    password: string
    age: number
    created_at: Date
    updated_at: Date
}

export interface IUserSchema {
    name: string
    email: string
    password: string
    age: number
}