import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    getAll() {
        return this.prisma.user.findMany()
    }

    getById(id: number) {
        return this.prisma.user.findUnique({ where: { id } })
    }

    getByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } })
    }

    create(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({ data })
    }

    update(id: number, data: Prisma.UserUpdateInput) {
        return this.prisma.user.update({ data, where: { id } })
    }

    delete(id: number) {
        return this.prisma.user.delete({ where: { id } })
    }
}
