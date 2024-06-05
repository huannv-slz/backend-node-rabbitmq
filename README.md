# RabbitMQ NodeJS - Basics, Direct and Topic based

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

1. https://shrimp.rmq.cloudamqp.com/#/queues
2. https://www.rabbitmq.com/
3. https://www.cloudamqp.com/
4. https://dashboard.render.com/