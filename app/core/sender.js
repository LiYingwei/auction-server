/**
 * Created by SpaceQ on 2016/12/6.
 */
// const socket = require('./socket');

sender.send = function(rinfo, msg) {
  console.log(rinfo);
  socket.server.send(msg, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`successful send to ${rinfo}: ${msg}`);
    }
  })
};
