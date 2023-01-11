import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
class Client {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Client };
