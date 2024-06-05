// const amqpUrl = "amqp://127.0.0.1:5672" // using docker
const amqpUrlCloud = "amqps://pjrzgkug:3aVtADCfGBZ5ODAxc9K0dOc9rjYeow_R@shrimp.rmq.cloudamqp.com/pjrzgkug"
module.exports = {
  NODE_PORT: 3343,
  RBMQ: {
    SERVER: amqpUrlCloud,
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
