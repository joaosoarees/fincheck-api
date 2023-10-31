import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(
    private readonly bankAccountsRepository: BankAccountsRepository,
  ) {}

  async validate(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAccountsRepository.findFirst({
      where: {
        userId,
        id: bankAccountId,
      },
      select: { id: true },
    });

    if (!isOwner) throw new NotFoundException('Bank account not found.');
  }
}
