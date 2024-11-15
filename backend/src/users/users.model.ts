const userData = [
  {
    id: 1,
    username: "JohnDoe",
    email: "john.doe@example.com",
    password: "password123", 
  },
  {
    id: 2,
    username: "JaneSmith",
    email: "jane.smith@example.com",
    password: "securepass456",
  },
  {
    id: 3,
    username: "BobBrown",
    email: "bob.brown@example.com",
    password: "mypassword789",
  },
];

export const getAllUsers = () => {
  console.log("getting all users");
  return userData;
};
export const getUserById = ({ id }: { id: string | number }) => {
  console.log(`getting user with id of ${id}`);
  return userData.find((user) => user.id == id);
};

export default userData;
