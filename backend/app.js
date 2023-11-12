// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const routes = require('./routes');
const { createUser, login } = require('./controllers/users');
const {
  validationCreateUser,
  validationLogin,
} = require('./middlewares/validations');
const auth = require('./middlewares/auth');
const handelError = require('./middlewares/handelError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(requestLogger);

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/signin', validationLogin, login);
app.post('/signup', validationCreateUser, createUser);

app.use(auth);
app.use(routes);
app.use(errors());
app.use(handelError);

mongoose.connect('mongodb://127.0.0.1/mestodb', {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
});

app.use(errorLogger);

app.use(errors());

app.listen(PORT);
