'use strict'
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

require('express-async-errors');

//? connect to DB:
const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();

//? accept JSON:
app.use(express.json());

//? LOGGER:
app.use(require('./src/middlewares/logger'));

//? AUTHENTICATION:


//? FIND, SEARCH, SORT, PAGINATION:

//? ROUTES:


//? ERRORHANDLER:
app.use(require('./src/middlewares/errorHandler'));

//? Run the server:
app.listen(PORT, () => console.log(`Server started at: https://${HOST}:${PORT}`));

//? syncronization: