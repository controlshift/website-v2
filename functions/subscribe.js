const Mailchimp = require('mailchimp-api-v3');
const fetch = require('node-fetch');
const querystring = require('querystring');

exports.handler = async function(event, context) {

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const params = querystring.parse(event.body);
  console.log(params);

  console.log(params['g-recaptcha-response'])
  console.log(params.email)

  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_API_KEY}&response=${params['g-recaptcha-response']}`;

  const recaptchaResponse = await fetch(VERIFY_URL, { method: 'POST' })
  const recaptchaData = await recaptchaResponse.json()
  let result;

  if(recaptchaData.success) {
    let mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
    try {
      const mailchimpResult = await mailchimp.request({
        method : 'post',
        path : '/lists/b4d8624172/members',
        body : {
          email_address : params.email,
          status : 'subscribed'
        }
      })
      console.log(mailchimpResult)
      result = {success: true, status: 'subscribed', message: `${params.email} has been subscribed to the ControlShift mailing list.`};
    } catch(err) {
      const message = err.response.body.detail
      if (message.match(/is already a list member/)) {
        result = {success: true, status: 'already-subscribed', message: `${params.email} was already subscribed.` };
      } else {
        result = {success: false, message: message};
      }
    }
  } else {
    result = {success: false, message: 'reCaptcha rejected submission'}
  }

  console.log(result);

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
}
