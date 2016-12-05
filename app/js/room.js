/**
 * Created by SpaceQ on 2016/12/3.
 */
function enterRoom() {
  $("#rooms").hide();
  $("#msgList").empty();
  $("#room").show();
}
function exitRoom() {
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
      console.log(No);
      enterRoom();
      var now_item = raw_items[No];
      renderRoom(now_item, No);
      // console.log(room);
      // status = items[1];

      // console.log(event);
      // `event` 是原生 DOM 事件
      // alert(event.target.tagName)
    },
    addItem: function () {
      var name = $("#newItemName").find("input").val();
      var price = $("#newItemPrice").find("input").val();
      // TODO check value vaildation
      var No = parseInt(Math.random() * 100000);
      raw_items[No] = {ID: No, title: name, price: parseInt(price), UserID: '', users: []};
      addItem_controller(raw_items[No]);
      $('#newItemForm')[0].reset();
      $('#addNewItem').modal('hide');
      var myNotification = new Notification('添加' + name + '成功 :)');
      // swal("添加成功:)", "", "success")
    }
  }
});

