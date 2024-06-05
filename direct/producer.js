const amqp = require("amqplib");
const CONFIG = require('../config/index');

function publisher(EXCHANGE, PAYLOAD, cb) {
  try {
    producer = amqp.connect(CONFIG.RBMQ.SERVER);
    producer.then(function (conn) {
      return conn.createConfirmChannel().then(function (ch) {
        ch.assertExchange(EXCHANGE, 'direct', {
          durable: true,
          autoDelete: false
        });
        //assigning blank string to exchange is to use the default exchange, where queue name is the routing key
        ch.publish('', CONFIG.RBMQ.ROUTING.T_VALIDATE_JSON, content = new Buffer.from(PAYLOAD), options = { contentType: "text/plain" }, function (err, ok) {
          if (err != null) {
            console.error("Error: failed to send message\n" + err);
            cb(err);
          } else {
            cb(null);
            conn.close();
            // console.log('<<OK>>', ok); // TODO: log!
          }
        });
      });
    }).then(null, function (err) {
      console.error('<<<<<< In then callback error => >>>>>> ', err);
      cb(err);
    });
  } catch (error) {
    console.error('<<<<<< In try catch callback error => >>>>>> ', error);
    cb(error);
  }
}

module.exports = publisher;
