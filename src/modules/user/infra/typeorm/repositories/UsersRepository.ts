import { MongoRepository } from 'typeorm';

import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
import dataSource from '@shared/infra/typeorm';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: MongoRepository<User>;

  constructor() {
    this.repository = dataSource.getMongoRepository(User);
  }

  findById(_id: string): Promise<User> {
    const id = _id;
    const user = this.repository.findOneBy({ id });

    return user;
  }

  findByUsername(username: string): Promise<User> {
    const user = this.repository.findOneBy({ username });

    return user;
  }
}

export { UsersRepository };
