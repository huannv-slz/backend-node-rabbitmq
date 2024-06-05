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
# 
```user
user: pjrzgkug
pass: 3aVtADCfGBZ5ODAxc9K0dOc9rjYeow_R
```
https://shrimp.rmq.cloudamqp.com/#/queues


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

## Create account with github
https://www.cloudamqp.com/

How to use RabbitMQ
View message
Url: https://shrimp.rmq.cloudamqp.com/#/queues/pjrzgkug/topic_validateJSON

<img width="797" alt="image" src="https://github.com/huannv-solazu/backend-node-rabbitmq/assets/170299799/b7076172-5965-4d5f-82f1-5d36e4bfee1c">

### References

1. https://shrimp.rmq.cloudamqp.com/#/queues
2. https://www.rabbitmq.com/
3. https://www.cloudamqp.com/
4. https://dashboard.render.com/
