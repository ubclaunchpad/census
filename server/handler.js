'use strict';
const pg = require('pg');
const conString = "postgres://posgres@localhost:5432/postgres";

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
