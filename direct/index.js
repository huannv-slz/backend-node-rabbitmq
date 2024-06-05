const EXPRESS = require('express');
const APP = EXPRESS();
const CONFIG = require('../config/index');
const CORE = require('./producer');
const PORT = CONFIG.NODE_PORT;
let count = 0;

APP.use(EXPRESS.json());

// Health check endpoint
APP.get('/', (req, res) => {
  res.status(200).send({
    code: 200,
    message: 'Service is healthy',
    data: {
      status: "success",
      timestamp: new Date()
    }
  });
});

APP.post('/api/v1/save', (req, res) => {
  count++;
  console.log('Request received - ', count);
  try {
    req.body = { name: 'api_c1 - ' + count, timestamp: new Date(), metric: false };
    const _payLoad = JSON.stringify(req.body);
    CORE(CONFIG.RBMQ.EXCHANGE.C_VALIDATE_JSON, _payLoad, function (err, success) {
      if (err) {
        res.send(err);
      } else {
        res.status(200);
        res.send({
          code: 200,
          message: 'Data received',
          data: success
        });
      }
    });
  } catch (e) {
    res.status(400);
    res.send({
      code: 400,
      message: 'Bad request',
    });
  }
});

APP.post('/api/v1/delete', (req, res) => {
  const amqp = require("amqplib");
  const CONFIG = require('../config/index');
  admin = amqp.connect(CONFIG.RBMQ.SERVER);
  admin.then(function (conn) {
  });
});

APP.listen(PORT, () => {
  // require('http').globalAgent.maxSockets = 100000;
  // console.log(http.globalAgent.maxSockets); // TODO: log!
  console.log(`Node Server running at: http://localhost:${PORT}/`);
});
