import { User } from '@modules/user/infra/typeorm/entities/User';

interface IUsersRepository {
  findByUsername(username: string): Promise<User>;
  findById(_id: string): Promise<User>;
}

export { IUsersRepository };
