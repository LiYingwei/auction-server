/**
 * Created by SpaceQ on 2016/12/6.
 */
// const status = require('../app/controller/status');
// const sender = require('../core/sender');
message.sendMessage = function (userid, msg) {
  var rinfo = glb_status.rinfo[userid];
  if (typeof rinfo != "undefined")
    sender.send(rinfo, msg);
  else
    console.log(`send ${userid}: ${msg}`);
};

message.roomCasMsg = function (roomNo, msg) {
  for (var userid in glb_status.users[roomNo]) {
    message.sendMessage(userid, "roomcast " + msg);
  }
};

message.broadCastMsg = function (msg) {
  for (var userid in glb_status.onlineUser) {
    message.sendMessage(userid, "broadcast " + msg);
  }
};
