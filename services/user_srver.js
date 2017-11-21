const User = require('../models/in_memo/user');
const Subscription = require('../models/in_memo/subscription');

function createSubcription(userid, url) {
  if (!User.getOneById(userid)) throw Error('No such user! ');
  const sub = Subscription.insert(userid, url);
  return sub;
}

module.exports = {
  getAllUsers: () => User.list(),
  addUser: (firstname, lastname, age) => User.insert(firstname, lastname, age),
  getOneById: userid => User.getOneById(userid),
  createSub: (userid, url) => createSubcription(userid, url),
};
