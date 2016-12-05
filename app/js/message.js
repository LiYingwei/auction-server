/**
 * Created by SpaceQ on 2016/12/5.
 */
function sendMessageNavWrap() {
  var userid = $('#send-user-id').val();
  var msg = $('#send-user-msg').val();
  //TODO send msg
  alert("成功发送");
  $('#send-user-id').val('');
  $('#send-user-msg').val('');
}

function appendMsg(speaker, msg) {
  $('#msgList').append('<div class="alert alert-info alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="info" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' +
    speaker + ':</strong>' + msg + '</div>');
}

function broadcastWrap() {
  var msg = $('#broadcastMsg').val();
  var No = specificRoom['No'];
  //TODO broadcastMsg msg
  appendMsg('Broadcast', msg);
  $('#broadcastMsg').val('');
}