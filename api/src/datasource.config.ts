import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  username: "sa",
  password: "MyStrongPass123",
  database: "crud",
  synchronize: true,
  logging: ["query", "error"],
  entities: ["src/model/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  options: {
    encrypt: false,
  },
});
