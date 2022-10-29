import { UserDetail } from "./interfaces";

export class User {
  users: Array<UserDetail> = [];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: UserDetail) {
    this.users.push(user);
  }

  removeUser(userID: number) {
    this.users.splice(userID - 1, 1);
  }
}
