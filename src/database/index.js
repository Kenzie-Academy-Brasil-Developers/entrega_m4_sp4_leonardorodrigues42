import { Client } from "pg";
import "dotenv/config";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: process.env.DB_TEST_USER,
        host: process.env.DB_TEST_HOST,
        database: process.env.DB_TEST,
        password: process.env.DB_TEST_PASSWORD,
        port: process.env.DB_TEST_PORT,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
};

export default database;
