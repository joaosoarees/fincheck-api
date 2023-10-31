import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany<T extends Prisma.BankAccountFindManyArgs>(
    findManyDto: Prisma.SelectSubset<T, Prisma.BankAccountFindManyArgs>,
  ) {
    return this.prismaService.bankAccount.findMany<T>(findManyDto);
  }

  async findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstDto);
  }

  async create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }

  async update(updateDto: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateDto);
  }

  async delete(deleteDto: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteDto);
  }
}
