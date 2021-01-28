const Mailchimp = require('mailchimp-api-v3');

exports.handler = async function(event, context) {
  let emailAddress = event.queryStringParameters.email;
  let mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
  let result;
  try {
    result = await mailchimp.request({
      method : 'post',
      path : '/lists/b4d8624172/members',
      body : {
        email_address : emailAddress,
        status : 'subscribed'
      }
    })
  } catch(err) {
    result = err.response.body.detail;
  }

  console.log(result);

  return {
    statusCode: 200,
    body: JSON.stringify({message: result})
  };
}
