import { ICreateClientDTO } from '../dtos/ICreateClientDTO';
import { Client } from '../infra/typeorm/entities/Client';

interface IUpdateClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  findById(_id: string): Promise<Client>;
  findByEmail(email: string): Promise<Client>;
  findByCpf(cpf: string): Promise<Client>;
  updateClient(data: IUpdateClient): Promise<void>;
  listAllClients(): Promise<Client[]>;
  deleteClient(id: string): Promise<void>;
}

export { IClientsRepository, IUpdateClient };
