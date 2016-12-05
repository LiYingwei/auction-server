/**
 * Created by SpaceQ on 2016/12/5.
 */
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

var renderRoom = function (now_item, No) {
  // console.log('randered Room' + No, now_item);
  if (typeof specificRoom == "undefined") {
    specificRoom = new Vue({
      el: '#room',
      data: {
        status: now_item,
        No: No
      },
      methods: {
        removeItem: function () {
          No = this.$data['No'];
          delete raw_items[No];
          exitRoom();
          removeItem_controller(No);
          var myNotification = new Notification('删除' + No + '号拍卖品成功 :)');
        },
        kickOut: function (userId) {
          No = this.$data['No'];
          delete raw_items[No]['users'][userId];
          removeUser_controller(No, userId);
        }
      }
    });
  }
  specificRoom.$set(specificRoom, 'status', now_item);
  specificRoom.$set(specificRoom, 'No', No);
};

var addItem_controller = function (single_item) {
  // TODO broadcast to client
  renderItem();
};

var removeItem_controller = function (No) {
  // TODO broadcast to client
  renderItem();
};

var removeUser_controller = function (No, userId) {
  // TODO broadcast to client
  var now_item = deepcopy(raw_items[No]);
  renderRoom(now_item, No);
};