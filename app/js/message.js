/**
 * Created by SpaceQ on 2016/12/5.
 */
// const msgModule = require('../app/controller/message.js');

var appendMsg = function (speaker, msg) {
  $('#msgList').append('<div class="alert alert-info alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' +
    speaker + ': </strong>' + msg + '</div>');
};

function broadcastWrap() {
  var $broadcastMsg = $('#broadcastMsg');
  var msg = $broadcastMsg.val();
  var No = specificRoom['No'];
  message.roomCasMsg(No, "message Roomcast " + msg);
  appendMsg('Roomcast', msg);
  $broadcastMsg.val('');
}

function sendMessageNavWrap() {
  var $userid = $('#send-user-id');
  var $msg = $('#send-user-msg');
  var userid = $userid.val();
  var msg = $msg.val();
  if (userid == '') {
    message.broadCastMsg("message Broadcast ", msg);
  } else
    message.sendMessage(userid, "message toyou " + msg);
  alert("成功发送");
  $userid.val('');
  $msg.val('');
}