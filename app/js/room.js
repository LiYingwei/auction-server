/**
 * Created by SpaceQ on 2016/12/3.
 */
function enterRoom(No) {
  glb_status.self_postion = No;
  $("#rooms").hide();
  $("#msgList").empty();
  appendMsg('Welcome', '欢迎围观,在下方输入信息以广播.');
  $("#room").show();
}
function exitRoom() {
  glb_status.self_postion = -1;
  $("#rooms").show();
  $("#room").hide();
}
rooms = new Vue({
  el: '#rooms',
  data: {
    items: items
  },
  methods: {
    enterRoom: function (No) {
      enterRoom(No);
      renderRoom(No);
    },
    addItem: function () {
      var name = $("#newItemName").find("input").val();
      var price = $("#newItemPrice").find("input").val();
      // TODO check value vaildation
      var No = parseInt(Math.random() * 100000);
      raw_items[No] = {ID: No, title: name, price: parseInt(price), userId: '', users: {}};
      addItem_controller(raw_items[No]);
      $('#newItemForm')[0].reset();
      $('#addNewItem').modal('hide');
      new Notification('添加' + name + '成功 :)');
    }
  }
});

