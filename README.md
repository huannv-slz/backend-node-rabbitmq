# RabbitMQ NodeJS - Basics, Direct and Topic based

---

## Table of contents
- Prerequisites
- Types
- Running Application
- References

### Prerequisites

| Tool | Version |
| :--- | ------- |
| **Node JS** | 12.13.0 (LTS) |
| **rabbitmq_server** | 3.8.2 |

### Types

1. One to One (Direct)

    > For one to one messaging, a producer sends messages to specified queue. A consumer receives messages from that queue.To ensure message is not lost, message acknowledgments can be sent back to producer to confirm a particular message has been received

    > File path - "./rbmq_basic/rbmq.producer and ./rbmq_basic/rbmq.consumer"

    > [Ref: One to One (direct)](https://robomq.readthedocs.io/en/latest/one-one/)

2. Routing - Filter Based (Topic)

    > For filter based routing, a producer declares the topic exchange when publishing a message. Messages sent with a particular routing key will be delivered to all the queues that are bound with a matching binding key. Filter based routing provides a method to use filter policies on routing key for choosing the recipients of messages.

    > <span>&ast;</span> (star) can substitute for exactly one word.
    > Example: 'topic.*' can be : topic1, topic2, topic3 etc.

    > <span>#</span> (hash) can substitute for zero or more words.
    > Example: "#.topic" can be: topic, Ftopic, Secondtopic, 123topic etc.

    > File path - "./topic"

    > [Ref: Routing - Filter Based (Topic)](https://robomq.readthedocs.io/en/latest/topic/)

### Running Application

1. One to One (Direct)

    > Under roor directory

    > cd direct

    > node index.js

    > node consumer.js

2. Routing - Filter Based (Topic)

    > Under roor directory

    > cd topic

    > node index.js

    > node consumer.js

```console
curl --location --request POST 'http://localhost:3343/api/v1/save' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "foo@bar.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
]'
```

### References

1. [Downloading and Installing RabbitMQ](https://www.rabbitmq.com/download.html)
2. [AMQP 0-9-1 Model Explained](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
3. [AMQP](https://robomq.readthedocs.io/en/latest/AMQP/)
4. [RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)
5. [Enable Management Plugin](https://www.rabbitmq.com/management.html#getting-started)
6. [amqp.node](https://github.com/squaremo/amqp.node)
7. [Intro — RabbitMQ Message Queue with NodeJs](https://medium.com/@deshan.m/intro-rabbitmq-message-queue-with-nodejs-b9fa9411c9a8)
8. [An Advanced Message Queuing Protocol (AMQP) Walkthrough](https://www.digitalocean.com/community/tutorials/an-advanced-message-queuing-protocol-amqp-walkthrough)
9. [RabbitMQ vs Kafka Part 2 - RabbitMQ Messaging Patterns](https://jack-vanlightly.com/blog/2017/12/5/rabbitmq-vs-kafka-part-2-rabbitmq-messaging-patterns-and-topologies)