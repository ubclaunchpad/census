# census

Type in :  `npm install -g serverless`  if you are running Serverless for the first time.
 
 For basic Serverless deployment:
 
1.Run CMD from local directory (server/)

2.Adjust implementation logic in handler.js

3.Adjust serverless.yml accordingly with function specifications

4.You need to add config file for Sequelize under <code>server/config/config.json</code>. It will look like the following depending on your username and password with your pg:

```
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "census",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "census_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "census_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
```

5.Type the following into the command line:
* `serverless config credentials --provider aws --key *YOUR KEY* --secret *YOUR SECRET KEY* --overwrite`
* `serverless deploy`

For **Serverless-Offline**:

1. Type in: `sls offline` (Plug-in must be configured into serverless.yml file)

2. Use the given ROUTE on **Postman**, eg. http://localhost:3000/2015-03-31/functions/census-dev-hello/invocations to Test appropriately

### Dependencies
You are likely need to run the following commands to download necessary packages:

```
npm install -g serverless
npm install -g mocha
```

### References
<code>/server/.gitignore</code> is built on top of [https://github.com/serverless/serverless-starter/blob/master/.gitignore](https://github.com/serverless/serverless-starter/blob/master/.gitignore)






