import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/createCommentDto';
import { UpdateCommentDto } from './dto/updateCommentDto';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) {}

    getAll() {
        return this.prisma.comment.findMany()
    }

    getAllCardComments(cardId: number) {
        this.prisma.comment.findMany({ where: { cardId } })
    }

    getCommentById(commentId: number) {
        return this.prisma.comment.findUnique({ where: { id: commentId } })
    }

    update(commentId: number, data: UpdateCommentDto) {
        return this.prisma.comment.update({ where: { id: commentId }, data })
    }

    async create(data: CreateCommentDto) {
        return this.prisma.comment.create({ data })
    }

    delete(commentId: number) {
        return this.prisma.comment.delete({ where: { id: commentId } })
    }
}
