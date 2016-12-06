/**
 * Created by SpaceQ on 2016/12/6.
 */
var assert = require('assert');
glb_status.onlineUser = {};  // userid : roomid or -1
glb_status.rooms = {}; // id: {title,price,userId}
glb_status.users = {};
glb_status.rinfo = {};
glb_status.self_postion = -1;

glb_status.removeRoom = function (id) {
  if (glb_status.self_postion == id) {
    glb_status.self_postion = -1;
  } // may be redundant
  for(var user in glb_status.rooms[id].userId) {
    glb_status.onlineUser[user] = -1;
  }
  delete glb_status.rooms[id];
  delete glb_status.users[id];
};

glb_status.addRoom = function (id, title, price, userId = '') {
  //TODO assert userId == '' for there is no user in a new room
  glb_status.rooms[id] = {title: title, price:price, userId: userId};
  glb_status.users[id] = {};
};

glb_status.userLogin = function (id, rinfo) {
  glb_status.rinfo[id] = rinfo;
  glb_status.onlineUser[id] = -1;
};

// glb_status.userLogout = function (id) {
//   if (glb_status.onlineUser[id] != -1) {
//     glb_status.userLeaveRoom(id, glb_status.onlineUser[id]);
//   }
//   delete glb_status.onlineUser[id];
// };

glb_status.userLeaveRoom = function (userId, roomId) {
  delete glb_status.users[roomId][userId];
  glb_status.onlineUser[userId] = -1;
};

glb_status.userEnterRoom = function (userId, roomId) {
  assert(glb_status.onlineUser[userId] == -1);
  glb_status.onlineUser[userId] = roomId;
  glb_status.users[roomId][userId] = userId;
};
