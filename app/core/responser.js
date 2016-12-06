/**
 * Created by SpaceQ on 2016/12/6.
 * now support command: 'join' 'bid' 'leave' 'login' 'auctions' 'list'
 */

responser.join = function (user, msg, rinfo) {
  var roomId = parseInt(msg);
  enterUser_controller(roomId, user);
};

responser.bid = function (user, msg, rinfo) {
  var price = parseInt(msg);
  raisePrice_controller(glb_status.onlineUser[user], user, price);
};

responser.leave = function (user, msg, rinfo) {
  removeUser_controller(glb_status.onlineUser[user], user);
};

responser.login = function (user, msg, rinfo) {
  glb_status.userLogin(user, rinfo);
};

responser.auctions = function (user, msg, rinfo) {
  sender.send(rinfo, "auctions " + JSON.stringify(glb_status.rooms));
};

responser.list = function (user, msg, rinfo) {
  var roomId = parseInt(msg);
  sender.send(rinfo, "userlist " + JSON.stringify(glb_status.users[roomId]));
};