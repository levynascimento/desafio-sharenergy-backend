import { inject, injectable } from 'tsyringe';

import { Client } from '@modules/client/infra/typeorm/entities/Client';
import { IClientsRepository } from '@modules/client/repositories/IClientsRepository';

@injectable()
class ListAllClientsUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  async execute(): Promise<Client[]> {
    const categories = await this.clientsRepository.listAllClients();

    return categories;
  }
}

export { ListAllClientsUseCase };
