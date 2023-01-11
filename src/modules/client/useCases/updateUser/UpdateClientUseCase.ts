import { inject, injectable } from 'tsyringe';

import { IClientsRepository } from '@modules/client/repositories/IClientsRepository';

import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  id?: string;
  address: string;
  cpf: string;
}
@injectable()
class UpdateClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  async execute({
    name,
    email,
    phone,
    address,
    cpf,
    id,
  }: IRequest): Promise<void> {
    const user = await this.clientsRepository.findById(id);

    if (!user) {
      throw new AppError('User not found!');
    }

    await this.clientsRepository.updateClient({
      name,
      email,
      phone,
      address,
      cpf,
      id,
    });
  }
}

export { UpdateClientUseCase };
