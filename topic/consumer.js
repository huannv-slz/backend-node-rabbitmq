const amqp = require("amqplib");
const domain = require("domain");
const CONFIG = require('../config/index');
const dom = domain.create();
let consumer = null;

dom.on("error", relisten);
dom.run(listen);

function listen() {
  const _EXCHANGE = CONFIG.RBMQ.EXCHANGE.T_VALIDATE_JSON;
  const _QUEUE    = CONFIG.RBMQ.QUEUE.T_VALIDATE_JSON;
  const _ROUTING  = CONFIG.RBMQ.ROUTING.T_VALIDATE_JSON;
  // Example(s) of wild card
  /**
   * const _ROUTING  = CONFIG.RBMQ.ROUTING.T_VALIDATE_JSON +'.#'; //topic with wildcard
   * will accept `topic_validateJSON.parse`, `topic_validateJSON.body`
   */

  consumer = amqp.connect(CONFIG.RBMQ.SERVER);
  consumer.then(function (conn) {
    return conn.createChannel().then(function (ch) {
      ch.assertExchange(_EXCHANGE, 'topic', { durable: true, autoDelete: false });
      ch.assertQueue(_QUEUE, { durable: true, autoDelete: false, exclusive: false });
      ch.bindQueue(_QUEUE, _EXCHANGE, _ROUTING);
      ch.consume(_QUEUE, function (message) {
        //callback funtion on receiving messages
        // console.log(message.content.toString());
      }, { noAck: true });
    });
  }).then(null, function (err) {
    console.error("Exception handled, reconnecting...\nDetail:\n" + err);
    setTimeout(listen, 5000);
  });
}

function relisten() {
  consumer.then(function (conn) {
    conn.close();
  });
  setTimeout(listen, 5000);
}
