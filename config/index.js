const amqpUrl = "amqp://127.0.0.1:5672" // using docker
module.exports = {
  NODE_PORT: 3343,
  RBMQ: {
    SERVER: amqpUrl,
    EXCHANGE: {
      C_VALIDATE_JSON: 'validateJSON',
      T_VALIDATE_JSON: 'topic_validateJSON'
    },
    ROUTING: {
      C_VALIDATE_JSON: 'validateJSON',
      T_VALIDATE_JSON: 'topic_validateJSON'
    },
    QUEUE: {
      T_VALIDATE_JSON: 'topic_validateJSON'
    }
  },
};
