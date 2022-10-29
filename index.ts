import { User } from "./user";

const user = new User();

console.log("users", user.getUsers());

user.addUser({ id: 1, name: "Onur", age: 21 });

console.log("users", user.getUsers());

user.removeUser(1);
