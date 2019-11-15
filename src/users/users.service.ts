import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["id", "name"]
        });
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["name"],
            where: [{ "id": _id }]
        });
    }

    async createUser(user: User) {
        console.log("Create user : ",user);
        this.usersRepository.save(user)
    }

    async updateUser(user: User) {
        console.log("Update user OK : ", user);
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        console.log("Delete user id : ", user);
        this.usersRepository.delete(user);
    }
}