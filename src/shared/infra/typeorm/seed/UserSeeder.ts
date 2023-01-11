import bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { User } from '@modules/user/infra/typeorm/entities/User';

class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepository = dataSource.getMongoRepository(User);

    const defaultUser = {
      username: 'desafiosharenergy',
      password: await bcrypt.hash('sh@r3n3rgy', 8),
    };

    const newUser = userRepository.create(defaultUser);
    await userRepository.save(newUser);
  }
}

export { UserSeeder };
