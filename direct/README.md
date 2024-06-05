# RabbitMQ NodeJS - Basics, Direct and Topic based

### Running Application

1. One to One (Direct)

    > Under roor directory

    > cd direct

    > node index.js

    > node consumer.js

Call api to produce
1. Use postman
2. Use node api_calls.js

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
```console
curl --location 'https://backend-node-rabbitmq.onrender.com/api/v1/save' \
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

Explorer
https://shrimp.rmq.cloudamqp.com/#/queues
