const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const initAppAndSetupMiddlewares = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());
  return app;
};

const initializeApplicationServer = () => {
  const app = initAppAndSetupMiddlewares();
  app.use('/', routes);
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Serving from port ${process.env.PORT}`);
  });
};

initializeApplicationServer();