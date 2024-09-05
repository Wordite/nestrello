import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColumnService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.column.findMany();
  }

  getAllUserColumns(userId: number) {
    return this.prisma.column.findMany({
      where: { userId },
      include: { cards: { include: { comments: true } } },
    });
  }

  getColumnById(columnId: number) {
    return this.prisma.column.findUnique({ where: { id: columnId } });
  }

  update(columnId: number, data: Prisma.ColumnUpdateInput) {
    return this.prisma.column.update({ where: { id: columnId }, data });
  }

  create(data: Prisma.ColumnCreateInput) {
    return this.prisma.column.create({ data });
  }

  delete(columnId: number) {
    return this.prisma.column.delete({ where: { id: columnId } });
  }
}
