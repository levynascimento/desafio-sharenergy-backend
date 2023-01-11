import { container } from 'tsyringe';

import { ClientsRepository } from '@modules/client/infra/typeorm/repositories/ClientsRepository';
import { IClientsRepository } from '@modules/client/repositories/IClientsRepository';
import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
