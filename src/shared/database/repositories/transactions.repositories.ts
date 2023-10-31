import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(findManyDto: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findManyDto);
  }

  async findFirst(findFirstDto: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDto);
  }

  async create(createDto: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createDto);
  }

  async update(updateDto: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateDto);
  }

  async delete(deleteDto: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(deleteDto);
  }
}
