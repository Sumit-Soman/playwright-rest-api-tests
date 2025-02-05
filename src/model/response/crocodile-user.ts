export type User = {
    id: Number,
    name: string,
    sex: 'M' | 'F',
    date_of_birth: string,
    age: Number
}

export type CrocodileUsers = [User]