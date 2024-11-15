import { getAllUsers, getUserById } from "./users.model.js";

const resolver = {
    Query: {
      users: () => getAllUsers(),
      user: (_: unknown, args: { id: string | number }) => {
        const { id } = args;
        return getUserById({ id }); // Pass an object as expected
      },
    },
  };
  
  export default resolver;