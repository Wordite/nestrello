import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    getAll() {
        // return [{ name: 'John', email: 'john@gmail.com' }]
        return this.prisma.user.findMany()
    }

    
}
