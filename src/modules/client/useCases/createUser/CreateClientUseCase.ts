import { inject, injectable } from 'tsyringe';

import { ICreateClientDTO } from '@modules/client/dtos/ICreateClientDTO';
import { Client } from '@modules/client/infra/typeorm/entities/Client';
import { IClientsRepository } from '@modules/client/repositories/IClientsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateClientUseCase {
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
  }: ICreateClientDTO): Promise<Client> {
    const emailAlreadyExists = await this.clientsRepository.findByEmail(email);
    const cpfAlreadyExists = await this.clientsRepository.findByCpf(cpf);

    if (emailAlreadyExists || cpfAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const userSpecific = await this.clientsRepository.create({
      name,
      email,
      phone,
      address,
      cpf,
    });
    // const passwordHash = await hash(password, 8);

    return userSpecific;
  }
}

export { CreateClientUseCase };
