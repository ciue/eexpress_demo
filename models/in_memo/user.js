class User {
  constructor(firstname, lastname, age) {
    this.name = this.getName(firstname, lastname);
    this.age = age;
    this.id = User.id;
  }

  getName(firstname, lastname) {
    return `${firstname}${lastname}`;
  }

  static insert(firstname, lastname, age) {
    const u = new User(firstname, lastname, age);
    User.users.push(u);
    User.id += 1;
    return u;
  }

  static getOneByName(firstname, lastname) {
    return User.users.find(u => u.fname === firstname && u.lname === lastname);
  }

  static getOneById(userid) {
    return User.users.find(u => u.id === userid);
  }

  static list() {
    return User.users;
  }
}

User.users = [];
User.id = 0;
module.exports = User;
