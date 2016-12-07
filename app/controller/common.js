/**
 * Created by SpaceQ on 2016/12/5.
 */
// var glb_status = require('../app/controller/glb_status');
// var message = require('../app/controller/message');
var specificRoom;
var rooms;

var deepcopy = function (obj) {
  return $.extend(true, {}, obj);
};

var renderItem = function () {
  items = $.extend(true, {}, raw_items);
  rooms.$set(rooms, 'items', items);
  fs.writeFile('app/data/items.txt', JSON.stringify(raw_items), (err) => {
    if (err) throw err;
    // console.log("saved");
  })
};

var renderRoom = function (No) {
  if (glb_status.self_postion != No) return;
  // console.log('randered Room' + No, now_item);
  var now_item = deepcopy(raw_items[No]);
  if (typeof specificRoom == "undefined") {
    specificRoom = new Vue({
      el: '#room',
      data: {
        status: now_item,
        No: No
      },
      methods: {
        removeItem: function () {
          exitRoom();
          removeItem_controller(this.$data['No']);
          var myNotification = new Notification('删除' + No + '号拍卖品成功 :)');
        },
        kickOut: function (userId) {
          removeUser_controller(this.$data['No'], userId);
        }
      }
    });
  }
  specificRoom.$set(specificRoom, 'status', now_item);
  specificRoom.$set(specificRoom, 'No', No);
};

var addItem_controller = function (single_item) {
  glb_status.addRoom(single_item["ID"], single_item["title"], single_item["price"]);
  message.broadCastMsg("additem " + JSON.stringify(glb_status.rooms[single_item["ID"]]));
  renderItem();
};

var removeItem_controller = function (No) {
  delete raw_items[No];
  message.broadCastMsg("removeitem " + JSON.stringify(No));
  glb_status.removeRoom(No);
  renderItem();
};

var removeUser_controller = function (No, userId) {
  delete raw_items[No]['users'][userId];
  message.roomCasMsg(No, "userleave " + JSON.stringify(userId));
  glb_status.userLeaveRoom(userId, No);
  renderRoom(No);
};

var enterUser_controller = function (No, userId) {
  raw_items[No]['users'][userId] = userId;
  glb_status.userEnterRoom(userId, No);
  message.roomCasMsg(No, "userenter " + JSON.stringify([No, userId]));
  message.sendMessage(userId, "userlist " + JSON.stringify(glb_status.users[No]));
  renderRoom(No);
};

var raisePrice_controller = function (No, userId, price) {
  //TODO check if higher and return result
  raw_items[No]['userId'] = userId;
  raw_items[No]['price'] = price;
  glb_status.raisePrice(userId, No, price);
  message.broadCastMsg("price " + JSON.stringify([No, price, userId]));
  renderRoom(No);
  renderItem();
};