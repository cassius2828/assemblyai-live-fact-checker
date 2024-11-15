import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const dialect: Dialect = "postgres";
const host: string = process.env.HOST || "localhost";
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASS,
  {
    host,
    dialect,
  }
);


export default sequelize