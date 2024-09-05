import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardDto } from './dto/createCardDto';
import { UpdateCardDto } from './dto/updateCardDto';

@Injectable()
export class CardService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return this.prisma.card.findMany()
    }

    async getAllCardsColumn(columnId: number) {
        return this.prisma.card.findMany({ where: { columnId } })
    }

    async getCardById(cardId: number) {
        return this.prisma.card.findUnique({ where: { id: cardId } })
    }

    async update(cardId: number, data: UpdateCardDto) {
        return this.prisma.card.update({ where: { id: cardId }, data })
    }

    async create(data: CreateCardDto) {
        return this.prisma.card.create({ data })
    }

    async delete(cardId: number) {
        return this.prisma.card.delete({ where: { id: cardId } })
    }
}
