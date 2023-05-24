'use strict';

// change the name of the function exported to what you set in the .yml file or vice versa:
module.exports.rankly = async (event, context) => {
  //Example of getting query params from the url endpoint sent from front end:
  const rank = event.queryStringParameters.rank;

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event, // this is the response object
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
