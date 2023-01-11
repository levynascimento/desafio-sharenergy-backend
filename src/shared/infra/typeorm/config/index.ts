import { config } from 'dotenv';

config();

export const dbConnections = {
  mongo: {
    name: 'mongo',
    conn: String(process.env.DATABASE_MONGO_CONN),
  },
};
