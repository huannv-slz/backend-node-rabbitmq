const amqp = require("amqplib");
const domain = require("domain");
const CONFIG = require('../config/index');
const dom = domain.create();
let consumer = null;

dom.on("error", relisten);
dom.run(listen);

function listen() {
  consumer = amqp.connect(CONFIG.RBMQ.SERVER);
  consumer.then(function (conn) {
    return conn.createChannel().then(function (ch) {
      console.log("######## Consum ok")
      ch.assertExchange(CONFIG.RBMQ.ROUTING.C_VALIDATE_JSON, "direct", { durable: true, autoDelete: false });
      //one-to-one messaging uses the default exchange, where queue name is the routing key
      /**
       * >>>> `exclusive` set to false; so that if consumer is down, the incoming message are in queue without deleting <<<<
       */
      ch.assertQueue(CONFIG.RBMQ.ROUTING.C_VALIDATE_JSON, { durable: true, autoDelete: false, exclusive: false });
      ch.consume(CONFIG.RBMQ.ROUTING.T_VALIDATE_JSON, function (message) {
        console.log(message.content.toString());
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