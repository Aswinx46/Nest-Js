import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'aswin',
            age: 22
        },
        {
            id: 2,
            name: 'navneeth',
            age: 21
        }, {
            id: 3,
            name: "amrutha",
            age: 24
        }
    ];

    findAll() {
        return this.users
    }
    findOne(id: number) {
        return this.users.find((user) => user.id === id)
    }
    deleteOne(id: number) {
        return this.users = this.users.filter((user) => user.id !== id)
    }
    editOne(id: number, updatedUser: { name?: string, age?: number }) {
        const user = this.users.find((user) => user.id === id)
        if (!user) {
            return "No user found in this ID"
        }
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })
    }
    createOne(user: { id: number, name: string, age: number }) {
        this.users.push(user)
    }
}
