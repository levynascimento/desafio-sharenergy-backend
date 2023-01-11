/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}

export { User };
