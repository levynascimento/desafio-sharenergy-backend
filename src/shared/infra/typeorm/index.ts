import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import { Client } from '@modules/client/infra/typeorm/entities/Client';
import { User } from '@modules/user/infra/typeorm/entities/User';

import { dbConnections } from './config';
import { MainSeeder } from './seed/MainSeeder';

const options: DataSourceOptions & SeederOptions = {
  name: dbConnections.mongo.name,
  type: 'mongodb',
  url: dbConnections.mongo.conn,
  entities: [User, Client],
  seeds: [MainSeeder],
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
};

const dataSource = new DataSource(options);

export function createConnection(host = 'mongo'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
