import { MongoRepository } from 'typeorm';

import { ICreateClientDTO } from '@modules/client/dtos/ICreateClientDTO';
import {
  IUpdateClient,
  IClientsRepository,
} from '@modules/client/repositories/IClientsRepository';
import dataSource from '@shared/infra/typeorm';

import { Client } from '../entities/Client';

class ClientsRepository implements IClientsRepository {
  private repository: MongoRepository<Client>;

  constructor() {
    this.repository = dataSource.getMongoRepository(Client);
  }

  async create({
    name,
    email,
    phone,
    address,
    cpf,
  }: ICreateClientDTO): Promise<Client> {
    const user = this.repository.create({
      name,
      email,
      phone,
      address,
      cpf,
    });

    await this.repository.save(user);

    return user;
  }

  async findById(_id: string): Promise<Client> {
    const user = await this.repository.findOneBy(_id);

    return user;
  }

  async findByEmail(email: string): Promise<Client> {
    const user = await this.repository.findOneBy({ email });

    return user;
  }

  async findByCpf(cpf: string): Promise<Client> {
    const user = await this.repository.findOneBy({ cpf });

    return user;
  }

  async listAllClients(): Promise<Client[]> {
    const users = await this.repository.find();

    return users;
  }

  async updateClient({
    name,
    email,
    address,
    phone,
    id,
    cpf,
  }: IUpdateClient): Promise<void> {
    await this.repository.updateOne(
      { id },
      {
        $set: {
          name,
          email,
          address,
          phone,
          cpf,
        },
      },
    );
  }

  async deleteClient(_id: string): Promise<void> {
    const user = await this.repository.findOneBy(_id);

    await this.repository.delete(user);
  }
}

export { ClientsRepository };
