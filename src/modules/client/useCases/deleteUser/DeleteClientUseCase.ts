import { inject, injectable } from 'tsyringe';

import { IClientsRepository } from '@modules/client/repositories/IClientsRepository';

import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class DeleteClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientRepository: IClientsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.clientRepository.findById(id);

    if (!user) {
      throw new AppError('User not found!');
    }

    await this.clientRepository.deleteClient(id);
  }
}

export { DeleteClientUseCase };
