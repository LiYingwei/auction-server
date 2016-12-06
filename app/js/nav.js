/**
 * Created by SpaceQ on 2016/12/4.
 */
function goHome() {
  exitRoom();
}

function sendMessageNavWrap() {
  var $userid = $('#send-user-id');
  var $msg = $('#send-user-msg');
  var userid = $userid.val();
  var msg = $msg.val();
  if (userid == '') {
    message.broadCastMsg(msg);
  } else
    message.sendMessage(userid, msg);
  alert("成功发送");
  $userid.val('');
  $msg.val('');
}