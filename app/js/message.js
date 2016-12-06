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
  message.roomCasMsg(No, msg);
  appendMsg('Roomcast', msg);
  $broadcastMsg.val('');
}