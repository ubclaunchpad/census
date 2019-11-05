# census

Type in :  `npm install -g serverless`  if you are running Serverless for the first time.
 
 For basic Serverless deployment:
 
1.Run CMD from local directory

2.Adjust implementation logic in handler.js

3.Adjust serverless.yml accordingly with function specifications

4.Type the following into the command line:
* `serverless config credentials --provider aws --key *YOUR KEY* --secret *YOUR SECRET KEY* --overwrite`
* `serverless deploy`

For **Serverless-Offline**:

1. Type in: `sls offline` (Plug-in must be configured into serverless.yml file)

2. Use the given ROUTE on **Postman**, eg. http://localhost:3000/2015-03-31/functions/census-dev-hello/invocations to Test appropriately

3. Deploy with: `serverless deploy`







