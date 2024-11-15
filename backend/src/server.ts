import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema.js";
import dotenv from "dotenv";
import sequelize from "../config/database.js";
dotenv.config();

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const server = new ApolloServer(schema);

const { url } = await startStandaloneServer(server, {
  listen: { port },
});
const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    const databaseName = sequelize.getDatabaseName();
    console.log(`Connected to the database: ${databaseName}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    console.log("Unable to connect to db");

  }
};
connectToDB();
console.log(`🚀  Server ready at: ${url}`);
