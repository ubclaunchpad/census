'use strict';
const pg = require('pg');
const conString = "postgres://postgres@localhost:5432/census";
const Sequelize = require('sequelize');
const config = require('./config/config.json');
const { database, username, password, host } = config.development;
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
  define: {
    timestamps: false,
  }
});
const UserModel = require('./models/user');

// models
const User = UserModel(sequelize, Sequelize);

module.exports.hello = async event => {
  var client = new pg.Client(conString);
  client.connect();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Testing with Serverless-Offline.',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.createUser = async event => {
  let obj = JSON.parse(event.body);
  const user = User.build(obj);
  return user.save().then(() => {
    return {
      statusCode: 201,
      body: JSON.stringify(
        {
          message: 'Sign up successfully',
          input: event,
        },
        null,
        2
      ),
    };
  }).catch((err) => {
    return {
      statusCode: 422,
      body: JSON.stringify(
        {
          message: err,
          input: event,
        },
        null,
        2
      ),
    };
  })
};