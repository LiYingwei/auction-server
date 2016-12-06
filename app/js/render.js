// // Activate a pane
// $(function(){
//     $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//         var activeTab = $(e.target).text();
//         var previousTab = $(e.relatedTarget).text();
//         $(".active-tab span").html(activeTab);
//         $(".previous-tab span").html(previousTab);
//     });
// });
//
// // Send a system notification
// // var myNotification = new Notification('成功打开应用', {
// //       body: '咖喱给给'
// //     });
// // myNotification.onclick = function () {
// //   console.log('Notification clicked');
// // };
//
// // Send messages to server through UDP
// var dgram = require("dgram");
// var socket = dgram.createSocket("udp4");
// socket.bind(function () {
//   socket.setBroadcast(true);
// });
//
// var MAX_RETRY = 10;
// // Create a JSON for sending
// function broadcast(list, times)
// {
//     var respond = String('');
//     if (times < MAX_RETRY)
//     {
//         var socket = dgram.createSocket("udp4");
//         socket.bind(function () {
//           socket.setBroadcast(true);
//         });
//         var message = new Buffer(JSON.stringify(list));
//         socket.send(message, 0, message.length, 6969, '127.0.0.1', function(err, bytes) {
//             socket.on('message', function (msg) {
//                 $('#statelist').append("<li>成功获得返回结果</li>");
//                 respond = msg;
//                 document.getElementById('answer1').innerHTML = msg;
//                 document.getElementById('answer2').innerHTML = msg;
//                 socket.close();
//             });
//             setTimeout(function () {
//                 try
//                 {
//                     socket.close();
//                     respond = 'nothing';
//                     $('#statelist').append('<li>' + '返回错误，正在重试(' + (times + 1) + ')' + '</li>');
//                     broadcast(list, times + 1);
//                 }
//                 catch (e)
//                 {
//                     throw e;
//                 }
//             }, 2000);
//         });
//     }
//     else
//     {
//         $('#statelist').append("<li>网络连接错误，停止重试</li>");
//     }
// }
//
// function sendJSON1()
// {
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var message_JSON1 = {'num': [num1,num2]};
//     $('#statelist').empty();
//     broadcast(message_JSON1,0);
// }
//
// var message_JSON2 = {'num': []};
// function addJSON2()
// {
//     var num_temp = $('#num').val();
//     $('#numlist').append("<li>" + num_temp + "</li>");
//     message_JSON2['num'].unshift(num_temp);
//     $('#num').val('');
// }
//
// function clearJSON2()
// {
//     message_JSON2 = {'num':[]};
//     $('#numlist').empty();
// }
//
// function sendJSON2()
// {
//     $('#statelist').empty();
//     broadcast(message_JSON2,0);
// }
//
// $('button').click(function () {
//     $("input[type='number']").val("");
// });