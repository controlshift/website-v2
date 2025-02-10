import Mailchimp from 'mailchimp-api-v3';
import fetch from 'node-fetch';
import querystring from 'querystring';

export default async (request, context) => {

  console.log(`Processing suscribe request.\nRequest: ${JSON.stringify(request)}\nContext: ${JSON.stringify(context)}`)

  // Only allow POST
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {status: 405});
  }
  const params = querystring.parse(request.body);
  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_API_KEY}&response=${params['g-recaptcha-response']}`;
  const MAILCHIMP_LIST_ID = 'b4d8624172'

  console.log(`Performing reCaptcha verification.`)
  const recaptchaResponse = await fetch(VERIFY_URL, { method: 'POST' })
  const recaptchaData = await recaptchaResponse.json()
  let result;

  console.log(`reCaptcha verification result: ${JSON.stringify(recaptchaData)}`)

  if(recaptchaData.success) {
    let mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
    try {
      const mailchimpResult = await mailchimp.request({
        method : 'post',
        path : `/lists/${MAILCHIMP_LIST_ID}/members`,
        body : {
          email_address : params.email,
          status : 'subscribed'
        }
      })
      console.log(`Maichimp result: ${JSON.stringify(mailchimpResult)}`)
      result = {success: true, message: `${params.email} has been subscribed to the ControlShift mailing list.`};
    } catch(err) {
      console.log(`Error creating subscription on Maichimp: ${JSON.stringify(err)}`)

      const message = err.response.body.detail
      if (message.match(/is already a list member/)) {
        result = {success: true, message: `${params.email} has been subscribed to the ControlShift mailing list.`};
      } else {
        result = {success: false, message: message};
      }
    }
  } else {
    result = {success: false, message: 'reCaptcha rejected submission'}
  }

  return new Response(JSON.stringify(result), {status: 200});
}
