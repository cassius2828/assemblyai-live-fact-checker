import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import merge from "lodash.merge";
const typeDefs = mergeTypeDefs(loadFilesSync("src/**/*.graphql"));
import usersResolver from './users/users.resolver.js'
const resolvers = merge(
    usersResolver,
  );

const schema = { typeDefs, resolvers };
export default schema;
