/**
 * @description - Routing - Filter Based (Topic)
 * For filter based routing, a producer declares the topic exchange when publishing a message.
 * Messages sent with a particular routing key will be delivered to all the queues that are bound
 * with a matching binding key. Filter based routing provides a method to use filter policies on
 * routing key for choosing the recipients of messages.
 * `*` (star) can substitute for exactly one word.
 * @example - 'topic.*' can be : topic1, topic2, topic3 etc.
 * `#` (hash) can substitute for zero or more words.
 * @example - "#.topic" can be: topic, Ftopic, Secondtopic, 123topic etc.
 * @references - https://robomq.readthedocs.io/en/latest/topic/
 */

const amqp = require("amqplib");
const CONFIG = require('../config/index');

function publisher(EXCHANGE, ROUTING, PAYLOAD, cb) {
  try {
    producer = amqp.connect(CONFIG.RBMQ.SERVER);
    producer.then(function(conn) {
      return conn.createConfirmChannel().then(function(ch) {
        ch.assertExchange(EXCHANGE, 'topic', {
          durable: true,
          autoDelete: false
        });
          ch.publish(EXCHANGE, ROUTING, content = new Buffer(PAYLOAD), options = {contentType: "text/plain"}, function(err, ok) {
              if (err != null) {
                  console.error("Error: failed to send message\n" + err);
                  cb(err);
              } else {
                // console.log('<<OK topic>>', ok); // TODO: log!
                conn.close();
                cb(null);
              }
          });
      });
  }).then(null, function(err) {
      console.error(err);
      cb(err);
  });
  } catch (error) {
    console.error('<<<<<< In try catch callback error => >>>>>> ', error);
    cb(error);
  }
}

module.exports = publisher;
