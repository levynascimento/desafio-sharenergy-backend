import { inject, injectable } from 'tsyringe';

import { Client } from '@modules/client/infra/typeorm/entities/Client';
import { IClientsRepository } from '@modules/client/repositories/IClientsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class ListClientByIdUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}
  async execute(_id: string): Promise<Client> {
    const user = await this.clientsRepository.findById(_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export { ListClientByIdUseCase };
